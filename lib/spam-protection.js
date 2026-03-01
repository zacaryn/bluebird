/**
 * Spam protection for contact/lead form submissions.
 * Implements honeypot, timing, rate limiting, validation, User-Agent check, and sanitization.
 * Blocked submissions return silent success (fake 200) to avoid revealing which check failed.
 */

const FORM_RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const FORM_RATE_LIMIT_MAX = 5;
const MIN_SUBMIT_ELAPSED_MS = 3000; // 3 seconds
const MAX_SUBMIT_ELAPSED_MS = 24 * 60 * 60 * 1000; // 24 hours

// Disposable email domain substrings (case-insensitive match)
const DISPOSABLE_EMAIL_DOMAINS = [
  'tempmail', 'guerrillamail', 'mailinator', 'yopmail', '10minutemail',
  'throwaway', 'fakeinbox', 'trashmail', 'temp-mail', 'getnada',
  'maildrop', 'sharklasers', 'guerrillamailblock', 'spam4', 'dispostable'
];

// Zero-width and invisible characters to strip
const ZERO_WIDTH_REGEX = /[\u200B-\u200D\uFEFF\u00AD\u2060]/g;
const HTML_TAG_REGEX = /<[^>]*>/g;

/**
 * Extract client IP from request, supporting Cloudflare and reverse proxies.
 * Normalizes IPv6-mapped IPv4 (::ffff:192.168.1.1 -> 192.168.1.1).
 */
export function getClientIp(req) {
  let ip = req.headers['cf-connecting-ip'] ||
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.headers['x-real-ip'] ||
    req.ip ||
    req.connection?.remoteAddress ||
    '';
  // Normalize IPv6-mapped IPv4
  if (ip.startsWith('::ffff:')) {
    ip = ip.slice(7);
  }
  return ip;
}

/**
 * Form-specific rate limit: 5 submissions per 15 minutes per IP per endpoint.
 * Returns true if within limit, false if exceeded.
 */
const formSubmissionStore = new Map();

function cleanupFormRateLimitStore() {
  const now = Date.now();
  const cutoff = now - FORM_RATE_LIMIT_WINDOW_MS;
  for (const [key, timestamps] of formSubmissionStore.entries()) {
    const filtered = timestamps.filter(t => t > cutoff);
    if (filtered.length === 0) {
      formSubmissionStore.delete(key);
    } else {
      formSubmissionStore.set(key, filtered);
    }
  }
}

export function formSubmissionRateLimit(ip, endpoint) {
  cleanupFormRateLimitStore();
  const key = `${ip}:${endpoint}`;
  const now = Date.now();
  const windowStart = now - FORM_RATE_LIMIT_WINDOW_MS;
  const timestamps = formSubmissionStore.get(key) || [];
  const recent = timestamps.filter(t => t > windowStart);
  if (recent.length >= FORM_RATE_LIMIT_MAX) {
    return false;
  }
  recent.push(now);
  formSubmissionStore.set(key, recent);
  return true;
}

/**
 * Check honeypot field. Reject if `company` has any value.
 */
export function checkHoneypot(payload) {
  const value = payload?.company;
  return !value || (typeof value === 'string' && !value.trim());
}

/**
 * Check submission timing. Reject if < 3s or > 24h.
 */
export function checkTiming(formStartTime) {
  if (formStartTime == null || typeof formStartTime !== 'number') {
    return false;
  }
  const elapsed = Date.now() - formStartTime;
  return elapsed >= MIN_SUBMIT_ELAPSED_MS && elapsed <= MAX_SUBMIT_ELAPSED_MS;
}

/**
 * Check User-Agent header. Reject if missing or < 10 chars.
 */
export function checkUserAgent(req) {
  const ua = req.headers['user-agent'];
  return ua && typeof ua === 'string' && ua.length >= 10;
}

/**
 * Validate name: 2-50 chars, at least one vowel, <60% uppercase, no word >15 chars.
 */
function validateName(name) {
  if (!name || typeof name !== 'string') return false;
  const s = name.trim();
  if (s.length < 2 || s.length > 50) return false;
  const vowels = /[aeiouAEIOU]/;
  if (!vowels.test(s)) return false;
  const letters = s.replace(/\s/g, '');
  if (letters.length > 0) {
    const upperCount = (s.match(/[A-Z]/g) || []).length;
    if (upperCount / letters.length > 0.6) return false;
  }
  const words = s.split(/\s+/);
  for (const w of words) {
    if (w.length > 15) return false;
  }
  return true;
}

/**
 * Validate email: format, max 100, no consecutive dots, not disposable.
 */
function validateEmail(email) {
  if (!email || typeof email !== 'string') return false;
  const s = email.trim();
  if (s.length > 100) return false;
  if (/\.\./.test(s)) return false;
  const format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!format.test(s)) return false;
  const domain = s.split('@')[1]?.toLowerCase() || '';
  for (const d of DISPOSABLE_EMAIL_DOMAINS) {
    if (domain.includes(d)) return false;
  }
  return true;
}

/**
 * Validate message: 5-5000 chars, spaces if >15 chars, no word >25 chars.
 */
function validateMessage(msg) {
  if (!msg || typeof msg !== 'string') return false;
  const s = msg.trim();
  if (s.length < 5 || s.length > 5000) return false;
  if (s.length > 15 && !/\s/.test(s)) return false;
  const words = s.split(/\s+/);
  for (const w of words) {
    if (w.length > 25) return false;
  }
  return true;
}

/**
 * Validate phone: basic format, 10+ digits.
 */
function validatePhone(phone) {
  if (!phone || typeof phone !== 'string') return false;
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10;
}

const LEAD_LOAN_TYPES = ['conventional', 'fha', 'va', 'refinance', 'new-construction', 'reverse-mortgage', 'not-sure'];

/**
 * Validate loanType for inquiries - accepts various values from Contact form and landing pages.
 */
function validateInquiryLoanType(loanType) {
  if (!loanType || typeof loanType !== 'string') return false;
  const s = loanType.trim();
  if (s.length < 2 || s.length > 50) return false;
  // Allow alphanumeric, hyphens; reject obviously invalid
  return /^[a-zA-Z0-9-]+$/.test(s);
}

/**
 * Validate inquiry payload (Contact form and landing pages).
 */
export function validateInquiry(payload) {
  if (!payload || typeof payload !== 'object') return false;
  if (!validateName(payload.name)) return false;
  if (!validateEmail(payload.email)) return false;
  if (!validatePhone(payload.phone)) return false;
  if (!validateMessage(payload.message)) return false;
  if (!validateInquiryLoanType(payload.loanType)) return false;
  return true;
}

/**
 * Validate lead payload (Get Started form).
 */
export function validateLead(payload) {
  if (!payload || typeof payload !== 'object') return false;
  if (!validateName(payload.firstName)) return false;
  if (!validateName(payload.lastName)) return false;
  if (!validateEmail(payload.email)) return false;
  if (!validatePhone(payload.phone)) return false;
  const loanType = payload.loanType;
  if (!loanType || !LEAD_LOAN_TYPES.includes(String(loanType))) return false;
  if (!payload.timeframe) return false;
  const validTimeframes = ['immediately', 'soon', 'planning', 'exploring'];
  if (!validTimeframes.includes(String(payload.timeframe))) return false;
  if (!payload.propertyValue || String(payload.propertyValue).trim() === '') return false;
  return true;
}

/**
 * Sanitize string: strip zero-width chars, remove HTML, normalize whitespace.
 */
export function sanitizeInput(str) {
  if (str == null) return '';
  const s = String(str);
  return s
    .replace(ZERO_WIDTH_REGEX, '')
    .replace(HTML_TAG_REGEX, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Sanitize all string values in an object for the given keys.
 */
export function sanitizePayload(payload, keys) {
  const result = { ...payload };
  for (const key of keys) {
    if (result[key] != null && typeof result[key] === 'string') {
      result[key] = sanitizeInput(result[key]);
    }
  }
  return result;
}

/**
 * Return silent success response (fake 200).
 */
export function silentReject(res) {
  return res.status(200).json({
    success: true,
    message: 'Inquiry submitted successfully'
  });
}

/**
 * Log blocked submission for monitoring.
 */
export function logSecurity(event, ip, source = '') {
  console.log(`[SECURITY] ${event} | IP: ${ip} | ${source}`);
}

/**
 * Create form spam protection middleware.
 * @param {Object} options
 * @param {string} options.endpoint - Endpoint name (e.g. 'inquiries', 'leads')
 * @param {Function} options.validatePayload - (payload) => boolean
 * @param {string[]} options.payloadKeys - Keys to sanitize before passing to handler
 */
export function createFormSpamMiddleware({ endpoint, validatePayload, payloadKeys }) {
  return (req, res, next) => {
    const ip = getClientIp(req);

    // User-Agent check
    if (!checkUserAgent(req)) {
      logSecurity('BLOCKED_USER_AGENT', ip, endpoint);
      return silentReject(res);
    }

    // Form-specific rate limit
    if (!formSubmissionRateLimit(ip, endpoint)) {
      logSecurity('BLOCKED_RATE_LIMIT', ip, endpoint);
      return silentReject(res);
    }

    const body = req.body || {};

    // Honeypot check
    if (!checkHoneypot(body)) {
      logSecurity('BLOCKED_HONEYPOT', ip, endpoint);
      return silentReject(res);
    }

    // Timing check
    if (!checkTiming(body._formStartTime)) {
      logSecurity('BLOCKED_TIMING', ip, endpoint);
      return silentReject(res);
    }

    // Payload validation
    if (!validatePayload(body)) {
      logSecurity('BLOCKED_VALIDATION', ip, endpoint);
      return silentReject(res);
    }

    // Sanitize and attach to request (strip _formStartTime and company from stored payload)
    const sanitized = sanitizePayload(body, payloadKeys);
    delete sanitized._formStartTime;
    delete sanitized.company;
    req.sanitizedBody = sanitized;
    next();
  };
}
