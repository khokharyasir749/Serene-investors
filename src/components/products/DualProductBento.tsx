'use client'

import React, { useState } from 'react'
import {
  Play,
  Building,
  CheckCircle2,
  PieChart,
} from 'lucide-react'
import { DeviceFrame } from '@/components/common/DeviceFrame'

export function DualProductBento() {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false)

  const stats = [
    { label: 'Registered users', value: '2M+' },
    { label: 'Property transactions', value: '£1.5B+', sub: 'AED 1.5B+' },
    { label: 'User nationalities', value: '202+' },
    { label: 'Total distributed', value: '£236M+', sub: 'AED 236.9M+' },
  ]

  return (
    <section
      id="products-bento"
      className="relative overflow-hidden bg-white py-20 px-6 lg:px-12 border-b border-black/[0.08]"
      aria-label="Properties and Funds Bento Showcase"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* =========================================================================
            PRE-HEADER: Clean Horizontal 4-Stat Bar Directly Above Cards
            ========================================================================= */}
        <div className="mb-20 rounded-2xl bg-[#F7F5EF] p-6 sm:p-8 border border-black/[0.06] shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-black/[0.08]">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`text-center ${idx > 0 ? 'pt-4 md:pt-0' : ''}`}
              >
                <p className="font-mono text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D1117] tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-xs sm:text-sm font-semibold text-[#4B5563]">
                  {stat.label}
                </p>
                {stat.sub && (
                  <p className="text-[11px] text-[#64748B] font-mono mt-0.5">
                    {stat.sub}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#00A663] mb-3">
            LEADING DIGITAL REAL ESTATE PLATFORM
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D1117] leading-[1.12]">
            Build a global and diversified real estate portfolio
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4B5563]">
            Target individual high-performing residential units or institutional single-asset funds in prime global markets.
          </p>
        </div>

        {/* =========================================================================
            BENTO CARDS CONTAINER
            ========================================================================= */}
        <div className="space-y-12">

          {/* -----------------------------------------------------------------------
              BENTO CARD 1 (Properties): Left Phone Peek | Right Editorial Content
              ----------------------------------------------------------------------- */}
          <div className="rounded-[36px] bg-[#E8F8F0]/40 border border-[#00A663]/20 p-8 sm:p-12 lg:p-14 overflow-hidden relative shadow-sm">
            
            {/* Ambient Background Glow */}
            <div
              className="pointer-events-none absolute -left-20 -top-20 size-80 rounded-full bg-[#00A663]/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column (Phone Showcase Peek) */}
              <div className="lg:col-span-6 relative flex justify-center items-center min-h-[460px]">
                
                {/* Floating Polaroid Badge "+10.4% Boulevard Point" */}
                <div className="absolute -left-2 sm:left-4 top-10 z-20 w-44 sm:w-48 rounded-2xl border border-black/[0.08] bg-white p-2.5 sm:p-3 shadow-xl backdrop-blur-md">
                  <div className="relative h-20 w-full rounded-xl overflow-hidden mb-2">
                    <img
                      src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80"
                      alt="Boulevard Point"
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute right-2 top-2 rounded-full bg-[#00A663] px-2 py-0.5 text-[9.5px] font-extrabold text-white">
                      +10.4%
                    </span>
                  </div>
                  <p className="text-[11px] font-bold text-[#0D1117] truncate">Boulevard Point</p>
                  <p className="text-[9.5px] text-[#64748B]">Downtown • Fully Funded</p>
                </div>

                {/* Main Phone Peek Container */}
                <div className="w-[min(100%,310px)] relative z-10">
                  <DeviceFrame className="shadow-[0_25px_65px_-15px_rgba(11,53,40,0.35)]">
                    <div className="flex-1 bg-white p-3.5 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between pb-1 border-b border-black/[0.06]">
                          <span className="text-[10.5px] font-bold text-[#0D1117]">Properties</span>
                          <span className="text-[9.5px] font-bold text-[#00A663]">Available Now</span>
                        </div>

                        {/* Property Card: Park Islands */}
                        <div className="rounded-2xl border border-black/[0.08] overflow-hidden bg-white shadow-2xs">
                          <div className="relative h-28 w-full">
                            <img
                              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=500&q=80"
                              alt="Park Islands, Dubai Marina"
                              className="h-full w-full object-cover"
                            />
                            <span className="absolute left-2.5 top-2.5 rounded-full bg-[#0B3528]/90 px-2 py-0.5 text-[9.5px] font-bold text-white">
                              Prime Waterfront
                            </span>
                            <span className="absolute right-2.5 top-2.5 rounded-full bg-white/95 px-2 py-0.5 text-[9.5px] font-extrabold text-[#00A663]">
                              7.8% Net Yield
                            </span>
                          </div>

                          <div className="p-3">
                            <p className="text-xs font-bold text-[#0D1117]">Park Islands, Dubai Marina</p>
                            <p className="text-[10px] text-[#64748B]">Purchase price: £1.3M / AED 6.1M</p>

                            <div className="mt-2.5">
                              <div className="flex justify-between text-[10px] font-semibold text-[#0D1117] mb-1">
                                <span>Funding Progress</span>
                                <span className="text-[#00A663]">75% funded</span>
                              </div>
                              <div className="h-1.5 w-full rounded-full bg-black/[0.06] overflow-hidden">
                                <div className="h-full w-[75%] rounded-full bg-[#00A663]" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Quick Trust Pill */}
                        <div className="flex items-center gap-2 rounded-xl bg-[#E8F8F0] p-2 text-[10px] text-[#0B3528] font-semibold">
                          <CheckCircle2 size={13} className="text-[#00A663] shrink-0" />
                          <span>FCA &amp; DFSA Protected SPV Deeds</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#00A663] py-2 text-xs font-bold text-white shadow-2xs hover:bg-[#0B3528] transition-colors"
                      >
                        Invest from £500
                      </button>
                    </div>
                  </DeviceFrame>
                </div>

              </div>

              {/* Right Column (Editorial Text & Actions) */}
              <div className="lg:col-span-6 space-y-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E8F8F0] px-3.5 py-1 text-xs font-bold text-[#00A663] border border-[#00A663]/25">
                  <Building size={13} />
                  FRACTIONAL PROPERTIES
                </span>

                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0D1117] leading-tight">
                  Invest in properties in prime areas
                </h3>

                <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
                  Own shares of individual properties with high-yield and appreciation potential in Dubai / Prime markets. Benefit from effortless digital management, regular passive rental distributions, and complete Land Registry transparency.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#properties"
                    className="inline-flex items-center justify-center rounded-full bg-[#0D1117] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-black transition-colors"
                  >
                    Learn more
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 bg-white/70 px-5 py-3 text-sm font-bold text-[#0D1117] shadow-2xs backdrop-blur-xs hover:bg-white transition-all"
                  >
                    <div className="flex size-5 items-center justify-center rounded-full bg-[#00A663] text-white">
                      <Play size={10} fill="white" />
                    </div>
                    Watch how it works
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* -----------------------------------------------------------------------
              BENTO CARD 2 (Funds - Inverted Layout): Left Editorial | Right Phone Peek
              ----------------------------------------------------------------------- */}
          <div className="rounded-[36px] bg-[#F7F5EF] border border-black/[0.08] p-8 sm:p-12 lg:p-14 overflow-hidden relative shadow-sm">
            
            {/* Ambient Background Glow */}
            <div
              className="pointer-events-none absolute -right-20 -bottom-20 size-80 rounded-full bg-emerald-600/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column (Editorial Text & Actions) */}
              <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0B3528]/10 px-3.5 py-1 text-xs font-bold text-[#0B3528] border border-[#0B3528]/20">
                  <PieChart size={13} />
                  INSTITUTIONAL FUNDS
                </span>

                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0D1117] leading-tight">
                  Invest in private single-asset real estate funds
                </h3>

                <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
                  Own units of exclusive commercial, residential and mixed-use funds across regional high-growth corridors. Gain diversified exposure managed by tier-1 institutional asset managers with targeted internal rates of return.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#funds"
                    className="inline-flex items-center justify-center rounded-full bg-[#0D1117] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-black transition-colors"
                  >
                    Learn more
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 bg-white/80 px-5 py-3 text-sm font-bold text-[#0D1117] shadow-2xs backdrop-blur-xs hover:bg-white transition-all"
                  >
                    <div className="flex size-5 items-center justify-center rounded-full bg-[#00A663] text-white">
                      <Play size={10} fill="white" />
                    </div>
                    Watch how it works
                  </button>
                </div>
              </div>

              {/* Right Column (Phone Showcase Peek - Inverted) */}
              <div className="lg:col-span-6 relative flex justify-center items-center min-h-[460px] order-1 lg:order-2">
                
                {/* Floating Polaroid Badge "+41.4% Al Yasmeen Fund" */}
                <div className="absolute -right-2 sm:right-4 top-10 z-20 w-44 sm:w-50 rounded-2xl border border-black/[0.08] bg-white p-2.5 sm:p-3 shadow-xl backdrop-blur-md">
                  <div className="relative h-20 w-full rounded-xl overflow-hidden mb-2">
                    <img
                      src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=400&q=80"
                      alt="Al Yasmeen Fund"
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute right-2 top-2 rounded-full bg-[#00A663] px-2 py-0.5 text-[9.5px] font-extrabold text-white">
                      +41.4%
                    </span>
                  </div>
                  <p className="text-[11px] font-bold text-[#0D1117] truncate">Al Yasmeen Fund</p>
                  <p className="text-[9.5px] text-[#64748B]">Commercial Fund • Target Hit</p>
                </div>

                {/* Main Phone Peek Container */}
                <div className="w-[min(100%,310px)] relative z-10">
                  <DeviceFrame className="shadow-[0_25px_65px_-15px_rgba(11,53,40,0.35)]">
                    <div className="flex-1 bg-white p-3.5 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between pb-1 border-b border-black/[0.06]">
                          <span className="text-[10.5px] font-bold text-[#0D1117]">Private Funds</span>
                          <span className="rounded-full bg-[#E8F8F0] px-2 py-0.5 text-[9.5px] font-bold text-[#00A663]">
                            CMA &amp; DFSA
                          </span>
                        </div>

                        {/* Fund Card: Riyadh Income Generating Fund */}
                        <div className="rounded-2xl border border-black/[0.08] overflow-hidden bg-white shadow-2xs">
                          <div className="relative h-28 w-full">
                            <img
                              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80"
                              alt="Riyadh Income Generating Fund"
                              className="h-full w-full object-cover"
                            />
                            <span className="absolute left-2.5 top-2.5 rounded-full bg-[#0B3528]/90 px-2 py-0.5 text-[9.5px] font-bold text-white">
                              Institutional Fund
                            </span>
                            <span className="absolute right-2.5 top-2.5 rounded-full bg-white/95 px-2 py-0.5 text-[9.5px] font-extrabold text-[#00A663]">
                              14.2% Target IRR
                            </span>
                          </div>

                          <div className="p-3">
                            <p className="text-xs font-bold text-[#0D1117]">Riyadh Income Generating Fund</p>
                            <p className="text-[10px] text-[#64748B]">SAR 120M fund coverage</p>

                            <div className="mt-2.5">
                              <div className="flex justify-between text-[10px] font-semibold text-[#0D1117] mb-1">
                                <span>Allocation Progress</span>
                                <span className="text-[#00A663]">75% funded</span>
                              </div>
                              <div className="h-1.5 w-full rounded-full bg-black/[0.06] overflow-hidden">
                                <div className="h-full w-[75%] rounded-full bg-[#00A663]" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Fund Feature Tag */}
                        <div className="rounded-xl bg-[#F8FAF9] p-2 text-[10px] text-[#4B5563] space-y-1 border border-black/[0.06]">
                          <div className="flex justify-between">
                            <span>Target Distribution:</span>
                            <strong className="text-[#0D1117]">Quarterly Cash Dividends</strong>
                          </div>
                          <div className="flex justify-between">
                            <span>Minimum Allocation:</span>
                            <strong className="text-[#00A663]">£2,500 / SAR 12,000</strong>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#0D1117] py-2 text-xs font-bold text-white shadow-2xs hover:bg-black transition-colors"
                      >
                        Explore Fund Opportunities
                      </button>
                    </div>
                  </DeviceFrame>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
