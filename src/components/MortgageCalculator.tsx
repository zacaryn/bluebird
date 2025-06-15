'use client'

import { useState } from 'react'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'

interface FormData {
  homePrice: string
  downPayment: string
  interestRate: string
  loanTerm: string
}

interface TooltipProps {
  content: string
  children: React.ReactNode
}

function Tooltip({ content, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={() => setIsVisible(!isVisible)}
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute z-10 w-64 p-2 mt-1 text-sm text-white bg-gray-800 rounded-lg shadow-lg -translate-x-1/2 left-1/2">
          {content}
          <div className="absolute w-2 h-2 bg-gray-800 rotate-45 -top-1 left-1/2 transform -translate-x-1/2"></div>
        </div>
      )}
    </div>
  )
}

export default function MortgageCalculator() {
  const [formData, setFormData] = useState<FormData>({
    homePrice: '',
    downPayment: '',
    interestRate: '',
    loanTerm: '',
  })

  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [totalPayment, setTotalPayment] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)

  // Format number with commas for display
  const formatNumber = (value: string) => {
    const num = value.replace(/,/g, '')
    if (num && !isNaN(Number(num))) {
      return Number(num).toLocaleString()
    }
    return value
  }

  // Parse number removing commas
  const parseNumber = (value: string) => {
    return parseFloat(value.replace(/,/g, '')) || 0
  }

  const calculateMortgage = (e: React.FormEvent) => {
    e.preventDefault()
    const homePrice = parseNumber(formData.homePrice)
    const downPayment = parseNumber(formData.downPayment)
    const interestRate = parseNumber(formData.interestRate)
    const loanTerm = parseNumber(formData.loanTerm)
    
    if (homePrice <= 0 || downPayment < 0 || interestRate <= 0 || loanTerm <= 0) return
    
    const principal = homePrice * (1 - downPayment / 100)
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12
    const monthlyPayment = principal * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    const totalPayment = monthlyPayment * numberOfPayments
    const totalInterest = totalPayment - principal
    setMonthlyPayment(monthlyPayment)
    setTotalPayment(totalPayment)
    setTotalInterest(totalInterest)
  }

  const resetCalculator = () => {
    setFormData({
      homePrice: '',
      downPayment: '',
      interestRate: '',
      loanTerm: '',
    })
    setMonthlyPayment(0)
    setTotalPayment(0)
    setTotalInterest(0)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    
    // For home price, format with commas
    if (name === 'homePrice') {
      const cleanValue = value.replace(/[^\d]/g, '')
      setFormData(prev => ({
        ...prev,
        [name]: cleanValue ? Number(cleanValue).toLocaleString() : ''
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <form onSubmit={calculateMortgage} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <label htmlFor="homePrice" className="block text-sm font-medium text-gray-900">
                Home Price ($)
              </label>
              <Tooltip content="The total purchase price of the home you want to buy. This is typically the listing price or your offer amount.">
                <QuestionMarkCircleIcon className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help" />
              </Tooltip>
            </div>
            <input
              type="text"
              name="homePrice"
              id="homePrice"
              value={formData.homePrice}
              onChange={handleInputChange}
              placeholder="e.g. 300,000"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-gray-900 placeholder:text-gray-400 px-3.5 py-2 focus:border-[#00659C] focus:ring-[#00659C] sm:text-sm"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <label htmlFor="downPayment" className="block text-sm font-medium text-gray-900">
                Down Payment (%)
              </label>
              <Tooltip content="The percentage of the home price you'll pay upfront. Conventional loans typically require 5-20%, while FHA loans can be as low as 3.5%.">
                <QuestionMarkCircleIcon className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help" />
              </Tooltip>
            </div>
            <input
              type="number"
              name="downPayment"
              id="downPayment"
              value={formData.downPayment}
              onChange={handleInputChange}
              placeholder="e.g. 20"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-gray-900 placeholder:text-gray-400 px-3.5 py-2 focus:border-[#00659C] focus:ring-[#00659C] sm:text-sm"
              min="0"
              max="100"
              step="0.5"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <label htmlFor="interestRate" className="block text-sm font-medium text-gray-900">
                Interest Rate (%)
              </label>
              <Tooltip content="The annual interest rate for your mortgage. This varies based on your credit score, loan type, and current market rates. Check current rates or get pre-approved for an accurate rate.">
                <QuestionMarkCircleIcon className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help" />
              </Tooltip>
            </div>
            <input
              type="number"
              name="interestRate"
              id="interestRate"
              value={formData.interestRate}
              onChange={handleInputChange}
              placeholder="e.g. 6.5"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-gray-900 placeholder:text-gray-400 px-3.5 py-2 focus:border-[#00659C] focus:ring-[#00659C] sm:text-sm"
              min="0"
              max="100"
              step="0.125"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-900">
                Loan Term (years)
              </label>
              <Tooltip content="The length of time you'll take to pay off the mortgage. Most common terms are 15 or 30 years. Shorter terms mean higher monthly payments but less interest paid overall.">
                <QuestionMarkCircleIcon className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-help" />
              </Tooltip>
            </div>
            <input
              type="number"
              name="loanTerm"
              id="loanTerm"
              value={formData.loanTerm}
              onChange={handleInputChange}
              placeholder="e.g. 30"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-gray-900 placeholder:text-gray-400 px-3.5 py-2 focus:border-[#00659C] focus:ring-[#00659C] sm:text-sm"
              min="1"
              max="50"
              step="1"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 rounded-md bg-[#00659C] px-4 py-2 text-white shadow-sm hover:bg-[#005483] focus:outline-none focus:ring-2 focus:ring-[#00659C] focus:ring-offset-2 transition-colors duration-200"
          >
            Calculate
          </button>
          <button
            type="button"
            onClick={resetCalculator}
            className="rounded-md bg-gray-600 px-4 py-2 text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 transition-colors duration-200"
          >
            Reset
          </button>
        </div>
      </form>

      {monthlyPayment > 0 && (
        <div className="mt-8 space-y-4">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900">Monthly Payment</h3>
            <p className="text-3xl font-bold text-[#00659C] mt-2">
              ${monthlyPayment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>Total Payment: ${totalPayment.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              <p>Total Interest: ${totalInterest.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 