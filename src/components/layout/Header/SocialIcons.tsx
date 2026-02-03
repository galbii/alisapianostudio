import { FacebookIcon, InstagramIcon, YouTubeIcon } from '@/components/icons'
import { socialLinks } from '@/lib/constants/social'
import { cn } from '@/utilities/ui'

const iconMap = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YouTubeIcon,
}

export function SocialIcons() {
  return (
    <div className="hidden items-center gap-4 lg:flex">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.platform as keyof typeof iconMap]
        if (!Icon) return null

        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'text-text-muted transition-all duration-200',
              'hover:scale-110 hover:text-studio-pink-400',
            )}
            aria-label={link.label}
          >
            <Icon className="h-5 w-5" />
          </a>
        )
      })}
    </div>
  )
}
