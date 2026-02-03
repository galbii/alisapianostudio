import type { Metadata } from 'next'
import Link from 'next/link'
import { LessonsGrid } from '@/components/features/lessons/LessonsGrid'
import { SpecialProgramsGrid } from '@/components/features/lessons/SpecialProgramsGrid'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Music Lessons | Alisa\'s Piano Studio',
  description: 'Private piano, guitar, and vocal lessons in Glendale, CA. MTAC member with 100% Certificate of Merit pass rate. Ages 3 and up.',
  openGraph: {
    title: 'Music Lessons | Alisa\'s Piano Studio',
    description: 'Private piano, guitar, and vocal lessons in Glendale, CA. MTAC member with 100% Certificate of Merit pass rate. Ages 3 and up.',
    type: 'website',
  },
}

export default function WhatWeOfferPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white py-20 md:py-32 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-text-heading leading-tight tracking-heading">
              What We <span className="text-studio-pink-400">Offer</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-body leading-relaxed max-w-3xl mx-auto">
              From private piano lessons to group experiences, discover our comprehensive music education programs designed to inspire, challenge, and nurture every student&apos;s musical journey.
            </p>
            <div className="pt-4 animate-fade-in-up-delay">
              <Button asChild variant="studio" size="lg" className="text-base px-8 py-6">
                <Link href="/contact">Schedule a Lesson</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

        {/* Private Lessons Section */}
        <LessonsGrid
          heading="Private Lessons"
          description="Personalized one-on-one instruction tailored to each student's goals, learning style, and musical interests."
        />

        {/* Special Programs Section */}
        <SpecialProgramsGrid
          heading="Special Programs"
          description="Beyond individual lessons, we offer unique opportunities for performance, community, and musical growth."
        />

      {/* Charter School Program Section */}
      <section className="py-16 md:py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-playfair text-4xl md:text-5xl text-studio-purple-400">
              Charter School <span className="text-studio-pink-400">Vendor Program</span>
            </h2>
            <p className="text-lg text-text-body">
              We are approved vendors for multiple charter schools in California, making quality music education accessible through your educational funds.
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-4 text-center">
              <p className="text-lg text-text-body leading-relaxed">
                We partner with charter schools to provide high-quality music instruction that meets educational standards while nurturing creativity and artistic expression.
              </p>
            </div>

            <div className="bg-studio-cream-50 rounded-lg p-8 space-y-6">
              <div>
                <h3 className="font-playfair text-2xl text-studio-purple-400 mb-4 text-center">
                  Approved Charter Schools
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Sky Mountain Charter School',
                    'Gorman Learning Center',
                    'Blue Ridge Academy',
                    'Sage Oak Charter School',
                    'Granite Mountain Charter School',
                  ].map((school) => (
                    <div
                      key={school}
                      className="text-text-body text-center"
                    >
                      {school}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-studio-cream-200 pt-6">
                <p className="text-text-body text-center mb-6">
                  Contact us to discuss your charter school enrollment. We&apos;ll guide you through the simple process of setting up lessons using your educational funds.
                </p>
                <div className="text-center">
                  <Button asChild variant="studio" size="lg">
                    <Link href="/contact">Get Started Today</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 px-4 md:px-6 lg:px-8 bg-studio-cream-100">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-playfair text-4xl md:text-5xl text-studio-purple-400">
              Ready to Start Your Musical <span className="text-studio-pink-400">Journey?</span>
            </h2>
            <p className="text-lg text-text-body max-w-2xl mx-auto">
              Whether you&apos;re just beginning or looking to advance your skills, we have the perfect program for you. Join our community of passionate musicians today.
            </p>
          </div>
          <Button asChild variant="studio" size="lg" className="text-base px-8 py-6">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
