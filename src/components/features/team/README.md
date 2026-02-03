# Team & About Components

Professional team member cards and studio story components with warm, welcoming aesthetic.

## Components

### TeamMember
Displays individual team member card with photo, credentials, and bio.

```tsx
import { TeamMember } from '@/components/features/team'

<TeamMember member={teamMemberObject} />
```

### TeamGrid
Responsive grid displaying all team members with optional heading.

```tsx
import { TeamGrid } from '@/components/features/team'

// Default: shows all team members from constants
<TeamGrid />

// Custom heading
<TeamGrid heading="Our Instructors" />

// Custom members array
<TeamGrid members={customTeamArray} />
```

### StudioStory
Rich content section about the studio's history and achievements.

```tsx
import { StudioStory } from '@/components/features/team'

// Default: shows full studio story with stats
<StudioStory />

// Custom content
<StudioStory>
  <p>Your custom story content here...</p>
</StudioStory>
```

## Features

- **Professional Design**: Clean white cards with subtle shadows
- **Responsive Images**: Optimized with next/image (aspect ratio 3:4)
- **Typography**: Serif fonts for names and headings (Playfair Display)
- **Color Palette**: Pink and purple accents from studio brand
- **Credentials Display**: Badge-style credentials with purple background
- **Stats Callouts**: Highlighted achievements (26+ years, 100% pass rate, etc.)
- **Hover Effects**: Subtle card elevation on hover
- **Grid Layout**: 1 column mobile, 2 tablet, 3 desktop

## Styling

All components use the studio color palette:
- **Pink**: `text-studio-pink-400` for titles
- **Purple**: `bg-studio-purple-50`, `text-studio-purple-600` for badges
- **Cream**: `bg-studio-cream-100` for section backgrounds
- **Text**: `text-text-heading`, `text-text-body`, `text-text-muted`

## Team Data

Team members are defined in `/src/lib/constants/team.ts`:

```typescript
interface TeamMember {
  id: string
  name: string
  title: string
  credentials: string[]
  bio: string
  image: string // Path to image file
  order: number // Display order
}
```

## Usage Example

```tsx
import { TeamGrid, StudioStory } from '@/components/features/team'

export default function AboutPage() {
  return (
    <>
      <StudioStory />
      <TeamGrid />
    </>
  )
}
```
