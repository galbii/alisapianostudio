import { vendors } from '@/lib/constants/vendors'
import { VendorGrid } from './VendorGrid'
import { cn } from '@/utilities/ui'

export interface VendorsSectionProps {
  title?: string
  description?: string
  className?: string
}

export function VendorsSection({
  title = 'Our Vendors',
  description = 'We proudly partner with exceptional charter schools and educational institutions to provide quality music education.',
  className,
}: VendorsSectionProps) {
  return (
    <section className={cn('py-16 px-6 bg-white', className)}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-playfair text-heading-lg text-studio-pink-400">
            {title}
          </h2>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        <VendorGrid vendors={vendors} />
      </div>
    </section>
  )
}
