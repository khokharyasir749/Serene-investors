'use client'

import React from 'react'
import Link from 'next/link'
import {
  Apple,
  Play,
} from 'lucide-react'

export function StakeFooterComplete() {
  return (
    <footer className="relative bg-[#060D17] text-white overflow-hidden" aria-label="Footer and App Download">
      
      {/* =========================================================================
          BOTTOM CTA BANNER: Full-width Emerald Card with Tilted Phone
          ========================================================================= */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 pt-16 sm:pt-24 pb-16">
        <div className="relative rounded-[36px] bg-gradient-to-r from-[#00A663] via-[#047847] to-[#0B3528] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-emerald-400/20">
          
          {/* Background Ambient Glow & Patterns */}
          <div
            className="pointer-events-none absolute -left-20 -bottom-20 size-80 rounded-full bg-white/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute right-1/4 top-0 size-96 rounded-full bg-emerald-300/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column: Heading, Subtext, App Store Buttons */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/20 px-3.5 py-1 text-xs font-bold text-emerald-100 backdrop-blur-xs border border-white/15">
                <span className="size-2 rounded-full bg-emerald-300 animate-ping" />
                AVAILABLE ON IOS &amp; ANDROID
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.12]">
                The modern way for anyone to invest in real estate
              </h2>

              <p className="text-base sm:text-lg text-emerald-50/90 leading-relaxed max-w-lg">
                Join over 2,000,000 users worldwide building wealth through fractionally owned, high-performing global real estate assets. Start with just £500 / AED 2,000.
              </p>

              {/* App Store and Google Play Badges */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {/* App Store Button */}
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl bg-black px-5 py-3 text-white transition-all hover:bg-neutral-900 active:scale-95 shadow-lg border border-white/10"
                >
                  <Apple size={28} className="fill-white" />
                  <div className="text-left">
                    <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400 leading-none">
                      Download on the
                    </p>
                    <p className="text-sm font-bold leading-tight tracking-tight mt-0.5">
                      App Store
                    </p>
                  </div>
                </a>

                {/* Google Play Button */}
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl bg-black px-5 py-3 text-white transition-all hover:bg-neutral-900 active:scale-95 shadow-lg border border-white/10"
                >
                  <Play size={24} className="fill-white text-white" />
                  <div className="text-left">
                    <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400 leading-none">
                      GET IT ON
                    </p>
                    <p className="text-sm font-bold leading-tight tracking-tight mt-0.5">
                      Google Play
                    </p>
                  </div>
                </a>
              </div>

              {/* QR and Trust Pill */}
              <div className="pt-2 flex items-center gap-3 text-xs text-emerald-100/80">
                <span className="font-mono font-bold text-white">4.8 ★</span>
                <span>• Over 45,000+ verified ratings across stores</span>
              </div>
            </div>

            {/* Right Column: Tilted Phone Mockup Peeking from Card */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[300px] transform lg:rotate-[8deg] lg:translate-x-2 lg:translate-y-6 transition-transform duration-500 hover:rotate-0">
                
                {/* Outer Phone Frame */}
                <div className="rounded-[44px] bg-[#0D1117] p-[7px] shadow-[0_30px_70px_-10px_rgba(0,0,0,0.6)] border border-white/20 select-none">
                  {/* Screen Content */}
                  <div className="h-[440px] sm:h-[480px] w-full rounded-[38px] bg-white overflow-hidden p-3.5 flex flex-col justify-between text-[#0D1117]">
                    
                    {/* Notch Cutout */}
                    <div className="h-3.5 w-16 bg-black rounded-full mx-auto shrink-0 mb-2" />

                    <div className="space-y-3">
                      {/* Top Header */}
                      <div className="flex items-center justify-between pb-1 border-b border-black/[0.06]">
                        <span className="text-[10px] font-bold text-[#64748B]">Portfolio Balance</span>
                        <span className="rounded-full bg-[#E8F8F0] px-2 py-0.5 text-[9px] font-bold text-[#00A663]">
                          Active
                        </span>
                      </div>

                      {/* Balance Box */}
                      <div className="rounded-2xl bg-gradient-to-br from-[#0B3528] to-[#041a12] p-3.5 text-white">
                        <span className="font-mono text-[9px] text-emerald-300">TOTAL VALUE</span>
                        <p className="text-xl font-black mt-0.5">£306,500.00</p>
                        <p className="text-[9.5px] text-emerald-200 mt-0.5">+30.8% Total Gain</p>
                      </div>

                      {/* Property Holding Card */}
                      <div className="rounded-xl border border-black/[0.08] p-2.5 flex items-center gap-2.5 bg-[#F8FAF9]">
                        <img
                          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=200&q=80"
                          alt="Marina Gate"
                          className="size-10 rounded-lg object-cover shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-[11px] font-bold text-[#0D1117] truncate">Marina Gate Tower</p>
                          <p className="text-[9.5px] text-[#00A663] font-semibold">+£320.00 Monthly Rent</p>
                        </div>
                      </div>

                      {/* Second Holding Card */}
                      <div className="rounded-xl border border-black/[0.08] p-2.5 flex items-center gap-2.5 bg-[#F8FAF9]">
                        <img
                          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=200&q=80"
                          alt="Mayfair Core"
                          className="size-10 rounded-lg object-cover shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-[11px] font-bold text-[#0D1117] truncate">The Mayfair Core</p>
                          <p className="text-[9.5px] text-[#00A663] font-semibold">+£1,130.00 Dividend</p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTA on Screen */}
                    <div className="pt-2">
                      <div className="rounded-xl bg-[#00A663] py-2 text-center text-[10.5px] font-bold text-white shadow-xs">
                        Invest Now &rarr;
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================================
          COMPLIANT DARK FOOTER: Quick Links, Columns, and Statutory Disclaimers
          ========================================================================= */}
      <div className="border-t border-white/10 pt-16 pb-14 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          
          {/* Main Footer Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-white/10">
            
            {/* Brand & Quick Products */}
            <div className="col-span-2 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#00A663] to-[#0B3528] text-white">
                  <span className="font-mono text-base font-black">S</span>
                </div>
                <span className="font-heading text-xl font-extrabold tracking-tight text-white">
                  SERENE <span className="text-[#00A663]">INVESTORS</span>
                </span>
              </div>

              <p className="max-w-sm text-sm text-slate-400 leading-relaxed">
                The leading digital fractional real estate and private investment platform. Regulated custody, seamless rental cash flows, and institutional portfolio access.
              </p>

              {/* Quick Product Links */}
              <div className="pt-2">
                <p className="text-xs font-bold uppercase tracking-widest text-[#00A663] mb-2 font-mono">
                  OUR PRODUCTS
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link href="/properties" className="rounded-lg bg-white/5 px-3 py-1.5 font-semibold text-white hover:bg-white/10 transition-colors">
                    Properties
                  </Link>
                  <Link href="/funds" className="rounded-lg bg-white/5 px-3 py-1.5 font-semibold text-white hover:bg-white/10 transition-colors">
                    Funds
                  </Link>
                  <Link href="/properties" className="rounded-lg bg-white/5 px-3 py-1.5 font-semibold text-white hover:bg-white/10 transition-colors">
                    Stake One Whole Properties
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 1: Visa Programs */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
                VISA PROGRAMS
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li><Link href="/golden-visa" className="hover:text-[#00A663] transition-colors">Golden Visa</Link></li>
                <li><Link href="/retirement-visa" className="hover:text-[#00A663] transition-colors">Retirement Visa</Link></li>
                <li><Link href="/properties" className="hover:text-[#00A663] transition-colors">Eligibility Calculator</Link></li>
                <li><Link href="/how-it-works" className="hover:text-[#00A663] transition-colors">Residency by Investment</Link></li>
              </ul>
            </div>

            {/* Column 2: Learn */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
                LEARN
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li><Link href="/blog" className="hover:text-[#00A663] transition-colors">Blog &amp; Insights</Link></li>
                <li><Link href="/faq" className="hover:text-[#00A663] transition-colors">FAQs</Link></li>
                <li><Link href="/glossary" className="hover:text-[#00A663] transition-colors">Real Estate Glossary</Link></li>
                <li><Link href="/how-it-works" className="hover:text-[#00A663] transition-colors">Investor Handbooks</Link></li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
                COMPANY
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li><Link href="/about" className="hover:text-[#00A663] transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="hover:text-[#00A663] transition-colors">Careers</Link></li>
                <li><Link href="/press" className="hover:text-[#00A663] transition-colors">Press &amp; Media</Link></li>
                <li><Link href="/contact" className="hover:text-[#00A663] transition-colors">Contact Support</Link></li>
              </ul>
            </div>

          </div>

          {/* =========================================================================
              FULL LEGAL DISCLAIMER PARAGRAPHS (DFSA, CMA, Shariah, DIFC Registered)
              ========================================================================= */}
          <div className="pt-10 text-[11px] leading-relaxed text-slate-400 space-y-4">
            
            <p>
              <strong>DFSA Regulatory Notice:</strong> Serene Investors (Stake MENA Limited) is regulated by the Dubai Financial Services Authority (&quot;DFSA&quot;) under licence number F005380 to conduct financial promotions, arrange deals in investments, and arrange custody. Our registered office is located at Unit 201, Level 2, Gate Avenue, Dubai International Financial Centre (DIFC), PO Box 507211, Dubai, United Arab Emirates.
            </p>

            <p>
              <strong>Saudi Arabia CMA Permit:</strong> In the Kingdom of Saudi Arabia, Serene operates within the Capital Market Authority (&quot;CMA&quot;) FinTech Lab experimental permit framework, authorizing digital equity crowdfunding and real estate funds distribution in compliance with the Capital Market Law.
            </p>

            <p>
              <strong>Shariah Compliance Certification:</strong> All investment opportunities and operational structures are vetted and certified for Shariah compliance by independent Islamic financial jurists (Dar Al Sharia Advisory). Fractional equity, rental yields, and secondary market transfers are fully compliant with Islamic financial principles, prohibiting Riba (usury) and Gharar (excessive uncertainty).
            </p>

            <p>
              <strong>Investment Risk Warning:</strong> Investments in fractional real estate and single-asset funds carry risk, including the loss of invested capital and lack of liquidity. Dividends and capital growth are not guaranteed and past performance is no indicator of future yield. Secondary market liquidity windows are subject to buyer matching and prevailing market conditions. Please read all Key Investment Information Documents (&quot;KIID&quot;) before committing funds.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs text-slate-500">
              <p>&copy; {new Date().getFullYear()} Serene Investors Ltd. All rights reserved.</p>
              <div className="flex flex-wrap gap-4 text-slate-400">
                <Link href="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/legal/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
                <Link href="/legal/regulatory" className="hover:text-white transition-colors">Regulatory Disclosures</Link>
              </div>
            </div>

          </div>

        </div>
      </div>

    </footer>
  )
}
