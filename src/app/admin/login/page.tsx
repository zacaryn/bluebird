'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isNewPasswordRequired, setIsNewPasswordRequired] = useState(false);
  const [session, setSession] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate passwords match if setting new password
    if (isNewPasswordRequired) {
      if (newPassword !== confirmPassword) {
        setError('New passwords do not match');
        return;
      }
      if (newPassword.length < 8) {
        setError('New password must be at least 8 characters long');
        return;
      }
    }

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          ...(isNewPasswordRequired && { newPassword, session })
        }),
      });

      const data = await response.json();

      if (data.challengeName === 'NEW_PASSWORD_REQUIRED') {
        setIsNewPasswordRequired(true);
        setSession(data.session);
        setError(data.message || 'Please set a new password');
        // Clear password fields for security
        setPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else if (data.error) {
        setError(data.error);
        // Clear password on error
        setPassword('');
      } else if (data.token) {
        router.push('/admin/inquiries');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during login');
      // Clear password on error
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#00659C] to-[#005483] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Image 
              src="/images/logo.png" 
              alt="Bluebird Mortgage" 
              width={240} 
              height={60} 
              className="h-16 w-auto brightness-0 invert"
            />
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            {isNewPasswordRequired ? 'Set New Password' : 'Admin Portal'}
          </h2>
          {isNewPasswordRequired ? (
            <p className="mt-2 text-center text-sm text-blue-100">
              Your password needs to be updated
            </p>
          ) : (
            <p className="mt-2 text-center text-sm text-blue-100">
              Sign in to access the inquiry management system
            </p>
          )}
        </div>
        <div className="bg-white rounded-lg shadow-xl p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00659C] focus:border-[#00659C] sm:text-sm"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isNewPasswordRequired}
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  {isNewPasswordRequired ? 'Current Password' : 'Password'}
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00659C] focus:border-[#00659C] sm:text-sm"
                  placeholder={isNewPasswordRequired ? "Enter current password" : "Enter your password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {isNewPasswordRequired && (
                <>
                  <div>
                    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      New Password
                    </label>
                    <input
                      id="newPassword"
                      name="newPassword"
                      type="password"
                      required
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00659C] focus:border-[#00659C] sm:text-sm"
                      placeholder="Enter new password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm New Password
                    </label>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      required
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00659C] focus:border-[#00659C] sm:text-sm"
                      placeholder="Confirm new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </>
              )}
            </div>

          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">
                    {error}
                  </h3>
                </div>
              </div>
            </div>
          )}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#00659C] hover:bg-[#005483] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00659C] transition-colors"
              >
                {isNewPasswordRequired ? 'Set New Password' : 'Sign in'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 