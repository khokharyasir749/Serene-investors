'use client'

import React from 'react'
import {
  Check,
  ArrowRight,
  Wifi,
  Battery,
} from 'lucide-react'

interface TierData {
  id: string
  name: string
  threshold: string
  thresholdAed: string
  badgeLabel: string
  headerBg: string
  badgeBg: string
  badgeTextColor: string
  primaryColor: string
  keyPerk: string
  perks: string[]
  isPopular?: boolean
}

const TIERS: TierData[] = [
  {
    id: 'plus',
    name: 'Plus Tier',
    threshold: 'AED 75,000',
    thresholdAed: 'USD 20k',
    badgeLabel: 'Auto-Invest',
    headerBg: 'bg-gradient-to-b from-[#00A663] to-[#0B3528]',
    badgeBg: 'bg-emerald-400/20 border-emerald-400/30 text-emerald-100',
    badgeTextColor: 'text-[#00A663]',
    primaryColor: '#00A663',
    keyPerk: 'Auto-Invest Feature',
    perks: [
      'Automatic dividend reinvestment',
      'AED 75,000 / USD 20k invested threshold',
      'Instant monthly rental distributions',
      'Quarterly investment portfolio insights',
      'Zero platform exit processing fee',
    ],
  },
  {
    id: 'elite',
    name: 'Elite Tier',
    threshold: 'AED 200,000',
    thresholdAed: 'USD 50k',
    badgeLabel: '1% Cashback',
    headerBg: 'bg-gradient-to-b from-[#7C3AED] to-[#4C1D95]',
    badgeBg: 'bg-purple-400/20 border-purple-400/30 text-purple-100',
    badgeTextColor: 'text-[#7C3AED]',
    primaryColor: '#7C3AED',
    keyPerk: '1.0% Instant Investment Cashback',
    isPopular: true,
    perks: [
      '1.0% Instant cashback on investments',
      'AED 200,000 / USD 50k invested threshold',
      '48-Hour priority access to new listings',
      'Dedicated private wealth relationship manager',
      'Automatic dividend reinvestment included',
    ],
  },
  {
    id: 'private',
    name: 'Private Tier',
    threshold: 'AED 500,000',
    thresholdAed: 'USD 135k',
    badgeLabel: '2% Cashback',
    headerBg: 'bg-gradient-to-b from-[#D97706] to-[#78350F]',
    badgeBg: 'bg-amber-400/20 border-amber-400/30 text-amber-100',
    badgeTextColor: 'text-[#D97706]',
    primaryColor: '#D97706',
    keyPerk: '2.0% Instant Investment Cashback',
    perks: [
      '2.0% Instant cashback on investments',
      'AED 500,000 / USD 135k invested threshold',
      'Guaranteed allocation on oversubscribed deals',
      'Direct invitations to quarterly VIP investor webinars',
      'Golden Visa concierge assistance included',
    ],
  },
  {
    id: 'vip',
    name: 'VIP Tier',
    threshold: 'AED 1,000,000+',
    thresholdAed: 'USD 270k+',
    badgeLabel: '3% + Lounge',
    headerBg: 'bg-gradient-to-b from-[#1E293B] via-[#0F172A] to-black',
    badgeBg: 'bg-amber-400/20 border-amber-400/40 text-amber-200',
    badgeTextColor: 'text-amber-500',
    primaryColor: '#F59E0B',
    keyPerk: '3.0% Cashback & Private Club Access',
    perks: [
      '3.0% Instant cashback on all investments',
      'AED 1,000,000+ invested threshold',
      'Global private investor club & DIFC lounge access',
      'Off-market institutional property acquisitions',
      'Direct advisory access to executive deal team',
    ],
  },
]

// Authentic Reference Icons matching the design screenshot
function CashbackCardIcon() {
  return (
    <svg
      className="size-8 sm:size-9 md:size-10 text-[#00A663]"
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="6" width="30" height="22" rx="4" />
      <line x1="3" y1="13" x2="33" y2="13" />
      <line x1="8" y1="21" x2="13" y2="21" />
      <path
        d="M26.5 19.5c-.7-.8-1.8-.8-2.5 0-.7.8-.7 2 0 2.8l2.5 2.5 2.5-2.5c.7-.8.7-2 0-2.8-.7-.8-1.8-.8-2.5 0z"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function ShareEarnIcon() {
  return (
    <svg
      className="size-8 sm:size-9 md:size-10 text-[#00A663]"
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="15" cy="11" r="4.5" />
      <path d="M7 26c0-4.5 4-7.5 9-7.5" />
      <path d="M22 20.5a3.5 3.5 0 0 1 3.5 3.5" />
      <path d="M25.5 19.5v4.5h-4.5" />
      <path d="M27.5 25.5a3.5 3.5 0 0 1-3.5-3.5" />
      <path d="M24 26.5v-4.5h4.5" />
    </svg>
  )
}

function LevelUpIcon() {
  return (
    <svg
      className="size-8 sm:size-9 md:size-10 text-[#00A663]"
      viewBox="0 0 36 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19h7l2.5 4h9l2.5-4h7v9a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-9z" />
      <circle cx="18" cy="11" r="5" />
      <path d="M18 8v6M16 9.5h3.5a1 1 0 0 1 0 2H16.5a1 1 0 0 0 0 2H20" strokeWidth="1.6" />
    </svg>
  )
}

export function RewardsTiers() {
  return (
    <section
      id="rewards"
      className="relative overflow-hidden bg-white py-20 sm:py-28 px-6 lg:px-12 border-b border-black/[0.06]"
      aria-label="Rewards & Investor Tiers"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Section Heading & Subtitle & Button matching reference screenshot */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Green Kicker / Eyebrow */}
          <p className="text-xs sm:text-sm font-semibold text-[#00A663] mb-3 sm:mb-4 tracking-normal">
            Rewarding investing experience
          </p>

          {/* Main H2 Heading with exact line break and typography */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight text-[#0F172A] leading-[1.15]">
            Start earning rewards as
            <br />
            you grow your investments
          </h2>

          {/* Subtitle / Description */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-[17px] text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            Get cashback, referral bonuses, and exclusive perks to enhance your investment journey. From early access to funds to premium insights, the more you invest, the more you earn.
          </p>

          {/* Centered Dark CTA Button */}
          <div className="mt-7 sm:mt-8 flex justify-center">
            <a
              href="/rewards"
              className="inline-flex items-center justify-center rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white px-7 py-3 text-sm font-semibold shadow-xs transition-all active:scale-95"
            >
              Learn about Rewards
            </a>
          </div>
        </div>

        {/* 3 Circular Micro-Features in Mint Circles with exact icons and bold labels */}
        <div className="mt-14 sm:mt-18 mb-20 sm:mb-24 grid grid-cols-3 max-w-3xl mx-auto gap-4 sm:gap-8 items-start justify-center">
          {/* 1. Earn cashback */}
          <div className="flex flex-col items-center text-center group cursor-pointer">
            <div className="size-18 sm:size-20 md:size-22 rounded-full bg-[#E6F9F0] text-[#00A663] flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shadow-2xs">
              <CashbackCardIcon />
            </div>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg font-extrabold text-[#0F172A] tracking-tight">
              Earn cashback
            </p>
          </div>

          {/* 2. Share and earn */}
          <div className="flex flex-col items-center text-center group cursor-pointer">
            <div className="size-18 sm:size-20 md:size-22 rounded-full bg-[#E6F9F0] text-[#00A663] flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shadow-2xs">
              <ShareEarnIcon />
            </div>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg font-bold text-[#0F172A] tracking-tight">
              Share and earn
            </p>
          </div>

          {/* 3. Level up */}
          <div className="flex flex-col items-center text-center group cursor-pointer">
            <div className="size-18 sm:size-20 md:size-22 rounded-full bg-[#E6F9F0] text-[#00A663] flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shadow-2xs">
              <LevelUpIcon />
            </div>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg font-bold text-[#0F172A] tracking-tight">
              Level up
            </p>
          </div>
        </div>

        {/* =========================================================================
            MAIN SHOWCASE: 4 Smartphone App Screens Side-By-Side (NO generic cards)
            ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-5 xl:gap-6 items-stretch justify-center">
          {TIERS.map((tier) => (
            <div
              key={tier.id}
              className="relative w-full max-w-[290px] sm:max-w-[310px] mx-auto rounded-[50px] bg-gradient-to-br from-[#3b4350] via-[#20252d] to-[#29303a] p-[4px] shadow-[0_32px_75px_-15px_rgba(0,0,0,0.42),0_12px_28px_-8px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.14)] border border-[#485362]/80 select-none flex flex-col transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Outer Metallic Chamfer Highlight */}
              <div className="pointer-events-none absolute inset-0 rounded-[49px] ring-1 ring-inset ring-white/15" aria-hidden="true" />

              {/* Popular Badge on Phone */}
              {tier.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 rounded-full bg-[#7C3AED] px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md border border-white/20">
                  Most Popular
                </div>
              )}

              {/* Inner OLED Pitch-Black Bezel */}
              <div className="relative h-full min-h-[540px] w-full rounded-[46px] bg-[#0a0d12] p-[3.5px] overflow-hidden flex flex-col shadow-inner">
                {/* Screen Canvas */}
                <div className="relative h-full w-full overflow-hidden rounded-[42px] bg-white flex flex-col justify-between">
                  
                  {/* Dynamic Island */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 h-[18px] w-20 rounded-full bg-black flex items-center justify-end px-2 shadow-xs pointer-events-none">
                    <div className="size-2 rounded-full bg-[#0a0d14] ring-1 ring-[#1b2230]" />
                  </div>

                {/* Top Colored Phone Banner */}
                <div className={`${tier.headerBg} pt-8 pb-7 px-4 text-white text-center relative overflow-hidden shrink-0`}>
                  {/* Status Bar simulation */}
                  <div className="flex items-center justify-between text-[10px] text-white/80 px-1 mb-2 font-mono">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                      <Wifi size={10} />
                      <Battery size={11} />
                    </div>
                  </div>

                  {/* App Navigation Title */}
                  <p className="font-mono text-[9px] uppercase tracking-widest text-white/70 font-semibold mb-2">
                    STAKE REWARDS
                  </p>

                  {/* Tier Name */}
                  <h4 className="text-xl font-black tracking-tight text-white">
                    {tier.name}
                  </h4>

                  {/* Threshold Pill */}
                  <div className="mt-2 inline-flex items-center gap-1 rounded-full border px-3 py-1 text-[11px] font-bold backdrop-blur-xs shadow-2xs">
                    <span>Invest {tier.threshold}</span>
                    <span className="text-white/60 text-[9px]">({tier.thresholdAed})</span>
                  </div>

                  {/* Primary Feature Tag */}
                  <div className="mt-3">
                    <span className="inline-block rounded-lg bg-black/30 px-2.5 py-1 text-[10px] font-extrabold text-white tracking-wide border border-white/10">
                      ★ {tier.keyPerk}
                    </span>
                  </div>
                </div>

                {/* White Bottom Sheet with Checkmarked Perks */}
                <div className="relative -mt-4 flex-1 rounded-t-[28px] bg-white p-4 sm:p-5 flex flex-col justify-between shadow-[0_-8px_20px_rgba(0,0,0,0.06)] z-20">
                  
                  {/* Subtle drag indicator on bottom sheet */}
                  <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-black/15" />

                  {/* Benefits List */}
                  <div className="space-y-3">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                      Tier Membership Privileges
                    </p>

                    <div className="space-y-2.5">
                      {tier.perks.map((perk, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-[#0D1117] leading-snug">
                          <div
                            className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full text-white"
                            style={{ backgroundColor: tier.primaryColor }}
                          >
                            <Check size={10} strokeWidth={3} />
                          </div>
                          <span className="font-medium text-[11.5px]">{perk}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button inside phone screen */}
                  <div className="mt-5 pt-3 border-t border-black/[0.06]">
                    <button
                      type="button"
                      className="w-full rounded-xl py-2.5 px-3 text-xs font-bold text-white shadow-xs transition-opacity hover:opacity-95 active:scale-95 flex items-center justify-center gap-1.5"
                      style={{ backgroundColor: tier.primaryColor }}
                    >
                      <span>Unlock {tier.name}</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>

                {/* Bottom Home Swipe Bar */}
                <div className="py-1.5 bg-white shrink-0">
                  <div className="h-1 w-24 bg-black/20 rounded-full mx-auto" />
                </div>

              </div>
            </div>
          </div>
          ))}
        </div>

        {/* Bottom CTA & Verification */}
        <div className="mt-16 text-center">
          <p className="text-xs sm:text-sm text-[#64748B]">
            All tier privileges are activated instantaneously upon meeting verified equity thresholds.
          </p>
        </div>

      </div>
    </section>
  )
}
