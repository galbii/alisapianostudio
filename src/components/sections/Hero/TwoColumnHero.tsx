import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getPianoKeysPattern } from '@/lib/styles'

export interface TwoColumnHeroProps {
  title: string
  accentText?: string
  description: string
  ctaText: string
  ctaHref: string
  imageSrc: string
  imageAlt: string
  reverse?: boolean
}

export function TwoColumnHero({
  title,
  accentText,
  description,
  ctaText,
  ctaHref,
  imageSrc,
  imageAlt,
  reverse = false,
}: TwoColumnHeroProps) {
  const pianoKeysPattern = getPianoKeysPattern()

  return (
    <section
      className="relative bg-studio-cream-100 py-16 md:py-24 overflow-hidden"
      style={{
        backgroundImage: pianoKeysPattern,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-6">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
          {/* Text Content */}
          <div className={`space-y-6 ${reverse ? 'md:order-2' : ''}`}>
            {accentText && (
              <h2 className="font-playfair text-hero-md text-studio-purple-400">
                {accentText}
              </h2>
            )}
            <h1 className="font-playfair text-hero-lg text-text-heading leading-tight">
              {title}
            </h1>
            <p className="text-lg text-text-body leading-relaxed">
              {description}
            </p>
            <div className="pt-4">
              <Button asChild variant="studio" size="lg">
                <Link href={ctaHref}>
                  {ctaText}
                </Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className={`relative ${reverse ? 'md:order-1' : ''}`}>
            <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
