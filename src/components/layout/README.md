# Layout Components

Complete header system for Alisa's Piano Studio website with announcement bar, navigation, and mobile menu.

## Components Overview

### AnnouncementBar
Pink promotional bar displayed at the very top of the page.

**Features:**
- Pink background (studio-pink-400)
- White text, centered
- Links to Wine & Piano event page
- Responsive text sizing

**Usage:**
```tsx
import { AnnouncementBar } from '@/components/layout'

export default function Layout({ children }) {
  return (
    <>
      <AnnouncementBar />
      {/* Rest of layout */}
    </>
  )
}
```

### Header
Main navigation header with logo, desktop navigation, social icons, and mobile menu.

**Features:**
- Sticky positioning at top of page
- White background with subtle shadow
- Logo with piano icon (serif font)
- Desktop navigation with hover effects and underline animations
- Social media icons (Facebook, Instagram, YouTube)
- Responsive mobile menu
- Clean, elegant design matching studio aesthetic

**Usage:**
```tsx
import { Header } from '@/components/layout'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
```

**Combined Usage:**
```tsx
import { AnnouncementBar, Header } from '@/components/layout'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
```

## Subcomponents

### Header/Logo
Logo component with piano icon and studio name.

**Props:** None

**Features:**
- Serif font (Playfair Display)
- Pink piano icon with hover scale effect
- Links to homepage
- Responsive text sizing

### Header/Navigation
Desktop navigation menu with smooth underline animations.

**Props:** None

**Features:**
- Uses navigation data from `@/lib/constants/navigation`
- Active page highlighting
- Smooth underline animation on hover
- Pink accent color matching brand
- Hidden on mobile (lg breakpoint)

### Header/SocialIcons
Social media icon links.

**Props:** None

**Features:**
- Facebook, Instagram, YouTube icons
- Opens links in new tab
- Hover effects (scale + color change)
- Hidden on mobile (lg breakpoint)

### Header/MobileMenu
Slide-in mobile navigation menu.

**Props:** None

**Features:**
- Hamburger menu button
- Smooth slide-in animation from right
- Overlay backdrop with blur
- Stacked vertical navigation
- Social icons at bottom
- Active page highlighting
- Prevents body scroll when open
- Auto-closes on route change

## Design System Integration

**Colors:**
- Primary: `studio-pink-400` (#F0A0A8)
- Purple accent: `studio-pink-purple-400` (#A8A4E8)
- Cream background: `studio-cream-100` (#FAF5F0)
- Text: `text-heading` (#1a1a1a), `text-body` (#333333), `text-muted` (#666666)

**Typography:**
- Logo: `font-serif` (Playfair Display)
- Navigation: `font-sans` (Geist Sans)

**Breakpoints:**
- Mobile: < 1024px (shows mobile menu)
- Desktop: >= 1024px (shows full navigation)

## Navigation Configuration

Navigation items are defined in `/src/lib/constants/navigation.ts`:

```typescript
export const navigation: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'What We Offer', href: '/what-we-offer' },
  { label: 'Learn More', href: '/learn-more' },
  { label: 'Studio Class', href: '/studio-class' },
]
```

To add or modify navigation items, edit this file.

## Social Links Configuration

Social links are defined in `/src/lib/constants/social.ts`:

```typescript
export const socialLinks: SocialLink[] = [
  {
    platform: 'facebook',
    url: 'https://facebook.com/alisaspianostudio',
    label: 'Facebook',
  },
  {
    platform: 'instagram',
    url: 'https://instagram.com/alisaspianostudio',
    label: 'Instagram',
  },
  {
    platform: 'youtube',
    url: 'https://youtube.com/@alisaspianostudio',
    label: 'YouTube',
  },
]
```

To add or modify social links, edit this file.

## Accessibility

All components follow accessibility best practices:

- Semantic HTML (nav, header elements)
- ARIA labels for icon buttons
- Keyboard navigation support
- Focus states on all interactive elements
- External links have `rel="noopener noreferrer"`

## Styling Notes

- Uses Tailwind CSS utility classes
- Custom colors from `tailwind.config.mjs`
- Smooth transitions (200-300ms duration)
- Mobile-first responsive design
- Hover states with scale and color transitions
- Active states with visual feedback
