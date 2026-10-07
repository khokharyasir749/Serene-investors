'use client'

import React, { useState } from 'react'
import {
  ShieldCheck,
  Lock,
  Landmark,
  Scale,
  ChevronRight,
  Award,
} from 'lucide-react'

export function SecurityRegulation() {
  const [activeTab, setActiveTab] = useState<'dual' | 'ownership'>('dual')

  const backers = [
    { name: 'Emirates NBD', type: 'Tier-1 Banking Group' },
    { name: 'Property Finder', type: 'Real Estate Portal' },
    { name: 'Mubadala', type: 'Sovereign Wealth Fund' },
    { name: 'Wa’ed Ventures', type: 'Aramco Entrepreneurship' },
    { name: 'MEVP', type: 'Middle East Venture' },
    { name: 'Republic', type: 'Global FinTech Syndicate' },
    { name: 'Al Jamiah Holding', type: 'Institutional Real Estate' },
    { name: 'Madison Marquette', type: 'US Real Estate Partner' },
    { name: 'Ellington', type: 'Bespoke Property Developer' },
    { name: 'STV', type: 'Technology Venture Fund' },
    { name: 'GFH', type: 'Financial Group' },
    { name: 'Vivium', type: 'Family Office Investments' },
    { name: 'BECO Capital', type: 'Venture Partners' },
  ]

  return (
    <section
      id="security-regulation"
      className="relative overflow-hidden bg-[#0B131F] py-24 px-6 lg:px-12 text-white border-t border-b border-white/10"
      aria-label="Security and Regulation"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -left-40 top-0 size-96 rounded-full bg-emerald-500/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-0 size-96 rounded-full bg-blue-500/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        
        {/* =========================================================================
            HEADER: Safety never sleeps -> Robustly regulated
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#A7F3D0] mb-3">
            SAFETY NEVER SLEEPS
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
            Robustly regulated
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
            Safeguarding your wealth through stringent global regulatory frameworks, segregated custodial bank accounts, and direct legal title registration.
          </p>

          {/* Filter Tabs */}
          <div className="mt-10 inline-flex items-center gap-2 rounded-full bg-white/5 p-1.5 border border-white/10 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setActiveTab('dual')}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === 'dual'
                  ? 'bg-slate-800 text-white shadow-md border border-white/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ShieldCheck size={16} className={activeTab === 'dual' ? 'text-[#00A663]' : ''} />
              Dual regulated
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('ownership')}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === 'ownership'
                  ? 'bg-slate-800 text-white shadow-md border border-white/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Lock size={16} className={activeTab === 'ownership' ? 'text-[#00A663]' : ''} />
              Ownership protection
            </button>
          </div>
        </div>

        {/* =========================================================================
            TWO SPLIT REGULATORY CARDS
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          
          {/* Card A (Left): Narrative card */}
          <div className="lg:col-span-5 rounded-[32px] bg-white/[0.04] p-8 sm:p-10 border border-white/10 backdrop-blur-sm flex flex-col justify-between hover:bg-white/[0.06] transition-colors">
            <div>
              <div className="flex size-14 items-center justify-center rounded-2xl bg-[#00A663]/20 border border-[#00A663]/30 text-[#A7F3D0] mb-6">
                {activeTab === 'dual' ? <Scale size={26} /> : <Lock size={26} />}
              </div>

              <span className="font-mono text-xs uppercase tracking-wider text-[#A7F3D0] font-bold">
                {activeTab === 'dual' ? 'INSTITUTIONAL OVERSIGHT' : 'LEGAL TITLES'}
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-2 leading-snug">
                {activeTab === 'dual' ? 'Dual regulated' : 'Ownership protection'}
              </h3>

              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeTab === 'dual'
                  ? 'Invest with the assurance that we are dual regulated by the most prestigious regulators in the Middle East.'
                  : 'We provide verifiable ownership documents, celebrated partnerships with government entities like DIFC and Absher, and the backing of industry giants such as Aramco.'}
              </p>
            </div>

            <div className="pt-8">
              <a
                href="#regulatory-framework"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-bold text-white hover:bg-white/10 transition-colors"
              >
                <span>Learn more</span>
                <ChevronRight size={14} />
              </a>
            </div>
          </div>

          {/* Card B (Right): Split Regulatory Authority Items */}
          <div className="lg:col-span-7 space-y-6">
            
            {activeTab === 'dual' ? (
              <>
                {/* Top item: DFSA */}
                <div className="rounded-[30px] bg-white/[0.04] p-7 sm:p-8 border border-white/10 backdrop-blur-sm hover:bg-white/[0.06] transition-colors">
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="flex size-12 sm:size-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15 border border-emerald-400/25 text-[#A7F3D0]">
                      <Landmark size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold font-mono text-[#A7F3D0]">
                          UAE • DIFC
                        </span>
                        <span className="text-xs text-slate-400">• DFSA Operator Licence</span>
                      </div>
                      <h4 className="text-xl font-bold text-white tracking-tight mt-1.5">
                        Regulated by the DFSA in the UAE
                      </h4>
                      <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                        An independent regulator of financial services conducted in or from the DIFC, a purpose-built financial free zone in Dubai. Stake also holds an Islamic Finance Window endorsement.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom item: CMA */}
                <div className="rounded-[30px] bg-white/[0.04] p-7 sm:p-8 border border-white/10 backdrop-blur-sm hover:bg-white/[0.06] transition-colors">
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="flex size-12 sm:size-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/15 border border-blue-400/25 text-blue-300">
                      <Award size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-blue-500/20 px-2.5 py-0.5 text-[10px] font-bold font-mono text-blue-300">
                          SAUDI ARABIA • CMA
                        </span>
                        <span className="text-xs text-slate-400">• FinTech Lab Permit: 05-53-2023</span>
                      </div>
                      <h4 className="text-xl font-bold text-white tracking-tight mt-1.5">
                        Regulated by the CMA in Saudi Arabia
                      </h4>
                      <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                        We’re regulated by the Capital Markets Authority (CMA) in Saudi Arabia to enter under its FinTech Lab and licensed to launch real estate investment fund opportunities in and from the Kingdom.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Ownership item 1: DIFC & DLD */}
                <div className="rounded-[30px] bg-white/[0.04] p-7 sm:p-8 border border-white/10 backdrop-blur-sm hover:bg-white/[0.06] transition-colors">
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="flex size-12 sm:size-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15 border border-emerald-400/25 text-[#A7F3D0]">
                      <Landmark size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold font-mono text-[#A7F3D0]">
                          DUBAI LAND DEPARTMENT
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-white tracking-tight mt-1.5">
                        Share Certificates and Title Deeds in Dubai
                      </h4>
                      <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                        Share Certificates are backed by the Dubai International Financial Centre (DIFC), and Title Deeds are issued by the Dubai Land Department (DLD).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ownership item 2: Saudi Fund Units */}
                <div className="rounded-[30px] bg-white/[0.04] p-7 sm:p-8 border border-white/10 backdrop-blur-sm hover:bg-white/[0.06] transition-colors">
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="flex size-12 sm:size-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/15 border border-blue-400/25 text-blue-300">
                      <Award size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-blue-500/20 px-2.5 py-0.5 text-[10px] font-bold font-mono text-blue-300">
                          AUTHORIZED ADMINISTRATORS
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-white tracking-tight mt-1.5">
                        Fund Unit Certificates in Saudi Arabia
                      </h4>
                      <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                        Subscription certificates and fund unit registries are issued by professional licensed fund administrators in Saudi Arabia.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

          </div>

        </div>

        {/* =========================================================================
            "WE'RE BACKED BY" INSTITUTIONAL LOGOS GRID
            ========================================================================= */}
        <div className="pt-12 border-t border-white/10">
          <div className="text-center mb-10">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              WE&apos;RE BACKED BY
            </p>
            <p className="text-sm text-slate-400 mt-1">
              Global venture capital, premier sovereign funds, and market-leading financial institutions
            </p>
          </div>

          {/* Institutional Monochrome Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 items-center">
            {backers.map((backer) => (
              <div
                key={backer.name}
                className="group flex flex-col items-center justify-center rounded-2xl bg-white/[0.03] p-4 border border-white/5 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-200 text-center min-h-[84px]"
              >
                <span className="font-sans text-sm sm:text-base font-extrabold tracking-tight text-white/90 group-hover:text-white transition-colors">
                  {backer.name}
                </span>
                <span className="text-[10px] text-slate-400 font-mono mt-0.5">
                  {backer.type}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
