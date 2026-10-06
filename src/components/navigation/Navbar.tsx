'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  ChevronDown,
  LayoutDashboard,
  Settings,
  ShieldCheck,
  LogOut,
  Wallet,
  Menu,
  X,
  Layers,
  Building2,
  Check,
} from 'lucide-react'
import { TopBanner } from './TopBanner'

type AccountOption = 'individual' | 'corporate' | 'trust'

export function Navbar() {
  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeAccount, setActiveAccount] = useState<AccountOption>('individual')
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown on outside click or escape
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setDropdownOpen(false)
        setMobileMenuOpen(false)
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
        document.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [dropdownOpen])



  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Properties', href: '/properties' },
    { label: 'Funds', href: '/funds', badge: 'New' },
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Learn', href: '/learn' },
  ]

  function isLinkActive(href: string): boolean {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <div className="sticky top-0 z-[1000] w-full select-none" data-site-sticky>
      {/* 1. Top Notification Bar */}
      <TopBanner />

      {/* 2. Sticky Glassmorphism Navigation Bar */}
      <header className="relative w-full border-b border-black/[0.08] bg-white/95 backdrop-blur-md transition-all">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Left Brand Title */}
          <Link
            href="/"
            aria-label="Serene Investors Homepage"
            className="group flex items-center gap-2.5 transition-transform active:scale-95"
          >
            <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#00A663] to-[#0B3528] text-white shadow-xs transition-transform group-hover:scale-105">
              <span className="font-mono text-base font-extrabold">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-[0.9375rem] sm:text-base font-extrabold uppercase tracking-[0.16em] text-[#0D1117]">
                SERENE <span className="text-[#00A663]">INVESTORS</span>
              </span>
            </div>
          </Link>

          {/* Center Navigation Links (Desktop >= 1024px) */}
          <nav
            className="hidden lg:flex items-center gap-1.5"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => {
              const active = isLinkActive(link.href)
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'bg-[#E8F8F0] font-semibold text-[#00A663] shadow-xs'
                      : 'text-[#4B5563] hover:text-[#00A663] hover:bg-black/[0.03]'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge ? (
                    <span className="rounded-full bg-[#00A663] px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-white shadow-2xs">
                      {link.badge}
                    </span>
                  ) : null}
                </Link>
              )
            })}
          </nav>

          {/* Right Action Area: User Profile Dropdown & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* User Profile Pill Trigger */}
            <div ref={dropdownRef} className="relative hidden sm:block">
              <button
                type="button"
                onClick={() => setDropdownOpen((prev) => !prev)}
                aria-expanded={dropdownOpen}
                aria-haspopup="menu"
                className={`flex items-center gap-2.5 rounded-full border bg-white py-1 pl-1 pr-3 text-left transition-all duration-200 cursor-pointer ${
                  dropdownOpen
                    ? 'border-[#00A663] ring-2 ring-[#00A663]/20 shadow-md'
                    : 'border-black/[0.08] hover:border-black/[0.18] hover:shadow-xs active:scale-98'
                }`}
              >
                {/* Avatar circle with initials KH in dark forest green */}
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#0B3528] text-white font-mono text-xs font-bold shadow-2xs ring-1 ring-[#00A663]/30">
                  KH
                </div>

                {/* Username and subtext */}
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold leading-tight text-[#0D1117] max-w-[130px] truncate">
                    khokharyasir749
                  </span>
                  <span className="text-[10px] leading-tight text-[#64748B] font-medium">
                    Individual
                  </span>
                </div>

                <ChevronDown
                  size={14}
                  className={`text-[#64748B] transition-transform duration-200 ${
                    dropdownOpen ? 'rotate-180 text-[#00A663]' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu Modal */}
              {dropdownOpen && (
                <div
                  role="menu"
                  aria-label="User account menu"
                  className="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-76 origin-top-right rounded-2xl border border-black/[0.08] bg-white p-2.5 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150"
                >
                  {/* Account Header Overview */}
                  <div className="rounded-xl bg-[#E8F8F0]/70 p-3 border border-[#00A663]/15">
                    <div className="flex items-center gap-2.5">
                      <div className="flex size-9 items-center justify-center rounded-full bg-[#0B3528] text-white font-mono text-xs font-bold shadow-xs">
                        KH
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-[#0D1117] truncate">khokharyasir749</p>
                        <p className="text-[10.5px] text-[#4B5563] truncate">Verified Individual Account</p>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#00A663]/15 px-2 py-0.5 text-[10px] font-bold text-[#00A663]">
                        <ShieldCheck size={11} />
                        Tier-1
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between border-t border-[#00A663]/15 pt-2.5 text-xs">
                      <div>
                        <span className="text-[10px] uppercase font-semibold text-[#64748B]">Portfolio Value</span>
                        <p className="font-extrabold text-[#0D1117] text-sm">£306,500.00</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] uppercase font-semibold text-[#64748B]">Cash Balance</span>
                        <p className="font-extrabold text-[#00A663] text-sm">£12,480.00</p>
                      </div>
                    </div>
                  </div>

                  {/* Switch Account Section */}
                  <div className="mt-2 px-1">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-[#64748B] px-2 py-1">
                      Switch Profile
                    </p>
                    <div className="space-y-0.5">
                      <button
                        type="button"
                        onClick={() => setActiveAccount('individual')}
                        className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                          activeAccount === 'individual'
                            ? 'bg-black/[0.05] text-[#0D1117]'
                            : 'text-[#4B5563] hover:bg-black/[0.03]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="size-2 rounded-full bg-[#00A663]" />
                          <span>Individual (khokharyasir749)</span>
                        </div>
                        {activeAccount === 'individual' && <Check size={13} className="text-[#00A663]" />}
                      </button>

                      <button
                        type="button"
                        onClick={() => setActiveAccount('corporate')}
                        className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                          activeAccount === 'corporate'
                            ? 'bg-black/[0.05] text-[#0D1117]'
                            : 'text-[#4B5563] hover:bg-black/[0.03]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Building2 size={13} className="text-[#64748B]" />
                          <span>Corporate Entity</span>
                        </div>
                        {activeAccount === 'corporate' && <Check size={13} className="text-[#00A663]" />}
                      </button>

                      <button
                        type="button"
                        onClick={() => setActiveAccount('trust')}
                        className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                          activeAccount === 'trust'
                            ? 'bg-black/[0.05] text-[#0D1117]'
                            : 'text-[#4B5563] hover:bg-black/[0.03]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Layers size={13} className="text-[#64748B]" />
                          <span>Family Trust SPV</span>
                        </div>
                        {activeAccount === 'trust' && <Check size={13} className="text-[#00A663]" />}
                      </button>
                    </div>
                  </div>

                  <div className="my-2 h-px bg-black/[0.06]" />

                  {/* Navigation Links */}
                  <div className="flex flex-col gap-0.5">
                    <Link
                      href="/dashboard"
                      onClick={() => setDropdownOpen(false)}
                      role="menuitem"
                      className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold text-[#0D1117] transition-colors hover:bg-black/[0.04] hover:text-[#00A663]"
                    >
                      <LayoutDashboard size={15} className="text-[#64748B]" />
                      <span>Portfolio Dashboard</span>
                    </Link>

                    <Link
                      href="/dashboard"
                      onClick={() => setDropdownOpen(false)}
                      role="menuitem"
                      className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold text-[#0D1117] transition-colors hover:bg-black/[0.04] hover:text-[#00A663]"
                    >
                      <Wallet size={15} className="text-[#64748B]" />
                      <span>Wallet &amp; Payouts</span>
                    </Link>

                    <Link
                      href="/about"
                      onClick={() => setDropdownOpen(false)}
                      role="menuitem"
                      className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold text-[#0D1117] transition-colors hover:bg-black/[0.04] hover:text-[#00A663]"
                    >
                      <Settings size={15} className="text-[#64748B]" />
                      <span>Account Settings</span>
                    </Link>
                  </div>

                  <div className="my-2 h-px bg-black/[0.06]" />

                  {/* Sign Out */}
                  <Link
                    href="/login"
                    onClick={() => setDropdownOpen(false)}
                    role="menuitem"
                    className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-bold text-red-600 transition-colors hover:bg-red-50"
                  >
                    <LogOut size={15} />
                    <span>Sign out</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Hamburger Button (< 1024px) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
              aria-expanded={mobileMenuOpen}
              className="flex size-10 items-center justify-center rounded-full text-[#0D1117] transition-colors hover:bg-black/[0.05] lg:hidden cursor-pointer"
            >
              {mobileMenuOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
            </button>
          </div>
        </div>

        {/* 3. Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-black/[0.08] bg-white px-5 py-6 lg:hidden animate-in slide-in-from-top-4 duration-200">
            {/* User Profile Card */}
            <div className="flex items-center gap-3 rounded-2xl bg-[#E8F8F0] p-4 border border-[#00A663]/20 mb-6">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#0B3528] text-white font-mono text-sm font-bold shadow-xs">
                KH
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-[#0D1117] truncate">khokharyasir749</p>
                <p className="text-xs text-[#0B3528] font-medium">Individual Investor • Verified</p>
              </div>
              <span className="rounded-full bg-[#00A663] px-2.5 py-1 text-[11px] font-bold text-white shadow-2xs">
                Active
              </span>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const active = isLinkActive(link.href)
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-all ${
                      active
                        ? 'bg-[#E8F8F0] text-[#00A663]'
                        : 'text-[#4B5563] hover:text-[#00A663] hover:bg-black/[0.03]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.badge ? (
                      <span className="rounded-full bg-[#00A663] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                        {link.badge}
                      </span>
                    ) : null}
                  </Link>
                )
              })}
            </div>

            <div className="my-6 h-px bg-black/[0.08]" />

            {/* Mobile Action Buttons */}
            <div className="space-y-3">
              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#00A663] py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#0B3528]"
              >
                <LayoutDashboard size={16} />
                <span>Go to Dashboard</span>
              </Link>

              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-black/[0.12] bg-white py-3 text-sm font-semibold text-[#0D1117] transition-all hover:bg-black/[0.04]"
              >
                <LogOut size={16} />
                <span>Sign out</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}
