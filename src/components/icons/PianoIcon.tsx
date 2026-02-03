import * as React from 'react'

interface PianoIconProps {
  className?: string
}

export const PianoIcon: React.FC<PianoIconProps> = ({ className = 'w-6 h-6' }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="2" y="6" width="20" height="12" rx="1" stroke="currentColor" strokeWidth="2" />
      <line x1="7" y1="6" x2="7" y2="18" stroke="currentColor" strokeWidth="2" />
      <line x1="12" y1="6" x2="12" y2="18" stroke="currentColor" strokeWidth="2" />
      <line x1="17" y1="6" x2="17" y2="18" stroke="currentColor" strokeWidth="2" />
      <rect x="4.5" y="6" width="2" height="6" fill="currentColor" />
      <rect x="9.5" y="6" width="2" height="6" fill="currentColor" />
      <rect x="14.5" y="6" width="2" height="6" fill="currentColor" />
    </svg>
  )
}
