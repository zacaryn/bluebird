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

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
} 