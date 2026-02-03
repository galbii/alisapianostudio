import React from 'react'
import { Music, Guitar, Mic, BookOpen, Ear, Eye } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Badge } from '@/components/ui'
import { cn } from '@/utilities/ui'
import type { Lesson } from '@/lib/constants/lessons'

const iconMap = {
  piano: Music,
  guitar: Guitar,
  vocal: Mic,
  'music-theory': BookOpen,
  'ear-training': Ear,
  'sight-reading': Eye,
}

interface LessonCardProps {
  lesson: Lesson
  className?: string
}

export function LessonCard({ lesson, className }: LessonCardProps) {
  const Icon = iconMap[lesson.id as keyof typeof iconMap] || Music

  return (
    <Card
      className={cn(
        'bg-white shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02] rounded-card',
        className,
      )}
    >
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="p-3 rounded-lg bg-studio-pink-400/10">
            <Icon className="h-6 w-6 text-studio-pink-400" />
          </div>
          <Badge variant="secondary" className="bg-studio-cream text-studio-purple-400">
            Ages {lesson.ageRange}
          </Badge>
        </div>
        <div className="space-y-2">
          <CardTitle className="font-playfair text-2xl text-studio-purple-400">
            {lesson.title}
          </CardTitle>
          <CardDescription className="text-sm text-gray-600 leading-relaxed">
            {lesson.description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-studio-purple-400 uppercase tracking-wide">
            What You&apos;ll Learn
          </h4>
          <ul className="space-y-2">
            {lesson.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-text-body">
                <span className="text-studio-pink-400 mt-1 flex-shrink-0">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
