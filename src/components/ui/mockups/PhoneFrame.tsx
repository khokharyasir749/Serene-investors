import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  time?: string
  showHomeIndicator?: boolean
}

export function PhoneFrame({
  children,
  className = '',
  time = '9:41',
  showHomeIndicator = true,
}: Props) {
  return (
    <div
      className={`relative mx-auto select-none rounded-[50px] bg-gradient-to-br from-[#3b4350] via-[#20252d] to-[#29303a] p-[4px] shadow-[0_32px_75px_-15px_rgba(0,0,0,0.42),0_12px_28px_-8px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.14)] border border-[#485362]/80 ${className}`}
    >
      {/* Outer Metallic Chamfer Highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-[49px] ring-1 ring-inset ring-white/15" aria-hidden="true" />

      {/* --- HARDWARE BUTTONS & ANTENNA SEAMS --- */}
      {/* Left Top Antenna Seam */}
      <div className="absolute -left-[2px] top-[46px] h-[2px] w-[3.5px] bg-[#0c0f14]" aria-hidden="true" />
      {/* Action Button */}
      <div className="absolute -left-[5.5px] top-[74px] h-[18px] w-[4px] rounded-l-[2px] bg-gradient-to-r from-[#3e4754] to-[#252a33] border-l border-y border-[#5a6677]/90 shadow-xs" aria-hidden="true" />
      {/* Volume Up */}
      <div className="absolute -left-[5.5px] top-[104px] h-[40px] w-[4px] rounded-l-[2px] bg-gradient-to-r from-[#3e4754] to-[#252a33] border-l border-y border-[#5a6677]/90 shadow-xs" aria-hidden="true" />
      {/* Volume Down */}
      <div className="absolute -left-[5.5px] top-[154px] h-[40px] w-[4px] rounded-l-[2px] bg-gradient-to-r from-[#3e4754] to-[#252a33] border-l border-y border-[#5a6677]/90 shadow-xs" aria-hidden="true" />
      {/* Left Bottom Antenna Seam */}
      <div className="absolute -left-[2px] bottom-[72px] h-[2px] w-[3.5px] bg-[#0c0f14]" aria-hidden="true" />

      {/* Right Top Antenna Seam */}
      <div className="absolute -right-[2px] top-[46px] h-[2px] w-[3.5px] bg-[#0c0f14]" aria-hidden="true" />
      {/* Power / Side Lock */}
      <div className="absolute -right-[5.5px] top-[110px] h-[60px] w-[4px] rounded-r-[2px] bg-gradient-to-l from-[#3e4754] to-[#252a33] border-r border-y border-[#5a6677]/90 shadow-xs" aria-hidden="true" />
      {/* Right Bottom Antenna Seam */}
      <div className="absolute -right-[2px] bottom-[72px] h-[2px] w-[3.5px] bg-[#0c0f14]" aria-hidden="true" />

      {/* Inner Pitch-Black OLED Bezel */}
      <div className="relative h-full w-full rounded-[46px] bg-[#0a0d12] p-[3.5px] overflow-hidden flex flex-col shadow-inner">
        {/* Screen container */}
        <div className="relative flex flex-col overflow-hidden rounded-[42px] bg-surface text-ink">
          {/* Status Bar */}
          <div className="relative z-30 flex h-9 items-center justify-between px-6 pt-1 text-[11px] font-semibold text-ink">
            {/* Time */}
            <span className="w-12 text-left font-mono text-[10px] sm:text-[11px]">{time}</span>

            {/* Dynamic Island Pill Cutout */}
            <div className="mx-auto flex h-[20px] w-22 items-center justify-end rounded-full bg-black px-2 shadow-sm">
              <div className="size-2 rounded-full bg-[#0a0d14] ring-1 ring-[#1b2230] flex items-center justify-center">
                <div className="size-0.5 rounded-full bg-[#20293d]" />
              </div>
            </div>

            {/* Status Icons */}
            <div className="flex w-12 items-center justify-end gap-1.5 text-ink">
              {/* Cellular Signal Bars */}
              <svg className="size-3" viewBox="0 0 16 16" fill="currentColor">
                <rect x="1" y="11" width="2" height="4" rx="0.5" />
                <rect x="5" y="8" width="2" height="7" rx="0.5" />
                <rect x="9" y="5" width="2" height="10" rx="0.5" />
                <rect x="13" y="2" width="2" height="13" rx="0.5" />
              </svg>
              {/* Wi-Fi Icon */}
              <svg className="size-3" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 12.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm4.07-3.07a5.75 5.75 0 0 0-8.14 0l.88.88a4.5 4.5 0 0 1 6.38 0l.88-.88zm2.12-2.12a8.75 8.75 0 0 0-12.38 0l.88.88a7.5 7.5 0 0 1 10.62 0l.88-.88z" />
              </svg>
              {/* Battery Icon */}
              <div className="flex items-center">
                <div className="flex h-2.5 w-4 items-center rounded-xs border border-current p-[1px]">
                  <div className="h-full w-2.5 rounded-2xs bg-emerald-600" />
                </div>
                <div className="h-1 w-[1.5px] rounded-r-xs bg-current" />
              </div>
            </div>
          </div>

          {/* Screen Content */}
          <div className="relative flex-1">{children}</div>

          {/* Home Indicator */}
          {showHomeIndicator && (
            <div className="relative z-30 flex justify-center py-1.5">
              <div className="h-1 w-24 rounded-full bg-ink/25 sm:w-28" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
