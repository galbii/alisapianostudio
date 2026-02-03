import { team } from '@/lib/constants/team'
import type { TeamMember as TeamMemberType } from '@/lib/constants/team'
import { TeamMember } from './TeamMember'

interface TeamGridProps {
  heading?: string
  members?: TeamMemberType[]
}

export function TeamGrid({ heading = 'Meet Our Team', members = team }: TeamGridProps) {
  // Sort by order field
  const sortedMembers = [...members].sort((a, b) => a.order - b.order)

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        {heading && (
          <h2 className="font-serif text-hero-md md:text-hero-lg text-text-heading text-center mb-12 md:mb-16">
            {heading}
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedMembers.map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
