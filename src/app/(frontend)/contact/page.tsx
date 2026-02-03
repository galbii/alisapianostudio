import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui'
import { contactInfo } from '@/lib/constants'
import { Mail, MapPin, Phone, Music, Award } from 'lucide-react'
import { ContactForm } from './_components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Alisa\'s Piano Studio',
  description:
    'Get in touch with Alisa\'s Piano Studio. Schedule your first lesson or ask questions about our music programs in Victorville and Glendale.',
  openGraph: {
    title: 'Contact Us | Alisa\'s Piano Studio',
    description:
      'Get in touch with Alisa\'s Piano Studio. Schedule your first lesson or ask questions about our music programs in Victorville and Glendale.',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section - Enhanced Branding */}
      <section className="relative bg-gradient-to-br from-studio-purple-50 via-white to-studio-pink-50 py-20 md:py-32 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Branding */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="text-studio-pink-400 text-lg font-medium tracking-wide uppercase">Contact Us</span>
                </div>
                <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-text-heading leading-tight tracking-heading">
                  Alisa&apos;s Piano Studio
                </h1>
                <div className="flex items-center gap-3 text-2xl md:text-3xl">
                  <div className="h-1 w-12 bg-studio-pink-400 rounded-full"></div>
                  <span className="font-playfair text-studio-purple-400 font-semibold">Glendale, CA</span>
                </div>
              </div>

              <div className="space-y-4 text-lg text-text-body">
                <p className="leading-relaxed">
                  Ready to start your musical journey? We&apos;d love to hear from you! Whether you have questions about our programs or want to schedule your first lesson, we&apos;re here to help.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                    <Music className="w-5 h-5 text-studio-purple-400" />
                    <span className="font-medium text-text-heading">MTAC Member</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                    <Award className="w-5 h-5 text-studio-purple-400" />
                    <span className="font-medium text-text-heading">26+ Years</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up-delay">
                <Button asChild variant="studio" size="lg" className="text-base px-8 py-6">
                  <a href={`tel:${contactInfo.phone}`}>
                    <Phone className="w-5 h-5 mr-2" />
                    Call Us Now
                  </a>
                </Button>
                <Button asChild variant="studioOutline" size="lg" className="text-base px-8 py-6">
                  <a href={`mailto:${contactInfo.email}`}>
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column - Quick Contact Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6 animate-fade-in-up-delay">
              <h2 className="font-playfair text-3xl text-studio-purple-400 mb-6">
                Quick <span className="text-studio-pink-400">Contact</span>
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-studio-cream-50 rounded-lg">
                  <div className="bg-studio-pink-100 p-3 rounded-lg flex-shrink-0">
                    <Phone className="h-6 w-6 text-studio-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-heading mb-1">Phone</h3>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-lg text-studio-purple-400 hover:text-studio-purple-500 font-medium"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-studio-cream-50 rounded-lg">
                  <div className="bg-studio-purple-100 p-3 rounded-lg flex-shrink-0">
                    <Mail className="h-6 w-6 text-studio-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-heading mb-1">Email</h3>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-lg text-studio-pink-400 hover:text-studio-pink-500 font-medium break-all"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-studio-cream-50 rounded-lg">
                  <div className="bg-studio-pink-100 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="h-6 w-6 text-studio-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-heading mb-1">Location</h3>
                    <p className="text-text-body">{contactInfo.address.glendale}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Glendale Only */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl text-studio-purple-400 mb-4">
              Visit Our <span className="text-studio-pink-400">Studio</span>
            </h2>
            <p className="text-lg text-text-body">
              Located in the heart of Glendale, California
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="aspect-[16/10] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52901.89292855825!2d-118.2970493!3d34.1425078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c02d4f41f1d1%3A0x7f1e6ff5b4b4b4b4!2sGlendale%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Alisa's Piano Studio - Glendale Location"
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-text-body text-lg">
                <MapPin className="inline-block w-5 h-5 text-studio-pink-400 mr-2" />
                {contactInfo.address.glendale}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-20 bg-studio-cream-100">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-card">
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl text-studio-purple-400 mb-2">
                  Contact <span className="text-studio-pink-400">Information</span>
                </h2>
                <p className="text-text-body">
                  Reach out to us directly through any of these channels.
                </p>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="bg-studio-pink-100 p-2 rounded-lg">
                    <Phone className="h-5 w-5 text-studio-pink-400" />
                  </div>
                  <h3 className="font-playfair text-xl text-text-heading">Phone</h3>
                </div>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="block text-lg text-studio-purple-400 hover:text-studio-purple-500 font-medium pl-11"
                >
                  {contactInfo.phone}
                </a>
                <p className="text-sm text-text-body pl-11">Monday - Friday, 9 AM - 6 PM</p>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="bg-studio-purple-100 p-2 rounded-lg">
                    <Mail className="h-5 w-5 text-studio-purple-400" />
                  </div>
                  <h3 className="font-playfair text-xl text-text-heading">Email</h3>
                </div>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="block text-lg text-studio-pink-400 hover:text-studio-pink-500 font-medium break-all pl-11"
                >
                  {contactInfo.email}
                </a>
                <p className="text-sm text-text-body pl-11">We&apos;ll respond within 24 hours</p>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="bg-studio-pink-100 p-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-studio-pink-400" />
                  </div>
                  <h3 className="font-playfair text-xl text-text-heading">Studio Location</h3>
                </div>
                <div className="pl-11">
                  <p className="text-text-body font-medium">{contactInfo.address.glendale}</p>
                  <p className="text-sm text-text-body mt-1">Serving Glendale and surrounding areas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 md:py-28 bg-studio-cream-100">
        <div className="container max-w-4xl text-center space-y-8">
          <h2 className="font-playfair text-4xl md:text-5xl text-studio-purple-400 leading-tight">
            We Look Forward to <span className="text-studio-pink-400">Hearing From You!</span>
          </h2>
          <p className="text-lg text-text-body max-w-2xl mx-auto">
            Whether you&apos;re a beginner taking your first steps in music or an experienced musician
            looking to refine your skills, we&apos;re excited to be part of your musical journey.
          </p>
          <Button asChild variant="studio" size="lg" className="text-base px-8 py-6">
            <Link href="/what-we-offer">Explore Our Programs</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
