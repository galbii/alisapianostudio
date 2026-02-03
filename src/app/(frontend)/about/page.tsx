import type { Metadata } from 'next'
import Link from 'next/link'
import { VendorsSection } from '@/components/sections'
import { TeamGrid, StudioStory } from '@/components/features/team'
import { Button } from '@/components/ui'

export const metadata: Metadata = {
  title: 'About Us | Alisa\'s Piano Studio',
  description:
    'Family-owned piano studio in Glendale since 1998. MTAC member with 26+ years of excellence and 100% Certificate of Merit pass rate.',
  openGraph: {
    title: 'About Us | Alisa\'s Piano Studio',
    description:
      'Family-owned piano studio in Glendale since 1998. MTAC member with 26+ years of excellence and 100% Certificate of Merit pass rate.',
    type: 'website',
  },
}

export default function LearnMorePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white py-20 md:py-32 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-text-heading leading-tight tracking-heading">
              About <span className="text-studio-pink-400">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-body leading-relaxed max-w-3xl mx-auto">
              Welcome to Alisa&apos;s Piano Studio, where the joy of music comes alive! A family-owned and operated business nurturing musical talent for over 26 years.
            </p>
            <div className="pt-4 animate-fade-in-up-delay">
              <Button asChild variant="studio" size="lg" className="text-base px-8 py-6">
                <Link href="/contact">Start Your Journey</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Story Section */}
      <StudioStory />

      {/* Meet the Team Section */}
      <section className="bg-white">
        <TeamGrid heading="Meet Our Instructors" />
      </section>

      {/* Values & Philosophy Section */}
      <section className="py-16 md:py-20 bg-studio-cream-100">
        <div className="container max-w-4xl">
          <h2 className="font-playfair text-4xl md:text-5xl text-studio-purple-400 text-center mb-12">
            Our Teaching <span className="text-studio-pink-400">Philosophy</span>
          </h2>

          <div className="space-y-8 text-lg text-text-body leading-relaxed">
            <div>
              <h3 className="font-playfair text-2xl text-studio-pink-400 mb-3">
                Personalized Instruction
              </h3>
              <p>
                We understand that every student is unique, with their own learning style, pace, and
                musical interests. Our instructors take the time to get to know each student
                personally, tailoring lessons to match their individual goals and abilities. Whether
                you&apos;re learning for fun, preparing for performances, or working toward Certificate
                of Merit evaluations, we create a customized path that helps you succeed.
              </p>
            </div>

            <div>
              <h3 className="font-playfair text-2xl text-studio-purple-400 mb-3">
                Encouraging Environment
              </h3>
              <p>
                Learning an instrument should be rewarding and enjoyable. We create a warm,
                supportive atmosphere where students feel comfortable taking risks, making mistakes,
                and growing from them. Our patient, positive approach builds confidence and fosters
                a genuine love for music that lasts a lifetime.
              </p>
            </div>

            <div>
              <h3 className="font-playfair text-2xl text-studio-pink-400 mb-3">
                Passion Meets Proficiency
              </h3>
              <p>
                We believe in balancing technical excellence with musical passion. While we maintain
                rigorous standards and prepare students thoroughly for evaluations and performances,
                we never lose sight of what matters most: the love of music. Our instructors bring
                energy and inspiration to every lesson, ensuring students develop both strong skills
                and lasting musical appreciation.
              </p>
            </div>

            <div>
              <h3 className="font-playfair text-2xl text-studio-purple-400 mb-3">
                All Ages Welcome
              </h3>
              <p>
                From young beginners starting at age 3 to adult learners pursuing a lifelong dream,
                we welcome students of all ages and experience levels. Our instructors have
                expertise in age-appropriate teaching methods, ensuring that each student receives
                instruction that matches their developmental stage and learning needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vendors Section */}
      <VendorsSection />

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-4xl text-center space-y-8">
          <h2 className="font-playfair text-4xl md:text-5xl text-studio-purple-400 leading-tight">
            Ready to Unlock Your Musical <span className="text-studio-pink-400">Potential?</span>
          </h2>
          <p className="text-lg text-text-body max-w-2xl mx-auto">
            Join our community of passionate musicians and experience the difference that
            personalized, professional instruction can make. Whether you&apos;re beginning your
            musical journey or looking to advance your skills, we&apos;re here to guide you every
            step of the way.
          </p>
          <div className="pt-4">
            <Button asChild variant="studio" size="lg" className="text-base px-8 py-6">
              <Link href="/contact">Book Your First Lesson</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
