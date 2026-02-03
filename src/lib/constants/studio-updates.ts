export interface StudioUpdate {
  id: string
  date: string
  title: string
  message: string
  type: 'info' | 'event' | 'announcement' | 'holiday'
  isActive: boolean
}

export interface ContactInfo {
  phone: string
  email: string
  address: {
    victorville: string
    glendale: string
  }
}

export const contactInfo: ContactInfo = {
  phone: '760-843-3221',
  email: 'info@alisapianostudio.com',
  address: {
    victorville: 'Victorville, CA',
    glendale: 'Glendale, CA',
  },
}

// Studio updates - this can be managed via CMS in production
export const studioUpdates: StudioUpdate[] = [
  {
    id: 'welcome-2026',
    date: '2026-01-01',
    title: 'Happy New Year!',
    message:
      'Welcome to 2026! We are excited to continue making music together. Spring enrollment is now open for new students.',
    type: 'announcement',
    isActive: true,
  },
  {
    id: 'red-carpet-recital-2026',
    date: '2026-05-15',
    title: 'Red Carpet Recital',
    message:
      'Save the date for our annual Red Carpet Recital! Students will showcase their year of dedication and achievement in an elegant celebration.',
    type: 'event',
    isActive: true,
  },
  {
    id: 'wine-piano-spring',
    date: '2026-03-20',
    title: 'Wine & Piano - Spring Edition',
    message:
      'Adult students are invited to our Spring Wine & Piano event. An evening of music, fine wine, and great company awaits.',
    type: 'event',
    isActive: true,
  },
]
