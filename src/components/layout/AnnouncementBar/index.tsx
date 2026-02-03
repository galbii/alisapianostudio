import Link from 'next/link'

export function AnnouncementBar() {
  return (
    <div className="bg-studio-pink-400 text-white">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-center text-center">
          <Link
            href="/wine-and-piano"
            className="text-sm font-medium transition-opacity hover:opacity-90 md:text-base"
          >
            Sign Up for Wine & Piano: Click Here
          </Link>
        </div>
      </div>
    </div>
  )
}
