# Alisa's Piano Studio Design System

Complete design system configuration for the piano studio website with warm, elegant aesthetic.

## Color Palette

### Studio Brand Colors

#### Pink/Coral (Primary)
```css
studio-pink-50:  #FEF5F6  /* Lightest tint */
studio-pink-100: #FDE8EB
studio-pink-200: #FBD5D9
studio-pink-300: #F7B3BA
studio-pink-400: #F0A0A8  /* PRIMARY - Buttons, banners, accents */
studio-pink-500: #E88691
studio-pink-600: #D66B7A  /* Darker shade */
```

#### Purple/Lavender (Secondary)
```css
studio-purple-50:  #F5F4FD  /* Lightest tint */
studio-purple-100: #ECEAFB
studio-purple-200: #DDD9F7
studio-purple-300: #C4BFF0
studio-purple-400: #A8A4E8  /* SECONDARY - Hero subheadings, decorative text */
studio-purple-500: #8B85DC
studio-purple-600: #6F68C4  /* Darker shade */
```

#### Cream (Background)
```css
studio-cream-50:  #FFFFFF  /* Pure white */
studio-cream-100: #FAF5F0  /* BACKGROUND - Warm, inviting background */
studio-cream-200: #F5EBE0
studio-cream-300: #EFE0D1
studio-cream-400: #E9D6C1
studio-cream-500: #E3CBB2
studio-cream-600: #DCC0A2  /* Darker shade */
```

#### Text Colors
```css
text-heading: #1a1a1a  /* Dark charcoal for headings */
text-body:    #333333  /* Charcoal for body text */
text-muted:   #666666  /* Muted text */
```

### Usage Examples

```tsx
// Primary button
<button className="bg-studio-pink-400 hover:bg-studio-pink-500 text-white rounded-button px-8 py-3">
  Learn More
</button>

// Hero subheading
<h2 className="text-studio-purple-400 text-hero-md font-serif">
  Learn with us.
</h2>

// Background
<div className="bg-studio-cream-100">
  Page content
</div>

// Heading
<h1 className="text-text-heading text-heading-xl font-serif">
  Welcome to Alisa's Piano Studio
</h1>
```

## Typography

### Font Families

```css
font-sans:  var(--font-geist-sans)  /* Body text - Geist Sans */
font-serif: var(--font-playfair)    /* Headings/Logo - Playfair Display */
font-mono:  var(--font-geist-mono)  /* Code/monospace */
```

### Font Sizes

#### Hero Sizes
```css
text-hero-lg: 3.5rem (56px)  /* Line height: 1.1, Weight: 700 */
text-hero-md: 2.5rem (40px)  /* Line height: 1.2, Weight: 700 */
```

#### Heading Sizes
```css
text-heading-xl: 2.25rem (36px)  /* Line height: 1.2, Weight: 600 */
text-heading-lg: 1.875rem (30px) /* Line height: 1.3, Weight: 600 */
```

### Usage Examples

```tsx
// Large hero (homepage)
<h1 className="font-serif text-hero-lg text-text-heading">
  Master the Piano
</h1>

// Medium hero (subpages)
<h1 className="font-serif text-hero-md text-text-heading">
  About Our Studio
</h1>

// Section heading
<h2 className="font-serif text-heading-xl text-text-heading">
  Our Programs
</h2>

// Body text
<p className="font-sans text-base text-text-body">
  Welcome to our piano studio where students of all ages...
</p>
```

## Component Styling

### Buttons

```tsx
// Primary button
<button className="bg-studio-pink-400 hover:bg-studio-pink-500 text-white rounded-button px-8 py-3 font-sans font-medium transition-colors">
  Book a Lesson
</button>

// Secondary button
<button className="border-2 border-studio-pink-400 text-studio-pink-400 hover:bg-studio-pink-50 rounded-button px-8 py-3 font-sans font-medium transition-colors">
  Learn More
</button>
```

### Cards

```tsx
// Standard card
<div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition-shadow p-6">
  <h3 className="font-serif text-heading-lg text-text-heading mb-2">
    Card Title
  </h3>
  <p className="font-sans text-base text-text-body">
    Card content goes here...
  </p>
</div>
```

### Badges

```tsx
// Success badge (100% Pass Rate)
<span className="inline-flex items-center px-3 py-1 rounded-full bg-studio-pink-100 text-studio-pink-600 text-sm font-medium">
  100% Pass Rate
</span>

// Info badge
<span className="inline-flex items-center px-3 py-1 rounded-full bg-studio-purple-100 text-studio-purple-600 text-sm font-medium">
  New Program
</span>
```

## Border Radius

```css
rounded-button: 0.5rem (8px)   /* Button corners */
rounded-card:   0.75rem (12px) /* Card corners */
rounded-sm:     calc(var(--radius) - 4px)
rounded-md:     calc(var(--radius) - 2px)
rounded-lg:     var(--radius)
```

## Box Shadows

```css
shadow-card:       0 2px 8px rgba(0, 0, 0, 0.06)   /* Default card shadow */
shadow-card-hover: 0 4px 12px rgba(0, 0, 0, 0.1)  /* Card hover state */
```

## Background Patterns

Three subtle patterns available for background decoration:

### Piano Keys Pattern (Primary)
```tsx
import { getPianoKeysPattern } from '@/lib/styles'

<div
  className="bg-studio-cream-100"
  style={{ backgroundImage: getPianoKeysPattern(0.04) }}
>
  Content with subtle piano keys background
</div>
```

### Simplified Piano Pattern (Alternative)
```tsx
import { getPianoKeysPatternSimple } from '@/lib/styles'

<div
  className="bg-studio-cream-100"
  style={{ backgroundImage: getPianoKeysPatternSimple(0.03) }}
>
  Content with simple piano outline background
</div>
```

### Musical Notes Pattern (Decorative)
```tsx
import { getMusicalNotesPattern } from '@/lib/styles'

<div
  className="bg-studio-cream-100"
  style={{ backgroundImage: getMusicalNotesPattern(0.04) }}
>
  Content with musical notes background
</div>
```

## Complete Component Examples

### Hero Section

```tsx
import { getPianoKeysPattern } from '@/lib/styles'

export function Hero() {
  return (
    <section
      className="relative bg-studio-cream-100 py-20"
      style={{ backgroundImage: getPianoKeysPattern(0.03) }}
    >
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-hero-lg text-text-heading mb-4">
          Master the Art of Piano
        </h1>
        <p className="font-serif text-hero-md text-studio-purple-400 mb-8">
          Learn with us.
        </p>
        <button className="bg-studio-pink-400 hover:bg-studio-pink-500 text-white rounded-button px-8 py-3 font-sans font-medium transition-colors">
          Book Your Free Trial
        </button>
      </div>
    </section>
  )
}
```

### Program Card

```tsx
export function ProgramCard({ title, description, features }: Props) {
  return (
    <div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition-shadow p-6">
      <div className="mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-studio-pink-100 text-studio-pink-600 text-sm font-medium">
          Popular
        </span>
      </div>

      <h3 className="font-serif text-heading-lg text-text-heading mb-3">
        {title}
      </h3>

      <p className="font-sans text-base text-text-body mb-4">
        {description}
      </p>

      <ul className="space-y-2 mb-6">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center text-text-body">
            <span className="text-studio-pink-400 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <button className="w-full bg-studio-pink-400 hover:bg-studio-pink-500 text-white rounded-button px-6 py-3 font-sans font-medium transition-colors">
        Enroll Now
      </button>
    </div>
  )
}
```

### Statistics Banner

```tsx
export function StatsBanner() {
  return (
    <div className="bg-studio-pink-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-serif font-bold text-white mb-2">
              100%
            </div>
            <div className="text-white/90 font-sans">
              Pass Rate
            </div>
          </div>

          <div>
            <div className="text-4xl font-serif font-bold text-white mb-2">
              15+
            </div>
            <div className="text-white/90 font-sans">
              Years Experience
            </div>
          </div>

          <div>
            <div className="text-4xl font-serif font-bold text-white mb-2">
              500+
            </div>
            <div className="text-white/90 font-sans">
              Students Taught
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
```

## Responsive Design

The design system includes responsive breakpoints:

```css
sm:  640px   /* Small tablets */
md:  768px   /* Tablets */
lg:  1024px  /* Laptops */
xl:  1280px  /* Desktops */
2xl: 1536px  /* Large desktops */
```

### Responsive Typography Example

```tsx
<h1 className="font-serif text-hero-md md:text-hero-lg text-text-heading">
  Responsive Hero
</h1>
```

## Accessibility

- All color combinations meet WCAG AA standards for contrast
- Interactive elements have clear hover states
- Focus states preserved for keyboard navigation
- Semantic HTML structure recommended

## Implementation Files

- **Tailwind Config**: `/tailwind.config.mjs`
- **Layout**: `/src/app/(frontend)/layout.tsx`
- **Patterns**: `/src/lib/styles/piano-keys-pattern.ts`
- **Barrel Export**: `/src/lib/styles/index.ts`

## Next Steps

1. Apply design system to existing pages
2. Create reusable component library
3. Add animations and transitions
4. Implement responsive navigation
5. Add loading states and micro-interactions
