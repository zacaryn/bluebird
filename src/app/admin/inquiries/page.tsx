'use client';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { FaEnvelope, FaPhone, FaTrash, FaSpinner, FaChevronDown, FaChevronUp, FaFilter, FaHome, FaExclamationCircle, FaArrowLeft, FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import type { Inquiry } from '@/types';
import { useAdmin } from '@/contexts/AdminContext';

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
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 text-sm text-gray-500 mb-3">
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-gray-400 flex-shrink-0" />
              <span className="break-all">{inquiry.email}</span>
            </div>
            {inquiry.phone && (
              <div className="flex items-center">
                <FaPhone className="mr-2 text-gray-400 flex-shrink-0" />
                <span>{inquiry.phone}</span>
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
  const { data, loading, error, fetchInquiries, updateInquiry, removeInquiry, clearError } = useAdmin();
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    // Check auth and fetch data
    const token = localStorage.getItem('auth-token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    
    // Fetch inquiries using context (will use cache if available)
    fetchInquiries();
  }, [router, fetchInquiries]);

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    router.push('/admin/login');
  };

  const handleRefresh = () => {
    fetchInquiries(true); // Force refresh
  };

  const deleteInquiry = async (id: string) => {
    if (!confirm('Are you sure you want to delete this inquiry?')) {
      return;
    }

    try {
      setDeletingId(id);

      const getApiUrl = (id: string) => {
        const hostname = window.location.hostname;
        if (hostname === 'localhost' || hostname.startsWith('10.0.0.') || hostname.startsWith('192.168.')) {
          return `http://${hostname === 'localhost' ? 'localhost' : hostname}:3001/api/inquiries/${id}`;
        }
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
        const responseData = await response.json();
        throw new Error(responseData.error || 'Failed to delete inquiry');
      }

      // Optimistically remove from cache
      removeInquiry(id);
      setExpandedId(null);
    } catch (err) {
      console.error('Error deleting inquiry:', err);
      // Refresh data on error
      fetchInquiries(true);
    } finally {
      setDeletingId(null);
    }
  };

  const markAsRead = async (id: string) => {
    try {
      const getApiUrl = (id: string) => {
        const hostname = window.location.hostname;
        if (hostname === 'localhost' || hostname.startsWith('10.0.0.') || hostname.startsWith('192.168.')) {
          return `http://${hostname === 'localhost' ? 'localhost' : hostname}:3001/api/inquiries/${id}`;
        }
        return `/api/inquiries/${id}`;
      };
      
      const apiUrl = getApiUrl(id);
      const token = localStorage.getItem('auth-token');
      
      if (!token) {
        router.push('/admin/login');
        return;
      }

      // Optimistically update
      updateInquiry(id, { isRead: true });

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
        // Revert optimistic update on error
        updateInquiry(id, { isRead: false });
        const responseData = await response.json();
        throw new Error(responseData.error || 'Failed to mark inquiry as read');
      }
    } catch (err) {
      console.error('Error marking inquiry as read:', err);
      // Refresh data on error
      fetchInquiries(true);
    }
  };

  const filteredInquiries = data.inquiries.filter(inquiry => 
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

  if (loading.inquiries) {
    return (
      <div className="flex justify-center items-center py-12">
        <FaSpinner className="animate-spin h-8 w-8 text-white" />
        <span className="ml-2 text-white">Loading inquiries...</span>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 sm:py-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              <div className="min-w-0">
                <div className="flex items-center mb-2">
                  <Link
                    href="/admin"
                    className="inline-flex items-center text-sm text-white/90 hover:text-white mr-4"
                  >
                    <FaArrowLeft className="mr-2" />
                    <span className="hidden sm:inline">Back to Dashboard</span>
                    <span className="sm:hidden">Back</span>
                  </Link>
                </div>
                <div className="flex items-center">
                  <Image 
                    src="/images/logo.png" 
                    alt="Bluebird Mortgage" 
                    width={160} 
                    height={40} 
                    className="h-8 sm:h-10 w-auto mr-3 sm:mr-4 brightness-0 invert"
                  />
                  <h1 className="text-xl sm:text-2xl font-bold text-white">Admin Dashboard</h1>
                </div>
                {/* Navigation Tabs */}
                <div className="mt-3 lg:mt-4 flex space-x-1">
                  <Link
                    href="/admin/inquiries"
                    className="bg-white/20 text-white px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium"
                  >
                    <span className="hidden sm:inline">Contact Inquiries</span>
                    <span className="sm:hidden">Inquiries</span>
                  </Link>
                  <Link
                    href="/admin/leads"
                    className="bg-white/10 text-white/90 hover:bg-white/20 px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors"
                  >
                    <span className="hidden sm:inline">Get Started Leads</span>
                    <span className="sm:hidden">Leads</span>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 lg:space-x-3">
                <Link
                  href="/"
                  target="_blank"
                  className="inline-flex items-center justify-center px-3 py-2 border border-white/30 shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <FaHome className="mr-2" />
                  <span className="hidden sm:inline">View Site</span>
                  <span className="sm:hidden">Site</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
                >
                  <FaSignOutAlt className="mr-2" />
                  Logout
                </button>
                <button
                  onClick={handleRefresh}
                  className="inline-flex items-center justify-center px-3 py-2 border border-white/30 text-sm font-medium rounded-md text-white bg-white/10 hover:bg-white/20 transition-colors"
                >
                  Refresh
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="mb-4 rounded-md bg-red-100 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <FaExclamationCircle className="h-5 w-5 text-red-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">{error}</h3>
              </div>
            </div>
          </div>
        )}

        <div className="mb-6 flex flex-wrap gap-2 sm:gap-3">
          {loanTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setFilter(type.id)}
              className={`inline-flex items-center px-2 sm:px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                filter === type.id
                  ? 'bg-white text-[#00659C]'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        <div className="bg-white shadow-lg overflow-hidden sm:rounded-md">
          {filteredInquiries.length === 0 ? (
            <div className="text-center py-12">
              <FaEnvelope className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No inquiries yet</h3>
              <p className="mt-1 text-sm text-gray-500">
                Contact form submissions will appear here.
              </p>
            </div>
          ) : (
            filteredInquiries.map((inquiry) => (
              <InquiryItem
                key={inquiry.id}
                inquiry={inquiry}
                onDelete={deleteInquiry}
                onMarkAsRead={markAsRead}
                isDeleting={deletingId === inquiry.id}
                isExpanded={expandedId === inquiry.id}
                onToggle={() => setExpandedId(expandedId === inquiry.id ? null : inquiry.id)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
} 