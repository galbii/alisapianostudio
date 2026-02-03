'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { navigation } from '@/lib/constants/navigation'
import { socialLinks } from '@/lib/constants/social'
import { FacebookIcon, InstagramIcon, YouTubeIcon } from '@/components/icons'
import { cn } from '@/utilities/ui'

const iconMap = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YouTubeIcon,
}

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const pathname = usePathname()

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const toggleExpanded = (href: string) => {
    setExpandedItems((prev) =>
      prev.includes(href) ? prev.filter((item) => item !== href) : [...prev, href],
    )
  }

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-text-heading transition-colors hover:text-studio-pink-400 lg:hidden"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in Menu */}
      <div
        className={cn(
          'fixed right-0 top-0 z-50 h-full w-80 bg-white shadow-2xl transition-transform duration-300 lg:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-200 p-6">
            <span className="font-serif text-xl font-semibold text-text-heading">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-text-muted transition-colors hover:text-studio-pink-400"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-6 py-8">
            <ul className="space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href || item.children?.some(child => pathname === child.href)
                const hasChildren = item.children && item.children.length > 0
                const isExpanded = expandedItems.includes(item.href)

                return (
                  <li key={item.href}>
                    {hasChildren ? (
                      <>
                        <button
                          onClick={() => toggleExpanded(item.href)}
                          className={cn(
                            'w-full flex items-center justify-between rounded-md px-4 py-3 text-base font-medium transition-colors text-left',
                            isActive
                              ? 'bg-studio-pink-50 text-studio-pink-400'
                              : 'text-text-body hover:bg-studio-cream-100 hover:text-studio-pink-400',
                          )}
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={cn(
                              'w-4 h-4 transition-transform',
                              isExpanded && 'rotate-180',
                            )}
                          />
                        </button>
                        {isExpanded && item.children && (
                          <ul className="mt-1 ml-4 space-y-1">
                            {item.children.map((child) => {
                              const childIsActive = pathname === child.href
                              return (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    className={cn(
                                      'block rounded-md px-4 py-2 text-sm font-medium transition-colors',
                                      childIsActive
                                        ? 'bg-studio-pink-50 text-studio-pink-400'
                                        : 'text-text-body hover:bg-studio-cream-100 hover:text-studio-pink-400',
                                    )}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          'block rounded-md px-4 py-3 text-base font-medium transition-colors',
                          isActive
                            ? 'bg-studio-pink-50 text-studio-pink-400'
                            : 'text-text-body hover:bg-studio-cream-100 hover:text-studio-pink-400',
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="border-t border-gray-200 p-6">
            <div className="flex items-center justify-center gap-6">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.platform as keyof typeof iconMap]
                if (!Icon) return null

                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted transition-all duration-200 hover:scale-110 hover:text-studio-pink-400"
                    aria-label={link.label}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
