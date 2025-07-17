'use client';

import { useEffect, useRef, useState } from 'react';
import AnimatedCounter from './AnimatedCounter';

interface StatItem {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  description?: string;
  icon?: React.ReactNode;
}

interface AnimatedStatsProps {
  stats: StatItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function AnimatedStats({ 
  stats, 
  title,
  subtitle,
  className = '' 
}: AnimatedStatsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

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
    <div ref={elementRef} className={`py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mx-auto max-w-2xl text-center mb-12">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg text-gray-600">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className={`mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:gap-8 ${
          stats.length === 2 ? 'md:grid-cols-2' : 
          stats.length === 3 ? 'md:grid-cols-3' : 
          stats.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' :
          'md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center border border-gray-100 hover:shadow-xl transition-all duration-300 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              {stat.icon && (
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#00659C] to-[#004d73] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
              )}
              
              <div className="mb-4">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    duration={1200 + (index * 100)}
                  />
                </div>
                <div className="text-base sm:text-lg lg:text-xl font-semibold text-[#00659C] mb-2 leading-tight">
                  {stat.label}
                </div>
                {stat.description && (
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight">
                    {stat.description}
                  </p>
                )}
              </div>

              {/* Animated progress bar */}
              <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`absolute left-0 top-0 h-full bg-gradient-to-r from-[#00659C] to-[#004d73] transition-all duration-2000 ease-out ${
                    isVisible ? 'w-full' : 'w-0'
                  }`}
                  style={{
                    transitionDelay: `${(index * 200) + 500}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 