import React from 'react'
import { specialPrograms } from '@/lib/constants/special-programs'
import { SpecialProgramCard } from './SpecialProgramCard'
import { cn } from '@/utilities/ui'

interface SpecialProgramsGridProps {
  heading?: string
  description?: string
  className?: string
}

export function SpecialProgramsGrid({
  heading = 'Special Programs',
  description,
  className,
}: SpecialProgramsGridProps) {
  return (
    <section className={cn('py-16 px-4 md:px-6 lg:px-8 bg-studio-cream/30', className)}>
      <div className="max-w-7xl mx-auto">
        {(heading || description) && (
          <div className="text-center mb-12 space-y-4">
            {heading && (
              <h2 className="font-playfair text-4xl md:text-5xl text-studio-purple">
                <span className="text-studio-pink-400">{heading.split(' ')[0]}</span>{' '}
                {heading.split(' ').slice(1).join(' ')}
              </h2>
            )}
            {description && (
              <p className="text-lg text-text-body max-w-2xl mx-auto">{description}</p>
            )}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {specialPrograms.map((program) => (
            <SpecialProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </section>
  )
}
