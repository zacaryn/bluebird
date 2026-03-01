# Contact Form Spam Protection Overview

Simple overview of the anti-spam and rate-limiting protections applied to the contact/message form endpoint.

## Protection Layers

### 1. IP-Based Rate Limiting (In-Memory)

- Tracks submissions per IP address using an in-memory `Map`.
- **Limit**: 5 submissions per 15-minute window per IP.
- Blocked submissions return a fake success response (silent rejection).
- Old entries are periodically cleaned up to prevent memory leaks.

### 2. Honeypot Field

- A hidden form field (`company`) is included in the form but not visible to users.
- Bots that auto-fill all fields will populate it.
- If the honeypot field has a value, the submission is silently rejected with a fake success response.

### 3. Submission Timing Check

- A `_formStartTime` timestamp is recorded when the form loads.
- On submit, the elapsed time is checked:
  - **< 3 seconds**: rejected (too fast, likely a bot).
  - **> 24 hours**: rejected (stale form session).
- Blocked submissions return a fake success response.

### 4. Input Validation

**Name validation:**
- Must be 2-50 characters.
- Must contain at least one vowel (catches keyboard-mash spam).
- Rejects names with >60% uppercase characters.
- Rejects names with any single word longer than 15 characters.

**Email validation:**
- Standard format check (`user@domain.tld`).
- Max 100 characters.
- No consecutive dots.
- Blocks known disposable email domains (tempmail, guerrillamail, mailinator, yopmail, etc.).

**Message validation:**
- Must be 5-5000 characters.
- Must contain spaces if longer than 15 characters (catches single long strings).
- Rejects messages with any single word longer than 25 characters.

### 5. User-Agent Check

- Submissions without a `User-Agent` header or with one shorter than 10 characters are silently rejected.
- Catches basic bots/scripts that don't send proper headers.

### 6. Input Sanitization

All inputs are sanitized before storage:
- Zero-width characters are stripped.
- HTML tags are removed.
- Whitespace is normalized.

## Key Design Decisions

- **Silent rejection**: All spam-blocked submissions return a generic success response (`{ success: true }`). This prevents attackers from learning which checks caught them and adjusting their approach.
- **Structured security logging**: Every blocked submission is logged with `[SECURITY]` prefix, event type, IP, and source for monitoring without exposing details to the client.
- **Client IP extraction**: Supports `CF-Connecting-IP` (Cloudflare), `X-Forwarded-For` (reverse proxy), and direct connection IP, with IPv6-mapped IPv4 normalization.

## Implementation Notes

- Rate limiting is in-memory (resets on server restart). For persistent rate limiting across restarts or multiple instances, consider backing with Redis (e.g., Upstash free tier).
- The honeypot field should be hidden via CSS (`display: none` or off-screen positioning), not `type="hidden"`, so bots that scan for hidden inputs are less likely to skip it.
- The form start timestamp should be set client-side when the form component mounts, and sent along with the submission payload.
