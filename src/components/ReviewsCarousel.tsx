'use client'

import { useState, useEffect, useCallback } from 'react'

interface Review {
  name: string
  text: string
  rating: number
  source?: string
}

interface ReviewsCarouselProps {
  reviews: Review[]
}

export default function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)
  
  // Mobile: show 1 at a time, so max slide is reviews.length - 1
  // Desktop: show 3 at a time, so max slide is reviews.length - 3
  const mobileMaxSlide = reviews.length - 1
  const desktopMaxSlide = Math.max(0, reviews.length - 3)

  // Handle responsive detection
  useEffect(() => {
    const handleResize = () => {
      const newIsDesktop = window.innerWidth >= 768
      setIsDesktop(newIsDesktop)
      
      // Reset slide if switching between mobile/desktop and current slide is out of bounds
      const maxSlide = newIsDesktop ? desktopMaxSlide : mobileMaxSlide
      setCurrentSlide(prev => prev > maxSlide ? 0 : prev)
    }

    handleResize() // Initial check
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [mobileMaxSlide, desktopMaxSlide])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const maxSlide = isDesktop ? desktopMaxSlide : mobileMaxSlide
      return prev === maxSlide ? 0 : prev + 1
    })
  }, [isDesktop, mobileMaxSlide, desktopMaxSlide])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => {
      const maxSlide = isDesktop ? desktopMaxSlide : mobileMaxSlide
      return prev === 0 ? maxSlide : prev - 1
    })
  }, [isDesktop, mobileMaxSlide, desktopMaxSlide])

  const goToSlide = (index: number) => {
    const maxSlide = isDesktop ? desktopMaxSlide : mobileMaxSlide
    if (index <= maxSlide) {
      setCurrentSlide(index)
    }
  }

  // Auto-advance carousel every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="mx-auto mt-10 max-w-6xl">
      <div className="relative">
        {/* Reviews Carousel */}
        <div className="overflow-hidden py-6">
          {/* Mobile View - 1 review at a time */}
          <div className="md:hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-lg ring-1 ring-gray-300 border border-gray-200 p-6 h-full flex flex-col hover:shadow-xl transition-shadow duration-200">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-gray-700 leading-relaxed mb-4 flex-grow text-sm">
                      "{review.text}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-[#00659C] rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-xs">
                            {review.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                        <p className="text-xs text-gray-500">{review.source || 'Google Review'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop View - 3 reviews visible, advance 1 at a time */}
          <div className="hidden md:block">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-3">
                  <div className="bg-white rounded-xl shadow-lg ring-1 ring-gray-300 border border-gray-200 p-6 h-full flex flex-col hover:shadow-xl transition-shadow duration-200">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-gray-700 leading-relaxed mb-4 flex-grow text-sm">
                      "{review.text}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-[#00659C] rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-xs">
                            {review.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                        <p className="text-xs text-gray-500">{review.source || 'Google Review'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg ring-1 ring-gray-200 hover:bg-gray-50 transition-colors"
          aria-label="Previous reviews"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg ring-1 ring-gray-200 hover:bg-gray-50 transition-colors"
          aria-label="Next reviews"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {/* Mobile dots - one for each review */}
        <div className="md:hidden flex space-x-2">
          {Array.from({ length: reviews.length }, (_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-[#00659C]' : 'bg-gray-300'
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Desktop dots - one for each valid slide position */}
        <div className="hidden md:flex space-x-2">
          {Array.from({ length: desktopMaxSlide + 1 }, (_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-[#00659C]' : 'bg-gray-300'
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to review set ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 