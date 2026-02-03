import { Phone, Mail, Calendar } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { contactInfo, studioUpdates } from '@/lib/constants/studio-updates'

export function StudioUpdates() {
  const activeUpdates = studioUpdates.filter((update) => update.isActive).slice(0, 3)

  return (
    <Card className="shadow-lg">
      <CardHeader className="border-b border-gray-100">
        <CardTitle className="font-playfair text-2xl text-gray-900">
          Studio Updates
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        {/* Contact Information */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-gray-700">
            <Phone className="w-5 h-5 text-studio-pink-400" />
            <a
              href={`tel:${contactInfo.phone}`}
              className="hover:text-studio-purple-400 transition-colors"
            >
              {contactInfo.phone}
            </a>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Mail className="w-5 h-5 text-studio-pink-400" />
            <a
              href={`mailto:${contactInfo.email}`}
              className="hover:text-studio-purple-400 transition-colors"
            >
              {contactInfo.email}
            </a>
          </div>
        </div>

        {/* Updates */}
        {activeUpdates.length > 0 && (
          <>
            <div className="border-t border-gray-100 pt-6">
              <h3 className="font-semibold text-gray-900 mb-4">Recent Announcements</h3>
              <div className="space-y-4">
                {activeUpdates.map((update) => (
                  <div key={update.id} className="space-y-1">
                    <div className="flex items-start gap-2">
                      <Calendar className="w-4 h-4 text-studio-purple-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900 text-sm">
                          {update.title}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {update.message}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(update.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Newsletter Link */}
        <div className="border-t border-gray-100 pt-6">
          <Link
            href="/newsletter"
            className="text-studio-purple-400 hover:text-studio-purple-500 font-medium text-sm transition-colors inline-flex items-center gap-1"
          >
            Subscribe to our newsletter
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
