'use client';

import Link from 'next/link';

export default function HowToApply() {
  return (
    <div className="bg-gray-50 p-8 rounded-lg my-12">
      <h2 className="text-3xl font-bold mb-6">How To Apply</h2>
      <p className="mb-6">
        We use secure submission software to protect information you provide on the loan application. 
        Make sure to have the following documents ready:
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">Required Documents</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Identification/Drivers License</li>
            <li>30 Days of Most Recent Pay Stubs</li>
            <li>Last 2 years W2 Forms</li>
            <li>Last Two Months' Bank Statements</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Employment history</li>
            <li>Current address</li>
            <li>Income information</li>
            <li>Asset information</li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <Link
          href="https://www.blink.mortgage/app/signup/p/bluebirdmortgage/davidjeffrey"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#00659C] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Start Your Application
        </Link>
      </div>
    </div>
  );
} 