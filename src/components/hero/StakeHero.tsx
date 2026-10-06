'use client'

import React from 'react'
import Link from 'next/link'
import {
  TrendingUp,
  Plus,
  Percent,
  ArrowUpRight,
  CheckCircle2,
  Building2,
  Wallet,
  Compass,
  Award,
  User,
  ChevronRight,
  ArrowLeft,
} from 'lucide-react'

export function StakeHero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F5EF] pt-8 pb-16 px-6 lg:px-12 border-b border-black/[0.08]">
      {/* Background Soft Ambient Radial Glows */}
      <div
        className="pointer-events-none absolute -left-48 -top-24 size-[32rem] rounded-full bg-[#00A663]/12 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-12 top-1/4 size-[28rem] rounded-full bg-[#E8F8F0] blur-3xl opacity-80"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl min-h-[85vh] flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8 xl:gap-14 py-4">
          
          {/* =========================================================================
              LEFT COLUMN: Editorial Copy, Badges, CTAs, and Institutional Trust
              ========================================================================= */}
          <div className="w-full lg:col-span-7">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-black/[0.08] bg-[#E8F8F0] px-4 py-1.5 text-xs font-semibold text-[#0B3528] shadow-2xs backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A663] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#00A663]" />
              </span>
              <span>10% average returns in 2025</span>
            </div>

            {/* Headline with Emerald Highlight */}
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0D1117] leading-[1.08] text-balance">
              Build your wealth through{' '}
              <span className="text-[#00A663] selection:bg-[#00A663]/20">prime real estate</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-xl text-lg text-[#4B5563] leading-relaxed text-pretty">
              Join thousands of people globally earning passive income from investing in curated residential and commercial real estate with Serene, from just £500.
            </p>

            {/* Dual App Store / Google Play Badges */}
            <div className="mt-8 flex flex-col gap-3.5">
              <div className="flex flex-wrap items-center gap-3.5">
                {/* Download on the App Store */}
                <a
                  href="#app"
                  aria-label="Download on the App Store"
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#0D1117] px-4 py-2.5 text-white shadow-md transition-all duration-200 hover:bg-black hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
                >
                  <svg className="size-6 text-white shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.92.04-2.01.62-2.65 1.37-.56.65-1.06 1.71-.92 2.73 1.03.08 2.05-.53 2.65-1.25" />
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[9.5px] uppercase font-medium tracking-tight text-white/75 leading-none">
                      Download on the
                    </span>
                    <span className="text-[0.9375rem] font-semibold tracking-tight text-white leading-tight mt-0.5 font-sans">
                      App Store
                    </span>
                  </div>
                </a>

                {/* Get it on Google Play */}
                <a
                  href="#app"
                  aria-label="Get it on Google Play"
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#0D1117] px-4 py-2.5 text-white shadow-md transition-all duration-200 hover:bg-black hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
                >
                  <svg className="size-6 text-white shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3.609 1.814C3.239 2.122 3 2.601 3 3.167v17.666c0 .566.239 1.045.609 1.353l10.184-10.186L3.609 1.814zm13.571 6.799l-3.387 3.387 3.387 3.387 3.736-2.097c.725-.407 1.084-1.127 1.084-1.903s-.359-1.496-1.084-1.903l-3.736-2.097zM4.5 1.5c-.338 0-.65.115-.89.314L13.793 12l3.387-3.387-11.352-6.371C5.537 1.79 5.042 1.5 4.5 1.5zm-.89 20.686c.24.199.552.314.89.314.542 0 1.037-.29 1.328-.743l11.352-6.37-3.387-3.387L3.61 22.186z" />
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] uppercase font-medium tracking-wider text-white/75 leading-none">
                      GET IT ON
                    </span>
                    <span className="text-[0.9375rem] font-semibold tracking-tight text-white leading-tight mt-0.5 font-sans">
                      Google Play
                    </span>
                  </div>
                </a>
              </div>

              {/* Secondary Links & Bullet Ticker */}
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-[13px] text-[#64748B] pt-1">
                <span className="size-1.5 rounded-full bg-[#00A663] shrink-0" />
                <span>Available on iOS &amp; Android</span>
                <span className="text-black/25">•</span>
                <span>Direct Web Access</span>
                <span className="text-black/25">•</span>
                <Link
                  href="/properties"
                  className="font-semibold text-[#0D1117] hover:text-[#00A663] transition-colors underline-offset-4 hover:underline"
                >
                  Explore properties on web &rarr;
                </Link>
              </div>
            </div>

            {/* Bottom Metrics Bar */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-black/[0.08] pt-6 text-xs text-[#64748B]">
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#00A663] shrink-0" />
                <span>
                  <strong className="font-semibold text-[#0D1117]">£140M+</strong> Assets Transacted
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#00A663] shrink-0" />
                <span>
                  <strong className="font-semibold text-[#0D1117]">Quarterly</strong> Liquidity
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#00A663] shrink-0" />
                <span>
                  <strong className="font-semibold text-[#0D1117]">100%</strong> Asset-Backed Deeds
                </span>
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Layered Realistic Mobile Mockup & Overlapping Cards
              ========================================================================= */}
          <div className="w-full lg:col-span-5 flex justify-center items-center relative py-6">
            
            {/* Ambient Green Glow Blur behind Mockup */}
            <div
              className="pointer-events-none absolute inset-0 -m-8 rounded-full bg-gradient-to-tr from-[#00A663]/30 via-[#E8F8F0]/80 to-transparent blur-3xl opacity-75"
              aria-hidden="true"
            />

            {/* Floating Notification Pill (iOS Push Overlap Top-Left) */}
            <div className="absolute -left-4 sm:-left-10 top-6 sm:top-10 z-30 flex items-center gap-3 rounded-2xl border border-black/[0.08] bg-white/95 p-3 sm:p-3.5 shadow-2xl backdrop-blur-xl animate-float">
              <div className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-full bg-[#E8F8F0] text-[#00A663]">
                <CheckCircle2 size={18} className="stroke-[2.5]" />
              </div>
              <div className="flex flex-col text-left pr-1 sm:pr-2">
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#00A663]">Serene</span>
                  <span className="text-[10px] text-[#64748B]">• Just now</span>
                </div>
                <span className="text-xs sm:text-[13px] font-bold text-[#0D1117] whitespace-nowrap">
                  You&apos;ve been paid <span className="text-[#00A663]">£18,550</span> in rent
                </span>
              </div>
            </div>

            {/* Floating Property Pill Card (Overlap Top-Right) */}
            <div className="absolute -right-2 sm:-right-8 top-28 sm:top-36 z-30 w-52 sm:w-60 rounded-2xl border border-black/[0.08] bg-white/95 p-3 shadow-2xl backdrop-blur-xl transition-transform duration-300 hover:scale-105">
              <div className="flex items-center gap-2.5">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=200&q=80"
                  alt="Boulevard Point"
                  className="size-11 rounded-xl object-cover shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-[#0D1117] truncate">Boulevard Point</p>
                    <span className="rounded-full bg-[#E8F8F0] px-1.5 py-0.5 text-[9.5px] font-extrabold text-[#00A663]">
                      +10.4%
                    </span>
                  </div>
                  <p className="text-[10px] text-[#64748B]">Prime Mayfair W1</p>
                </div>
              </div>
              <div className="mt-2.5 grid grid-cols-2 gap-1.5 border-t border-black/[0.06] pt-2 text-[10px]">
                <div>
                  <span className="text-[#64748B]">Capital:</span> <strong className="text-[#0D1117]">+£64,365</strong>
                </div>
                <div className="text-right">
                  <span className="text-[#64748B]">Rental:</span> <strong className="text-[#00A663]">+£27,585</strong>
                </div>
              </div>
            </div>

            {/* Realistic iPhone Chassis */}
            <div className="relative mx-auto w-[min(100%,330px)] sm:w-[340px] select-none rounded-[44px] border-[7px] border-[#0D1117] bg-[#0D1117] p-[3px] shadow-[0_30px_70px_-15px_rgba(11,53,40,0.38),0_0_0_1px_rgba(255,255,255,0.12)]">
              {/* Chassis side volume buttons */}
              <div className="absolute -left-[9px] top-[90px] h-7 w-[3px] rounded-l-sm bg-[#222724]" />
              <div className="absolute -left-[9px] top-[130px] h-12 w-[3px] rounded-l-sm bg-[#222724]" />
              <div className="absolute -right-[9px] top-[115px] h-16 w-[3px] rounded-r-sm bg-[#222724]" />

              {/* Screen Inner Container */}
              <div className="relative flex flex-col overflow-hidden rounded-[38px] bg-white text-[#0D1117]">
                
                {/* Status Bar */}
                <div className="relative z-30 flex h-9 items-center justify-between px-6 pt-1 text-[11px] font-semibold text-[#0D1117]">
                  <span className="w-12 text-left font-mono text-[11px]">9:41</span>
                  
                  {/* Dynamic Island Pill Cutout */}
                  <div className="mx-auto flex h-[18px] w-22 items-center justify-center rounded-full bg-black px-2">
                    <div className="ml-auto size-2 rounded-full bg-[#1c221e]" />
                  </div>

                  {/* Signal, WiFi, Battery Icons */}
                  <div className="flex w-12 items-center justify-end gap-1.5 text-[#0D1117]">
                    <svg className="size-3" viewBox="0 0 16 16" fill="currentColor">
                      <rect x="1" y="11" width="2" height="4" rx="0.5" />
                      <rect x="5" y="8" width="2" height="7" rx="0.5" />
                      <rect x="9" y="5" width="2" height="10" rx="0.5" />
                      <rect x="13" y="2" width="2" height="13" rx="0.5" />
                    </svg>
                    <div className="flex items-center">
                      <div className="flex h-2.5 w-4 items-center rounded-xs border border-current p-[1px]">
                        <div className="h-full w-2.5 rounded-2xs bg-[#00A663]" />
                      </div>
                      <div className="h-1 w-[1.5px] rounded-r-xs bg-current" />
                    </div>
                  </div>
                </div>

                {/* Serene App Screen Content */}
                <div className="flex-1 bg-white px-4 pt-2 pb-3 flex flex-col gap-3">
                  
                  {/* App Header Bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex size-7 items-center justify-center rounded-full bg-black/[0.05]">
                        <ArrowLeft size={14} className="text-[#0D1117]" />
                      </div>
                      <span className="text-sm font-bold text-[#0D1117]">Portfolio</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 rounded-full bg-[#E8F8F0] px-2.5 py-1 text-[10.5px] font-bold text-[#00A663]">
                      <span className="size-1.5 rounded-full bg-[#00A663] animate-pulse" />
                      <span>Available</span>
                    </div>
                  </div>

                  {/* Portfolio Value Hero Block */}
                  <div className="rounded-2xl bg-gradient-to-br from-[#0B3528] to-[#062017] p-3.5 text-white shadow-xs">
                    <p className="font-mono text-[9px] uppercase tracking-wider text-emerald-300/90 font-semibold">
                      PORTFOLIO VALUE
                    </p>
                    <p className="text-2xl font-black tracking-tight text-white mt-0.5">
                      £306,500.00
                    </p>
                    <div className="mt-2 flex items-center justify-between text-[10px] text-emerald-200">
                      <span>All time returns:</span>
                      <span className="font-extrabold text-white">+£91,950.00 (30.8%)</span>
                    </div>
                    {/* Two-tone Progress Meter */}
                    <div className="mt-1.5 h-1.5 w-full rounded-full bg-white/15 overflow-hidden">
                      <div className="h-full w-[74%] rounded-full bg-[#00A663]" />
                    </div>
                  </div>

                  {/* Action Buttons Row (4 circular/squircle pills) */}
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-[#E8F8F0] text-[#00A663] shadow-2xs hover:bg-[#00A663] hover:text-white transition-colors cursor-pointer">
                        <TrendingUp size={16} strokeWidth={2.2} />
                      </div>
                      <span className="text-[10px] font-semibold text-[#0D1117]">Invest</span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-black/[0.04] text-[#0D1117] shadow-2xs hover:bg-black hover:text-white transition-colors cursor-pointer">
                        <Plus size={16} strokeWidth={2.2} />
                      </div>
                      <span className="text-[10px] font-semibold text-[#0D1117]">+ Deposit</span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-black/[0.04] text-[#0D1117] shadow-2xs hover:bg-black hover:text-white transition-colors cursor-pointer">
                        <Percent size={16} strokeWidth={2.2} />
                      </div>
                      <span className="text-[10px] font-semibold text-[#0D1117]">% Earn</span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-black/[0.04] text-[#0D1117] shadow-2xs hover:bg-black hover:text-white transition-colors cursor-pointer">
                        <ArrowUpRight size={16} strokeWidth={2.2} />
                      </div>
                      <span className="text-[10px] font-semibold text-[#0D1117]">↗ Exit</span>
                    </div>
                  </div>

                  {/* Monthly Rent Card (Two-column) */}
                  <div className="rounded-xl border border-black/[0.08] bg-[#F8FAF9] p-2.5 grid grid-cols-2 gap-2 text-left">
                    <div className="border-r border-black/[0.06] pr-2">
                      <span className="text-[9.5px] uppercase font-semibold text-[#64748B]">July&apos;s rent</span>
                      <p className="text-xs font-bold text-[#00A663] mt-0.5">£10,225.50</p>
                    </div>
                    <div className="pl-1">
                      <span className="text-[9.5px] uppercase font-semibold text-[#64748B]">Total rental income</span>
                      <p className="text-xs font-bold text-[#0D1117] mt-0.5">£56,200.00</p>
                    </div>
                  </div>

                  {/* "My Stakes" Portfolio Section */}
                  <div className="space-y-1.5 text-left">
                    <div className="flex items-center justify-between text-xs font-bold text-[#0D1117]">
                      <span>My Stakes</span>
                      <span className="text-[10px] font-semibold text-[#00A663]">View all &rarr;</span>
                    </div>

                    {/* Listing 1: The Mayfair Core */}
                    <div className="flex items-center justify-between rounded-xl bg-white p-2 border border-black/[0.06] shadow-2xs">
                      <div className="flex items-center gap-2">
                        <div className="flex size-8 items-center justify-center rounded-lg bg-[#0B3528] text-white">
                          <Building2 size={14} />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-[#0D1117]">The Mayfair Core</p>
                          <p className="text-[9px] text-[#64748B]">London W1 · Fractional</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[11px] font-bold text-[#0D1117]">£142,500</p>
                        <span className="text-[9.5px] font-bold text-[#00A663]">+8.4%</span>
                      </div>
                    </div>

                    {/* Listing 2: Courtyard Residences */}
                    <div className="flex items-center justify-between rounded-xl bg-white p-2 border border-black/[0.06] shadow-2xs">
                      <div className="flex items-center gap-2">
                        <div className="flex size-8 items-center justify-center rounded-lg bg-[#00A663] text-white">
                          <Building2 size={14} />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-[#0D1117]">Courtyard Residences</p>
                          <p className="text-[9px] text-[#64748B]">Prime District · 2 Bed</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[11px] font-bold text-[#0D1117]">£98,000</p>
                        <span className="text-[9.5px] font-bold text-[#00A663]">+7.1%</span>
                      </div>
                    </div>
                  </div>

                  {/* In-App Bottom Navigation */}
                  <div className="mt-auto border-t border-black/[0.08] pt-2 grid grid-cols-5 text-center text-[#64748B]">
                    <div className="flex flex-col items-center gap-0.5">
                      <Compass size={14} />
                      <span className="text-[8px]">Properties</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <Wallet size={14} />
                      <span className="text-[8px]">Wallet</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 text-[#00A663]">
                      <TrendingUp size={14} />
                      <span className="text-[8px] font-bold">Portfolio</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <Award size={14} />
                      <span className="text-[8px]">Rewards</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <User size={14} />
                      <span className="text-[8px]">Profile</span>
                    </div>
                  </div>

                  {/* Bottom Home Indicator Bar */}
                  <div className="flex justify-center pt-1">
                    <div className="h-1 w-24 rounded-full bg-black/25" />
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
