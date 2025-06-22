'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import type { Inquiry, Lead } from '@/types';

interface AdminData {
  inquiries: Inquiry[];
  leads: Lead[];
  lastFetched: {
    inquiries: number | null;
    leads: number | null;
  };
  stats: {
    totalInquiries: number;
    unreadInquiries: number;
    totalLeads: number;
    unreadLeads: number;
  };
}

interface AdminContextType {
  data: AdminData;
  loading: {
    inquiries: boolean;
    leads: boolean;
  };
  error: string;
  fetchInquiries: (force?: boolean) => Promise<void>;
  fetchLeads: (force?: boolean) => Promise<void>;
  fetchBoth: (force?: boolean) => Promise<void>;
  updateInquiry: (id: string, updates: Partial<Inquiry>) => void;
  updateLead: (id: string, updates: Partial<Lead>) => void;
  removeInquiry: (id: string) => void;
  removeLead: (id: string) => void;
  clearError: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

// Cache duration: 30 seconds
const CACHE_DURATION = 30 * 1000;

const getApiUrl = (endpoint: string) => {
  if (typeof window === 'undefined') return '';
  
  const hostname = window.location.hostname;
  if (hostname === 'localhost' || hostname.startsWith('10.0.0.') || hostname.startsWith('192.168.')) {
    return `http://${hostname === 'localhost' ? 'localhost' : hostname}:3001/api/${endpoint}`;
  }
  return `/api/${endpoint}`;
};

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [data, setData] = useState<AdminData>({
    inquiries: [],
    leads: [],
    lastFetched: {
      inquiries: null,
      leads: null,
    },
    stats: {
      totalInquiries: 0,
      unreadInquiries: 0,
      totalLeads: 0,
      unreadLeads: 0,
    },
  });
  
  const [loading, setLoading] = useState({
    inquiries: false,
    leads: false,
  });
  
  const [error, setError] = useState('');

  const checkAuth = () => {
    const token = localStorage.getItem('auth-token');
    if (!token) {
      router.push('/admin/login');
      return null;
    }
    return token;
  };

  const isDataStale = (lastFetched: number | null) => {
    if (!lastFetched) return true;
    return Date.now() - lastFetched > CACHE_DURATION;
  };

  const updateStats = (inquiries: Inquiry[], leads: Lead[]) => {
    setData(prev => ({
      ...prev,
      stats: {
        totalInquiries: inquiries.length,
        unreadInquiries: inquiries.filter(item => !item.isRead).length,
        totalLeads: leads.length,
        unreadLeads: leads.filter(item => !item.isRead).length,
      },
    }));
  };

  const fetchInquiries = useCallback(async (force = false) => {
    const token = checkAuth();
    if (!token) return;

    // Check if we need to fetch (stale data or forced)
    if (!force && !isDataStale(data.lastFetched.inquiries)) {
      console.log('Using cached inquiries data');
      return; // Use cached data
    }

    console.log('Fetching fresh inquiries data');
    try {
      setLoading(prev => ({ ...prev, inquiries: true }));
      setError('');

      const response = await fetch(getApiUrl('inquiries'), {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (response.status === 401) {
        router.push('/admin/login');
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to fetch inquiries');
      }

      const responseData = await response.json();
      const inquiries = (responseData.data || []).sort((a: Inquiry, b: Inquiry) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      setData(prev => {
        const newData = {
          ...prev,
          inquiries,
          lastFetched: {
            ...prev.lastFetched,
            inquiries: Date.now(),
          },
        };
        updateStats(inquiries, prev.leads);
        return newData;
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch inquiries');
    } finally {
      setLoading(prev => ({ ...prev, inquiries: false }));
    }
  }, [router, data.lastFetched.inquiries]);

  const fetchLeads = useCallback(async (force = false) => {
    const token = checkAuth();
    if (!token) return;

    // Check if we need to fetch (stale data or forced)
    if (!force && !isDataStale(data.lastFetched.leads)) {
      console.log('Using cached leads data');
      return; // Use cached data
    }

    console.log('Fetching fresh leads data');

    try {
      setLoading(prev => ({ ...prev, leads: true }));
      setError('');

      const response = await fetch(getApiUrl('leads'), {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (response.status === 401) {
        router.push('/admin/login');
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to fetch leads');
      }

      const responseData = await response.json();
      const leads = (responseData.data || []).sort((a: Lead, b: Lead) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      setData(prev => {
        const newData = {
          ...prev,
          leads,
          lastFetched: {
            ...prev.lastFetched,
            leads: Date.now(),
          },
        };
        updateStats(prev.inquiries, leads);
        return newData;
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch leads');
    } finally {
      setLoading(prev => ({ ...prev, leads: false }));
    }
  }, [router, data.lastFetched.leads]);

  const fetchBoth = useCallback(async (force = false) => {
    await Promise.all([
      fetchInquiries(force),
      fetchLeads(force)
    ]);
  }, [fetchInquiries, fetchLeads]);

  // Optimistic updates for better UX
  const updateInquiry = (id: string, updates: Partial<Inquiry>) => {
    setData(prev => ({
      ...prev,
      inquiries: prev.inquiries.map(item => 
        item.id === id ? { ...item, ...updates } : item
      ),
    }));
  };

  const updateLead = (id: string, updates: Partial<Lead>) => {
    setData(prev => ({
      ...prev,
      leads: prev.leads.map(item => 
        item.id === id ? { ...item, ...updates } : item
      ),
    }));
  };

  const removeInquiry = (id: string) => {
    setData(prev => {
      const newInquiries = prev.inquiries.filter(item => item.id !== id);
      updateStats(newInquiries, prev.leads);
      return {
        ...prev,
        inquiries: newInquiries,
      };
    });
  };

  const removeLead = (id: string) => {
    setData(prev => {
      const newLeads = prev.leads.filter(item => item.id !== id);
      updateStats(prev.inquiries, newLeads);
      return {
        ...prev,
        leads: newLeads,
      };
    });
  };

  const clearError = () => setError('');

  // Update stats whenever data changes
  useEffect(() => {
    updateStats(data.inquiries, data.leads);
  }, [data.inquiries, data.leads]);

  const value: AdminContextType = {
    data,
    loading,
    error,
    fetchInquiries,
    fetchLeads,
    fetchBoth,
    updateInquiry,
    updateLead,
    removeInquiry,
    removeLead,
    clearError,
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
} 