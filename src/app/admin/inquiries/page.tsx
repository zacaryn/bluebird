'use client';

import { useState, useEffect, useCallback } from 'react';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { FaEnvelope, FaPhone, FaTrash, FaSpinner, FaChevronDown, FaChevronUp, FaFilter, FaHome, FaExclamationCircle } from 'react-icons/fa';
import type { Inquiry } from '@/types';

interface InquiryItemProps {
  inquiry: Inquiry;
  onDelete: (id: string) => void;
  onMarkAsRead: (id: string) => void;
  isDeleting: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}

const InquiryItem = ({ inquiry, onDelete, onMarkAsRead, isDeleting, isExpanded, onToggle }: InquiryItemProps) => {
  const formattedDate = format(new Date(inquiry.createdAt), 'MMM d, h:mm a');

  return (
    <div className={`${inquiry.isRead ? 'bg-white' : 'bg-blue-50 border-l-4 border-l-[#00659C]'} border-b border-gray-200 transition-all duration-200 hover:bg-gray-50
      ${isExpanded ? 'shadow-sm' : ''}`}
    >
      {/* Collapsed View */}
      <div 
        className="px-4 py-3 flex items-center cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex-1 min-w-0 flex items-center">
          <div className="flex-shrink-0 mr-4">
            <div className={`w-2 h-2 rounded-full ${inquiry.loanType === 'fha' ? 'bg-blue-500' : 
              inquiry.loanType === 'va' ? 'bg-green-500' : 
              inquiry.loanType === 'conventional' ? 'bg-purple-500' : 'bg-gray-500'}`} 
            />
          </div>
          <div className="truncate">
            <span className={`font-medium ${inquiry.isRead ? 'text-gray-900' : 'text-gray-900 font-semibold'}`}>{inquiry.name}</span>
            <span className="mx-2 text-gray-400">·</span>
            <span className="text-sm text-gray-500">{formattedDate}</span>
            {!inquiry.isRead && (
              <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-[#00659C] text-white">
                NEW
              </span>
            )}
          </div>
        </div>
        <div className="ml-4 flex items-center space-x-4">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            inquiry.loanType === 'fha' ? 'bg-blue-100 text-blue-800' : 
            inquiry.loanType === 'va' ? 'bg-green-100 text-green-800' : 
            inquiry.loanType === 'conventional' ? 'bg-purple-100 text-purple-800' : 
            inquiry.loanType === 'reverse' ? 'bg-orange-100 text-orange-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {inquiry.loanType?.toUpperCase() || 'GENERAL'}
          </span>
          {isExpanded ? <FaChevronUp className="text-gray-400" /> : <FaChevronDown className="text-gray-400" />}
        </div>
      </div>

      {/* Expanded View */}
      {isExpanded && (
        <div className="px-4 py-4 bg-gray-50 border-t border-gray-100">
          <div className="flex space-x-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-gray-400" />
              {inquiry.email}
            </div>
            {inquiry.phone && (
              <div className="flex items-center">
                <FaPhone className="mr-2 text-gray-400" />
                {inquiry.phone}
              </div>
            )}
          </div>
          
          <div className="bg-white rounded-md p-4 mb-4">
            <p className="text-gray-700 whitespace-pre-wrap">{inquiry.message}</p>
          </div>

          <div className="flex justify-end space-x-3">
            {!inquiry.isRead && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onMarkAsRead(inquiry.id);
                }}
                className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md
                  bg-[#00659C] hover:bg-[#005483] text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00659C] transition-colors"
              >
                Mark as Read
              </button>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(inquiry.id);
              }}
              disabled={isDeleting}
              className={`inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md
                ${isDeleting ? 'bg-red-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'}
                text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors`}
            >
              {isDeleting ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  Deleting...
                </>
              ) : (
                <>
                  <FaTrash className="mr-2" />
                  Delete
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default function AdminInquiries() {
  const router = useRouter();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const fetchInquiries = useCallback(async () => {
    try {
      setError('');
      const getApiUrl = () => {
        const hostname = window.location.hostname;
        if (hostname === 'localhost' || hostname.startsWith('10.0.0.') || hostname.startsWith('192.168.')) {
          // Use local API server for local development (localhost or local IP)
          return `http://${hostname === 'localhost' ? 'localhost' : hostname}:3001/api/inquiries`;
        }
        // Use relative path for production
        return '/api/inquiries';
      };
      const apiUrl = getApiUrl();
      const token = localStorage.getItem('auth-token');
      
      if (!token) {
        router.push('/admin/login');
        return;
      }

      const response = await fetch(apiUrl, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.status === 401) {
        router.push('/admin/login');
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to fetch inquiries');
      }

      const data = await response.json();
      
      // Sort by date (newest first)
      const sortedInquiries = (data.data || []).sort((a: Inquiry, b: Inquiry) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      
      setInquiries(sortedInquiries);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchInquiries();
  }, [fetchInquiries]);

  const deleteInquiry = async (id: string) => {
    if (!confirm('Are you sure you want to delete this inquiry?')) {
      return;
    }

    try {
      setError('');
      setDeletingId(id);

      const getApiUrl = (id: string) => {
        const hostname = window.location.hostname;
        if (hostname === 'localhost' || hostname.startsWith('10.0.0.') || hostname.startsWith('192.168.')) {
          // Use local API server for local development (localhost or local IP)
          return `http://${hostname === 'localhost' ? 'localhost' : hostname}:3001/api/inquiries/${id}`;
        }
        // Use relative path for production
        return `/api/inquiries/${id}`;
      };
      const apiUrl = getApiUrl(id);
      const token = localStorage.getItem('auth-token');
      
      if (!token) {
        router.push('/admin/login');
        return;
      }

      const response = await fetch(apiUrl, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 401) {
        router.push('/admin/login');
        return;
      }

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to delete inquiry');
      }

      await fetchInquiries();
      setExpandedId(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setDeletingId(null);
    }
  };

  const markAsRead = async (id: string) => {
    try {
      setError('');

      const getApiUrl = (id: string) => {
        const hostname = window.location.hostname;
        if (hostname === 'localhost' || hostname.startsWith('10.0.0.') || hostname.startsWith('192.168.')) {
          // Use local API server for local development (localhost or local IP)
          return `http://${hostname === 'localhost' ? 'localhost' : hostname}:3001/api/inquiries/${id}`;
        }
        // Use relative path for production
        return `/api/inquiries/${id}`;
      };
      const apiUrl = getApiUrl(id);
      const token = localStorage.getItem('auth-token');
      
      if (!token) {
        router.push('/admin/login');
        return;
      }

      const response = await fetch(apiUrl, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ isRead: true })
      });

      if (response.status === 401) {
        router.push('/admin/login');
        return;
      }

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to mark inquiry as read');
      }

      await fetchInquiries();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const filteredInquiries = inquiries.filter(inquiry => 
    filter === 'all' ? true : inquiry.loanType === filter
  );

  const loanTypes = [
    { id: 'all', label: 'All Inquiries', color: 'gray' },
    { id: 'va', label: 'VA Loans', color: 'green' },
    { id: 'fha', label: 'FHA Loans', color: 'blue' },
    { id: 'conventional', label: 'Conventional', color: 'purple' },
    { id: 'reverse', label: 'Reverse Mortgage', color: 'orange' },
    { id: 'other', label: 'Other', color: 'gray' }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center">
            <FaSpinner className="animate-spin h-8 w-8 text-blue-600" />
            <span className="ml-2 text-gray-600">Loading inquiries...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">Customer Inquiries</h1>
              <button
                onClick={fetchInquiries}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#00659C] hover:bg-[#005483] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00659C] transition-colors"
              >
                Refresh
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="mb-4 rounded-md bg-red-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <FaExclamationCircle className="h-5 w-5 text-red-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">{error}</h3>
              </div>
            </div>
          </div>
        )}

        <div className="mb-6 flex flex-wrap gap-2">
          {loanTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setFilter(type.id)}
              className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filter === type.id
                  ? 'bg-[#00659C] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          {filteredInquiries.map((inquiry) => (
            <InquiryItem
              key={inquiry.id}
              inquiry={inquiry}
              onDelete={deleteInquiry}
              onMarkAsRead={markAsRead}
              isDeleting={deletingId === inquiry.id}
              isExpanded={expandedId === inquiry.id}
              onToggle={() => setExpandedId(expandedId === inquiry.id ? null : inquiry.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 