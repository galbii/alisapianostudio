import type { Metadata } from 'next'
import Link from 'next/link'
import { Button, Card, CardHeader, CardTitle, CardContent } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Wine & Piano | Alisa\'s Piano Studio',
  description:
    'Elegant evening experience combining fine wine and piano lessons. Perfect for date nights, friend outings, and special occasions. Group discounts available.',
  openGraph: {
    title: 'Wine & Piano | Alisa\'s Piano Studio',
    description:
      'Elegant evening experience combining fine wine and piano lessons. Perfect for date nights, friend outings, and special occasions. Group discounts available.',
    type: 'website',
  },
}

export default function WineAndPianoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white py-20 md:py-32 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-text-heading leading-tight tracking-heading">
              Wine <span className="text-studio-pink-400">&</span> Piano
            </h1>
            <p className="text-studio-pink-400 text-2xl md:text-3xl font-playfair italic">
              Wine, Music, and Magic!
            </p>
            <p className="text-xl md:text-2xl text-text-body leading-relaxed max-w-3xl mx-auto">
              An elegant evening experience that combines the sophistication of fine wine with
              the artistry of piano. Perfect for creating unforgettable memories.
            </p>
            <div className="pt-4 animate-fade-in-up-delay">
              <Button asChild variant="studio" size="lg" className="text-base px-8 py-6">
                <Link href="/contact">Book Your Experience</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="bg-studio-cream-100 py-16 md:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-text-body leading-relaxed text-center">
          <p>
            Looking for a night of elegance and melody? Our Wine & Piano experience is the
            perfect way to unwind, enjoy fine wine, and learn how to play beautiful piano
            music in a sophisticated setting.
          </p>

          <p>
            Whether you&apos;re planning a romantic evening, a memorable night out with
            friends, or a gift for someone special, we&apos;ve got you covered! This unique
            experience blends music education with entertainment.
          </p>

          <p>
            The more, the merrier—and the bigger the savings! Book for multiple guests and
            enjoy an exclusive discount. It&apos;s the perfect excuse to gather your favorite
            people for an evening of culture and connection.
          </p>

          <p>
            Reserve your seats now, and let the music take you away. Our experienced
            instructors will guide you through an evening you&apos;ll never forget, combining
            relaxation with the joy of musical discovery.
          </p>
        </div>
      </section>

      {/* Pricing & Details Section */}
      <section className="bg-white py-16 md:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl text-studio-purple-400 mb-4">
              Experience <span className="text-studio-pink-400">Details</span>
            </h2>
            <p className="text-lg text-text-body">
              Everything you need to know about your Wine & Piano evening
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* What's Included Card */}
            <Card className="bg-white border-studio-cream-200">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-studio-purple-400">
                  What&apos;s Included
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-text-body">
                  <li className="flex items-start gap-3">
                    <span className="text-studio-pink-400 mt-1">✓</span>
                    <span>Selection of premium wines paired with light refreshments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-studio-pink-400 mt-1">✓</span>
                    <span>
                      Personalized piano instruction in a relaxed, social atmosphere
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-studio-pink-400 mt-1">✓</span>
                    <span>
                      Learn to play a complete song during your session
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-studio-pink-400 mt-1">✓</span>
                    <span>Intimate studio setting for 2-8 participants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-studio-pink-400 mt-1">✓</span>
                    <span>All materials and sheet music provided</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Event Format Card */}
            <Card className="bg-white border-studio-cream-200">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-studio-purple-400">
                  Event Format
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-text-body">
                  <li>
                    <strong>Duration:</strong> 2-hour immersive experience
                  </li>
                  <li>
                    <strong>Schedule:</strong> Friday & Saturday evenings, 7:00 PM
                  </li>
                  <li>
                    <strong>Group Size:</strong> 2-8 participants per session
                  </li>
                  <li>
                    <strong>Experience Level:</strong> No prior piano experience required
                  </li>
                  <li>
                    <strong>Age Requirement:</strong> 21+ (wine included)
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Group Discount Info */}
          <div className="mt-12 bg-studio-cream-50 border-2 border-studio-pink-200 rounded-lg p-8 text-center">
            <h3 className="font-playfair text-3xl text-studio-purple-400 mb-4">
              Group Discounts <span className="text-studio-pink-400">Available</span>
            </h3>
            <p className="text-lg text-text-body mb-6 max-w-2xl mx-auto">
              Bring your friends and save! Groups of 4+ receive special pricing. The perfect way
              to celebrate birthdays, anniversaries, or just enjoy a unique night out together.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
              <div className="space-y-2">
                <p className="text-2xl font-bold text-studio-pink-400">2-3 Guests</p>
                <p className="text-text-body">Standard Rate</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-studio-pink-400">4-6 Guests</p>
                <p className="text-text-body">10% Discount</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-studio-pink-400">7-8 Guests</p>
                <p className="text-text-body">15% Discount</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-studio-cream-100 py-20 md:py-28 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-playfair text-4xl md:text-5xl text-studio-purple-400">
              Ready to Experience Wine <span className="text-studio-pink-400">& Piano?</span>
            </h2>
            <p className="text-lg text-text-body max-w-2xl mx-auto">
              For multiple participants, remember to add a promo code at checkout to receive your
              group discount. Spaces are limited, so reserve your evening of elegance today!
            </p>
          </div>
          <Button asChild variant="studio" size="lg" className="text-base px-8 py-6">
            <Link href="/contact">Book Your Experience</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
