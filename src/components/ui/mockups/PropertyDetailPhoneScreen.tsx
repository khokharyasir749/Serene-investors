import {
  ChevronLeft,
  Heart,
  Share2,
  Building2,
  Wallet,
  Briefcase,
  Gift,
  User,
} from 'lucide-react'

export function PropertyDetailPhoneScreen() {
  return (
    <div className="relative flex flex-col bg-surface font-sans text-ink">
      {/* Top Nav */}
      <div className="flex items-center justify-between px-3.5 py-1.5 border-b border-ink/[0.05]">
        <button type="button" className="text-ink">
          <ChevronLeft size={16} strokeWidth={2.2} />
        </button>
        <span className="text-[10px] font-semibold text-muted">Property Detail</span>
        <div className="flex items-center gap-2 text-ink">
          <Share2 size={13} />
          <Heart size={13} className="text-red-500 fill-red-500" />
        </div>
      </div>

      {/* Property Banner Photo with Carousel Dots & Available Tag */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg-warm">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&h=375&q=80"
          alt="The Mayfair Core Portfolio"
          className="h-full w-full object-cover"
        />
        {/* Top-Left Tag: "Available" */}
        <div className="absolute left-2.5 top-2.5 z-10">
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-800/20 bg-surface/90 px-2 py-0.5 text-[9px] font-bold text-emerald-900 shadow-2xs backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>Available</span>
          </span>
        </div>

        {/* Carousel Dots */}
        <div className="absolute inset-x-0 bottom-2 z-10 flex items-center justify-center gap-1">
          <div className="h-1 w-3 rounded-full bg-primary" />
          <div className="size-1 rounded-full bg-white/70" />
          <div className="size-1 rounded-full bg-white/70" />
        </div>
      </div>

      {/* Property Details Body */}
      <div className="p-3">
        {/* Tags Row */}
        <div className="flex items-center gap-1.5">
          <span className="rounded-md bg-bg-warm px-1.5 py-0.5 text-[8.5px] font-medium text-muted">
            2 Bed
          </span>
          <span className="rounded-md bg-emerald-50 px-1.5 py-0.5 text-[8.5px] font-medium text-emerald-800">
            Ready
          </span>
          <span className="rounded-md bg-bg-warm px-1.5 py-0.5 text-[8.5px] font-medium text-muted">
            Mayfair, London
          </span>
        </div>

        {/* Title & Price */}
        <h3 className="mt-1.5 text-xs font-bold tracking-tight text-ink">
          The Mayfair Core Portfolio
        </h3>
        <p className="mt-0.5 font-mono text-sm font-extrabold tracking-tight text-ink">
          £1,236,002
        </p>

        {/* Financial Breakdown Table */}
        <div className="mt-2.5 overflow-hidden rounded-lg border border-ink/[0.08] bg-bg-warm/30 text-[9px]">
          <div className="flex items-center justify-between border-b border-ink/[0.06] px-2 py-1">
            <span className="text-muted">Annualised return</span>
            <span className="font-mono font-bold text-emerald-800">6.84%</span>
          </div>
          <div className="flex items-center justify-between border-b border-ink/[0.06] px-2 py-1">
            <span className="text-muted">Annual appreciation</span>
            <span className="font-mono font-bold text-ink">6.77%</span>
          </div>
          <div className="flex items-center justify-between border-b border-ink/[0.06] px-2 py-1">
            <span className="text-muted">Gross yield</span>
            <span className="font-mono font-bold text-ink">5.98%</span>
          </div>
          <div className="flex items-center justify-between px-2 py-1">
            <span className="text-muted">Net yield</span>
            <span className="font-mono font-bold text-emerald-800">5.40%</span>
          </div>
        </div>
      </div>

      {/* Bottom Mobile App Tab Bar */}
      <div className="mt-auto grid grid-cols-5 border-t border-ink/[0.06] bg-surface py-1 text-center text-[7.5px] text-muted">
        <div className="flex flex-col items-center gap-0.5 text-primary">
          <Building2 size={13} strokeWidth={2.2} />
          <span className="font-semibold">Properties</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <Wallet size={13} />
          <span>Wallet</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <Briefcase size={13} />
          <span>Portfolio</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <Gift size={13} />
          <span>Rewards</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <User size={13} />
          <span>Profile</span>
        </div>
      </div>
    </div>
  )
}
