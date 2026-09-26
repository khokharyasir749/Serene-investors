'use client'

const tickerItems = [
  { label: 'Total Assets Under Management', value: '£142.8M', highlight: true },
  { label: 'Avg. Historical Net Yield', value: '7.4%', positive: true },
  { label: 'Manchester Core Fund', value: '88% Allocated' },
  { label: 'Next Quarterly Distribution', value: '15 Oct 2026', highlight: true },
  { label: 'Security Model', value: '100% Asset-Backed' },
  { label: 'Active Wealth Clients', value: '2,490+' },
  { label: 'Historical Default Rate', value: '0.00%', positive: true },
  { label: 'Custodian Bank', value: 'FCA Regulated Tier-1' },
  { label: 'Cedar Court Manchester', value: '92% Funded' },
  { label: 'Portfolio Occupancy', value: '98.6%' },
]

export function MarketTickerBand() {
  return (
    <div
      className="group relative overflow-hidden border-y border-ink/[0.07] bg-surface/60 py-2.5 backdrop-blur-xs select-none"
      aria-label="Live Market and Platform Indicators"
    >
      {/* Left/Right Edge Fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-bg to-transparent" />

      <div className="flex w-max motion-safe:animate-[marquee_42s_linear_infinite] group-hover:[animation-play-state:paused]">
        {/* Render twice for continuous loop */}
        {[0, 1].map((copyIndex) => (
          <div key={copyIndex} className="flex shrink-0 items-center gap-8 pr-8 font-mono text-[0.72rem] tracking-tight text-ink/75 sm:text-xs">
            {tickerItems.map((item, idx) => (
              <div key={`${copyIndex}-${idx}`} className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-primary/70 shrink-0" />
                <span className="text-muted/80">{item.label}:</span>
                <span
                  className={
                    item.positive
                      ? 'font-semibold text-emerald-700'
                      : item.highlight
                        ? 'font-semibold text-primary'
                        : 'font-semibold text-ink'
                  }
                >
                  {item.value}
                </span>
                <span className="ml-3 text-ink/20 font-sans select-none">/</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
