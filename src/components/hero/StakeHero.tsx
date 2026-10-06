'use client'

import React from 'react'
import Link from 'next/link'
import { HeroVisual } from '@/components/sections/home/HeroVisual'

export function StakeHero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F5EF] px-5 py-14 sm:px-8 lg:py-20 border-b border-black/[0.08]">
      {/* Background Soft Ambient Radial Glow */}
      <div
        className="pointer-events-none absolute -left-40 top-0 size-96 rounded-full bg-[#00A663]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-1/4 size-96 rounded-full bg-[#E8F8F0] blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16">
          {/* Left Column: Editorial Headline & Value Prop */}
          <div className="w-full lg:col-span-7">
            {/* Live Return Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-[#0D1117] shadow-xs backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A663] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#00A663]" />
              </span>
              <span>10%+ average returns in 2025/2026</span>
            </div>

            {/* Display Headline */}
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-[#0D1117] text-balance">
              Build your wealth through{' '}
              <span className="text-[#00A663] selection:bg-[#00A663]/20">prime real estate</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[#4B5563] text-pretty">
              Join thousands of people globally earning passive income from investing in curated residential and commercial real estate with Serene, from just £500.
            </p>

            {/* Dual App Store / Play Store Buttons */}
            <div className="mt-8 flex flex-col gap-3.5">
              <div className="flex flex-wrap items-center gap-3">
                {/* App Store */}
                <a
                  href="#app"
                  aria-label="Download on the App Store"
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#0D1117] px-4 py-2.5 text-white shadow-md transition-all duration-200 hover:bg-black hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
                >
                  <svg className="size-6 text-white shrink-0 fill-current" viewBox="0 0 24 24">
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

                {/* Google Play */}
                <a
                  href="#app"
                  aria-label="Get it on Google Play"
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#0D1117] px-4 py-2.5 text-white shadow-md transition-all duration-200 hover:bg-black hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
                >
                  <svg className="size-6 text-white shrink-0 fill-current" viewBox="0 0 24 24">
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

              {/* Direct Web Link Footnote */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#64748B]">
                <span className="size-1.5 rounded-full bg-[#00A663] shrink-0" />
                <span>Available on iOS &amp; Android • Direct Web Access</span>
                <span className="text-black/20 hidden sm:inline">•</span>
                <Link
                  href="/properties"
                  className="font-semibold text-[#0D1117] hover:text-[#00A663] transition-colors underline-offset-4 hover:underline"
                >
                  Explore properties on web &rarr;
                </Link>
              </div>
            </div>

            {/* Proof Points */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-black/[0.08] pt-5 text-xs text-[#64748B]">
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#00A663] shrink-0" />
                <span><strong className="font-semibold text-[#0D1117]">£140M+</strong> Assets Transacted</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#00A663] shrink-0" />
                <span><strong className="font-semibold text-[#0D1117]">Quarterly</strong> Liquidity</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#00A663] shrink-0" />
                <span><strong className="font-semibold text-[#0D1117]">100%</strong> Asset-Backed Deeds</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3-Phone Overlapping Mockup */}
          <div className="w-full lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
