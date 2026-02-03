import * as React from 'react'

interface WineGlassIconProps {
  className?: string
}

export const WineGlassIcon: React.FC<WineGlassIconProps> = ({ className = 'w-6 h-6' }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 2L7 8C7 11.314 9.686 14 13 14V20H10V22H16V20H13V14C16.314 14 19 11.314 19 8L18 2H8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 2L7 8C7 9.5 8 11 9.5 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
