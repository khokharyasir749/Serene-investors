import { useRef } from 'react'
import { Link } from '@/components/ui/Link'
import { ArrowRight } from 'lucide-react'
import type { Property } from '@/types'
import { formatPercent, formatPropertyMeta, formatSampleAmount, formatStatus } from '@/lib/format'
import { useCardPointerTilt } from '@/hooks/useCardPointerTilt'

type Props = {
  property: Property
}

export function CatalogueCard({ property }: Props) {
  const cardRef = useRef<HTMLElement>(null)
  useCardPointerTilt(cardRef)
  const location = formatPropertyMeta(property.neighborhood, property.city)
  const status = formatStatus(property.status)

  return (
    <article
      ref={cardRef}
      data-catalogue-card
      className="group relative rounded-2xl border border-ink/[0.08] bg-surface/90 p-3 shadow-xs transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-ink/15 hover:shadow-xl"
    >
      <Link
        to={`/properties/${property.id}`}
        aria-label={`${property.name}, ${location}, ${property.type}, ${status}, sample listing. View property.`}
        className="block rounded-xl text-inherit no-underline focus-visible:outline-2 focus-visible:outline-primary"
      >
        <div className="relative overflow-hidden rounded-xl bg-bg-warm">
          <div className="overflow-hidden">
            <img
              data-catalogue-image
              src={property.image}
              alt={property.imageAlt}
              width={1400}
              height={1750}
              loading="lazy"
              decoding="async"
              className="block aspect-[4/5] w-full object-cover [object-position:50%_30%] transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          {/* Subtle luxury vignette */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {/* Top badges */}
          <div className="absolute inset-x-3 top-3 flex items-center justify-between pointer-events-none">
            <span className="rounded-full border border-ink/[0.08] bg-surface/90 px-3 py-1 text-[0.7rem] font-medium text-ink shadow-sm backdrop-blur-md">
              {property.type}
              <span className="text-muted"> / {status}</span>
            </span>
            <span className="rounded-full border border-emerald-800/10 bg-emerald-900/85 px-2.5 py-0.8 text-[0.65rem] font-bold text-white shadow-xs backdrop-blur-md font-mono">
              92% Funded
            </span>
          </div>
        </div>

        <div className="px-1.5 pt-4 pb-2 text-ink">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="rounded-md bg-emerald-100/80 px-2 py-0.5 text-[0.68rem] font-semibold text-emerald-800">
              Yield {formatPercent(property.sampleYieldPct)}
            </span>
            <span className="rounded-md bg-bg-warm px-2 py-0.5 text-[0.68rem] font-medium text-muted">
              FCA Custodian
            </span>
          </div>

          <h3 className="text-xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-primary">
            {property.name}
          </h3>
          <p className="mt-1 text-sm text-muted">{location}</p>
          <div className="mt-3.5 grid gap-1 text-xs text-muted sm:text-sm">
            <span>Sample yield {formatPercent(property.sampleYieldPct)}</span>
            <span>Sample minimum {formatSampleAmount(property.sampleMinInvestment)}</span>
          </div>
          <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors duration-300 group-hover:text-primary">
            View property
            <ArrowRight
              size={16}
              strokeWidth={1.75}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </p>
        </div>
      </Link>
    </article>
  )
}
