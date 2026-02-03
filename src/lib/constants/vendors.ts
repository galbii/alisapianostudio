export interface Vendor {
  id: string
  name: string
  logo: string
  type: 'charter-school' | 'partner'
}

export const vendors: Vendor[] = [
  {
    id: 'sky-mountain',
    name: 'Sky Mountain Charter',
    logo: '/images/vendors/sky-mountain-logo.png',
    type: 'charter-school',
  },
  {
    id: 'gorman',
    name: 'Gorman Learning Center',
    logo: '/images/vendors/gorman-logo.png',
    type: 'charter-school',
  },
  {
    id: 'blue-ridge',
    name: 'Blue Ridge Academy',
    logo: '/images/vendors/blue-ridge-logo.png',
    type: 'charter-school',
  },
  {
    id: 'sage-oak',
    name: 'Sage Oak',
    logo: '/images/vendors/sage-oak-logo.png',
    type: 'charter-school',
  },
  {
    id: 'granite-mountain',
    name: 'Granite Mountain',
    logo: '/images/vendors/granite-mountain-logo.png',
    type: 'charter-school',
  },
]
