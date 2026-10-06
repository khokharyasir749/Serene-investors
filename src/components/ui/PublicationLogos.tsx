import React from 'react'

type LogoProps = {
  className?: string
}

export function TechCrunchLogo({ className = 'h-5 w-auto' }: LogoProps) {
  return (
    <svg
      viewBox="0 0 132 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="TechCrunch"
    >
      {/* T square */}
      <rect x="0" y="2" width="18" height="18" rx="2" />
      <rect x="2" y="4" width="14" height="4" fill="var(--bg-cutout, #f7f5ef)" />
      <rect x="7" y="7" width="4" height="11" fill="var(--bg-cutout, #f7f5ef)" />

      {/* C square */}
      <rect x="21" y="2" width="18" height="18" rx="2" />
      <path
        d="M33 7.5c-3 0-5 1.5-5 5s2 5 5 5c2 0 3.2-.8 3.8-1.5l-1.8-1.5c-.4.5-1.1.9-2 .9-1.8 0-2.8-1.2-2.8-2.9s1-2.9 2.8-2.9c.9 0 1.6.4 2 .9l1.8-1.5C36.2 8.3 35 7.5 33 7.5z"
        fill="var(--bg-cutout, #f7f5ef)"
      />

      {/* Text wordmark */}
      <text
        x="45"
        y="16.5"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="800"
        fontSize="13"
        letterSpacing="-0.03em"
      >
        TechCrunch
      </text>
    </svg>
  )
}

export function ArabNewsLogo({ className = 'h-5 w-auto' }: LogoProps) {
  return (
    <svg
      viewBox="0 0 128 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Arab News"
    >
      <text
        x="0"
        y="16.5"
        fontFamily="'Times New Roman', Times, Georgia, serif"
        fontWeight="800"
        fontSize="14.5"
        letterSpacing="0.08em"
      >
        ARAB NEWS
      </text>
    </svg>
  )
}

export function FinancialTimesLogo({ className = 'h-5 w-auto' }: LogoProps) {
  return (
    <svg
      viewBox="0 0 156 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Financial Times"
    >
      <text
        x="0"
        y="16"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fontSize="12.5"
        letterSpacing="0.14em"
      >
        FINANCIAL TIMES
      </text>
    </svg>
  )
}

export function TimeLogo({ className = 'h-5 w-auto' }: LogoProps) {
  return (
    <svg
      viewBox="0 0 66 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="TIME"
    >
      <text
        x="0"
        y="18"
        fontFamily="'Times New Roman', Didot, Georgia, serif"
        fontWeight="900"
        fontSize="21"
        letterSpacing="0.08em"
      >
        TIME
      </text>
    </svg>
  )
}

export function ForbesLogo({ className = 'h-5 w-auto' }: LogoProps) {
  return (
    <svg
      viewBox="0 0 88 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Forbes"
    >
      <text
        x="0"
        y="17"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fontStyle="italic"
        fontSize="18"
        letterSpacing="-0.02em"
      >
        Forbes
      </text>
    </svg>
  )
}

export function CnnLogo({ className = 'h-5 w-auto' }: LogoProps) {
  return (
    <svg
      viewBox="0 0 68 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="CNN"
    >
      {/* Outer dual-track CNN line */}
      <path
        d="M17 5.5H10.5C6.9 5.5 4 8.4 4 12C4 15.6 6.9 18.5 10.5 18.5H17M17 18.5V5.5L28 18.5V5.5M28 18.5V5.5L39 18.5V5.5M39 18.5H43"
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner contour */}
      <path
        d="M15 9H11C9.3 9 8 10.3 8 12C8 13.7 9.3 15 11 15H15"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function BloombergLogo({ className = 'h-5 w-auto' }: LogoProps) {
  return (
    <svg
      viewBox="0 0 114 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Bloomberg"
    >
      <text
        x="0"
        y="16.5"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="700"
        fontSize="15"
        letterSpacing="-0.02em"
      >
        Bloomberg
      </text>
    </svg>
  )
}
