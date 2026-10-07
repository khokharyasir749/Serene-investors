'use client'

import React from 'react'
import {
  Wallet,
  ArrowUpRight,
  TrendingUp,
  Clock,
  Sparkles,
  ArrowDownLeft,
} from 'lucide-react'
import { DeviceFrame } from '@/components/common/DeviceFrame'

export function HowYouEarn() {
  return (
    <section
      id="how-you-earn"
      className="relative overflow-hidden bg-white py-24 px-6 lg:px-12 border-b border-black/[0.08]"
      aria-label="How Investors Make Money"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20 sm:mb-28">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#00A663] mb-3">
            IT’S YOUR MONEY, GROW IT
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D1117] leading-[1.12]">
            So, how do I make money?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4B5563]">
            Join thousands of real estate investors who made an average of <span className="font-bold text-[#00A663]">10.2%</span> in 2025
          </p>
        </div>

        {/* 3 STACKED HORIZONTAL SHOWCASE ROWS */}
        <div className="space-y-28 sm:space-y-36">

          {/* =========================================================================
              ROW 1: Passive Income
              Left: Phone Wallet | Right: Editorial Text & Large Stats
              ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: DeviceFrame displaying in-app "Wallet" */}
            <div className="lg:col-span-6 flex justify-center">
              <DeviceFrame className="shadow-[0_25px_65px_-15px_rgba(11,53,40,0.3)]">
                <div className="flex-1 bg-white p-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-black/[0.06]">
                      <span className="text-xs font-bold text-[#0D1117]">Stake Wallet</span>
                      <span className="rounded-full bg-[#E8F8F0] px-2 py-0.5 text-[10px] font-bold text-[#00A663]">
                        Verified
                      </span>
                    </div>

                    {/* Balance Card */}
                    <div className="rounded-2xl bg-gradient-to-br from-[#0B3528] to-[#041a12] p-4 text-white shadow-xs">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-300 font-semibold">
                        TOTAL CASH BALANCE
                      </span>
                      <p className="text-2xl font-black tracking-tight text-white mt-0.5">
                        AED 92,690.00
                      </p>
                      <p className="text-[10px] text-emerald-200 mt-1">USD 25,230 equivalent</p>

                      {/* Deposit / Withdraw Action Buttons */}
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          className="flex items-center justify-center gap-1.5 rounded-xl bg-[#00A663] py-2 text-[11px] font-bold text-white shadow-2xs hover:bg-emerald-600 transition-colors"
                        >
                          <ArrowDownLeft size={13} />
                          + Deposit
                        </button>
                        <button
                          type="button"
                          className="flex items-center justify-center gap-1.5 rounded-xl bg-white/15 py-2 text-[11px] font-bold text-white hover:bg-white/20 transition-colors"
                        >
                          <ArrowUpRight size={13} />
                          Withdraw
                        </button>
                      </div>
                    </div>

                    {/* Transaction History Rows */}
                    <div className="space-y-2 pt-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                        Recent Rental Distributions
                      </span>

                      <div className="flex items-center justify-between rounded-xl bg-[#F8FAF9] p-2.5 border border-black/[0.06]">
                        <div className="flex items-center gap-2">
                          <div className="flex size-7 items-center justify-center rounded-lg bg-[#E8F8F0] text-[#00A663]">
                            <Wallet size={13} />
                          </div>
                          <div>
                            <p className="text-[11px] font-bold text-[#0D1117]">Boulevard Point</p>
                            <p className="text-[9.5px] text-[#64748B]">Monthly Rent Deposit</p>
                          </div>
                        </div>
                        <span className="text-[11.5px] font-extrabold text-[#00A663]">+AED 2,130.00</span>
                      </div>

                      <div className="flex items-center justify-between rounded-xl bg-[#F8FAF9] p-2.5 border border-black/[0.06]">
                        <div className="flex items-center gap-2">
                          <div className="flex size-7 items-center justify-center rounded-lg bg-[#E8F8F0] text-[#00A663]">
                            <Wallet size={13} />
                          </div>
                          <div>
                            <p className="text-[11px] font-bold text-[#0D1117]">Marina Gate 1</p>
                            <p className="text-[9.5px] text-[#64748B]">Monthly Rent Deposit</p>
                          </div>
                        </div>
                        <span className="text-[11.5px] font-extrabold text-[#00A663]">+AED 1,420.00</span>
                      </div>

                      <div className="flex items-center justify-between rounded-xl bg-[#F8FAF9] p-2.5 border border-black/[0.06]">
                        <div className="flex items-center gap-2">
                          <div className="flex size-7 items-center justify-center rounded-lg bg-[#E8F8F0] text-[#00A663]">
                            <Wallet size={13} />
                          </div>
                          <div>
                            <p className="text-[11px] font-bold text-[#0D1117]">Studio One Tower</p>
                            <p className="text-[9.5px] text-[#64748B]">Monthly Rent Deposit</p>
                          </div>
                        </div>
                        <span className="text-[11.5px] font-extrabold text-[#00A663]">+AED 826.00</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-[#E8F8F0] p-2 text-center text-[10px] font-bold text-[#0B3528]">
                    ✓ Distributed automatically on the 1st of every month
                  </div>
                </div>
              </DeviceFrame>
            </div>

            {/* Right: Editorial text & stats */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E8F8F0] px-3.5 py-1 text-xs font-bold text-[#00A663]">
                <Sparkles size={13} />
                PASSIVE CASH FLOW
              </span>

              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0D1117] leading-tight">
                Earn consistent passive income
              </h3>

              <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-xl">
                Build new income streams with rental payments from income generating properties and funds, paid straight to your Stake wallet.
              </p>

              {/* Large Stat Blocks */}
              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-black/[0.08]">
                <div>
                  <p className="font-mono text-3xl sm:text-4xl font-black text-[#0D1117] tracking-tight">
                    AED 31M+
                  </p>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-1 font-medium">
                    Total Rental Income Paid
                  </p>
                </div>
                <div>
                  <p className="font-mono text-3xl sm:text-4xl font-black text-[#00A663] tracking-tight">
                    5.30%
                  </p>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-1 font-medium">
                    Average Rental Yield in 2025
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              ROW 2: Capital Appreciation
              Left: Editorial Text & Large Stats | Right: Phone with Circle Backdrop
              ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Editorial text */}
            <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E8F8F0] px-3.5 py-1 text-xs font-bold text-[#00A663]">
                <TrendingUp size={13} />
                EQUITY COMPOUNDING
              </span>

              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0D1117] leading-tight">
                Long term capital appreciation
              </h3>

              <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-xl">
                Watch your investment grow as prime property values appreciate over holding cycles and institutional funds near scheduled capital distributions.
              </p>

              {/* Large Stat Blocks */}
              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-black/[0.08]">
                <div>
                  <p className="font-mono text-3xl sm:text-4xl font-black text-[#0D1117] tracking-tight">
                    600+
                  </p>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-1 font-medium">
                    Properties Funded Since 2021
                  </p>
                </div>
                <div>
                  <p className="font-mono text-3xl sm:text-4xl font-black text-[#00A663] tracking-tight">
                    5.40%
                  </p>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-1 font-medium">
                    Average Investor Appreciation in 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Right: DeviceFrame with large solid light-green circle backdrop */}
            <div className="lg:col-span-6 flex justify-center relative order-1 lg:order-2">
              {/* Large solid light-green circle backdrop */}
              <div
                className="w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full bg-[#E8F8F0] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
                aria-hidden="true"
              />

              <DeviceFrame className="shadow-[0_25px_65px_-15px_rgba(11,53,40,0.3)]">
                <div className="flex-1 bg-white p-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-black/[0.06]">
                      <span className="text-xs font-bold text-[#0D1117]">Portfolio Growth</span>
                      <span className="text-[10px] font-bold text-[#00A663]">+30.8% Total</span>
                    </div>

                    {/* Chart Card */}
                    <div className="rounded-2xl bg-[#0B3528] p-4 text-white">
                      <span className="text-[9px] uppercase font-bold text-emerald-300">Capital Value</span>
                      <p className="text-2xl font-black text-white mt-0.5">AED 1,236,000.00</p>
                      
                      {/* Growth Curve */}
                      <div className="mt-3 h-14 w-full">
                        <svg viewBox="0 0 100 40" className="h-full w-full overflow-visible">
                          <path
                            d="M0 35 Q 25 30, 45 20 T 75 14 T 100 5"
                            fill="none"
                            stroke="#00A663"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                          <path
                            d="M0 35 Q 25 30, 45 20 T 75 14 T 100 5 L 100 40 L 0 40 Z"
                            fill="rgba(0, 166, 99, 0.2)"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Holdings with Capital Growth */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                        Appreciating Assets
                      </span>

                      <div className="flex items-center justify-between rounded-xl bg-[#F8FAF9] p-2.5 border border-black/[0.06]">
                        <div>
                          <p className="text-[11px] font-bold text-[#0D1117]">Boulevard Point</p>
                          <p className="text-[9px] text-[#64748B]">Downtown Dubai</p>
                        </div>
                        <span className="rounded-full bg-[#E8F8F0] px-2 py-0.5 text-[10px] font-bold text-[#00A663]">
                          +10.4% Apprec.
                        </span>
                      </div>

                      <div className="flex items-center justify-between rounded-xl bg-[#F8FAF9] p-2.5 border border-black/[0.06]">
                        <div>
                          <p className="text-[11px] font-bold text-[#0D1117]">Marina Gate 1</p>
                          <p className="text-[9px] text-[#64748B]">Dubai Marina</p>
                        </div>
                        <span className="rounded-full bg-[#E8F8F0] px-2 py-0.5 text-[10px] font-bold text-[#00A663]">
                          +12.4% Apprec.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-[#F8FAF9] p-2 text-center text-[10px] text-[#64748B] font-medium border border-black/[0.06]">
                    Independent RICS quarterly valuations
                  </div>
                </div>
              </DeviceFrame>
            </div>
          </div>

          {/* =========================================================================
              ROW 3: Liquidity
              Left: Phone Property Listing | Right: Editorial Text & Large Stats
              ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: DeviceFrame displaying property listing screen */}
            <div className="lg:col-span-6 flex justify-center">
              <DeviceFrame className="shadow-[0_25px_65px_-15px_rgba(11,53,40,0.3)]">
                <div className="flex-1 bg-white p-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-black/[0.06]">
                      <span className="text-xs font-bold text-[#0D1117]">Secondary Listing</span>
                      <span className="rounded-full bg-[#00A663] px-2 py-0.5 text-[10px] font-bold text-white">
                        Exit Window Open
                      </span>
                    </div>

                    {/* Property Image & Details */}
                    <div className="rounded-2xl border border-black/[0.08] overflow-hidden bg-white shadow-2xs">
                      <div className="relative h-28 w-full">
                        <img
                          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80"
                          alt="Studio One"
                          className="h-full w-full object-cover"
                        />
                        <span className="absolute left-2.5 top-2.5 rounded-full bg-[#0D1117]/90 px-2 py-0.5 text-[9.5px] font-bold text-white">
                          Verified Asset
                        </span>
                      </div>
                      <div className="p-3">
                        <p className="text-xs font-bold text-[#0D1117]">Studio One, Dubai Marina</p>
                        <p className="text-[10px] text-[#64748B]">Prime High-Yield Unit</p>

                        <div className="mt-2.5 flex items-center justify-between text-xs">
                          <span className="text-[#64748B] text-[10px]">5-Year Total Return:</span>
                          <span className="font-extrabold text-[#00A663]">47.5%</span>
                        </div>

                        {/* 75% funded meter */}
                        <div className="mt-2">
                          <div className="flex justify-between text-[10px] text-[#64748B] mb-1 font-medium">
                            <span>Funding Progress</span>
                            <span className="font-bold text-[#0D1117]">75% funded</span>
                          </div>
                          <div className="h-1.5 w-full rounded-full bg-black/[0.06] overflow-hidden">
                            <div className="h-full w-[75%] rounded-full bg-[#00A663]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Exit Guarantee Pill */}
                    <div className="rounded-xl bg-[#E8F8F0] p-2.5 text-xs text-[#0B3528] space-y-1">
                      <div className="flex items-center gap-1.5 font-bold text-[11px]">
                        <Clock size={13} className="text-[#00A663]" />
                        <span>Bi-Annual Liquidity Window</span>
                      </div>
                      <p className="text-[10px] text-[#4B5563]">
                        Matched with institutional &amp; secondary buyers with 0% exit fee.
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#00A663] py-2.5 text-xs font-bold text-white shadow-md active:scale-95"
                  >
                    View Exit Opportunities &rarr;
                  </button>
                </div>
              </DeviceFrame>
            </div>

            {/* Right: Editorial text & stats */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E8F8F0] px-3.5 py-1 text-xs font-bold text-[#00A663]">
                <Clock size={13} />
                FLEXIBLE LIQUIDITY
              </span>

              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0D1117] leading-tight">
                Liquidity, when you need it most
              </h3>

              <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-xl">
                Exit your investments at maturity or take early profits by selling during our bi-annual exit windows.
              </p>

              {/* Large Stat Blocks */}
              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-black/[0.08]">
                <div>
                  <p className="font-mono text-3xl sm:text-4xl font-black text-[#0D1117] tracking-tight">
                    38+
                  </p>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-1 font-medium">
                    Properties Fully Exited
                  </p>
                </div>
                <div>
                  <p className="font-mono text-3xl sm:text-4xl font-black text-[#00A663] tracking-tight">
                    AED 33M+
                  </p>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-1 font-medium">
                    Total Traded During Exit Windows
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
