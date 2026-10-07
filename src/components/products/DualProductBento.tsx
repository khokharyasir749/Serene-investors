'use client'

import React, { useState } from 'react'
import {
  Play,
  PieChart,
  ChevronLeft,
  Bookmark,
  Share2,
  Bed,
  Bath,
  Maximize2,
  Camera,
  Users,
  Clock,
  Zap,
} from 'lucide-react'
import { DeviceFrame } from '@/components/common/DeviceFrame'

export function DualProductBento() {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false)

  const stats = [
    {
      prefix: '2',
      suffix: 'M+',
      label: 'Registered users',
    },
    {
      prefix: 'AED 1.5',
      suffix: 'B+',
      label: 'Property transactions',
    },
    {
      prefix: '202',
      suffix: '+',
      label: 'User nationalities',
    },
    {
      prefix: 'AED 236.9',
      suffix: 'M+',
      label: 'Total distributed',
    },
  ]

  return (
    <section
      id="products-bento"
      className="relative overflow-hidden bg-[#F8FAF9] py-20 px-6 lg:px-12 border-b border-black/[0.08]"
      aria-label="Properties and Funds Bento Showcase"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* =========================================================================
            HEADER & 4-STAT SHOWCASE (Exact Match to User Screenshot)
            ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          {/* Eyebrow */}
          <p className="text-sm sm:text-base font-semibold text-[#00A663] tracking-tight">
            Leading digital real estate platform
          </p>

          {/* Headline */}
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#0F172A] leading-[1.14] text-balance">
            Build a global and diversified
            <br />
            real estate portfolio
          </h2>

          {/* 4 Open Stats Directly Below Headline */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0F172A] tracking-tight leading-none">
                  <span>{stat.prefix}</span>
                  <span className="text-[#00A663]">{stat.suffix}</span>
                </p>
                <p className="mt-2 text-xs sm:text-sm font-medium text-[#64748B]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            BENTO CARDS CONTAINER
            ========================================================================= */}
        <div className="space-y-12">

          {/* -----------------------------------------------------------------------
              BENTO CARD 1 (Properties): Left Green Phone Mockup | Right Editorial
              ----------------------------------------------------------------------- */}
          <div className="rounded-[32px] sm:rounded-[40px] bg-white border border-black/[0.06] p-6 sm:p-10 lg:p-12 overflow-hidden relative shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              {/* Left Column (Green Showcase Container - Crops bottom half of phone) */}
              <div className="lg:col-span-6 relative rounded-[28px] sm:rounded-[36px] bg-[#22C55E] pt-7 sm:pt-9 px-4 sm:px-6 flex justify-center items-start h-[440px] sm:h-[480px] lg:h-[500px] overflow-hidden shadow-inner">
                
                {/* Floating Polaroid Sticker 1: Top-Right (Boulevard Point) */}
                <div className="absolute right-0 sm:right-3 lg:right-5 top-16 sm:top-20 z-20 w-36 sm:w-42 rounded-2xl bg-white p-2.5 sm:p-3 shadow-2xl rotate-[8deg] border border-black/5 transition-transform hover:rotate-0 duration-300">
                  <div className="relative h-20 sm:h-22 w-full rounded-xl overflow-hidden mb-1.5 bg-gray-100">
                    <img
                      src="/images/journey/residential.jpg"
                      alt="Boulevard Point, Downtown Dubai"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="text-[10px] sm:text-[11.5px] font-bold text-[#0F172A] leading-tight">
                    Boulevard Point,
                  </p>
                  <p className="text-[10px] sm:text-[11.5px] font-bold text-[#0F172A] leading-tight">
                    Downtown Dubai
                  </p>
                  <p className="text-[11px] sm:text-xs font-extrabold text-[#00A663] mt-1">
                    +10.4%
                  </p>
                </div>

                {/* Floating Polaroid Sticker 2: Bottom-Left (Marina Gate) */}
                <div className="absolute -left-5 sm:-left-3 bottom-0 sm:bottom-2 z-20 w-36 sm:w-42 rounded-2xl bg-white p-2.5 sm:p-3 shadow-2xl -rotate-[14deg] border border-black/5 transition-transform hover:rotate-0 duration-300">
                  <div className="relative h-20 sm:h-22 w-full rounded-xl overflow-hidden mb-1.5 bg-gray-100">
                    <img
                      src="/images/journey/dubai-marina.jpg"
                      alt="Marina Gate, Dubai Marina"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="text-[10px] sm:text-[11.5px] font-bold text-[#0F172A] leading-tight">
                    Marina Gate,
                  </p>
                  <p className="text-[10px] sm:text-[11.5px] font-bold text-[#0F172A] leading-tight">
                    Marina
                  </p>
                  <p className="text-[11px] sm:text-xs font-extrabold text-[#00A663] mt-1">
                    +12.4%
                  </p>
                </div>

                {/* Main Phone Mockup (Submerged/Cropped at bottom - Realistic Titanium Frame) */}
                <div className="relative z-10 w-[310px] sm:w-[350px] lg:w-[380px] shrink-0 rounded-[52px] bg-[#161a20] p-[3.5px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.08)] border border-[#3b4452]/80 select-none">
                  {/* Outer Metallic Chamfer Highlight */}
                  <div className="pointer-events-none absolute inset-0 rounded-[51px] ring-1 ring-inset ring-white/10" aria-hidden="true" />

                  {/* Chassis Hardware Buttons */}
                  <div className="absolute -left-[2px] top-[46px] h-[2px] w-[3.5px] bg-[#0c0f14]" aria-hidden="true" />
                  <div className="absolute -left-[5.5px] top-[76px] h-[18px] w-[4px] rounded-l-[2px] bg-[#2d3440] border-l border-y border-[#525d70]/80 shadow-xs" aria-hidden="true" />
                  <div className="absolute -left-[5.5px] top-[108px] h-[42px] w-[4px] rounded-l-[2px] bg-[#2d3440] border-l border-y border-[#525d70]/80 shadow-xs" aria-hidden="true" />
                  <div className="absolute -left-[5.5px] top-[160px] h-[42px] w-[4px] rounded-l-[2px] bg-[#2d3440] border-l border-y border-[#525d70]/80 shadow-xs" aria-hidden="true" />
                  <div className="absolute -left-[2px] bottom-[72px] h-[2px] w-[3.5px] bg-[#0c0f14]" aria-hidden="true" />

                  <div className="absolute -right-[2px] top-[46px] h-[2px] w-[3.5px] bg-[#0c0f14]" aria-hidden="true" />
                  <div className="absolute -right-[5.5px] top-[116px] h-[64px] w-[4px] rounded-r-[2px] bg-[#2d3440] border-r border-y border-[#525d70]/80 shadow-xs" aria-hidden="true" />
                  <div className="absolute -right-[2px] bottom-[72px] h-[2px] w-[3.5px] bg-[#0c0f14]" aria-hidden="true" />

                  {/* Inner OLED Pitch-Black Bezel */}
                  <div className="relative h-full w-full rounded-[48px] bg-black p-[3.5px] overflow-hidden flex flex-col shadow-inner">
                    {/* Phone Screen Canvas */}
                    <div className="rounded-[44px] bg-white overflow-hidden flex flex-col text-left pb-14">
                      
                      {/* Top Status Bar & Dynamic Island */}
                      <div className="relative z-30 pt-2 pb-1.5 px-6 bg-white flex items-center justify-between text-[11px] font-semibold text-[#0D1117]">
                        <span className="w-12 text-left font-semibold text-[13px] tracking-tight">9:41</span>
                        <div className="h-[25px] w-[105px] rounded-full bg-black flex items-center justify-end px-2.5 shadow-sm">
                          <div className="size-2.5 rounded-full bg-[#0a0d14] ring-1 ring-[#1b2230] flex items-center justify-center">
                            <div className="size-1 rounded-full bg-[#20293d]" />
                          </div>
                        </div>
                        <div className="flex w-12 items-center justify-end gap-1.5">
                          <svg className="size-3.5 shrink-0" viewBox="0 0 16 16" fill="currentColor">
                            <rect x="1" y="11" width="2" height="4" rx="0.5" />
                            <rect x="5" y="8" width="2" height="7" rx="0.5" />
                            <rect x="9" y="5" width="2" height="10" rx="0.5" />
                            <rect x="13" y="2" width="2" height="13" rx="0.5" />
                          </svg>
                          <div className="flex items-center">
                            <div className="flex h-3 w-5 items-center rounded-[3.5px] border-[1.2px] border-current p-[1.5px]">
                              <div className="h-full w-3.5 rounded-[1.5px] bg-[#00A663]" />
                            </div>
                            <div className="h-1.5 w-[1.5px] rounded-r-xs bg-current" />
                          </div>
                        </div>
                      </div>

                    {/* Hero Property Photo Container */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-100">
                      <img
                        src="/images/journey/dubai-marina.jpg"
                        alt="Park Islands, Dubai Marina"
                        className="h-full w-full object-cover"
                      />

                      {/* Top Overlaid Action Buttons */}
                      <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between z-10">
                        <div className="size-7 sm:size-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#0F172A] shadow-xs">
                          <ChevronLeft size={16} strokeWidth={2.5} />
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="size-7 sm:size-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#0F172A] shadow-xs">
                            <Bookmark size={14} strokeWidth={2} />
                          </div>
                          <div className="size-7 sm:size-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#0F172A] shadow-xs">
                            <Share2 size={13} strokeWidth={2} />
                          </div>
                        </div>
                      </div>

                      {/* 4 Carousel Dots */}
                      <div className="absolute bottom-2.5 inset-x-0 flex items-center justify-center gap-1 z-10">
                        <div className="w-2.5 h-1 rounded-full bg-white" />
                        <div className="size-1 rounded-full bg-white/60" />
                        <div className="size-1 rounded-full bg-white/60" />
                        <div className="size-1 rounded-full bg-white/60" />
                      </div>
                    </div>

                    {/* Property Card Details */}
                    <div className="p-3.5 sm:p-4 space-y-2.5 sm:space-y-3 bg-white">
                      {/* Title */}
                      <h4 className="text-[14.5px] sm:text-[16px] font-bold text-[#0F172A] leading-tight">
                        Park Islands, Dubai Marina
                      </h4>

                      {/* Meta Specs */}
                      <div className="flex items-center gap-2 text-[10.5px] sm:text-[11.5px] font-medium text-[#64748B]">
                        <div className="flex items-center gap-1">
                          <Bed size={13} className="text-[#64748B]" />
                          <span>2</span>
                        </div>
                        <span className="text-gray-300">|</span>
                        <div className="flex items-center gap-1">
                          <Bath size={13} className="text-[#64748B]" />
                          <span>3</span>
                        </div>
                        <span className="text-gray-300">|</span>
                        <span className="font-semibold text-gray-500">#1020</span>
                        <span className="text-gray-300">|</span>
                        <div className="flex items-center gap-1">
                          <Maximize2 size={12} className="text-[#64748B]" />
                          <span>170 sqm</span>
                        </div>
                      </div>

                      {/* Action Pills */}
                      <div className="grid grid-cols-2 gap-2 pt-0.5">
                        <div className="flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-full border border-gray-200 bg-white text-[10.5px] sm:text-[11px] font-semibold text-[#0F172A] shadow-2xs">
                          <div className="size-3.5 rounded-full border border-[#00A663] text-[#00A663] flex items-center justify-center text-[7.5px] font-extrabold leading-none">
                            3D
                          </div>
                          <span>Virtual Tour</span>
                        </div>
                        <div className="flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-full border border-gray-200 bg-white text-[10.5px] sm:text-[11px] font-semibold text-[#0F172A] shadow-2xs">
                          <Camera size={13} className="text-[#64748B]" />
                          <span>6 photos</span>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="flex items-baseline gap-1.5 pt-0.5">
                        <span className="text-base sm:text-[17px] font-extrabold text-[#00A663]">
                          AED 1,305,990
                        </span>
                        <span className="text-[10px] sm:text-[11px] text-[#64748B]">purchase price</span>
                      </div>

                      {/* Badges */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 rounded-full bg-[#F1F5F9] px-2.5 py-1 text-[9.5px] sm:text-[10px] font-medium text-[#475569]">
                          <Users size={11} className="text-[#64748B]" />
                          <span>368 Investors</span>
                        </div>
                        <div className="flex items-center gap-1 rounded-full bg-[#F1F5F9] px-2.5 py-1 text-[9.5px] sm:text-[10px] font-medium text-[#475569]">
                          <Clock size={11} className="text-[#64748B]" />
                          <span>15 days left</span>
                        </div>
                      </div>

                      {/* Funding Progress */}
                      <div className="pt-0.5 space-y-1.5">
                        <div className="flex items-center justify-between text-[10px] sm:text-[11px]">
                          <span className="font-bold text-[#00A663] flex items-center gap-1">
                            <Zap size={11} className="fill-[#00A663] text-[#00A663]" />
                            75% funded
                          </span>
                          <span className="font-medium text-[#64748B]">
                            AED 764,000 available
                          </span>
                        </div>
                        <div className="h-1.5 sm:h-2 w-full rounded-full bg-gray-100 overflow-hidden">
                          <div className="h-full w-[75%] rounded-full bg-[#00A663]" />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>

              {/* Right Column (Editorial Text & Actions) */}
              <div className="lg:col-span-6 space-y-6 lg:pl-4">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-[#F4F5F7] px-3.5 py-1.5 text-xs font-bold text-[#0F172A] border border-black/[0.04]">
                  <span className="text-base leading-none">🏢</span>
                  <span>Properties</span>
                </div>

                {/* Headline */}
                <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#0F172A] leading-[1.14]">
                  Invest in properties in
                  <br className="hidden sm:inline" />
                  {' '}prime areas
                </h3>

                {/* Description */}
                <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-lg">
                  Own shares of individual properties with high-yield and appreciation potential in Dubai
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <a
                    href="#properties"
                    className="inline-flex items-center justify-center rounded-xl bg-[#0F172A] px-7 py-3 text-sm font-bold text-white shadow-xs hover:bg-[#1E293B] transition-colors"
                  >
                    Learn more
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-bold text-[#0F172A] shadow-2xs hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex size-5 items-center justify-center rounded-full border border-[#00A663] text-[#00A663]">
                      <Play size={9} className="fill-[#00A663] text-[#00A663] ml-0.5" />
                    </div>
                    Watch how it works
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* -----------------------------------------------------------------------
              BENTO CARD 2 (Funds): Left Editorial | Right Phone Mockup (Half Screen)
              ----------------------------------------------------------------------- */}
          <div className="rounded-[32px] sm:rounded-[40px] bg-[#F8F7F2] border border-black/[0.06] p-6 sm:p-10 lg:p-12 overflow-hidden relative shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              {/* Left Column (Editorial Text & Actions) */}
              <div className="lg:col-span-6 space-y-6 lg:pr-4">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-[#E5E9E7] px-3.5 py-1.5 text-xs font-bold text-[#0F172A] border border-black/[0.04]">
                  <Clock size={13} className="text-[#00A663]" />
                  <span>FUNDS</span>
                </div>

                {/* Headline */}
                <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#0F172A] leading-[1.14]">
                  Invest in private single–asset
                  <br className="hidden sm:inline" />
                  {' '}real estate funds
                </h3>

                {/* Description */}
                <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-lg">
                  Own units of exclusive commercial, residential and mixed–use funds across Saudi and other countries. Gain diversified exposure managed by tier-1 institutional asset managers with targeted internal rates of return.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <a
                    href="#funds"
                    className="inline-flex items-center justify-center rounded-xl bg-[#0F172A] px-7 py-3 text-sm font-bold text-white shadow-xs hover:bg-[#1E293B] transition-colors"
                  >
                    Learn more
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-bold text-[#0F172A] shadow-2xs hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex size-5 items-center justify-center rounded-full border border-[#00A663] text-[#00A663]">
                      <Play size={9} className="fill-[#00A663] text-[#00A663] ml-0.5" />
                    </div>
                    Watch how it works
                  </button>
                </div>
              </div>

              {/* Right Column (Showcase Container - Crops bottom half of phone) */}
              <div className="lg:col-span-6 relative rounded-[28px] sm:rounded-[36px] bg-[#EEF0EB] pt-7 sm:pt-9 px-4 sm:px-6 flex justify-center items-start h-[440px] sm:h-[480px] lg:h-[500px] overflow-hidden shadow-inner">
                
                {/* Floating Polaroid Sticker: Top-Right (Al Yasmeen Fund) */}
                <div className="absolute right-0 sm:right-3 lg:right-5 top-14 sm:top-18 z-20 w-36 sm:w-44 rounded-2xl bg-white p-2.5 sm:p-3 shadow-2xl border border-black/5 transition-transform hover:scale-105 duration-300">
                  <div className="relative h-20 sm:h-22 w-full rounded-xl overflow-hidden mb-1.5 bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=400&q=80"
                      alt="Al Yasmeen Fund"
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute right-2 top-2 rounded-full bg-[#00A663] px-2 py-0.5 text-[9px] font-extrabold text-white shadow-xs">
                      +41.4%
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs font-bold text-[#0F172A] leading-tight">
                    Al Yasmeen Fund
                  </p>
                  <p className="text-[9.5px] sm:text-[10px] text-[#64748B]">
                    Commercial Fund • Target Hit
                  </p>
                </div>

                {/* Main Phone Mockup (Submerged/Cropped at bottom - Realistic Titanium Frame) */}
                <div className="relative z-10 w-[310px] sm:w-[350px] lg:w-[380px] shrink-0 rounded-[52px] bg-[#161a20] p-[3.5px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.08)] border border-[#3b4452]/80 select-none">
                  {/* Outer Metallic Chamfer Highlight */}
                  <div className="pointer-events-none absolute inset-0 rounded-[51px] ring-1 ring-inset ring-white/10" aria-hidden="true" />

                  {/* Chassis Hardware Buttons */}
                  <div className="absolute -left-[2px] top-[46px] h-[2px] w-[3.5px] bg-[#0c0f14]" aria-hidden="true" />
                  <div className="absolute -left-[5.5px] top-[76px] h-[18px] w-[4px] rounded-l-[2px] bg-[#2d3440] border-l border-y border-[#525d70]/80 shadow-xs" aria-hidden="true" />
                  <div className="absolute -left-[5.5px] top-[108px] h-[42px] w-[4px] rounded-l-[2px] bg-[#2d3440] border-l border-y border-[#525d70]/80 shadow-xs" aria-hidden="true" />
                  <div className="absolute -left-[5.5px] top-[160px] h-[42px] w-[4px] rounded-l-[2px] bg-[#2d3440] border-l border-y border-[#525d70]/80 shadow-xs" aria-hidden="true" />
                  <div className="absolute -left-[2px] bottom-[72px] h-[2px] w-[3.5px] bg-[#0c0f14]" aria-hidden="true" />

                  <div className="absolute -right-[2px] top-[46px] h-[2px] w-[3.5px] bg-[#0c0f14]" aria-hidden="true" />
                  <div className="absolute -right-[5.5px] top-[116px] h-[64px] w-[4px] rounded-r-[2px] bg-[#2d3440] border-r border-y border-[#525d70]/80 shadow-xs" aria-hidden="true" />
                  <div className="absolute -right-[2px] bottom-[72px] h-[2px] w-[3.5px] bg-[#0c0f14]" aria-hidden="true" />

                  {/* Inner OLED Pitch-Black Bezel */}
                  <div className="relative h-full w-full rounded-[48px] bg-black p-[3.5px] overflow-hidden flex flex-col shadow-inner">
                    {/* Phone Screen Canvas */}
                    <div className="rounded-[44px] bg-white overflow-hidden flex flex-col text-left pb-14">
                      
                      {/* Top Status Bar & Dynamic Island */}
                      <div className="relative z-30 pt-2 pb-1.5 px-6 bg-white flex items-center justify-between text-[11px] font-semibold text-[#0D1117]">
                        <span className="w-12 text-left font-semibold text-[13px] tracking-tight">9:41</span>
                        <div className="h-[25px] w-[105px] rounded-full bg-black flex items-center justify-end px-2.5 shadow-sm">
                          <div className="size-2.5 rounded-full bg-[#0a0d14] ring-1 ring-[#1b2230] flex items-center justify-center">
                            <div className="size-1 rounded-full bg-[#20293d]" />
                          </div>
                        </div>
                        <div className="flex w-12 items-center justify-end gap-1.5">
                          <svg className="size-3.5 shrink-0" viewBox="0 0 16 16" fill="currentColor">
                            <rect x="1" y="11" width="2" height="4" rx="0.5" />
                            <rect x="5" y="8" width="2" height="7" rx="0.5" />
                            <rect x="9" y="5" width="2" height="10" rx="0.5" />
                            <rect x="13" y="2" width="2" height="13" rx="0.5" />
                          </svg>
                          <div className="flex items-center">
                            <div className="flex h-3 w-5 items-center rounded-[3.5px] border-[1.2px] border-current p-[1.5px]">
                              <div className="h-full w-3.5 rounded-[1.5px] bg-[#00A663]" />
                            </div>
                            <div className="h-1.5 w-[1.5px] rounded-r-xs bg-current" />
                          </div>
                        </div>
                      </div>

                      {/* Section Label inside Phone */}
                      <div className="px-5 py-2 border-b border-gray-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-[#0F172A]">Private Funds</span>
                      </div>

                      {/* Phone Inner Fund Card Details */}
                      <div className="p-3.5 sm:p-4 space-y-3 bg-white">
                        
                        {/* Fund Hero Image */}
                        <div className="relative h-44 sm:h-48 w-full rounded-2xl overflow-hidden bg-gray-100 shadow-2xs">
                          <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
                            alt="Al Khuzama Real Estate Fund"
                            className="h-full w-full object-cover"
                          />
                          <span className="absolute left-2.5 top-2.5 rounded-full bg-[#0B3528]/90 px-2.5 py-0.5 text-[9.5px] font-bold text-white shadow-xs">
                            Exclusive Fund
                          </span>
                        </div>

                        {/* Title & Fund Size */}
                        <div>
                          <h4 className="text-[14.5px] sm:text-[16px] font-bold text-[#0F172A] leading-tight">
                            Al Khuzama Real Estate Fund
                          </h4>
                          <p className="text-[10px] sm:text-[11px] text-[#64748B] mt-0.5">
                            SAR 85M fund size
                          </p>
                        </div>

                        {/* Allocation Progress */}
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-[10px] sm:text-[11px]">
                            <span className="font-semibold text-[#0F172A]">Allocation Progress</span>
                            <span className="font-bold text-[#00A663]">92% funded</span>
                          </div>
                          <div className="h-1.5 sm:h-2 w-full rounded-full bg-gray-100 overflow-hidden">
                            <div className="h-full w-[92%] rounded-full bg-[#00A663]" />
                          </div>
                        </div>

                        {/* Distribution & Allocation Info Box */}
                        <div className="rounded-xl bg-[#F8FAF9] p-3 text-[10.5px] sm:text-[11px] space-y-2 border border-black/[0.04]">
                          <div className="flex justify-between items-center">
                            <span className="text-[#64748B]">Target Distribution:</span>
                            <strong className="text-[#0F172A] font-bold">Quarterly Dividends</strong>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[#64748B]">Minimum Allocation:</span>
                            <strong className="text-[#00A663] font-bold">SAR 1,000 / USD 266</strong>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
