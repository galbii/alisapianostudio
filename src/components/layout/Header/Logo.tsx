import Link from 'next/link'
import { PianoIcon } from '@/components/icons'

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2 transition-opacity hover:opacity-80">
      <PianoIcon className="h-8 w-8 text-studio-pink-400 transition-transform group-hover:scale-105" />
      <span className="font-serif text-xl font-semibold text-text-heading md:text-2xl">
        Alisa&apos;s Piano <span className="text-studio-purple-400">Studio</span>
      </span>
    </Link>
  )
}
