export interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
}

export const navigation: NavigationItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'What We Offer',
    href: '/what-we-offer',
    children: [
      { label: 'Wine & Piano', href: '/wine-and-piano' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]
