'use client';

import { useEffect, useRef, useState } from 'react';
import AnimatedCounter from './AnimatedCounter';

interface BuyVsRentProps {
  monthlyRent?: number;
  monthlyMortgage?: number;
  years?: number;
}

export default function BuyVsRentComparison({ 
  monthlyRent = 2200, 
  monthlyMortgage = 2400,
  years = 5 
}: BuyVsRentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const totalRentPaid = monthlyRent * 12 * years;
  const totalMortgagePaid = monthlyMortgage * 12 * years;
  const estimatedEquity = totalMortgagePaid * 0.35; // Rough estimate of equity buildup
  const totalRentLoss = totalRentPaid;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={elementRef} className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Buy vs Rent: The Real Numbers
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            See how homeownership builds wealth while renting builds... nothing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Renting Side */}
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                Money Gone Forever
              </span>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-red-900 mb-6">
                Renting for {years} Years
              </h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-red-700 mb-2">Monthly Rent</p>
                  <div className="text-3xl font-bold text-red-900">
                    $<AnimatedCounter end={monthlyRent} />
                  </div>
                </div>
                
                <div className="h-px bg-red-300"></div>
                
                <div>
                  <p className="text-sm text-red-700 mb-2">Total Paid in {years} Years</p>
                  <div className="text-4xl font-bold text-red-900">
                    $<AnimatedCounter end={totalRentPaid} />
                  </div>
                </div>
                
                <div className="bg-red-100 rounded-lg p-4">
                  <p className="text-sm text-red-800 mb-2">What You Own</p>
                  <div className="text-6xl font-bold text-red-900">$0</div>
                  <p className="text-sm text-red-700 mt-2">Zero equity. Zero ownership.</p>
                </div>
              </div>
            </div>
            
            {/* Animated loss indicator */}
            <div className="absolute -bottom-2 -right-2 opacity-10">
              <div className={`transform transition-all duration-3000 ${isVisible ? 'translate-x-8 rotate-12' : ''}`}>
                <svg className="w-16 h-16 text-red-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* Buying Side */}
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Building Wealth
              </span>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-900 mb-6">
                Buying a Home
              </h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-green-700 mb-2">Monthly Mortgage</p>
                  <div className="text-3xl font-bold text-green-900">
                    $<AnimatedCounter end={monthlyMortgage} />
                  </div>
                </div>
                
                <div className="h-px bg-green-300"></div>
                
                <div>
                  <p className="text-sm text-green-700 mb-2">Total Paid in {years} Years</p>
                  <div className="text-4xl font-bold text-green-900">
                    $<AnimatedCounter end={totalMortgagePaid} />
                  </div>
                </div>
                
                <div className="bg-green-100 rounded-lg p-4">
                  <p className="text-sm text-green-800 mb-2">Estimated Equity Built</p>
                  <div className="text-6xl font-bold text-green-900">
                    $<AnimatedCounter end={estimatedEquity} />
                  </div>
                  <p className="text-sm text-green-700 mt-2">Plus you own your home!</p>
                </div>
              </div>
            </div>
            
            {/* Animated growth indicator */}
            <div className="absolute -bottom-2 -right-2 opacity-10">
              <div className={`transform transition-all duration-3000 ${isVisible ? '-translate-y-8 rotate-12' : ''}`}>
                <svg className="w-16 h-16 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Summary */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              The Difference After {years} Years
            </h4>
                         <div className="text-3xl font-bold text-green-600">
               $<AnimatedCounter end={estimatedEquity} duration={1500} /> in Your Pocket
             </div>
            <p className="text-gray-600 mt-2">
              That's the wealth you build by buying instead of renting.
            </p>
            
            <div className="mt-6">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center rounded-md bg-[#00659C] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#004d73] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00659C] transition-all transform hover:scale-105"
              >
                Start Building Equity Today →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 