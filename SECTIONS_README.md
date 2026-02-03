# Reusable Page Sections

This document provides an overview of the reusable page section components created for Alisa's Piano Studio.

## Component Overview

### 1. TwoColumnHero
**Location:** `/src/components/sections/Hero/TwoColumnHero.tsx`

A responsive two-column hero section with image and text content on a cream background with piano keys watermark.

**Features:**
- Cream background (bg-studio-cream-100) with piano keys pattern
- Responsive grid layout (stacks on mobile)
- Optional purple accent text
- Pink CTA button (studio variant)
- Reversible layout (image on left or right)

**Props:**
```typescript
interface TwoColumnHeroProps {
  title: string
  accentText?: string          // Optional purple accent text
  description: string
  ctaText: string
  ctaHref: string
  imageSrc: string
  imageAlt: string
  reverse?: boolean            // Image on left if true
}
```

**Usage Example:**
```tsx
import { TwoColumnHero } from '@/components/sections'

<TwoColumnHero
  accentText="Welcome to"
  title="Alisa's Piano Studio"
  description="Where musical excellence meets personalized instruction. Join us on a journey of creativity and skill development."
  ctaText="Schedule a Lesson"
  ctaHref="/contact"
  imageSrc="/images/hero-piano.jpg"
  imageAlt="Student playing piano"
  reverse={false}
/>
```

---

### 2. StudioUpdates
**Location:** `/src/components/sections/StudioUpdates/index.tsx`

A white card displaying studio announcements, contact information, and newsletter signup.

**Features:**
- Clean white card with shadow
- Phone and email contact info with icons
- Recent announcements with calendar icons
- Newsletter link styled with studio-purple
- Pulls data from `/lib/constants/studio-updates.ts`

**Usage Example:**
```tsx
import { StudioUpdates } from '@/components/sections'

<StudioUpdates />
```

**Data Source:**
The component automatically displays active updates from `@/lib/constants/studio-updates`. To add/edit updates, modify the `studioUpdates` array in that file.

---

### 3. VendorsSection
**Location:** `/src/components/sections/Vendors/VendorsSection.tsx`

A centered section displaying vendor/partner logos in a responsive grid.

**Features:**
- Pink centered heading (text-studio-pink-400)
- Responsive grid (2-col mobile, 4-col tablet, 6-col desktop)
- Grayscale logos with color on hover
- Pulls vendor data from `/lib/constants/vendors.ts`

**Props:**
```typescript
interface VendorsSectionProps {
  title?: string            // Default: "Our Vendors"
  description?: string      // Default description provided
}
```

**Usage Example:**
```tsx
import { VendorsSection } from '@/components/sections'

<VendorsSection
  title="Our Partners"
  description="We collaborate with outstanding charter schools and educational institutions."
/>
```

**Sub-component - VendorGrid:**
If you need just the logo grid without the heading:
```tsx
import { VendorGrid } from '@/components/sections'
import { vendors } from '@/lib/constants/vendors'

<VendorGrid vendors={vendors} />
```

---

### 4. Footer
**Location:** `/src/components/sections/Footer/index.tsx`

A comprehensive footer with studio information, navigation, contact details, and social links.

**Features:**
- Cream background (bg-studio-cream-100)
- Three-column layout on desktop (single column on mobile)
- Studio branding and description
- Quick navigation links
- Contact information with icons
- Social media links (Facebook, Instagram, YouTube)
- Copyright and legal links

**Usage Example:**
```tsx
import { Footer } from '@/components/sections'

// Place at the bottom of your layout
<Footer />
```

**Data Sources:**
- Navigation: `@/lib/constants/navigation`
- Social Links: `@/lib/constants/social`
- Contact Info: `@/lib/constants/studio-updates`

---

## Design System

### Colors Used
- **studio-cream-100**: Background for hero sections and footer
- **studio-pink-400**: Primary accent color for headings and CTAs
- **studio-purple-400**: Secondary accent for special text and links
- **gray-700/800/900**: Body text colors
- **white**: Card backgrounds

### Typography
- **Playfair Display** (font-playfair): Used for all headings and accent text
- Responsive text sizes using custom size classes:
  - `text-hero-lg`: Large hero headings
  - `text-hero-md`: Medium hero text (accent)
  - `text-heading-lg`: Large section headings

### Patterns
Piano keys background pattern is available via:
```tsx
import { getPianoKeysPattern } from '@/lib/styles'
const pattern = getPianoKeysPattern()
```

---

## Complete Page Example

Here's how to compose these sections into a complete page:

```tsx
import {
  TwoColumnHero,
  StudioUpdates,
  VendorsSection,
  Footer
} from '@/components/sections'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <TwoColumnHero
        accentText="Welcome to"
        title="Alisa's Piano Studio"
        description="Where musical excellence meets personalized instruction."
        ctaText="Get Started"
        ctaHref="/contact"
        imageSrc="/images/studio-hero.jpg"
        imageAlt="Piano studio"
      />

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Main content here */}
          </div>
          <aside>
            <StudioUpdates />
          </aside>
        </div>
      </main>

      {/* Vendors */}
      <VendorsSection />

      {/* Footer */}
      <Footer />
    </>
  )
}
```

---

## Responsive Behavior

All components are **mobile-first** and fully responsive:

- **TwoColumnHero**: Grid stacks vertically on mobile (`grid-cols-1 md:grid-cols-2`)
- **VendorGrid**: 2 columns on mobile, 4 on tablet, 6 on desktop
- **Footer**: Single column on mobile, 3 columns on desktop
- **StudioUpdates**: Full-width card that maintains readability on all screen sizes

---

## Customization

### Overriding Styles
All components accept className props where appropriate. Use Tailwind's utility classes:

```tsx
<VendorsSection className="bg-studio-cream-100 py-24" />
```

### Adding New Vendors
Edit `/src/lib/constants/vendors.ts`:

```typescript
export const vendors: Vendor[] = [
  {
    id: 'new-vendor',
    name: 'New Vendor Name',
    logo: '/images/vendors/new-vendor-logo.png',
    type: 'partner',
  },
  // ... existing vendors
]
```

### Adding Studio Updates
Edit `/src/lib/constants/studio-updates.ts`:

```typescript
export const studioUpdates: StudioUpdate[] = [
  {
    id: 'new-update',
    date: '2026-03-01',
    title: 'Spring Concert',
    message: 'Join us for our spring concert featuring student performances.',
    type: 'event',
    isActive: true,
  },
  // ... existing updates
]
```

---

## Component Architecture

```
src/components/sections/
├── Hero/
│   ├── TwoColumnHero.tsx    # Main hero component
│   └── index.ts              # Barrel export
├── StudioUpdates/
│   └── index.tsx             # Studio updates card
├── Vendors/
│   ├── VendorGrid.tsx        # Logo grid component
│   ├── VendorsSection.tsx    # Full section with heading
│   └── index.ts              # Barrel exports
├── Footer/
│   └── index.tsx             # Site footer
└── index.ts                  # Main barrel export
```

---

## Next Steps

These components are production-ready and can be used immediately. Consider:

1. **Creating more hero variants** (if needed for different page types)
2. **Adding testimonials section** (following same design patterns)
3. **Creating feature cards section** (for showcasing programs/services)
4. **Adding a call-to-action banner** (for enrollment drives)

All new sections should follow the same design principles:
- Use studio color palette
- Implement responsive design
- Use Playfair Display for headings
- Follow the component structure pattern
- Export from main sections barrel file
