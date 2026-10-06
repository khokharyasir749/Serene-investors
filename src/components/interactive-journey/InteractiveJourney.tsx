'use client'

import React, { useState } from 'react'
import {
  Compass,
  Coins,
  TrendingUp,
  ArrowRightLeft,
  CheckCircle2,
  ShoppingCart,
  Wallet,
} from 'lucide-react'
import { DeviceFrame } from '@/components/common/DeviceFrame'

export function InteractiveJourney() {
  const [activeStep, setActiveStep] = useState<number>(0)

  const steps = [
    {
      id: 0,
      title: 'Browse',
      description: 'Access prime real estate across multiple markets',
      icon: Compass,
    },
    {
      id: 1,
      title: 'Invest',
      description: 'Own a piece of the ones you love, from only USD 150 / £500',
      icon: Coins,
      hasPaymentIcons: true,
    },
    {
      id: 2,
      title: 'Earn',
      description: 'Enjoy regular passive income with no effort',
      icon: TrendingUp,
      walletPill: 'Paid directly to your wallet',
    },
    {
      id: 3,
      title: 'Sell',
      description: 'From entry to exit - liquidity when you need it',
      icon: ArrowRightLeft,
    },
  ]

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#F7F5EF] py-20 px-6 lg:px-12 border-b border-black/[0.08]"
    >
      <div className="mx-auto max-w-7xl">
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-16">
          
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
                      : 'opacity-35 hover:opacity-75 bg-white/40 border-black/[0.05] hover:bg-white/80'
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
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#00A663]">
                          0{step.id + 1}
                        </span>
                        <h3 className="text-xl font-bold tracking-tight text-[#0D1117]">
                          {step.title}
                        </h3>
                      </div>

                      <p className="mt-1.5 text-sm sm:text-[0.9375rem] leading-relaxed text-[#4B5563]">
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

                      {/* Earn: Wallet Pill */}
                      {step.walletPill && (
                        <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#E8F8F0] px-3 py-1 text-xs font-semibold text-[#00A663]">
                          <Wallet size={12} />
                          <span>{step.walletPill}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Soft Mint Container with Dynamic DeviceFrame & Badges
              ========================================================================= */}
          <div className="lg:col-span-7">
            <div className="bg-[#E8F8F0]/70 rounded-[36px] p-6 sm:p-10 lg:p-12 relative flex items-center justify-center min-h-[580px] sm:min-h-[640px] overflow-hidden border border-[#00A663]/15 shadow-sm">
              
              {/* Background ambient lighting */}
              <div
                className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-[#00A663]/15 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -left-20 -bottom-20 size-72 rounded-full bg-white/60 blur-3xl"
                aria-hidden="true"
              />

              {/* Floating Polaroid Badge 1: Building thumbnail + +10.4% */}
              <div className="absolute -left-2 sm:-left-4 top-1/4 z-20 w-44 sm:w-52 rounded-2xl border border-black/[0.08] bg-white p-2.5 sm:p-3 shadow-xl backdrop-blur-md animate-float">
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

              {/* Floating Polaroid Badge 2: Cart icon badge */}
              <div className="absolute -right-2 sm:-right-4 bottom-1/4 z-20 flex items-center gap-3 rounded-2xl border border-black/[0.08] bg-white p-3 sm:p-3.5 shadow-xl backdrop-blur-md">
                <div className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-xl bg-[#00A663] text-white shadow-2xs">
                  <ShoppingCart size={18} />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-[#00A663]" />
                    <span className="text-[10px] font-bold uppercase text-[#00A663]">Order Confirmed</span>
                  </div>
                  <p className="text-xs sm:text-[13px] font-bold text-[#0D1117]">10 Shares Acquired</p>
                  <p className="text-[10px] text-[#64748B]">£500 • Deed Allocated</p>
                </div>
              </div>

              {/* Central Dynamic Phone Mockup */}
              <DeviceFrame className="shadow-[0_30px_70px_-15px_rgba(11,53,40,0.45)]">
                
                {/* ----------------- STEP 0: BROWSE SCREEN ----------------- */}
                {activeStep === 0 && (
                  <div className="flex-1 bg-white p-3.5 flex flex-col gap-3">
                    {/* Top Segmented Tabs */}
                    <div className="flex items-center justify-between rounded-xl bg-black/[0.04] p-1 text-[11px] font-semibold text-[#64748B]">
                      <span className="rounded-lg bg-white px-2.5 py-1 text-[#0D1117] font-bold shadow-2xs">
                        Available (7)
                      </span>
                      <span className="px-2 py-1">Funded</span>
                      <span className="px-2 py-1">Exited</span>
                    </div>

                    {/* Featured Property Card */}
                    <div className="rounded-2xl border border-black/[0.08] overflow-hidden bg-white shadow-xs">
                      <div className="relative h-32 w-full">
                        <img
                          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80"
                          alt="Marina Gate, Dubai Marina"
                          className="h-full w-full object-cover"
                        />
                        <span className="absolute left-2.5 top-2.5 rounded-full bg-[#0B3528]/90 px-2.5 py-0.5 text-[10px] font-bold text-white backdrop-blur-xs">
                          Prime Tower
                        </span>
                        <span className="absolute right-2.5 top-2.5 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-extrabold text-[#00A663] backdrop-blur-xs shadow-2xs">
                          +12.4% Est. Return
                        </span>
                      </div>
                      
                      <div className="p-3">
                        <h4 className="text-xs font-bold text-[#0D1117]">Marina Gate, Dubai Marina</h4>
                        <p className="text-[10px] text-[#64748B]">Luxury Waterfront Residence</p>
                        
                        <div className="mt-2.5 flex items-center justify-between text-[11px]">
                          <span className="font-extrabold text-[#0D1117]">£315,000 / AED 1.45M</span>
                          <span className="text-[#00A663] font-bold">84% Funded</span>
                        </div>
                        <div className="mt-1 h-1.5 w-full rounded-full bg-black/[0.06] overflow-hidden">
                          <div className="h-full w-[84%] rounded-full bg-[#00A663]" />
                        </div>
                      </div>
                    </div>

                    {/* Secondary Compact Card */}
                    <div className="flex items-center gap-2.5 rounded-xl border border-black/[0.08] p-2 bg-[#F8FAF9]">
                      <img
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=200&q=80"
                        alt="The Mayfair Core"
                        className="size-11 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-bold text-[#0D1117] truncate">The Mayfair Core Portfolio</p>
                        <p className="text-[9.5px] text-[#64748B]">London W1 • 7.4% Net Yield</p>
                        <span className="text-[9.5px] font-bold text-[#00A663]">92% Funded</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* ----------------- STEP 1: INVEST SCREEN ----------------- */}
                {activeStep === 1 && (
                  <div className="flex-1 bg-white p-3.5 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="rounded-xl border border-black/[0.08] bg-[#F8FAF9] p-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">Target Property</span>
                        <p className="text-xs font-bold text-[#0D1117] mt-0.5">Marina Gate Tower 1</p>
                        <p className="text-[10.5px] text-[#00A663] font-semibold">Price per share: £50.00 / AED 230</p>
                      </div>

                      {/* Slider Simulation */}
                      <div className="rounded-2xl border border-[#00A663]/30 bg-white p-3.5 text-center shadow-xs">
                        <span className="text-[10px] uppercase font-bold text-[#64748B]">Select Investment Amount</span>
                        <p className="text-2xl font-black text-[#0D1117] tracking-tight mt-1">£500 / AED 2,300</p>
                        <div className="mt-2.5 flex items-center justify-between text-[10px] text-[#64748B]">
                          <span>Min: £500</span>
                          <span className="text-[#00A663] font-bold">10 Fractional Shares</span>
                          <span>Max: £50,000</span>
                        </div>
                        <div className="mt-1.5 h-2 w-full rounded-full bg-[#E8F8F0] p-0.5">
                          <div className="h-full w-[35%] rounded-full bg-[#00A663]" />
                        </div>
                      </div>

                      {/* Projected Returns Box */}
                      <div className="rounded-xl bg-[#E8F8F0] p-3 border border-[#00A663]/20 space-y-1 text-xs">
                        <div className="flex justify-between">
                          <span className="text-[#0B3528] text-[11px]">Est. Annual Rental Payout:</span>
                          <span className="font-extrabold text-[#00A663]">+£37.00 / yr</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#0B3528] text-[11px]">Projected Capital Growth:</span>
                          <span className="font-extrabold text-[#00A663]">+£136.15</span>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#00A663] py-2.5 text-xs font-bold text-white shadow-md active:scale-95 hover:bg-[#0B3528] transition-colors"
                    >
                      <Coins size={14} />
                      Invest £500 Now
                    </button>
                  </div>
                )}

                {/* ----------------- STEP 2: EARN SCREEN ----------------- */}
                {activeStep === 2 && (
                  <div className="flex-1 bg-white p-3.5 flex flex-col justify-between">
                    <div className="space-y-3">
                      {/* Big Returns Header */}
                      <div className="rounded-2xl bg-gradient-to-br from-[#0B3528] to-[#062017] p-4 text-white shadow-xs">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-300">All Time Returns</span>
                        <p className="text-2xl font-black tracking-tight text-white mt-0.5">£89,000.00</p>
                        <p className="text-[10px] text-emerald-200 mt-0.5 font-bold">+30.8% Total Gain</p>

                        {/* Rental payout progress */}
                        <div className="mt-3">
                          <div className="flex justify-between text-[10px] text-emerald-200 mb-1">
                            <span>Payout Schedule</span>
                            <span className="font-bold text-white">Next: 15 Oct</span>
                          </div>
                          <div className="h-1.5 w-full rounded-full bg-white/20 overflow-hidden">
                            <div className="h-full w-[85%] rounded-full bg-[#00A663]" />
                          </div>
                        </div>
                      </div>

                      {/* Deposit Pill */}
                      <div className="flex items-center gap-2.5 rounded-xl bg-[#E8F8F0] p-2.5 border border-[#00A663]/25 text-xs text-[#0B3528]">
                        <CheckCircle2 size={16} className="text-[#00A663] shrink-0" />
                        <div>
                          <p className="font-bold text-[11px]">Rental Payout Received</p>
                          <p className="text-[10px] text-[#4B5563]">£1,450.00 deposited directly into wallet</p>
                        </div>
                      </div>

                      {/* Wallet Summary */}
                      <div className="rounded-xl border border-black/[0.08] p-3 space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">Recent Yield Payments</span>
                        <div className="flex justify-between text-[11px]">
                          <span>Marina Gate — Monthly</span>
                          <strong className="text-[#00A663]">+£320.00</strong>
                        </div>
                        <div className="flex justify-between text-[11px] border-t border-black/[0.05] pt-1.5">
                          <span>Mayfair Core — Q3 Dividend</span>
                          <strong className="text-[#00A663]">+£1,130.00</strong>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl bg-[#F8FAF9] p-2.5 text-center text-[10.5px] text-[#64748B] font-medium border border-black/[0.06]">
                      ✓ Automated direct bank withdrawal supported
                    </div>
                  </div>
                )}

                {/* ----------------- STEP 3: SELL SCREEN ----------------- */}
                {activeStep === 3 && (
                  <div className="flex-1 bg-white p-3.5 flex flex-col justify-between">
                    <div className="space-y-3">
                      {/* Secondary Market Status Pill */}
                      <div className="flex items-center justify-between rounded-xl bg-[#E8F8F0] px-3 py-2 border border-[#00A663]/30">
                        <span className="text-[11px] font-bold text-[#0B3528]">Secondary Market</span>
                        <span className="flex items-center gap-1 text-[11px] font-extrabold text-[#00A663]">
                          <span className="size-1.5 rounded-full bg-[#00A663] animate-pulse" />
                          Exit Window Open
                        </span>
                      </div>

                      {/* Asset Card */}
                      <div className="rounded-2xl border border-black/[0.08] bg-white p-3.5 shadow-xs">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">Liquidating Holding</span>
                        <p className="text-xs font-bold text-[#0D1117] mt-0.5">Marina Gate Tower 1</p>
                        
                        <div className="mt-2.5 grid grid-cols-2 gap-2 text-xs">
                          <div className="rounded-lg bg-[#F8FAF9] p-2">
                            <span className="text-[9.5px] text-[#64748B]">Holding Shares</span>
                            <p className="font-bold text-[#0D1117]">20 Shares</p>
                          </div>
                          <div className="rounded-lg bg-[#F8FAF9] p-2">
                            <span className="text-[9.5px] text-[#64748B]">Share Value</span>
                            <p className="font-bold text-[#00A663]">£58.40 (+16.8%)</p>
                          </div>
                        </div>
                      </div>

                      {/* Liquidity Proceeds */}
                      <div className="rounded-xl border border-black/[0.08] p-3 text-xs space-y-1.5">
                        <div className="flex justify-between">
                          <span className="text-[#64748B]">Estimated Exit Value:</span>
                          <strong className="text-[#0D1117]">£1,168.00</strong>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#64748B]">Exit Fee (0%):</span>
                          <strong className="text-[#00A663]">£0.00</strong>
                        </div>
                        <div className="flex justify-between border-t border-black/[0.06] pt-1.5 font-bold">
                          <span>Net Cash Proceeds:</span>
                          <span className="text-[#00A663] text-sm">£1,168.00</span>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0D1117] py-2.5 text-xs font-bold text-white shadow-md active:scale-95 hover:bg-black transition-colors"
                    >
                      <ArrowRightLeft size={14} />
                      Sell Stake &amp; Cash Out
                    </button>
                  </div>
                )}

              </DeviceFrame>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
