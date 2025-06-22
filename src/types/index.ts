export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  createdAt: string;
  loanType?: 'fha' | 'va' | 'conventional' | 'reverse' | 'other' | null;
  isRead?: boolean;
}

export interface InquiryInput {
  name: string;
  email: string;
  phone?: string;
  message: string;
  loanType?: 'fha' | 'va' | 'conventional' | 'reverse' | 'other' | null;
}

export interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  loanType: 'conventional' | 'fha' | 'va' | 'refinance' | 'new-construction' | 'reverse-mortgage' | 'not-sure';
  propertyValue?: string;
  downPayment?: string;
  creditScore?: 'excellent' | 'good' | 'fair' | 'poor' | 'unknown';
  timeframe?: 'immediately' | 'soon' | 'planning' | 'exploring';
  createdAt: string;
  isRead?: boolean;
}

export interface LeadInput {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  loanType: 'conventional' | 'fha' | 'va' | 'refinance' | 'new-construction' | 'reverse-mortgage' | 'not-sure';
  propertyValue?: string;
  downPayment?: string;
  creditScore?: 'excellent' | 'good' | 'fair' | 'poor' | 'unknown';
  timeframe?: 'immediately' | 'soon' | 'planning' | 'exploring';
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
} 