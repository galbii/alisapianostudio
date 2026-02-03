import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { VendorsSection } from '@/components/sections'
import { LessonCard, SpecialProgramsGrid } from '@/components/features/lessons'
import { Button } from '@/components/ui'
import { lessons } from '@/lib/constants/lessons'
import { Award, Music } from 'lucide-react'

export const metadata: Metadata = {
  title: "Piano Teachers Glendale CA | Alisa's Piano Studio",
  description:
    'Expert piano teachers in Glendale, CA with 26+ years of excellence. Our music school offers professional piano instruction. MTAC member, 100% CM pass rate.',
  openGraph: {
    title: "Piano Teachers Glendale CA | Alisa's Piano Studio",
    description:
      'Expert piano teachers in Glendale, CA with 26+ years of excellence. Our music school offers professional piano instruction. MTAC member, 100% CM pass rate.',
    type: 'website',
  },
}

export default function HomePage() {
  // Only show piano lesson on homepage
  const pianoLesson = lessons.filter((lesson) => lesson.id === 'piano')

  return (
    <>
      {/* Simplified Elegant Hero Section */}
      <section className="relative bg-white py-20 md:py-32 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Hero Content */}
            <div className="space-y-8 animate-fade-in-up">
              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-text-heading leading-tight tracking-heading">
                  Alisa&apos;s Piano Studio <span className="text-studio-pink-400">|</span> <span className="text-studio-purple-400">Glendale</span>
                </h1>

                <p className="text-xl md:text-2xl text-text-body leading-relaxed">
                  Nurturing musical talent for over 26 years through expert piano instruction and professional guidance in a warm, supportive environment.
                </p>
              </div>

              {/* Credentials */}
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-text-body">
                  <Music className="w-5 h-5 text-studio-purple-400" />
                  <span className="font-medium">MTAC Member</span>
                </div>
                <div className="flex items-center gap-2 text-text-body">
                  <Award className="w-5 h-5 text-studio-purple-400" />
                  <span className="font-medium">26+ Years Experience</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4 animate-fade-in-up-delay">
                <Button asChild variant="studio" size="lg" className="text-base px-8 py-6">
                  <Link href="/contact">Start Piano Lessons Today</Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in-up-delay">
              <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/hero-student-piano.jpg"
                  alt="Student learning piano at Alisa's Piano Studio in Glendale"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-studio-cream-100 py-16 md:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="font-playfair text-4xl md:text-5xl text-studio-purple-400">
                About <span className="text-studio-pink-400">Us</span>
              </h2>
              <div className="space-y-4 text-text-body text-lg leading-relaxed">
                <p>
                  Alisa&apos;s Piano Studio has been a premier music school in Glendale, CA
                  for over 26 years, providing expert piano instruction for students of all ages. Founded by Alisa Kasparyan, our studio is built on a
                  foundation of excellence, dedication, and a genuine love for music education.
                </p>
                <p>
                  As a proud member of the Music Teachers Association of California (MTAC), we
                  maintain the highest standards of instruction. Our 100% Certificate of Merit
                  pass rate speaks to our commitment to student success.
                </p>
                <p>
                  Whether you&apos;re taking your first steps in piano or advancing your
                  skills, our experienced piano teachers provide personalized, private instruction in a warm,
                  supportive environment.
                </p>
              </div>
              <div className="pt-4">
                <Button asChild variant="studioOutline" size="lg">
                  <Link href="/about">Meet Our Piano Teachers</Link>
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about-instructor.jpg"
                alt="Professional piano teachers providing music instruction at Alisa's Piano Studio in Glendale"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vendors Section */}
      <VendorsSection className="bg-white" />

      {/* Piano Lessons Section */}
      <section className="bg-studio-cream-100 py-16 md:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-playfair text-4xl md:text-5xl text-studio-purple-400">
              Piano <span className="text-studio-pink-400">Lessons</span>
            </h2>
            <p className="text-lg text-text-body max-w-2xl mx-auto">
              Professional piano instruction personalized for students of all ages and skill levels, from beginner to advanced piano training
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            {pianoLesson.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="studio" size="lg">
              <Link href="/what-we-offer">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Special Programs Section */}
      <SpecialProgramsGrid
        heading="Special Programs"
        description="Enhance your musical journey with our specialized programs designed to challenge and inspire"
        className="bg-white"
      />

      {/* Schema.org Structured Data for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MusicSchool',
            name: "Alisa's Piano Studio",
            description:
              'Professional piano teachers in Glendale, CA offering expert music instruction',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Glendale',
              addressRegion: 'CA',
              addressCountry: 'US',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '34.1425',
              longitude: '-118.2551',
            },
            url: 'https://alisaspianostudio.com',
            telephone: '760-843-3221',
            priceRange: '$$',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5.0',
              reviewCount: '26',
            },
            memberOf: {
              '@type': 'Organization',
              name: 'Music Teachers Association of California',
            },
          }),
        }}
      />
    </>
  )
}
