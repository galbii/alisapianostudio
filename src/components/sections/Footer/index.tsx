import Link from 'next/link'
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react'
import { navigation } from '@/lib/constants/navigation'
import { socialLinks } from '@/lib/constants/social'
import { contactInfo } from '@/lib/constants/studio-updates'

export function Footer() {
  return (
    <footer className="bg-studio-cream-100 border-t border-studio-cream-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Studio Information */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl text-studio-purple-400 mb-4">
              Alisa&apos;s Piano Studio
            </h3>
            <p className="text-text-body text-sm leading-relaxed">
              Inspiring musical excellence through personalized instruction, creative expression, and a love for the piano.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2 text-text-body">
                <MapPin className="w-4 h-4 text-studio-pink-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p>{contactInfo.address.victorville}</p>
                  <p>{contactInfo.address.glendale}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-playfair text-xl text-gray-900 mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-text-body hover:text-studio-purple-400 transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="text-text-body hover:text-studio-purple-400 transition-colors text-sm"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-playfair text-xl text-gray-900 mb-4">
              Connect With Us
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-text-body">
                <Phone className="w-4 h-4 text-studio-pink-400 flex-shrink-0" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-studio-purple-400 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-text-body">
                <Mail className="w-4 h-4 text-studio-pink-400 flex-shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-studio-purple-400 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-4">
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white border border-studio-cream-200 flex items-center justify-center text-studio-purple-400 hover:bg-studio-pink-400 hover:text-white hover:border-studio-pink-400 hover:scale-110 transition-all duration-300 shadow-sm"
                    aria-label={social.label}
                  >
                    {social.platform === 'facebook' && <Facebook className="w-5 h-5" />}
                    {social.platform === 'instagram' && <Instagram className="w-5 h-5" />}
                    {social.platform === 'youtube' && <Youtube className="w-5 h-5" />}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-studio-cream-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-body">
            <p>
              &copy; 2026 Alisa&apos;s Piano Studio. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-studio-purple-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-studio-purple-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
