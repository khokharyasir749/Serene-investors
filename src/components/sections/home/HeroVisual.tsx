import { Link } from '@/components/ui/Link'
import { heroVisual } from '@/data'

export function HeroVisual() {
  const { image, listing, yieldPill, receipt } = heroVisual

  return (
    <div data-hero-visual className="relative order-1 w-full max-w-[34rem] lg:order-2 lg:max-w-none">
      <div data-hero-frame data-depth-stage className="relative isolate">
        <img
          data-hero-image
          data-depth="back"
          src={image.src}
          alt={image.alt}
          width={2000}
          height={2500}
          fetchPriority="high"
          className="aspect-[4/5] h-auto w-full rounded-2xl object-cover [object-position:50%_22%] sm:aspect-[5/6] lg:aspect-auto lg:h-[min(72rem,calc(100dvh-var(--header-h)-var(--promo-h)+2rem))] lg:rounded-l-2xl lg:rounded-r-none lg:[object-position:48%_18%]"
        />

        <Link
          href="/properties/courtyard-residences"
          data-hero-card="property"
          data-depth="mid"
          aria-label={`View sample listing for ${listing.place}`}
          className="absolute bottom-4 left-4 w-[min(19rem,calc(100%-2rem))] rounded-2xl border border-ink/[0.08] bg-surface/90 px-5 py-4 text-ink shadow-[0_18px_40px_rgb(24_32_25/0.14)] backdrop-blur-md transition-all duration-500 ease-out hover:z-50 hover:-translate-y-2 hover:border-ink/20 hover:shadow-2xl lg:-left-3 lg:bottom-10 lg:w-[21rem] lg:-rotate-[1.5deg]"
        >
          <p className="home-kicker text-muted">{listing.type}</p>
          <p className="mt-2 text-xl font-medium tracking-tight">{listing.place}</p>
          <p className="mt-3 text-sm font-medium text-primary">{listing.yieldLabel}</p>
          <p className="text-sm text-muted">{listing.priceLabel}</p>
          <p className="mt-1 text-xs text-muted">{listing.sampleLabel}</p>
        </Link>

        <p
          data-hero-pill
          data-depth="front"
          className="absolute right-4 top-4 rounded-pill border border-ink/[0.08] bg-surface/90 px-3.5 py-1.5 text-xs font-semibold text-ink shadow-sm backdrop-blur-md lg:right-[8%] lg:top-7"
        >
          {yieldPill.label}
        </p>

        <Link
          href="/properties/cedar-court"
          data-hero-card="receipt"
          data-depth="front"
          aria-label={`View sample listing for ${receipt.detail}`}
          className="absolute right-4 top-16 w-[min(13.5rem,calc(100%-2rem))] rounded-2xl border border-ink/[0.08] bg-surface/90 px-3.5 py-3 text-ink shadow-[0_18px_40px_rgb(24_32_25/0.14)] backdrop-blur-md transition-all duration-500 ease-out hover:z-50 hover:-translate-y-2 hover:border-ink/20 hover:shadow-2xl lg:right-[7%] lg:top-[12%] lg:w-[13.5rem] lg:rotate-[2.5deg]"
        >
          <p className="flex items-baseline justify-between gap-2 text-sm">
            <span>{receipt.title}</span>
            <span className="text-base font-semibold tabular-nums">{receipt.amount}</span>
          </p>
          <p className="mt-1 text-xs text-muted">{receipt.detail}</p>
          <p className="text-xs text-muted">{receipt.sampleLabel}</p>
        </Link>
      </div>
    </div>
  )
}
