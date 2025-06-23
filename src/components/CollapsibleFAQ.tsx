'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface CollapsibleFAQProps {
  title: string
  subtitle?: string
  faqs: FAQItem[]
  defaultExpanded?: boolean
  className?: string
}

export default function CollapsibleFAQ({ 
  title, 
  subtitle, 
  faqs, 
  defaultExpanded = false,
  className = ''
}: CollapsibleFAQProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set())

  const toggleFAQ = () => {
    setIsExpanded(!isExpanded)
  }

  const toggleItem = (index: number) => {
    const newExpanded = new Set(expandedItems)
    if (expandedItems.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedItems(newExpanded)
  }

  return (
    <div className={`bg-gray-50 py-16 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <button
            onClick={toggleFAQ}
            className="group relative w-full focus:outline-none focus:ring-2 focus:ring-[#00659C] focus:ring-offset-2 rounded-lg p-2"
            aria-expanded={isExpanded}
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#00659C] transition-colors">
                {title}
              </h2>
              {subtitle && (
                <p className="text-lg text-gray-600 mb-4">
                  {subtitle}
                </p>
              )}
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex-shrink-0">
              <svg
                className={`w-6 h-6 text-gray-500 group-hover:text-[#00659C] transition-all duration-200 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
        </div>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-[#00659C] focus:ring-offset-2 rounded-lg"
                  aria-expanded={expandedItems.has(index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                          expandedItems.has(index) ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                <div
                  className={`transition-all duration-200 ease-in-out overflow-hidden ${
                    expandedItems.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-700">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 