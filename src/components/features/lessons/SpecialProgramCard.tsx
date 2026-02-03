import React from 'react'
import { Trophy, Users, Wine, Star } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Badge } from '@/components/ui'
import { cn } from '@/utilities/ui'
import type { SpecialProgram } from '@/lib/constants/special-programs'

const iconMap = {
  'certificate-of-merit': Trophy,
  'monthly-studio-classes': Users,
  'wine-and-piano': Wine,
  'red-carpet-recital': Star,
}

interface SpecialProgramCardProps {
  program: SpecialProgram
  className?: string
}

export function SpecialProgramCard({ program, className }: SpecialProgramCardProps) {
  const Icon = iconMap[program.id as keyof typeof iconMap] || Star

  return (
    <Card
      className={cn(
        'bg-white shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02] rounded-card border-l-4 border-l-studio-pink',
        className,
      )}
    >
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="p-3 rounded-lg bg-studio-pink-100">
            <Icon className="h-6 w-6 text-studio-pink-400" />
          </div>
          {program.badge && (
            <Badge variant="studio">
              {program.badge}
            </Badge>
          )}
        </div>
        <div className="space-y-2">
          <CardTitle className="font-playfair text-2xl text-studio-purple-400">
            {program.title}
          </CardTitle>
          <CardDescription className="text-sm text-text-body leading-relaxed">
            {program.description}
          </CardDescription>
        </div>
      </CardHeader>
      {program.features && program.features.length > 0 && (
        <CardContent>
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-studio-pink-400 uppercase tracking-wide">
              Program Highlights
            </h4>
            <ul className="space-y-2">
              {program.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-text-body">
                  <span className="text-studio-pink-400 mt-1 flex-shrink-0">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      )}
    </Card>
  )
}
