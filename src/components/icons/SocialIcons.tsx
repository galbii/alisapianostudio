import * as React from 'react'
import { Facebook, Instagram, Youtube } from 'lucide-react'

interface IconProps {
  className?: string
}

export const FacebookIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => {
  return <Facebook className={className} />
}

export const InstagramIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => {
  return <Instagram className={className} />
}

export const YouTubeIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => {
  return <Youtube className={className} />
}
