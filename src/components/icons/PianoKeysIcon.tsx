import * as React from 'react'

interface PianoKeysIconProps {
  className?: string
}

export const PianoKeysIcon: React.FC<PianoKeysIconProps> = ({ className = 'w-6 h-6' }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="3.5" height="16" rx="0.5" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
      <rect x="7" y="4" width="3.5" height="16" rx="0.5" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
      <rect x="11" y="4" width="3.5" height="16" rx="0.5" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
      <rect x="15" y="4" width="3.5" height="16" rx="0.5" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
      <rect x="19" y="4" width="2.5" height="16" rx="0.5" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
      <rect x="5" y="4" width="2" height="9" rx="0.5" fill="white" />
      <rect x="9" y="4" width="2" height="9" rx="0.5" fill="white" />
      <rect x="13" y="4" width="2" height="9" rx="0.5" fill="white" />
      <rect x="17" y="4" width="2" height="9" rx="0.5" fill="white" />
    </svg>
  )
}
