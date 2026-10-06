'use client'

import React from 'react'
import Link from 'next/link'

export function StakeFooter() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#060D17] text-white py-16 sm:py-20 px-5 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#00A663] to-[#0B3528] text-white">
                <span className="font-mono text-base font-black">S</span>
              </div>
              <span className="font-heading text-lg font-bold tracking-tight text-white">
                SERENE <span className="text-[#00A663]">INVESTORS</span>
              </span>
            </div>
            <p className="max-w-sm text-sm text-[#64748B] leading-relaxed">
              Institutional-grade UK residential &amp; commercial fractional real estate. Regulated custody, automated rental dividends, and digital title ownership.
            </p>
          </div>

          {/* Column 1: Invest */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#64748B]">Invest</h4>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              <li><Link href="/properties" className="hover:text-[#00A663] transition-colors">Properties</Link></li>
              <li><Link href="/funds" className="hover:text-[#00A663] transition-colors">Private Funds</Link></li>
              <li><Link href="/how-it-works" className="hover:text-[#00A663] transition-colors">How It Works</Link></li>
              <li><Link href="/get-started" className="hover:text-[#00A663] transition-colors">Yield Calculator</Link></li>
            </ul>
          </div>

          {/* Column 2: Platform */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#64748B]">Platform</h4>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              <li><Link href="/about" className="hover:text-[#00A663] transition-colors">About Us</Link></li>
              <li><Link href="/learn" className="hover:text-[#00A663] transition-colors">Learn &amp; Academy</Link></li>
              <li><Link href="/dashboard" className="hover:text-[#00A663] transition-colors">Portfolio Portal</Link></li>
              <li><Link href="/signup" className="hover:text-[#00A663] transition-colors">Investor Sign Up</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal & Regulatory */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#64748B]">Legal</h4>
            <ul className="space-y-2 text-sm text-[#94A3B8]">
              <li><Link href="/legal/terms" className="hover:text-[#00A663] transition-colors">Terms of Service</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-[#00A663] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/legal/regulatory" className="hover:text-[#00A663] transition-colors">FCA Custody &amp; Risk</Link></li>
              <li><Link href="/legal/cookies" className="hover:text-[#00A663] transition-colors">Cookie Notice</Link></li>
            </ul>
          </div>
        </div>

        {/* Regulatory Risk Warning */}
        <div className="mt-14 border-t border-white/[0.08] pt-8 text-xs leading-relaxed text-[#64748B] space-y-3">
          <p>
            <strong>Regulatory Disclosure:</strong> Serene Investors operates in partnership with FCA-authorised custodian institutions. Investments in fractional property are backed by title deeds and SPV corporate shareholdings. The value of investments and rental income can fluctuate, and capital is at risk. Past performance is no guarantee of future returns.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.04]">
            <p>&copy; {new Date().getFullYear()} Serene Investors Ltd. All rights reserved.</p>
            <p className="text-[11px] text-[#475569]">FCA Tier-1 Regulated Custody • Built for Global High-Net-Worth &amp; Retail Investors</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
