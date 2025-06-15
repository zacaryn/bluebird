import MortgageCalculator from '@/components/MortgageCalculator'
import Image from 'next/image'

export const metadata = {
  title: 'Mortgage Calculator | Bluebird Mortgage',
  description: 'Calculate your estimated monthly mortgage payments with our easy-to-use mortgage calculator.',
}

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-[#00659C]">
        <div className="absolute inset-0 h-full w-full">
          <Image
            src="/images/calculate.jpg"
            alt="Mortgage Calculator"
            width={1920}
            height={300}
            className="h-full w-full object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-[#00659C]/70" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Mortgage Calculator
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Get a quick estimate of your monthly mortgage payment
          </p>
        </div>
      </div>

      {/* Calculator section */}
      <div className="flex-1 flex flex-col">
        <div className="mx-auto max-w-2xl w-full py-8 px-6">
          <MortgageCalculator />
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>
              This calculator provides estimates only. Contact us for a personalized quote.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 