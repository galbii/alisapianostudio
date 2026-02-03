import Image from 'next/image'
import { Card, CardContent, CardHeader } from '@/components/ui'
import type { TeamMember as TeamMemberType } from '@/lib/constants/team'

interface TeamMemberProps {
  member: TeamMemberType
}

export function TeamMember({ member }: TeamMemberProps) {
  return (
    <Card className="h-full overflow-hidden transition-all hover:shadow-card-hover">
      <CardHeader className="p-0">
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="font-serif text-heading-lg text-text-heading mb-2">{member.name}</h3>
        <p className="text-studio-pink-400 font-medium mb-3">{member.title}</p>

        {member.credentials.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {member.credentials.map((credential, index) => (
              <span
                key={index}
                className="inline-block text-xs bg-studio-purple-50 text-studio-purple-600 px-3 py-1 rounded-full"
              >
                {credential}
              </span>
            ))}
          </div>
        )}

        <p className="text-text-body leading-relaxed">{member.bio}</p>
      </CardContent>
    </Card>
  )
}
