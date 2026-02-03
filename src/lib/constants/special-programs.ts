export interface SpecialProgram {
  id: string
  title: string
  description: string
  badge?: string
  features?: string[]
}

export const specialPrograms: SpecialProgram[] = [
  {
    id: 'certificate-of-merit',
    title: 'Certificate of Merit',
    description:
      'Our students consistently achieve excellence in the MTAC Certificate of Merit program, a comprehensive evaluation system that assesses technique, repertoire, and musicianship. We proudly maintain a 100% pass rate.',
    badge: '100% Pass Rate',
    features: [
      'Structured curriculum aligned with CM standards',
      'Comprehensive exam preparation',
      'Theory and technique mastery',
      'Performance evaluation experience',
      'Professional adjudication feedback',
    ],
  },
  {
    id: 'monthly-studio-classes',
    title: 'Monthly Studio Classes',
    description:
      'Regular performance opportunities in a supportive, encouraging environment. Students develop stage presence, learn from peers, and celebrate musical achievements together.',
    features: [
      'Low-pressure performance practice',
      'Peer learning and inspiration',
      'Building performance confidence',
      'Community building',
      'Constructive feedback',
    ],
  },
  {
    id: 'wine-and-piano',
    title: 'Wine & Piano',
    description:
      'An elegant evening event exclusively for adult students. Enjoy fine wine while sharing your musical journey with fellow music enthusiasts in a sophisticated, relaxed atmosphere.',
    features: [
      'Adult-only performance event',
      'Complimentary wine and refreshments',
      'Social networking with fellow musicians',
      'Elegant venue setting',
      'Quarterly gatherings',
    ],
  },
  {
    id: 'red-carpet-recital',
    title: 'Red Carpet Recital',
    description:
      'Our signature annual event where students shine like stars. Complete with professional photography, red carpet entrance, and elegant reception, this recital celebrates a year of dedication and achievement.',
    features: [
      'Professional photography',
      'Red carpet entrance',
      'Elegant venue',
      'Reception with refreshments',
      'Commemorative program',
    ],
  },
]
