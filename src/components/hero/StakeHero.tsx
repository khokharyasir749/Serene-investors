import React from 'react';

export function StakeHero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F5EF] pt-8 pb-16 lg:pb-24">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-10 -z-10 h-[500px] w-[500px] rounded-full bg-[#00A663]/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          
          {/* ================= LEFT EDITORIAL COLUMN ================= */}
          <div className="lg:col-span-6 z-10">
            {/* Yield Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-[#E8F8F0] px-3.5 py-1.5 text-xs font-semibold text-[#00A663]">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#00A663] text-white text-[10px] font-bold">
                ↗
              </span>
              10% average returns in 2025
            </div>

            {/* Display Headline */}
            <h1 className="mt-6 text-4xl sm:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight text-[#0D1117] leading-[1.08]">
              Build your wealth through{' '}
              <span className="text-[#00A663]">real estate</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[#4B5563]">
              Join thousands of people globally earning passive income from investing in curated residential and commercial real estate with Stake, from just USD 150
            </p>

            {/* App Store Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button className="flex items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-white transition-opacity hover:opacity-85 shadow-md">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.76 1.05-1.83.93-2.9-.9.04-2 .6-2.65 1.36-.57.65-1.07 1.73-.93 2.78 1.01.08 2.02-.48 2.65-1.24z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-tight text-white/70 uppercase">Download on the</div>
                  <div className="text-xs font-semibold leading-tight">App Store</div>
                </div>
              </button>

              <button className="flex items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-white transition-opacity hover:opacity-85 shadow-md">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186c-.198-.18-.323-.448-.323-.755V2.569c0-.307.125-.575.322-.755zM15.207 13.414l2.122 2.122-11.96 6.834 9.838-8.956zm2.122-2.828l-2.122 2.121-9.838-8.956 11.96 6.835zm.707.707l3.664 2.094c.645.368.645.969 0 1.337l-3.664 2.094-1.768-1.768 1.768-1.757z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-tight text-white/70 uppercase">GET IT ON</div>
                  <div className="text-xs font-semibold leading-tight">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* ================= RIGHT 3-PHONE CLUSTER ================= */}
          <div className="relative lg:col-span-6 h-[620px] lg:h-[720px] w-full select-none">
            {/* Extended stage container that allows phones to spread outward to the right edge */}
            <div className="absolute inset-0 w-full min-w-[580px] lg:min-w-[700px] h-full">

              {/* --- PHONE 1: TOP-LEFT / BACK LAYER (Property Detail) --- */}
              {/* Scaled down to 260px-280px, shifted further top-left */}
              <div className="absolute -top-14 left-0 lg:-left-10 w-[250px] lg:w-[280px] aspect-[9/19.5] -rotate-[16deg] rounded-[42px] bg-[#0D1117] p-[6px] shadow-2xl border border-white/10 z-10 opacity-95 transition-transform duration-300 hover:-rotate-[13deg]">
                <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-white flex flex-col text-left">
                  {/* Dynamic Island */}
                  <div className="h-3.5 w-16 bg-black rounded-full mx-auto mt-2" />
                  {/* Top Badges */}
                  <div className="flex justify-between items-center px-4 pt-2 text-[9px]">
                    <span className="font-bold text-[#00A663] bg-[#E8F8F0] px-2 py-0.5 rounded-full">Available</span>
                    <div className="flex gap-2 text-gray-400 text-xs">
                      <span>♡</span>
                      <span>↗</span>
                    </div>
                  </div>
                  {/* Property Photo */}
                  <div
                    className="mx-3 mt-1.5 h-28 rounded-xl bg-cover bg-center relative overflow-hidden"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80")' }}
                  >
                    <div className="absolute bottom-2 flex justify-center w-full gap-1">
                      <span className="h-1 w-3 bg-white rounded-full" />
                      <span className="h-1 w-1 bg-white/60 rounded-full" />
                      <span className="h-1 w-1 bg-white/60 rounded-full" />
                    </div>
                  </div>
                  {/* Specs & Returns */}
                  <div className="p-3 space-y-1 text-left">
                    <div className="text-[9px] text-gray-500 font-medium flex gap-2">
                      <span>🛏 2</span>
                      <span>Ready</span>
                      <span>📍 Dubai</span>
                    </div>
                    <h4 className="text-[11px] font-bold text-gray-900 leading-tight">2 Bed in Studio One Tower</h4>
                    <div className="text-xs font-black text-[#00A663]">AED 1,236,002</div>
                    <div className="pt-1.5 border-t border-gray-100 space-y-1 text-[8.5px] text-gray-500">
                      <div className="flex justify-between"><span>Annualised return</span><span className="font-bold text-gray-800">6.84%</span></div>
                      <div className="flex justify-between"><span>Annual appreciation</span><span className="font-bold text-gray-800">6.77%</span></div>
                      <div className="flex justify-between"><span>Gross yield</span><span className="font-bold text-gray-800">5.98%</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- FLOATING OVERLAY: POLAROID BADGE --- */}
              {/* Sits between Phone 1 and Phone 2 without covering important text */}
              <div className="absolute top-[8%] left-[210px] lg:left-[230px] z-30 -rotate-[10deg] rounded-2xl bg-white p-2 shadow-2xl border border-black/5 flex flex-col items-center w-[110px] text-center transition-transform hover:scale-105">
                <div
                  className="h-12 w-full rounded-lg bg-cover bg-center mb-1"
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=400&q=80")' }}
                />
                <div className="text-[7.5px] font-extrabold text-gray-900 leading-tight">Boulevard Point, Downtown Dubai</div>
                <span className="mt-1 inline-block rounded bg-[#E8F8F0] px-1 py-0.5 text-[8px] font-bold text-[#00A663]">+10.4%</span>
              </div>

              {/* --- PHONE 2: MAIN FRONT-RIGHT (Portfolio Screen) --- */}
              {/* Shifted RIGHT so it breathes, Z-20 so it remains crisp and unblocked */}
              <div className="absolute top-2 left-[270px] lg:left-[320px] w-[275px] lg:w-[315px] aspect-[9/19.5] -rotate-[16deg] rounded-[44px] bg-[#0D1117] p-[7px] shadow-[0_30px_70px_-15px_rgba(11,53,40,0.35)] border border-white/10 z-20 transition-transform duration-300 hover:-rotate-[13deg]">
                <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-white flex flex-col text-left">
                  {/* Dynamic Island */}
                  <div className="h-4 w-20 bg-black rounded-full mx-auto mt-2" />
                  {/* Top Status */}
                  <div className="flex justify-between items-center px-4 pt-1.5 text-[9px] text-gray-500 font-medium">
                    <span>9:41</span>
                    <div className="flex items-center gap-1 text-gray-700 bg-gray-100 px-1.5 py-0.5 rounded-full text-[8.5px]">
                      <span>AED</span>
                      <span>›</span>
                    </div>
                  </div>
                  {/* Title & Valuation */}
                  <div className="px-4 pt-1.5 text-sm font-extrabold text-gray-900">Portfolio</div>
                  <div className="px-4 pt-0.5">
                    <div className="text-[9px] font-medium text-gray-400 uppercase tracking-wider">Portfolio value</div>
                    <div className="text-xl font-black tracking-tight text-gray-950">
                      AED 306,500<span className="text-xs font-semibold text-gray-400">.00</span>
                    </div>
                  </div>
                  {/* Action Buttons */}
                  <div className="grid grid-cols-4 gap-1.5 px-3 pt-2 text-center">
                    <div className="flex flex-col items-center gap-0.5">
                      <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-800">⇄</div>
                      <span className="text-[8px] font-medium text-gray-600">Invest</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center text-white text-[10px] font-bold">+</div>
                      <span className="text-[8px] font-medium text-gray-600">Deposit</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-800">%</div>
                      <span className="text-[8px] font-medium text-gray-600">Earn</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-800">↗</div>
                      <span className="text-[8px] font-medium text-gray-600">Exit</span>
                    </div>
                  </div>
                  {/* Returns bar */}
                  <div className="mx-3 mt-2 rounded-xl bg-gray-50 border border-gray-100 p-2">
                    <div className="flex justify-between text-[9px] font-semibold text-gray-600">
                      <span>All time returns</span>
                      <span className="text-emerald-700 bg-emerald-100 px-1 py-0.5 rounded text-[8px] font-bold">30.8%</span>
                    </div>
                    <div className="text-[11px] font-bold text-gray-900">AED 91,950.00</div>
                    <div className="mt-1 h-1.5 w-full bg-gray-200 rounded-full overflow-hidden flex">
                      <div className="h-full bg-[#00A663] w-[70%]" />
                      <div className="h-full bg-emerald-300 w-[30%]" />
                    </div>
                  </div>
                  {/* July Rent Card */}
                  <div className="mx-3 mt-1.5 grid grid-cols-2 gap-1.5 text-[8.5px] bg-gray-50 p-1.5 rounded-lg border border-gray-100">
                    <div>
                      <span className="text-gray-400 block text-[7.5px]">July&apos;s rent</span>
                      <span className="font-bold text-gray-800">AED 10,225.50</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[7.5px]">Total rental income</span>
                      <span className="font-bold text-gray-800">AED 56,200.00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- PHONE 3: BOTTOM-CENTER (Shifted DOWN and RIGHT, peeking from below) --- */}
              {/* Positioned at bottom-[-110px] and left-[120px] so it DOES NOT block Phone 2's numbers! */}
              <div className="absolute -bottom-24 left-[120px] lg:left-[150px] w-[260px] lg:w-[290px] aspect-[9/18.5] -rotate-[16deg] rounded-[42px] bg-[#0D1117] p-[6px] shadow-[0_25px_60px_-10px_rgba(0,0,0,0.45)] border border-white/10 z-30 transition-transform duration-300 hover:-rotate-[13deg]">
                <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-white flex flex-col text-left">
                  {/* Dynamic Island */}
                  <div className="h-3.5 w-18 bg-black rounded-full mx-auto mt-2" />
                  <div className="flex justify-between items-center px-4 pt-1.5 text-[8.5px] text-gray-500">
                    <span className="font-bold text-gray-900">9:41</span>
                    <span className="bg-[#00A663] text-white px-1.5 py-0.2 rounded-full text-[8px] font-bold">🛒 1</span>
                  </div>
                  <div className="flex gap-3 px-4 pt-1.5 text-[9px] font-bold">
                    <span className="text-emerald-700 border-b-2 border-emerald-600 pb-0.5">Available (7)</span>
                    <span className="text-gray-400">Funded</span>
                  </div>
                  <div className="mx-3 mt-1.5 rounded-xl border border-gray-100 p-1.5 bg-gray-50">
                    <div
                      className="h-16 rounded-lg bg-cover bg-center"
                      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=600&q=80")' }}
                    />
                    <div className="mt-1 text-[9px] font-bold text-gray-800">Marina Gate, Dubai Marina</div>
                    <div className="text-[8px] font-extrabold text-[#00A663]">+12.4% Annual Yield</div>
                  </div>
                </div>
              </div>

              {/* --- FLOATING OVERLAY: RENT NOTIFICATION --- */}
              <div className="absolute -bottom-6 left-0 lg:-left-6 z-40 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2 shadow-2xl border border-black/5 flex items-center gap-2.5 transition-transform hover:scale-105">
                <div className="h-7 w-7 rounded-full bg-emerald-100 flex items-center justify-center text-[#00A663] font-bold text-xs">✓</div>
                <div className="text-left">
                  <div className="text-[8px] text-gray-400 font-medium">Stake • Just now</div>
                  <div className="text-[10px] font-extrabold text-gray-900">
                    You&apos;ve been paid <span className="text-[#00A663]">AED 18,550</span> in rent
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default StakeHero;
