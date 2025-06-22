'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FaEnvelope, FaUsers, FaChartBar, FaSpinner, FaCog, FaHome, FaSignOutAlt } from 'react-icons/fa';
import { useAdmin } from '@/contexts/AdminContext';

export default function AdminHub() {
  const router = useRouter();
  const { data, loading, error, fetchBoth, clearError } = useAdmin();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('auth-token');
      
      if (!token) {
        router.push('/admin/login');
        return;
      }

      // Fetch data using context
      fetchBoth();
    };

    checkAuth();
  }, [router, fetchBoth]);

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    router.push('/admin/login');
  };

  if (loading.inquiries || loading.leads) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex items-center">
          <FaSpinner className="animate-spin h-8 w-8 text-white mr-3" />
          <span className="text-white">Loading dashboard...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center justify-between">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="mb-6 rounded-md bg-yellow-100 p-4">
            <div className="flex">
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">{error}</h3>
              </div>
            </div>
          </div>
        )}

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white overflow-hidden shadow-lg rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FaEnvelope className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Contact Inquiries</dt>
                    <dd className="text-lg font-medium text-gray-900">{data.stats.totalInquiries}</dd>
                  </dl>
                </div>
              </div>
            </div>
            {data.stats.unreadInquiries > 0 && (
              <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                  <span className="font-medium text-[#00659C]">{data.stats.unreadInquiries} unread</span>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white overflow-hidden shadow-lg rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FaUsers className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Get Started Leads</dt>
                    <dd className="text-lg font-medium text-gray-900">{data.stats.totalLeads}</dd>
                  </dl>
                </div>
              </div>
            </div>
            {data.stats.unreadLeads > 0 && (
              <div className="bg-gray-50 px-5 py-3">
                <div className="text-sm">
                  <span className="font-medium text-[#00659C]">{data.stats.unreadLeads} unread</span>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white overflow-hidden shadow-lg rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FaChartBar className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Submissions</dt>
                    <dd className="text-lg font-medium text-gray-900">{data.stats.totalInquiries + data.stats.totalLeads}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow-lg rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FaCog className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Needs Attention</dt>
                    <dd className="text-lg font-medium text-gray-900">{data.stats.unreadInquiries + data.stats.unreadLeads}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white overflow-hidden shadow-lg rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Contact Inquiries</h3>
              <p className="text-sm text-gray-500 mb-4">
                Manage contact form submissions from your website visitors.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <span>{data.stats.totalInquiries} total inquiries</span>
                  {data.stats.unreadInquiries > 0 && (
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      {data.stats.unreadInquiries} new
                    </span>
                  )}
                </div>
                <Link
                  href="/admin/inquiries"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#00659C] hover:bg-[#005483] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00659C]"
                >
                  View Inquiries
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow-lg rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Get Started Leads</h3>
              <p className="text-sm text-gray-500 mb-4">
                Review detailed lead information from your Get Started funnel.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <span>{data.stats.totalLeads} total leads</span>
                  {data.stats.unreadLeads > 0 && (
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      {data.stats.unreadLeads} new
                    </span>
                  )}
                </div>
                <Link
                  href="/admin/leads"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#00659C] hover:bg-[#005483] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00659C]"
                >
                  View Leads
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity Summary */}
        {(data.stats.unreadInquiries > 0 || data.stats.unreadLeads > 0) && (
          <div className="mt-8 bg-white/90 border border-white/30 rounded-md p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <FaChartBar className="h-5 w-5 text-blue-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">
                  You have {data.stats.unreadInquiries + data.stats.unreadLeads} new submission{data.stats.unreadInquiries + data.stats.unreadLeads !== 1 ? 's' : ''} waiting for review
                </h3>
                <div className="mt-2 text-sm text-blue-700">
                  <ul className="list-disc list-inside space-y-1">
                    {data.stats.unreadInquiries > 0 && (
                      <li>{data.stats.unreadInquiries} new contact inquir{data.stats.unreadInquiries !== 1 ? 'ies' : 'y'}</li>
                    )}
                    {data.stats.unreadLeads > 0 && (
                      <li>{data.stats.unreadLeads} new get started lead{data.stats.unreadLeads !== 1 ? 's' : ''}</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 