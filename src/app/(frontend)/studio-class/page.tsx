import type { Metadata } from 'next'
import Link from 'next/link'
import { TwoColumnHero } from '@/components/sections'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Button } from '@/components/ui'
import { Users, Calendar, Music, Trophy, Heart, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Monthly Studio Classes | Alisa\'s Piano Studio',
  description:
    'Build confidence through peer performance at our monthly Studio Classes. Supportive environment for students of all ages and levels to perform, learn, and grow together.',
  openGraph: {
    title: 'Monthly Studio Classes | Alisa\'s Piano Studio',
    description:
      'Build confidence through peer performance at our monthly Studio Classes. Supportive environment for students of all ages and levels.',
    type: 'website',
  },
}

export default function StudioClassPage() {
  return (
    <>
      {/* Hero Section */}
      <TwoColumnHero
        title="Monthly Studio Classes"
        accentText="Build confidence through peer performance."
        description="Our Studio Classes provide a supportive environment for students to perform for each other, share their progress, and build lasting musical friendships."
        ctaText="Join Studio Class"
        ctaHref="#signup"
        imageSrc="/images/studio-class-performance.jpg"
        imageAlt="Students performing at Studio Class at Alisa's Piano Studio"
      />

      {/* What is Studio Class? Section */}
      <section className="bg-white py-16 md:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-playfair text-4xl md:text-5xl text-studio-purple-400">
              What is <span className="text-studio-pink-400">Studio Class?</span>
            </h2>
            <p className="text-lg text-text-body max-w-3xl mx-auto">
              A monthly gathering where students come together to share their musical journey in a
              relaxed, supportive atmosphere
            </p>
          </div>

          <Card className="border-studio-purple/10">
            <CardContent className="p-8 md:p-10">
              <div className="space-y-6 text-text-body leading-relaxed">
                <p className="text-lg">
                  Studio Class is more than just a performance opportunity—it&apos;s a chance to be
                  part of a vibrant musical community. Each month, students of all ages and skill
                  levels gather to share their progress, celebrate achievements, and support one
                  another&apos;s musical growth.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <Music className="w-5 h-5 text-studio-pink-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-heading mb-1">
                          Monthly Performance Opportunities
                        </h4>
                        <p className="text-sm text-text-body">
                          Regular chances to share your progress in a low-pressure setting
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <Heart className="w-5 h-5 text-studio-pink-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-heading mb-1">
                          Supportive, Non-Competitive Environment
                        </h4>
                        <p className="text-sm text-text-body">
                          Encouragement and positive feedback from peers and teachers
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <Users className="w-5 h-5 text-studio-pink-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-heading mb-1">
                          All Ages and Skill Levels Welcome
                        </h4>
                        <p className="text-sm text-text-body">
                          From beginners to advanced students, everyone belongs
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <Star className="w-5 h-5 text-studio-pink-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-heading mb-1">
                          Learn from Watching Others
                        </h4>
                        <p className="text-sm text-text-body">
                          Gain inspiration and insights from fellow students&apos; performances
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-studio-cream/30 py-16 md:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-playfair text-4xl md:text-5xl text-studio-purple-400">
              Why Participate in <span className="text-studio-pink-400">Studio Class?</span>
            </h2>
            <p className="text-lg text-text-body max-w-3xl mx-auto">
              Studio Classes offer numerous benefits that accelerate your musical development and
              enrich your overall learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Performance Experience */}
            <Card className="border-studio-purple/10 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-studio-pink/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-studio-pink-400" />
                </div>
                <CardTitle className="text-xl font-playfair text-studio-purple-400">
                  Performance Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-text-body leading-relaxed">
                  Regular performance opportunities help you develop stage presence, manage
                  performance anxiety, and build comfort playing in front of an audience. Each
                  performance is a stepping stone to greater confidence.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Build Confidence */}
            <Card className="border-studio-purple/10 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-studio-pink/10 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-studio-pink-400" />
                </div>
                <CardTitle className="text-xl font-playfair text-studio-purple-400">
                  Build Confidence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-text-body leading-relaxed">
                  The supportive atmosphere allows you to take musical risks and grow. Receiving
                  positive feedback from peers and teachers builds self-assurance that extends
                  beyond music into all areas of life.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Community Building */}
            <Card className="border-studio-purple/10 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-studio-pink/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-studio-pink-400" />
                </div>
                <CardTitle className="text-xl font-playfair text-studio-purple-400">
                  Community Building
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-text-body leading-relaxed">
                  Connect with fellow students who share your passion for music. Form friendships,
                  exchange ideas, and become part of a vibrant musical community that celebrates
                  each other&apos;s successes.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Musical Growth */}
            <Card className="border-studio-purple/10 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-studio-pink/10 rounded-lg flex items-center justify-center mb-4">
                  <Music className="w-6 h-6 text-studio-pink-400" />
                </div>
                <CardTitle className="text-xl font-playfair text-studio-purple-400">
                  Musical Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-text-body leading-relaxed">
                  Learn from watching other students perform. Discover new pieces, observe different
                  interpretations, and gain insights into various musical styles. Exposure to peer
                  performances enriches your own musicianship.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Regular Feedback */}
            <Card className="border-studio-purple/10 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-studio-pink/10 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-studio-pink-400" />
                </div>
                <CardTitle className="text-xl font-playfair text-studio-purple-400">
                  Regular Feedback
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-text-body leading-relaxed">
                  Monthly participation means consistent performance practice and feedback.
                  Teachers provide constructive guidance to help you refine your technique,
                  interpretation, and stage presence throughout the year.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Achievement Milestones */}
            <Card className="border-studio-purple/10 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-studio-pink/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-studio-pink-400" />
                </div>
                <CardTitle className="text-xl font-playfair text-studio-purple-400">
                  Achievement Milestones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-text-body leading-relaxed">
                  Each Studio Class marks your progress and celebrates how far you&apos;ve come.
                  Track your growth month by month as you tackle new repertoire and achieve musical
                  goals in front of your supportive studio family.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Format & Schedule Section */}
      <section className="bg-white py-16 md:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-playfair text-4xl md:text-5xl text-studio-purple-400">
              Format & <span className="text-studio-pink-400">Schedule</span>
            </h2>
            <p className="text-lg text-text-body max-w-3xl mx-auto">
              Everything you need to know about participating in Studio Classes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Schedule Card */}
            <Card className="border-studio-purple/10">
              <CardHeader>
                <div className="w-12 h-12 bg-studio-pink/10 rounded-lg flex items-center justify-center mb-2">
                  <Calendar className="w-6 h-6 text-studio-pink-400" />
                </div>
                <CardTitle className="text-2xl font-playfair text-studio-purple-400">
                  When & Where
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-text-body">
                  <div>
                    <h4 className="font-semibold text-text-heading mb-2">Monthly Schedule</h4>
                    <p className="text-sm leading-relaxed">
                      Studio Classes are held once per month on select Saturdays. Dates are
                      announced at the beginning of each semester to allow you to plan ahead.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-heading mb-2">Duration</h4>
                    <p className="text-sm leading-relaxed">
                      Each session typically lasts 60-90 minutes, depending on the number of
                      participants. We ensure everyone has time to perform and receive feedback.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-heading mb-2">Locations</h4>
                    <p className="text-sm leading-relaxed">
                      Classes are held at our Glendale and Victorville studios. Choose the location
                      that works best for you, or alternate between both throughout the year.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Format Card */}
            <Card className="border-studio-purple/10">
              <CardHeader>
                <div className="w-12 h-12 bg-studio-pink/10 rounded-lg flex items-center justify-center mb-2">
                  <Music className="w-6 h-6 text-studio-pink-400" />
                </div>
                <CardTitle className="text-2xl font-playfair text-studio-purple-400">
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-text-body">
                  <div>
                    <h4 className="font-semibold text-text-heading mb-2">Performance Portion</h4>
                    <p className="text-sm leading-relaxed">
                      Each student performs one or two pieces they&apos;ve been working on. Pieces
                      can be at any stage—works in progress are welcome! The focus is on progress,
                      not perfection.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-heading mb-2">Group Activities</h4>
                    <p className="text-sm leading-relaxed">
                      We often include musical games, theory activities, or group discussions to
                      make learning fun and interactive. These activities help build musicianship
                      skills beyond performance.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-heading mb-2">All Levels Welcome</h4>
                    <p className="text-sm leading-relaxed">
                      From absolute beginners to advanced students, everyone is encouraged to
                      participate. Mixed levels create a rich learning environment where students
                      inspire each other.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <Card className="border-studio-purple/10 mt-8">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl text-studio-purple-400 mb-4">
                First Time Attending?
              </h3>
              <p className="text-text-body leading-relaxed mb-4">
                If you&apos;re new to Studio Classes, don&apos;t worry! Your teacher will help you
                prepare and let you know what to expect. You can start by simply attending to watch
                and get comfortable before performing. When you&apos;re ready to perform,
                you&apos;ll have plenty of support and encouragement.
              </p>
              <p className="text-text-body leading-relaxed">
                Parents are welcome and encouraged to attend and support their children. It&apos;s
                a wonderful opportunity to see your child&apos;s progress and connect with other
                studio families.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section (Optional - placeholder for future content) */}
      <section className="bg-studio-cream/30 py-16 md:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-playfair text-4xl md:text-5xl text-studio-purple-400">
              Student & Parent <span className="text-studio-pink-400">Experiences</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <Card className="border-studio-purple/10">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-studio-pink text-studio-pink-400" />
                  ))}
                </div>
                <p className="text-text-body leading-relaxed italic mb-4">
                  &quot;Studio Classes have been instrumental in building my daughter&apos;s
                  confidence. She used to be so shy about performing, but now she looks forward to
                  sharing her music every month. The supportive environment has made all the
                  difference.&quot;
                </p>
                <p className="text-sm text-text-body font-semibold">
                  — Parent of elementary student
                </p>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="border-studio-purple/10">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-studio-pink text-studio-pink-400" />
                  ))}
                </div>
                <p className="text-text-body leading-relaxed italic mb-4">
                  &quot;I love watching other students perform. It gives me ideas for new pieces to
                  learn and helps me see different ways to interpret music. Plus, I&apos;ve made
                  some great friends who love music as much as I do!&quot;
                </p>
                <p className="text-sm text-text-body font-semibold">— High school student</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sign-up CTA Section */}
      <section id="signup" className="bg-white py-16 md:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-studio-pink/10 rounded-full flex items-center justify-center mx-auto">
              <Users className="w-8 h-8 text-studio-pink-400" />
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl text-studio-purple-400">
              Ready to Join Our <span className="text-studio-pink-400">Musical Community?</span>
            </h2>
            <p className="text-lg text-text-body leading-relaxed max-w-2xl mx-auto">
              Studio Classes are open to all current students at Alisa&apos;s Piano Studio. Talk to
              your teacher about attending the next session, or reach out to us with any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild variant="studio" size="lg">
                <Link href="/contact">Sign Up for Studio Class</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us with Questions</Link>
              </Button>
            </div>
            <p className="text-sm text-text-body pt-2">
              Not yet a student?{' '}
              <Link href="/what-we-offer" className="text-studio-pink-400 hover:underline">
                Learn about our lessons
              </Link>{' '}
              and join our studio family today!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
