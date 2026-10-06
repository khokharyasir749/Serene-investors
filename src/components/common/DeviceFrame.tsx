'use client'

import React, { type ReactNode } from 'react'

type DeviceFrameProps = {
  children: ReactNode
  className?: string
  time?: string
  screenBg?: string
  showHomeIndicator?: boolean
}

export function DeviceFrame({
  children,
  className = '',
  time = '9:41',
  screenBg = 'bg-white',
  showHomeIndicator = true,
}: DeviceFrameProps) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[320px] sm:max-w-[340px] aspect-[9/19.5] rounded-[48px] bg-[#0D1117] p-[8px] shadow-[0_25px_65px_-15px_rgba(11,53,40,0.35)] border border-white/10 select-none ${className}`}
    >
      {/* Chassis side volume & power buttons */}
      <div className="absolute -left-[10px] top-[95px] h-7 w-[3px] rounded-l-sm bg-[#222724]" aria-hidden="true" />
      <div className="absolute -left-[10px] top-[135px] h-12 w-[3px] rounded-l-sm bg-[#222724]" aria-hidden="true" />
      <div className="absolute -right-[10px] top-[120px] h-16 w-[3px] rounded-r-sm bg-[#222724]" aria-hidden="true" />

      {/* Screen Canvas */}
      <div
        className={`relative h-full w-full overflow-hidden rounded-[40px] ${screenBg} flex flex-col text-[#0D1117]`}
      >
        {/* Status Bar */}
        <div className="relative z-30 flex h-9 shrink-0 items-center justify-between px-6 pt-1 text-[11px] font-semibold text-[#0D1117]">
          {/* Time */}
          <span className="w-12 text-left font-mono text-[11px]">{time}</span>

          {/* Dynamic Island Cutout */}
          <div className="mx-auto flex h-5 w-24 items-center justify-center rounded-full bg-black px-2 shadow-xs">
            <div className="ml-auto size-2 rounded-full bg-[#1c221e]" />
          </div>

          {/* Icons: Signal, WiFi, Battery */}
          <div className="flex w-12 items-center justify-end gap-1.5 text-[#0D1117]">
            {/* Cellular Signal Bars */}
            <svg className="size-3 shrink-0" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <rect x="1" y="11" width="2" height="4" rx="0.5" />
              <rect x="5" y="8" width="2" height="7" rx="0.5" />
              <rect x="9" y="5" width="2" height="10" rx="0.5" />
              <rect x="13" y="2" width="2" height="13" rx="0.5" />
            </svg>

            {/* Battery Indicator */}
            <div className="flex items-center">
              <div className="flex h-2.5 w-4 items-center rounded-xs border border-current p-[1px]">
                <div className="h-full w-2.5 rounded-2xs bg-[#00A663]" />
              </div>
              <div className="h-1 w-[1.5px] rounded-r-xs bg-current" />
            </div>
          </div>
        </div>

        {/* Dynamic Screen Content */}
        <div className="relative flex-1 overflow-y-auto overflow-x-hidden scrollbar-none flex flex-col">
          {children}
        </div>

        {/* Home Indicator Swipe Bar */}
        {showHomeIndicator && (
          <div className="relative z-30 flex shrink-0 justify-center py-2" aria-hidden="true">
            <div className="h-1 w-28 rounded-full bg-black/20" />
          </div>
        )}
      </div>
    </div>
  )
}
