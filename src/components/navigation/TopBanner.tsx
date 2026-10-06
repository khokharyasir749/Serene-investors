'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

const STORAGE_KEY = 'serene_banner_dismissed'

type Props = {
  onDismissChange?: (dismissed: boolean) => void
}

export function TopBanner({ onDismissChange }: Props) {
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true
    try {
      return sessionStorage.getItem(STORAGE_KEY) !== 'true'
    } catch {
      return true
    }
  })
  const [isRendered, setIsRendered] = useState<boolean>(isVisible)

  function handleDismiss() {
    setIsVisible(false)
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true')
    } catch {
      // Ignore
    }
    onDismissChange?.(true)
    setTimeout(() => {
      setIsRendered(false)
    }, 320)
  }

  if (!isRendered) return null

  return (
    <aside
      role="region"
      aria-label="Important Announcement"
      className={`relative w-full bg-[#0B3528] text-white transition-all duration-300 ease-in-out ${
        isVisible ? 'max-h-14 opacity-100 py-2.5' : 'max-h-0 opacity-0 py-0 overflow-hidden'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8 text-center">
        {/* Spacer for symmetrical center alignment */}
        <div className="hidden sm:block w-7 shrink-0" aria-hidden="true" />

        {/* Centered Message */}
        <div className="mx-auto flex items-center justify-center text-xs sm:text-[13px] font-medium tracking-tight text-[#F7F5EF]/95 leading-snug">
          <span>
            Cedar Court is open as a sample listing this week.{' '}
            <Link
              href="/properties/cedar-court"
              className="font-semibold text-white underline underline-offset-2 transition-colors hover:text-[#00A663]"
            >
              View listing
            </Link>
          </span>
        </div>

        {/* Dismiss Button */}
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Dismiss banner"
          className="flex size-7 shrink-0 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white active:scale-90 cursor-pointer"
        >
          <X size={15} strokeWidth={2.2} />
        </button>
      </div>
    </aside>
  )
}
