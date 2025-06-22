'use client';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { FaEnvelope, FaPhone, FaTrash, FaSpinner, FaChevronDown, FaChevronUp, FaFilter, FaHome, FaExclamationCircle, FaDollarSign, FaClock, FaArrowLeft, FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import type { Lead } from '@/types';
import { useAdmin } from '@/contexts/AdminContext';

interface LeadItemProps {
  lead: Lead;
  onDelete: (id: string) => void;
  onMarkAsRead: (id: string) => void;
  isDeleting: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}

const LeadItem = ({ lead, onDelete, onMarkAsRead, isDeleting, isExpanded, onToggle }: LeadItemProps) => {
  const formattedDate = format(new Date(lead.createdAt), 'MMM d, h:mm a');

  // Helper function to format currency values
  const formatCurrency = (value?: string) => {
    if (!value || value === '') return null;
    const numValue = parseInt(value, 10);
    if (isNaN(numValue)) return null;
    return numValue.toLocaleString();
  };

  const getLoanTypeColor = (loanType: string) => {
    switch (loanType) {
      case 'fha': return 'bg-blue-100 text-blue-800';
      case 'va': return 'bg-green-100 text-green-800';
      case 'conventional': return 'bg-purple-100 text-purple-800';
      case 'refinance': return 'bg-orange-100 text-orange-800';
      case 'new-construction': return 'bg-yellow-100 text-yellow-800';
      case 'reverse-mortgage': return 'bg-pink-100 text-pink-800';
      case 'not-sure': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTimeframeText = (timeframe?: string) => {
    switch (timeframe) {
      case 'immediately': return 'Immediately (0-30 days)';
      case 'soon': return 'Soon (1-3 months)';
      case 'planning': return 'Planning ahead (3-6 months)';
      case 'exploring': return 'Just exploring (6+ months)';
      default: return 'Not specified';
    }
  };

  const getCreditScoreText = (creditScore?: string) => {
    switch (creditScore) {
      case 'excellent': return 'Excellent (740+)';
      case 'good': return 'Good (670-739)';
      case 'fair': return 'Fair (580-669)';
      case 'poor': return 'Poor (Below 580)';
      case 'unknown': return 'Not sure';
      default: return 'Not specified';
    }
  };

  return (
    <div className={`${lead.isRead ? 'bg-white' : 'bg-blue-50 border-l-4 border-l-[#00659C]'} border-b border-gray-200 transition-all duration-200 hover:bg-gray-50
      ${isExpanded ? 'shadow-sm' : ''}`}
    >
      {/* Collapsed View */}
      <div 
        className="px-4 py-3 flex items-center cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex-1 min-w-0 flex items-center">
          <div className="flex-shrink-0 mr-4">
            <div className={`w-2 h-2 rounded-full ${lead.loanType === 'fha' ? 'bg-blue-500' : 
              lead.loanType === 'va' ? 'bg-green-500' : 
              lead.loanType === 'conventional' ? 'bg-purple-500' : 
              lead.loanType === 'refinance' ? 'bg-orange-500' : 'bg-gray-500'}`} 
            />
          </div>
          <div className="truncate">
            <span className={`font-medium ${lead.isRead ? 'text-gray-900' : 'text-gray-900 font-semibold'}`}>
              {lead.firstName} {lead.lastName}
            </span>
            <span className="mx-2 text-gray-400">·</span>
            <span className="text-sm text-gray-500">{formattedDate}</span>
            {lead.propertyValue && formatCurrency(lead.propertyValue) && (
              <>
                <span className="mx-2 text-gray-400">·</span>
                <span className="text-sm text-gray-600">${formatCurrency(lead.propertyValue)}</span>
              </>
            )}
            {!lead.isRead && (
              <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-[#00659C] text-white">
                NEW
              </span>
            )}
          </div>
        </div>
        <div className="ml-4 flex items-center space-x-4">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${getLoanTypeColor(lead.loanType)}`}>
            {lead.loanType?.replace('-', ' ').toUpperCase() || 'GENERAL'}
          </span>
          {isExpanded ? <FaChevronUp className="text-gray-400" /> : <FaChevronDown className="text-gray-400" />}
        </div>
      </div>

      {/* Expanded View */}
      {isExpanded && (
        <div className="px-4 py-4 bg-gray-50 border-t border-gray-100">
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            {/* Contact Information */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Contact Information</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <FaEnvelope className="mr-2 text-gray-400" />
                  {lead.email}
                </div>
                <div className="flex items-center">
                  <FaPhone className="mr-2 text-gray-400" />
                  {lead.phone}
                </div>
              </div>
            </div>

            {/* Loan Details */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Loan Details</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <FaHome className="mr-2 text-gray-400" />
                  Loan Type: <span className="ml-1 font-medium">{lead.loanType?.replace('-', ' ')}</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="mr-2 text-gray-400" />
                  Timeframe: <span className="ml-1">{getTimeframeText(lead.timeframe)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Information */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Financial Information</h4>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              {lead.propertyValue && formatCurrency(lead.propertyValue) && (
                <div className="bg-white rounded-md p-3">
                  <div className="text-gray-500 text-xs">Property Value</div>
                  <div className="font-semibold text-gray-900">${formatCurrency(lead.propertyValue)}</div>
                </div>
              )}
              {lead.downPayment && formatCurrency(lead.downPayment) && (
                <div className="bg-white rounded-md p-3">
                  <div className="text-gray-500 text-xs">Down Payment</div>
                  <div className="font-semibold text-gray-900">${formatCurrency(lead.downPayment)}</div>
                </div>
              )}
              {lead.creditScore && (
                <div className="bg-white rounded-md p-3">
                  <div className="text-gray-500 text-xs">Credit Score</div>
                  <div className="font-semibold text-gray-900">{getCreditScoreText(lead.creditScore)}</div>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            {!lead.isRead && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onMarkAsRead(lead.id);
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
                onDelete(lead.id);
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

export default function AdminLeads() {
  const router = useRouter();
  const { data, loading, error, fetchLeads, updateLead, removeLead, clearError } = useAdmin();
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
    
    // Fetch leads using context (will use cache if available)
    fetchLeads();
  }, [router, fetchLeads]);

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    router.push('/admin/login');
  };

  const handleRefresh = () => {
    fetchLeads(true); // Force refresh
  };

  const deleteLead = async (id: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) {
      return;
    }

    try {
      setDeletingId(id);

      const getApiUrl = (id: string) => {
        const hostname = window.location.hostname;
        if (hostname === 'localhost' || hostname.startsWith('10.0.0.') || hostname.startsWith('192.168.')) {
          return `http://${hostname === 'localhost' ? 'localhost' : hostname}:3001/api/leads/${id}`;
        }
        return `/api/leads/${id}`;
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
        throw new Error(responseData.error || 'Failed to delete lead');
      }

      // Optimistically remove from cache
      removeLead(id);
      setExpandedId(null);
    } catch (err) {
      console.error('Error deleting lead:', err);
      // Refresh data on error
      fetchLeads(true);
    } finally {
      setDeletingId(null);
    }
  };

  const markAsRead = async (id: string) => {
    try {
      const getApiUrl = (id: string) => {
        const hostname = window.location.hostname;
        if (hostname === 'localhost' || hostname.startsWith('10.0.0.') || hostname.startsWith('192.168.')) {
          return `http://${hostname === 'localhost' ? 'localhost' : hostname}:3001/api/leads/${id}`;
        }
        return `/api/leads/${id}`;
      };
      
      const apiUrl = getApiUrl(id);
      const token = localStorage.getItem('auth-token');
      
      if (!token) {
        router.push('/admin/login');
        return;
      }

      // Optimistically update
      updateLead(id, { isRead: true });

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
        updateLead(id, { isRead: false });
        const responseData = await response.json();
        throw new Error(responseData.error || 'Failed to mark lead as read');
      }
    } catch (err) {
      console.error('Error marking lead as read:', err);
      // Refresh data on error
      fetchLeads(true);
    }
  };

  const filteredLeads = data.leads.filter(lead => 
    filter === 'all' ? true : lead.loanType === filter
  );

  const loanTypes = [
    { id: 'all', label: 'All Leads', color: 'gray' },
    { id: 'va', label: 'VA Loans', color: 'green' },
    { id: 'fha', label: 'FHA Loans', color: 'blue' },
    { id: 'conventional', label: 'Conventional', color: 'purple' },
    { id: 'refinance', label: 'Refinance', color: 'orange' },
    { id: 'new-construction', label: 'New Construction', color: 'yellow' },
    { id: 'reverse-mortgage', label: 'Reverse Mortgage', color: 'pink' },
    { id: 'not-sure', label: 'Not Sure', color: 'gray' }
  ];

  if (loading.leads) {
    return (
      <div className="flex justify-center items-center py-12">
        <FaSpinner className="animate-spin h-8 w-8 text-white" />
        <span className="ml-2 text-white">Loading leads...</span>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center mb-2">
                  <Link
                    href="/admin"
                    className="inline-flex items-center text-sm text-white/90 hover:text-white mr-4"
                  >
                    <FaArrowLeft className="mr-2" />
                    Back to Dashboard
                  </Link>
                </div>
                <div className="flex items-center">
                  <Image 
                    src="/images/logo.png" 
                    alt="Bluebird Mortgage" 
                    width={160} 
                    height={40} 
                    className="h-10 w-auto mr-4 brightness-0 invert"
                  />
                  <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
                </div>
                {/* Navigation Tabs */}
                <div className="mt-4 flex space-x-1">
                  <Link
                    href="/admin/inquiries"
                    className="bg-white/10 text-white/90 hover:bg-white/20 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    Contact Inquiries
                  </Link>
                  <Link
                    href="/admin/leads"
                    className="bg-white/20 text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Get Started Leads
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Link
                  href="/"
                  target="_blank"
                  className="inline-flex items-center px-3 py-2 border border-white/30 shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <FaHome className="mr-2" />
                  View Site
                </Link>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
                >
                  <FaSignOutAlt className="mr-2" />
                  Logout
                </button>
                <button
                  onClick={handleRefresh}
                  className="inline-flex items-center px-4 py-2 border border-white/30 text-sm font-medium rounded-md text-white bg-white/10 hover:bg-white/20 transition-colors"
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

        <div className="mb-6 flex flex-wrap gap-2">
          {loanTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setFilter(type.id)}
              className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
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
          {filteredLeads.length === 0 ? (
            <div className="text-center py-12">
              <FaHome className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No leads yet</h3>
              <p className="mt-1 text-sm text-gray-500">
                Get Started form submissions will appear here.
              </p>
            </div>
          ) : (
            filteredLeads.map((lead) => (
              <LeadItem
                key={lead.id}
                lead={lead}
                onDelete={deleteLead}
                onMarkAsRead={markAsRead}
                isDeleting={deletingId === lead.id}
                isExpanded={expandedId === lead.id}
                onToggle={() => setExpandedId(expandedId === lead.id ? null : lead.id)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
} 