import {
  TrendingUp,
  Plus,
  Percent,
  ArrowUpRight,
  ChevronRight,
  Calendar,
  Wallet,
} from 'lucide-react'

export function PortfolioPhoneScreen() {
  return (
    <div className="relative flex flex-col bg-bg-warm/30 px-3.5 pb-2 pt-1 font-sans text-ink">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <div className="size-6 rounded-full bg-emerald-900/10 border border-emerald-800/20 flex items-center justify-center text-[10px] font-bold text-primary">
            S
          </div>
          <span className="text-xs font-semibold text-ink">Portfolio</span>
        </div>
        <div className="flex items-center gap-1 rounded-full border border-ink/[0.08] bg-surface px-2 py-0.5 text-[10px] font-semibold text-ink shadow-2xs">
          <span>£ GBP</span>
          <ChevronRight size={10} className="text-muted" />
        </div>
      </div>

      {/* Big Numbers: Portfolio Value */}
      <div className="pt-1.5 pb-2.5">
        <p className="text-[10px] font-medium uppercase tracking-wider text-muted">
          Portfolio value
        </p>
        <p className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-ink">
          £306,500.00
        </p>
      </div>

      {/* Action Buttons Row: 4 circular/squircle icons */}
      <div className="grid grid-cols-4 gap-2 pb-3 text-center">
        <div className="flex flex-col items-center gap-1">
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-white shadow-xs transition-transform hover:scale-105 active:scale-95">
            <TrendingUp size={15} strokeWidth={2.2} />
          </div>
          <span className="text-[9.5px] font-medium text-ink">Invest</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="flex size-9 items-center justify-center rounded-xl border border-ink/[0.08] bg-surface text-ink shadow-2xs transition-transform hover:scale-105 active:scale-95">
            <Plus size={15} strokeWidth={2.2} />
          </div>
          <span className="text-[9.5px] font-medium text-ink">+ Deposit</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="flex size-9 items-center justify-center rounded-xl border border-ink/[0.08] bg-surface text-ink shadow-2xs transition-transform hover:scale-105 active:scale-95">
            <Percent size={14} strokeWidth={2.2} />
          </div>
          <span className="text-[9.5px] font-medium text-ink">Earn</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="flex size-9 items-center justify-center rounded-xl border border-ink/[0.08] bg-surface text-ink shadow-2xs transition-transform hover:scale-105 active:scale-95">
            <ArrowUpRight size={15} strokeWidth={2.2} />
          </div>
          <span className="text-[9.5px] font-medium text-ink">Exit</span>
        </div>
      </div>

      {/* Returns Banner: Two-tone Emerald Card */}
      <div className="relative overflow-hidden rounded-xl bg-[#1a3828] p-2.5 text-white shadow-xs">
        <div className="flex items-baseline justify-between">
          <span className="text-[10px] font-medium text-[#c0d4c7]">All time returns</span>
          <span className="rounded-full bg-emerald-400/20 px-1.5 py-0.2 text-[9px] font-bold text-emerald-300 font-mono">
            +30.8%
          </span>
        </div>
        <p className="mt-0.5 font-mono text-sm font-bold tracking-tight text-white">
          £91,950.00
        </p>

        {/* Two-tone emerald progress indicator */}
        <div className="mt-2 flex h-1.5 w-full overflow-hidden rounded-full bg-black/30">
          <div className="h-full w-[65%] bg-emerald-400" />
          <div className="h-full w-[35%] bg-emerald-600/80" />
        </div>
        <div className="mt-1 flex justify-between text-[8px] text-[#c0d4c7]">
          <span>Capital: +£64,365</span>
          <span>Rental: +£27,585</span>
        </div>
      </div>

      {/* Metric Widgets: July's Rent & Total Rental Income */}
      <div className="grid grid-cols-2 gap-2 pt-2.5">
        <div className="rounded-xl border border-ink/[0.06] bg-surface p-2 shadow-2xs">
          <div className="flex items-center gap-1 text-[9px] font-medium text-muted">
            <Calendar size={10} className="text-primary" />
            <span>July&apos;s rent</span>
          </div>
          <p className="mt-1 font-mono text-[11px] font-bold text-ink">
            £10,225.50
          </p>
        </div>
        <div className="rounded-xl border border-ink/[0.06] bg-surface p-2 shadow-2xs">
          <div className="flex items-center gap-1 text-[9px] font-medium text-muted">
            <Wallet size={10} className="text-primary" />
            <span>Total rental income</span>
          </div>
          <p className="mt-1 font-mono text-[11px] font-bold text-ink">
            £56,200.00
          </p>
        </div>
      </div>

      {/* Section Header: My Stakes & Active Holdings */}
      <div className="pt-2.5">
        <div className="flex items-center justify-between pb-1">
          <span className="text-[10.5px] font-bold text-ink">My Stakes</span>
          <span className="text-[9px] font-medium text-primary">View all (3)</span>
        </div>

        {/* Mini Holdings List */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between rounded-lg border border-ink/[0.05] bg-surface px-2 py-1.5 shadow-2xs">
            <div className="flex items-center gap-2">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=80&h=80&q=80"
                alt="Mayfair"
                className="size-6 rounded-md object-cover"
              />
              <div className="leading-tight">
                <p className="text-[10px] font-semibold text-ink">The Mayfair Core</p>
                <p className="text-[8px] text-muted">London W1 · Fractional</p>
              </div>
            </div>
            <div className="text-right leading-tight">
              <p className="font-mono text-[10px] font-bold text-ink">£142,500</p>
              <p className="font-mono text-[8px] font-semibold text-emerald-700">+8.4%</p>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-ink/[0.05] bg-surface px-2 py-1.5 shadow-2xs">
            <div className="flex items-center gap-2">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=80&h=80&q=80"
                alt="Courtyard"
                className="size-6 rounded-md object-cover"
              />
              <div className="leading-tight">
                <p className="text-[10px] font-semibold text-ink">Courtyard Residences</p>
                <p className="text-[8px] text-muted">Prime District · 2 Bed</p>
              </div>
            </div>
            <div className="text-right leading-tight">
              <p className="font-mono text-[10px] font-bold text-ink">£98,000</p>
              <p className="font-mono text-[8px] font-semibold text-emerald-700">+7.1%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
