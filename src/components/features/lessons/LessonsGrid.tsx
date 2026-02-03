import React from 'react'
import { lessons } from '@/lib/constants/lessons'
import { LessonCard } from './LessonCard'
import { cn } from '@/utilities/ui'

interface LessonsGridProps {
  heading?: string
  description?: string
  className?: string
}

export function LessonsGrid({
  heading = 'Our Lessons',
  description,
  className,
}: LessonsGridProps) {
  return (
    <section className={cn('py-16 px-4 md:px-6 lg:px-8', className)}>
      <div className="max-w-7xl mx-auto">
        {(heading || description) && (
          <div className="text-center mb-12 space-y-4">
            {heading && (
              <h2 className="font-playfair text-4xl md:text-5xl text-studio-purple-400">
                {heading}
              </h2>
            )}
            {description && (
              <p className="text-lg text-text-body max-w-2xl mx-auto">{description}</p>
            )}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </div>
    </section>
  )
}
