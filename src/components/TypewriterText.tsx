'use client';

import { useEffect, useRef, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
  delay?: number;
}

export default function TypewriterText({ 
  text, 
  speed = 50, 
  className = '',
  delay = 0 
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
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
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayText(text.slice(0, index + 1));
        index++;
        
        if (index >= text.length) {
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, text, speed, delay]);

  return (
    <span ref={elementRef} className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
} 