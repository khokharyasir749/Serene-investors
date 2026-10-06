'use client'

import React from 'react'
import {
  Sparkles,
  Users,
  Trophy,
  Check,
  Percent,
  Crown,
  Shield,
  Zap,
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
    threshold: '£15,000',
    thresholdAed: 'AED 70k',
    badgeLabel: 'Auto-Reinvest',
    headerBg: 'bg-gradient-to-b from-[#00A663] to-[#0B3528]',
    badgeBg: 'bg-emerald-400/20 border-emerald-400/30 text-emerald-100',
    badgeTextColor: 'text-[#00A663]',
    primaryColor: '#00A663',
    keyPerk: 'Automatic Reinvest Feature',
    perks: [
      'Automatic dividend reinvestment',
      '£15,000 / AED 70k invested threshold',
      'Instant quarterly rental payouts',
      'Quarterly investment portfolio insights',
      'Zero platform exit processing fee',
    ],
  },
  {
    id: 'pro',
    name: 'Pro Tier',
    threshold: '£50,000',
    thresholdAed: 'AED 230k',
    badgeLabel: '1% Cashback',
    headerBg: 'bg-gradient-to-b from-[#7C3AED] to-[#4C1D95]',
    badgeBg: 'bg-purple-400/20 border-purple-400/30 text-purple-100',
    badgeTextColor: 'text-[#7C3AED]',
    primaryColor: '#7C3AED',
    keyPerk: '1.0% Instant Investment Cashback',
    isPopular: true,
    perks: [
      '1.0% Instant cashback on investments',
      '£50,000 / AED 230k invested threshold',
      '48-Hour priority access to new listings',
      'Dedicated private wealth relationship manager',
      'Automatic dividend reinvestment included',
    ],
  },
  {
    id: 'elite',
    name: 'Elite Tier',
    threshold: '£150,000',
    thresholdAed: 'AED 690k',
    badgeLabel: '2% Cashback',
    headerBg: 'bg-gradient-to-b from-[#D97706] to-[#78350F]',
    badgeBg: 'bg-amber-400/20 border-amber-400/30 text-amber-100',
    badgeTextColor: 'text-[#D97706]',
    primaryColor: '#D97706',
    keyPerk: '2.0% Instant Investment Cashback',
    perks: [
      '2.0% Instant cashback on investments',
      '£150,000 / AED 690k invested threshold',
      'Guaranteed allocation on oversubscribed deals',
      'Direct invitations to quarterly VIP investor webinars',
      'Bespoke tax and cross-border structuring guidance',
    ],
  },
  {
    id: 'prestige',
    name: 'Prestige Tier',
    threshold: '£280,000',
    thresholdAed: 'AED 1.29M',
    badgeLabel: '3% + Lounge',
    headerBg: 'bg-gradient-to-b from-[#1E293B] via-[#0F172A] to-black',
    badgeBg: 'bg-amber-400/20 border-amber-400/40 text-amber-200',
    badgeTextColor: 'text-amber-500',
    primaryColor: '#F59E0B',
    keyPerk: '3.0% Cashback & Private Lounge Access',
    perks: [
      '3.0% Instant cashback on all investments',
      '£280,000 / AED 1.29M invested threshold',
      'Global private investor lounge access (London & Dubai)',
      'Off-market institutional property acquisitions',
      'Direct advisory access to Serene executive team',
    ],
  },
]

export function RewardsTiers() {
  return (
    <section
      id="rewards"
      className="relative overflow-hidden bg-[#F7F5EF] py-24 px-6 lg:px-12 border-b border-black/[0.08]"
      aria-label="Rewards & Investor Tiers"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#00A663] mb-3">
            SERENE REWARDS &amp; TIERS
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D1117] leading-[1.12]">
            The more you invest, the more you earn
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4B5563]">
            Unlock higher cashback yields, private event invitations, and VIP services as your portfolio grows.
          </p>
        </div>

        {/* =========================================================================
            TOP: 3 Micro-Feature Highlights
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {/* Micro-feature 1: Cashback */}
          <div className="flex items-start gap-4 rounded-2xl bg-white p-6 border border-black/[0.06] shadow-xs">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#E8F8F0] text-[#00A663]">
              <Percent size={22} strokeWidth={2.2} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0D1117]">Earn cashback up to 3%</h3>
              <p className="mt-1 text-sm text-[#4B5563] leading-relaxed">
                Receive instant cash rebates credited straight into your investment wallet the moment you allocate funds.
              </p>
            </div>
          </div>

          {/* Micro-feature 2: Share and earn */}
          <div className="flex items-start gap-4 rounded-2xl bg-white p-6 border border-black/[0.06] shadow-xs">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#E8F8F0] text-[#00A663]">
              <Users size={22} strokeWidth={2.2} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0D1117]">Share and earn</h3>
              <p className="mt-1 text-sm text-[#4B5563] leading-relaxed">
                Invite friends and fellow investors to earn up to £500 / AED 2,300 bonus cash per funded referral.
              </p>
            </div>
          </div>

          {/* Micro-feature 3: Level up */}
          <div className="flex items-start gap-4 rounded-2xl bg-white p-6 border border-black/[0.06] shadow-xs">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#E8F8F0] text-[#00A663]">
              <Trophy size={22} strokeWidth={2.2} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0D1117]">Level up</h3>
              <p className="mt-1 text-sm text-[#4B5563] leading-relaxed">
                Seamlessly progress through higher tiers automatically based on your total verified holdings on Serene.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MAIN SHOWCASE: 4 Smartphone App Screens Side-By-Side (NO generic cards)
            ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-5 xl:gap-6 items-stretch justify-center">
          {TIERS.map((tier) => (
            <div
              key={tier.id}
              className="relative w-full max-w-[290px] sm:max-w-[310px] mx-auto rounded-[42px] bg-[#0D1117] p-[6px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] border border-white/10 select-none flex flex-col transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Popular Badge on Phone */}
              {tier.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 rounded-full bg-[#7C3AED] px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md border border-white/20">
                  Most Popular
                </div>
              )}

              {/* Screen Canvas */}
              <div className="relative h-full min-h-[540px] w-full overflow-hidden rounded-[36px] bg-white flex flex-col justify-between">
                
                {/* Physical Notch / Dynamic Island */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 h-4 w-20 rounded-full bg-black/90 pointer-events-none" />

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
                    SERENE INVESTOR CLUB
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
