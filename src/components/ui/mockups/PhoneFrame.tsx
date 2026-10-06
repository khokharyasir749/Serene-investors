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
      className={`relative mx-auto select-none rounded-[44px] border-[6px] border-[#181a19] bg-[#101211] p-[3px] shadow-[0_25px_60px_-15px_rgba(20,28,22,0.45),0_0_0_1px_rgba(255,255,255,0.08)] sm:rounded-[50px] sm:border-[8px] ${className}`}
    >
      {/* Side buttons */}
      <div className="absolute -left-[9px] top-[95px] h-7 w-[3px] rounded-l-sm bg-[#222724]" />
      <div className="absolute -left-[9px] top-[135px] h-12 w-[3px] rounded-l-sm bg-[#222724]" />
      <div className="absolute -left-[9px] top-[195px] h-12 w-[3px] rounded-l-sm bg-[#222724]" />
      <div className="absolute -right-[9px] top-[120px] h-16 w-[3px] rounded-r-sm bg-[#222724]" />

      {/* Screen container */}
      <div className="relative flex flex-col overflow-hidden rounded-[38px] bg-surface text-ink sm:rounded-[42px]">
        {/* Status Bar */}
        <div className="relative z-30 flex h-9 items-center justify-between px-6 pt-1 text-[11px] font-semibold text-ink">
          {/* Time */}
          <span className="w-12 text-left font-mono text-[10px] sm:text-[11px]">{time}</span>

          {/* Dynamic Island Pill Cutout */}
          <div className="mx-auto flex h-[18px] w-20 items-center justify-center rounded-full bg-black px-2 sm:h-5 sm:w-24">
            <div className="ml-auto size-2 rounded-full bg-[#1c221e]" />
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
  )
}
