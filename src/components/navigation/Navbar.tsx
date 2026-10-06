'use client'

import React from 'react'
import Link from 'next/link'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/[0.08] bg-white/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 select-none">
          <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#00A663] to-[#0B3528] text-white shadow-sm">
            <span className="font-mono text-base font-black">S</span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold tracking-tight text-[#0D1117]">
              SERENE <span className="text-[#00A663]">INVESTORS</span>
            </span>
            <span className="text-[10px] uppercase font-semibold tracking-widest text-[#64748B] -mt-1">
              Institutional Property
            </span>
          </div>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#4B5563]">
          <Link href="/properties" className="transition-colors hover:text-[#00A663]">
            Properties
          </Link>
          <Link href="/funds" className="transition-colors hover:text-[#00A663]">
            Funds
          </Link>
          <Link href="/how-it-works" className="transition-colors hover:text-[#00A663]">
            How it works
          </Link>
          <Link href="/learn" className="transition-colors hover:text-[#00A663]">
            Learn
          </Link>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#0D1117] transition-all hover:bg-black/[0.05]"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-[#00A663] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0B3528] hover:shadow-md active:scale-95"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  )
}
