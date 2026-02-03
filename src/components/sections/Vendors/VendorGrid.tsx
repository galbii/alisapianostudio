import Image from 'next/image'
import type { Vendor } from '@/lib/constants/vendors'

export interface VendorGridProps {
  vendors: Vendor[]
}

export function VendorGrid({ vendors }: VendorGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
      {vendors.map((vendor) => (
        <div
          key={vendor.id}
          className="relative w-full aspect-[3/2] flex items-center justify-center group transition-all duration-300"
        >
          <Image
            src={vendor.logo}
            alt={`${vendor.name} logo`}
            width={150}
            height={100}
            className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16vw"
          />
        </div>
      ))}
    </div>
  )
}
