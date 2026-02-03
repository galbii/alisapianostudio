'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import { navigation } from '@/lib/constants/navigation'
import { cn } from '@/utilities/ui'

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-8">
        {navigation.map((item) => {
          const isActive = pathname === item.href || item.children?.some(child => pathname === child.href)
          const hasChildren = item.children && item.children.length > 0

          return (
            <li key={item.href} className="relative group">
              {hasChildren ? (
                <>
                  <Link
                    href={item.href}
                    className={cn(
                      'relative text-base font-medium transition-colors flex items-center gap-1',
                      'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-studio-pink-400 after:transition-all after:duration-300',
                      'hover:text-studio-pink-400 group-hover:after:w-full',
                      isActive
                        ? 'text-studio-pink-400 after:w-full'
                        : 'text-text-body hover:text-studio-pink-400',
                    )}
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </Link>
                  {/* Dropdown */}
                  {item.children && (
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <ul className="bg-white border border-studio-cream-200 rounded-lg shadow-lg py-2 min-w-[200px]">
                        {item.children.map((child) => {
                        const childIsActive = pathname === child.href
                        return (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={cn(
                                'block px-4 py-2 text-base transition-colors',
                                childIsActive
                                  ? 'bg-studio-pink-50 text-studio-pink-400 font-medium'
                                  : 'text-text-body hover:bg-studio-cream-100 hover:text-studio-pink-400',
                              )}
                            >
                              {child.label}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    'relative text-base font-medium transition-colors',
                    'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-studio-pink-400 after:transition-all after:duration-300',
                    'hover:text-studio-pink-400 hover:after:w-full',
                    isActive
                      ? 'text-studio-pink-400 after:w-full'
                      : 'text-text-body hover:text-studio-pink-400',
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
  )
}
