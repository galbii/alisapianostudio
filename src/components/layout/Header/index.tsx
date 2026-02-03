import { Logo } from './Logo'
import { Navigation } from './Navigation'
import { SocialIcons } from './SocialIcons'
import { MobileMenu } from './MobileMenu'

export function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between gap-8">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="flex flex-1 items-center justify-end gap-8">
            <Navigation />
            <SocialIcons />
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
