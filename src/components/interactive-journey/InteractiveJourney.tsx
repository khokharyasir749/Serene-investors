'use client'

import React, { useState } from 'react'
import {
  Compass,
  Coins,
  TrendingUp,
  ArrowRightLeft,
  Check,
  CheckCircle2,
  ShoppingCart,
  Tag,
  Share2,
  Bookmark,
  ChevronLeft,
} from 'lucide-react'

// Authentic iOS Status Bar Helper
function PhoneStatusBar({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`flex justify-between items-center px-4 pt-1 text-[10px] font-semibold ${dark ? 'text-white' : 'text-gray-900'} select-none`}>
      <span className="font-bold tracking-tight">9:41</span>
      
      <div className="flex items-center gap-1 bg-black/5 px-2 py-0.5 rounded-full text-[8.5px] font-bold text-gray-800">
        <span className="size-1.5 rounded-full bg-[#00A663]" />
        <span>AED</span>
        <span className="text-[9px] text-gray-500 font-normal">›</span>
      </div>

      <div className="flex items-center gap-1.5 text-gray-800">
        <svg className="w-3.5 h-2.5 fill-current" viewBox="0 0 17 12">
          <rect x="0" y="9" width="3" height="3" rx="0.6" />
          <rect x="4.5" y="6" width="3" height="6" rx="0.6" />
          <rect x="9" y="3" width="3" height="9" rx="0.6" />
          <rect x="13.5" y="0" width="3" height="12" rx="0.6" />
        </svg>
        <div className="flex items-center">
          <div className="w-[16px] h-[8px] rounded-[2px] border border-current p-[1px] flex items-center">
            <div className="w-full h-full bg-[#00A663] rounded-[0.5px]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function InteractiveJourney() {
  const [activeStep, setActiveStep] = useState<number>(0)

  const steps = [
    {
      id: 0,
      kicker: 'Browse',
      headline: 'Access prime real estate across multiple markets',
      description: 'Sign up in less than 3 minutes and browse our collection of global properties and funds, sourced by experts.',
      icon: Compass,
    },
    {
      id: 1,
      kicker: 'Invest',
      headline: 'Grab a piece of the ones you love, from only AED 500',
      description: 'Skip the hassle, and buy shares in your favourite deals, no matter where you are in the world.',
      icon: Coins,
      hasPaymentIcons: true,
    },
    {
      id: 2,
      kicker: 'Earn',
      headline: 'Enjoy regular passive income with no effort',
      description: 'Sit back and earn consistent rental income from your brand new real estate portfolio',
      icon: TrendingUp,
      walletPill: 'Paid directly to your Stake wallet',
    },
    {
      id: 3,
      kicker: 'Sell',
      headline: 'when you need it',
      description: 'Realise your full investment appreciation at maturity or take early profits by selling within our community',
      icon: ArrowRightLeft,
      exitBadges: [
        { label: 'Every 6 months', text: 'Sell during our Exit Windows' },
        { label: '5 year hold', text: 'Full sale of properties and funds' },
      ],
    },
  ]

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#F7F5EF] py-20 px-6 lg:px-12 border-b border-black/[0.08]"
    >
      <div className="mx-auto max-w-7xl">
        {/* Top Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#00A663] mb-3">
            HOW IT WORKS
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D1117] leading-[1.12] text-balance">
            Build a diversified real estate portfolio easily from your phone
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4B5563] max-w-xl mx-auto">
            Experience institutional real estate syndication completely reimagined for modern mobile devices.
          </p>
        </div>

        {/* Main Grid: 5 cols Left (steps), 7 cols Right (phone stage) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* =========================================================================
              LEFT COLUMN: Interactive 4 Steps
              ========================================================================= */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((step) => {
              const isActive = activeStep === step.id
              const Icon = step.icon

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`group relative rounded-2xl p-5 sm:p-6 transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? 'opacity-100 bg-white border-[#00A663]/30 shadow-lg ring-1 ring-[#00A663]/20 translate-x-1'
                      : 'opacity-40 hover:opacity-80 bg-white/40 border-black/[0.05] hover:bg-white/80'
                  }`}
                >
                  {/* Left Active Emerald Indicator */}
                  {isActive && (
                    <span
                      className="absolute left-0 top-4 bottom-4 w-1.5 rounded-r-full bg-[#00A663]"
                      aria-hidden="true"
                    />
                  )}

                  <div className="flex items-start gap-4">
                    {/* Step Icon */}
                    <div
                      className={`flex size-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-200 ${
                        isActive
                          ? 'bg-[#00A663] text-white shadow-xs'
                          : 'bg-black/[0.05] text-[#0D1117]'
                      }`}
                    >
                      <Icon size={20} strokeWidth={2.2} />
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Step Kicker */}
                      <p className="text-xs font-bold uppercase tracking-wider text-[#00A663]">
                        {step.kicker}
                      </p>

                      {/* Step Headline */}
                      <h3 className={`mt-1 font-bold tracking-tight text-[#0D1117] ${
                        step.id === 2 ? 'text-2xl sm:text-3xl font-extrabold' : 'text-xl'
                      }`}>
                        {step.headline}
                      </h3>

                      {/* Step Description */}
                      <p className="mt-1.5 text-xs sm:text-[0.875rem] leading-relaxed text-[#4B5563]">
                        {step.description}
                      </p>

                      {/* Invest: Mini Payment Icons */}
                      {step.hasPaymentIcons && (
                        <div className="mt-3 flex items-center gap-2 pt-1">
                          <span className="rounded-md bg-black/[0.04] px-2 py-0.5 text-[10px] font-bold text-[#0D1117]">
                            VISA
                          </span>
                          <span className="rounded-md bg-black/[0.04] px-2 py-0.5 text-[10px] font-bold text-[#0D1117]">
                            Mastercard
                          </span>
                          <span className="rounded-md bg-black/[0.04] px-2 py-0.5 text-[10px] font-bold text-[#0D1117]">
                            Apple Pay
                          </span>
                        </div>
                      )}

                      {/* Earn: Exact Video Bottom Pill */}
                      {step.walletPill && (
                        <div className="mt-3 inline-flex items-center gap-2 rounded-xl bg-white border border-gray-200 px-3.5 py-2 shadow-xs text-xs font-semibold text-gray-800">
                          <span className="flex size-4 items-center justify-center rounded-md bg-[#00A663] text-white">
                            <Check size={11} strokeWidth={3} />
                          </span>
                          <span>{step.walletPill}</span>
                        </div>
                      )}

                      {/* Sell: Exit Windows & Hold Badges */}
                      {step.exitBadges && (
                        <div className="mt-3 flex flex-wrap gap-2 pt-1">
                          {step.exitBadges.map((badge, idx) => (
                            <div key={idx} className="rounded-lg bg-black/[0.04] px-2.5 py-1 text-[11px] text-[#4B5563]">
                              <span className="font-bold text-[#0D1117]">{badge.label}: </span>
                              <span>{badge.text}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* =========================================================================
              RIGHT COLUMN SHOWCASE (Dynamic Container & Floating Assets)
              ========================================================================= */}
          <div className="lg:col-span-7">
            <div
              className={`rounded-[36px] p-8 sm:p-12 relative flex items-center justify-center min-h-[580px] overflow-visible border shadow-sm transition-colors duration-500 ${
                activeStep === 2
                  ? 'bg-[#FEEFC3]/80 border-amber-200/60'
                  : 'bg-[#E8F8F0]/70 border-[#00A663]/15'
              }`}
            >
              
              {/* =============================================================
                  STEP 0: BROWSE STATE
                  ============================================================= */}
              {activeStep === 0 && (
                <>
                  {/* Floating Polaroid Badge 1 */}
                  <div className="absolute -left-2 sm:-left-4 top-1/4 z-30 w-44 sm:w-52 rounded-2xl border border-black/[0.08] bg-white p-2.5 sm:p-3 shadow-2xl backdrop-blur-md">
                    <div className="relative h-20 sm:h-24 w-full rounded-xl overflow-hidden mb-2">
                      <img
                        src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80"
                        alt="Marina Gate"
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute right-2 top-2 rounded-full bg-[#00A663] px-2 py-0.5 text-[10px] font-bold text-white shadow-2xs">
                        +10.4%
                      </span>
                    </div>
                    <p className="text-[11px] font-bold text-[#0D1117] truncate">Marina Gate Tower</p>
                    <p className="text-[9.5px] text-[#64748B]">Dubai Marina • Prime Waterfront</p>
                  </div>

                  {/* Floating Polaroid Badge 2 */}
                  <div className="absolute -right-2 sm:-right-4 bottom-1/4 z-30 flex items-center gap-3 rounded-2xl border border-black/[0.08] bg-white p-3 sm:p-3.5 shadow-2xl backdrop-blur-md">
                    <div className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-xl bg-[#00A663] text-white shadow-2xs">
                      <ShoppingCart size={18} />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="size-1.5 rounded-full bg-[#00A663]" />
                        <span className="text-[10px] font-bold uppercase text-[#00A663]">Order Confirmed</span>
                      </div>
                      <p className="text-xs sm:text-[13px] font-bold text-[#0D1117]">Shares Acquired</p>
                      <p className="text-[10px] text-[#64748B]">AED 500 • Deed Allocated</p>
                    </div>
                  </div>

                  {/* Central Phone Mockup */}
                  <div className="w-[280px] sm:w-[290px] rounded-[44px] bg-[#12161A] p-[5px] shadow-2xl select-none relative z-10">
                    <div className="rounded-[39px] overflow-hidden bg-white relative flex flex-col justify-between text-[#0D1117] h-[510px] p-3.5">
                      {/* Dynamic Island */}
                      <div className="h-3.5 w-18 bg-black rounded-full mx-auto shrink-0 mb-1" />
                      <PhoneStatusBar />

                      {/* Top Segmented Tabs */}
                      <div className="mt-2 flex items-center justify-between rounded-xl bg-black/[0.04] p-1 text-[11px] font-semibold text-[#64748B]">
                        <span className="rounded-lg bg-white px-2.5 py-1 text-[#0D1117] font-bold shadow-2xs">
                          Available (7)
                        </span>
                        <span className="px-2 py-1">Funded</span>
                        <span className="px-2 py-1">Exited</span>
                      </div>

                      {/* Featured Property Card */}
                      <div className="mt-2 rounded-2xl border border-black/[0.08] overflow-hidden bg-white shadow-2xs">
                        <div className="relative h-28 w-full">
                          <img
                            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80"
                            alt="Marina Gate, Dubai Marina"
                            className="h-full w-full object-cover"
                          />
                          <span className="absolute left-2 top-2 rounded-full bg-[#0B3528]/90 px-2 py-0.5 text-[9px] font-bold text-white">
                            Prime Tower
                          </span>
                          <span className="absolute right-2 top-2 rounded-full bg-white/95 px-2 py-0.5 text-[9px] font-extrabold text-[#00A663]">
                            +12.4% Est. Return
                          </span>
                        </div>
                        
                        <div className="p-2.5">
                          <h4 className="text-[11px] font-bold text-[#0D1117]">Marina Gate 1, Dubai Marina</h4>
                          <p className="text-[9.5px] text-[#64748B]">Luxury Waterfront Residence</p>
                          
                          <div className="mt-2 flex items-center justify-between text-[10px]">
                            <span className="font-extrabold text-[#0D1117]">AED 1,450,000</span>
                            <span className="text-[#00A663] font-bold">84% Funded</span>
                          </div>
                          <div className="mt-1 h-1.5 w-full rounded-full bg-black/[0.06] overflow-hidden">
                            <div className="h-full w-[84%] rounded-full bg-[#00A663]" />
                          </div>
                        </div>
                      </div>

                      {/* Secondary Compact Card */}
                      <div className="mt-2 flex items-center gap-2.5 rounded-xl border border-black/[0.08] p-2 bg-[#F8FAF9]">
                        <img
                          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=200&q=80"
                          alt="Boulevard Point"
                          className="size-10 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-[10.5px] font-bold text-[#0D1117] truncate">Boulevard Point, Downtown</p>
                          <p className="text-[9px] text-[#64748B]">Downtown Dubai • 8.1% Net</p>
                          <span className="text-[9px] font-bold text-[#00A663]">92% Funded</span>
                        </div>
                      </div>

                      {/* Home Indicator */}
                      <div className="mt-auto pt-2 pb-1 flex justify-center">
                        <div className="h-1 w-24 bg-black/20 rounded-full" />
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* =============================================================
                  STEP 1: INVEST STATE
                  ============================================================= */}
              {activeStep === 1 && (
                <>
                  {/* Floating Confirmation Badge */}
                  <div className="absolute -right-2 sm:-right-4 bottom-1/4 z-30 flex items-center gap-3 rounded-2xl border border-black/[0.08] bg-white p-3.5 shadow-2xl">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#00A663] text-white">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0D1117]">Order Confirmed</p>
                      <p className="text-[10px] text-[#00A663] font-semibold">AED 2,500 allocated</p>
                    </div>
                  </div>

                  {/* Central Phone Mockup */}
                  <div className="w-[280px] sm:w-[290px] rounded-[44px] bg-[#12161A] p-[5px] shadow-2xl select-none relative z-10">
                    <div className="rounded-[39px] overflow-hidden bg-white relative flex flex-col justify-between text-[#0D1117] h-[510px] p-3.5">
                      <div className="h-3.5 w-18 bg-black rounded-full mx-auto shrink-0 mb-1" />
                      <PhoneStatusBar />

                      <div className="mt-2 space-y-2.5">
                        <div className="rounded-xl border border-black/[0.08] bg-[#F8FAF9] p-2.5">
                          <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#64748B]">Target Property</span>
                          <p className="text-xs font-bold text-[#0D1117] mt-0.5">Marina Gate Tower 1</p>
                          <p className="text-[10px] text-[#00A663] font-semibold">Min: AED 500 / USD 136</p>
                        </div>

                        <div className="rounded-2xl border border-[#00A663]/30 bg-white p-3 text-center shadow-xs">
                          <span className="text-[9.5px] uppercase font-bold text-[#64748B]">Investment Amount</span>
                          <p className="text-2xl font-black text-[#0D1117] tracking-tight mt-1">AED 2,500</p>
                          <div className="mt-2 flex items-center justify-between text-[9.5px] text-[#64748B]">
                            <span>Min: AED 500</span>
                            <span className="text-[#00A663] font-bold">5 Stake Shares</span>
                            <span>Max: AED 250k</span>
                          </div>
                          <div className="mt-1.5 h-2 w-full rounded-full bg-[#E8F8F0] p-0.5">
                            <div className="h-full w-[35%] rounded-full bg-[#00A663]" />
                          </div>
                        </div>

                        <div className="rounded-xl bg-[#E8F8F0] p-2.5 border border-[#00A663]/20 space-y-1 text-xs">
                          <div className="flex justify-between text-[10.5px]">
                            <span className="text-[#0B3528]">Est. Annual Rental Payout:</span>
                            <span className="font-extrabold text-[#00A663]">+AED 165.00 / yr</span>
                          </div>
                          <div className="flex justify-between text-[10.5px]">
                            <span className="text-[#0B3528]">Projected Capital Growth:</span>
                            <span className="font-extrabold text-[#00A663]">+AED 620.00</span>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#00A663] py-2.5 text-xs font-bold text-white shadow-md"
                      >
                        <Coins size={14} />
                        Invest AED 2,500 Now
                      </button>

                      <div className="pt-2 pb-1 flex justify-center">
                        <div className="h-1 w-24 bg-black/20 rounded-full" />
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* =============================================================
                  STEP 2: EARN STATE (Exact Match to Video Spec!)
                  ============================================================= */}
              {activeStep === 2 && (
                <>
                  {/* Floating 1: Top-Right Rent Notification */}
                  <div className="absolute top-1/4 -right-2 sm:right-4 lg:-right-4 z-30 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-black/5 flex items-center gap-3 w-64">
                    {/* Dark icon with pink accent dot + 'k' */}
                    <div className="size-10 rounded-xl bg-[#12161A] text-white flex items-center justify-center shrink-0 relative shadow-sm">
                      <span className="font-black text-sm text-white">k</span>
                      <span className="size-2 rounded-full bg-pink-500 absolute top-1 right-1" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                        Stake • JUST NOW
                      </p>
                      <p className="text-xs font-extrabold text-[#0D1117] leading-snug truncate">
                        You&apos;ve been paid AED 18,000 in rent
                      </p>
                    </div>
                  </div>

                  {/* Floating 2: Bottom Center-Right Returns Card */}
                  <div className="absolute bottom-14 -left-4 sm:left-4 lg:-left-4 z-30 bg-white rounded-2xl p-4 shadow-2xl border border-black/5 w-64">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-gray-500">All time returns</span>
                      <span className="rounded-full bg-[#E8F8F0] px-2 py-0.5 text-[10px] font-extrabold text-[#00A663]">
                        30.8%
                      </span>
                    </div>
                    <p className="mt-1 text-2xl font-black text-[#0D1117] tracking-tight">
                      AED 89,000
                    </p>
                    {/* Two-tone emerald progress bar */}
                    <div className="mt-3 h-2 w-full rounded-full bg-gray-100 flex overflow-hidden">
                      <div className="h-full w-[65%] bg-[#00A663]" />
                      <div className="h-full w-[35%] bg-emerald-300" />
                    </div>
                  </div>

                  {/* Central Phone Mockup (Portfolio Screen) */}
                  <div className="w-[280px] sm:w-[290px] rounded-[44px] bg-[#12161A] p-[5px] shadow-2xl select-none relative z-10">
                    <div className="rounded-[39px] overflow-hidden bg-white relative flex flex-col justify-between text-[#0D1117] h-[510px] p-3.5">
                      <div className="h-3.5 w-18 bg-black rounded-full mx-auto shrink-0 mb-1" />
                      <PhoneStatusBar />

                      <div className="mt-2 space-y-2.5">
                        <div className="flex items-center justify-between pb-1 border-b border-gray-100">
                          <h4 className="text-sm font-extrabold text-[#0D1117]">Portfolio</h4>
                          <span className="text-[10px] font-bold text-[#00A663] bg-[#E8F8F0] px-2 py-0.5 rounded-full">
                            Active
                          </span>
                        </div>

                        {/* Mini Card: Portfolio Value */}
                        <div className="rounded-2xl bg-gradient-to-br from-[#0B3528] to-[#041a12] p-3.5 text-white">
                          <span className="text-[9.5px] uppercase font-bold tracking-wider text-emerald-300">
                            Portfolio value
                          </span>
                          <p className="text-xl font-black mt-0.5 tracking-tight">
                            AED 17,500.00
                          </p>
                          <div className="mt-2 flex items-center justify-between text-[10px] text-emerald-200">
                            <span>Monthly rental yield</span>
                            <span className="font-extrabold text-white">6.2%</span>
                          </div>
                        </div>

                        {/* Holdings Breakdown */}
                        <div className="space-y-1.5 pt-1">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                            Current Assets
                          </p>

                          <div className="flex items-center justify-between rounded-xl bg-[#F8FAF9] p-2 border border-black/[0.04]">
                            <div>
                              <p className="text-[11px] font-bold text-[#0D1117]">Boulevard Point</p>
                              <p className="text-[9px] text-gray-500">Downtown Dubai</p>
                            </div>
                            <span className="text-[11px] font-black text-[#00A663]">+AED 2,130</span>
                          </div>

                          <div className="flex items-center justify-between rounded-xl bg-[#F8FAF9] p-2 border border-black/[0.04]">
                            <div>
                              <p className="text-[11px] font-bold text-[#0D1117]">Marina Gate 1</p>
                              <p className="text-[9px] text-gray-500">Dubai Marina</p>
                            </div>
                            <span className="text-[11px] font-black text-[#00A663]">+AED 1,420</span>
                          </div>

                          <div className="flex items-center justify-between rounded-xl bg-[#F8FAF9] p-2 border border-black/[0.04]">
                            <div>
                              <p className="text-[11px] font-bold text-[#0D1117]">Studio One Tower</p>
                              <p className="text-[9px] text-gray-500">Dubai Marina</p>
                            </div>
                            <span className="text-[11px] font-black text-[#00A663]">+AED 826</span>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-xl bg-[#E8F8F0] p-2 text-center text-[9.5px] font-bold text-[#0B3528]">
                        ✓ Rental payouts credited automatically
                      </div>

                      <div className="pt-1 pb-1 flex justify-center">
                        <div className="h-1 w-24 bg-black/20 rounded-full" />
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* =============================================================
                  STEP 3: SELL STATE (Exact Match to Video Spec!)
                  ============================================================= */}
              {activeStep === 3 && (
                <>
                  {/* Floating 1: Left Polaroid Photo Badge (-8deg) */}
                  <div className="absolute top-1/3 -left-6 z-30 -rotate-[8deg] bg-white p-2 rounded-2xl shadow-2xl w-28 text-center transition-transform hover:scale-105">
                    <img
                      src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=300&q=80"
                      alt="Waterfront Canal"
                      className="h-20 w-full object-cover rounded-xl mb-1.5"
                    />
                    <p className="text-[10px] font-bold text-[#0D1117] truncate">Waterfront</p>
                    <p className="text-[8.5px] text-[#00A663] font-semibold">Exit Ready</p>
                  </div>

                  {/* Floating 2: Right Polaroid Photo Badge (+10deg) */}
                  <div className="absolute top-12 -right-4 z-30 rotate-[10deg] bg-white p-2 rounded-2xl shadow-2xl w-28 text-center transition-transform hover:scale-105">
                    <img
                      src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=300&q=80"
                      alt="Modern Apartment"
                      className="h-20 w-full object-cover rounded-xl mb-1.5"
                    />
                    <p className="text-[10px] font-bold text-[#0D1117] truncate">Hittin Views</p>
                    <p className="text-[8.5px] text-[#00A663] font-semibold">Fund Closed</p>
                  </div>

                  {/* Floating 3: Green Tag Action Circle */}
                  <div className="absolute bottom-20 -right-2 z-40 size-16 rounded-full bg-[#00A663] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95">
                    <Tag size={26} strokeWidth={2.2} className="rotate-[-20deg]" />
                  </div>

                  {/* Central Phone Mockup (HITTIN Fund Screen) */}
                  <div className="w-[280px] sm:w-[290px] rounded-[44px] bg-[#12161A] p-[5px] shadow-2xl select-none relative z-10">
                    <div className="rounded-[39px] overflow-hidden bg-white relative flex flex-col justify-between text-[#0D1117] h-[510px] p-3.5">
                      <div className="h-3.5 w-18 bg-black rounded-full mx-auto shrink-0 mb-1" />
                      <PhoneStatusBar />

                      {/* Top Bar with back, share, bookmark icons */}
                      <div className="mt-1 flex items-center justify-between px-1 text-gray-700">
                        <ChevronLeft size={18} className="cursor-pointer" />
                        <span className="text-[11px] font-bold">Opportunity</span>
                        <div className="flex items-center gap-2">
                          <Share2 size={14} className="cursor-pointer" />
                          <Bookmark size={14} className="cursor-pointer" />
                        </div>
                      </div>

                      {/* Commercial Real Estate Image titled "HITTIN" */}
                      <div
                        className="mt-2 h-36 rounded-2xl bg-cover bg-center relative overflow-hidden shadow-xs"
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80")' }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        
                        <div className="absolute top-2 left-2 rounded-full bg-black/60 backdrop-blur-xs px-2 py-0.5 text-[8.5px] font-bold text-white">
                          4 photos • Fund closed
                        </div>

                        <div className="absolute bottom-2 left-2 text-white">
                          <p className="text-[10px] font-bold tracking-wider text-emerald-300 uppercase">Commercial</p>
                          <h4 className="text-sm font-black tracking-tight leading-tight">HITTIN</h4>
                        </div>

                        {/* Pagination Dots */}
                        <div className="absolute bottom-2 right-2 flex gap-1">
                          <span className="size-1.5 rounded-full bg-white" />
                          <span className="size-1.5 rounded-full bg-white/50" />
                          <span className="size-1.5 rounded-full bg-white/50" />
                        </div>
                      </div>

                      {/* Primary Metrics: Stake coverage */}
                      <div className="mt-2 rounded-2xl bg-[#F8FAF9] p-3 border border-black/[0.06] space-y-1">
                        <p className="text-[9.5px] font-bold uppercase tracking-wider text-gray-500">
                          Stake coverage
                        </p>
                        <p className="text-lg font-black text-[#0D1117] tracking-tight">
                          SAR 120,000,000
                        </p>
                        <div className="flex items-center justify-between text-[10px] text-gray-500 pt-1 border-t border-black/[0.04]">
                          <span>561 investors</span>
                          <span className="font-bold text-[#00A663]">18 days left</span>
                        </div>
                      </div>

                      {/* Action Button */}
                      <button
                        type="button"
                        className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#0D1117] py-2.5 text-xs font-bold text-white shadow-md active:scale-95"
                      >
                        <ArrowRightLeft size={13} />
                        Sell Stake &amp; Cash Out
                      </button>

                      <div className="pt-1 pb-1 flex justify-center">
                        <div className="h-1 w-24 bg-black/20 rounded-full" />
                      </div>
                    </div>
                  </div>
                </>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
