'use client'

import { useRef } from 'react'
import { Link } from '@/components/ui/Link'
import { ArrowRight } from 'lucide-react'
import type { Fund } from '@/types'
import { fundSampleStatus, sampleFundMinimum } from '@/data'
import { formatFundType, formatPercent, formatSampleAmount } from '@/lib/format'
import { useCardPointerTilt } from '@/hooks/useCardPointerTilt'

type Props = {
  fund: Fund
}

export function FundCard({ fund }: Props) {
  const cardRef = useRef<HTMLElement>(null)
  useCardPointerTilt(cardRef)

  return (
    <article
      ref={cardRef}
      id={fund.id}
      data-fund-id={fund.id}
      data-fund-card
      className="group relative rounded-2xl border border-ink/[0.08] bg-surface/90 p-3 shadow-xs scroll-mt-[calc(var(--header-h)+var(--promo-h)+1.5rem)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-ink/15 hover:shadow-xl"
    >
      <Link
        href={`/funds/${fund.id}`}
        aria-label={`${fund.name}, ${fund.market}, ${fund.propertyCount} sample properties, ${fundSampleStatus}. View fund.`}
        className="block rounded-xl text-inherit no-underline focus-visible:outline-2 focus-visible:outline-primary"
      >
        <div className="relative overflow-hidden rounded-xl bg-bg-warm">
          <div className="overflow-hidden">
            <img
              data-fund-card-image
              src={fund.image}
              alt={fund.imageAlt}
              width={1400}
              height={1050}
              loading="lazy"
              decoding="async"
              className="block aspect-[4/5] w-full object-cover [object-position:50%_35%] transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          {/* Subtle luxury vignette */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {/* Top badges */}
          <div className="absolute inset-x-3 top-3 flex items-center justify-between pointer-events-none">
            <span className="rounded-full border border-ink/[0.08] bg-surface/90 px-3 py-1 text-[0.7rem] font-medium text-ink shadow-sm backdrop-blur-md">
              {formatFundType(fund.type)}
              <span className="text-muted"> / {fundSampleStatus}</span>
            </span>
            <span className="rounded-full border border-emerald-800/10 bg-emerald-900/85 px-2.5 py-0.8 text-[0.65rem] font-bold text-white shadow-xs backdrop-blur-md font-mono">
              88% Allocated
            </span>
          </div>
        </div>

        <div className="px-1.5 pt-4 pb-2 text-ink">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="rounded-md bg-emerald-100/80 px-2 py-0.5 text-[0.68rem] font-semibold text-emerald-800">
              Yield {formatPercent(fund.sampleReturnPct)}
            </span>
            <span className="rounded-md bg-bg-warm px-2 py-0.5 text-[0.68rem] font-medium text-muted">
              FCA Custodian
            </span>
          </div>

          <h3 className="text-xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-primary sm:text-2xl">
            {fund.name}
          </h3>
          <p className="mt-1 text-sm text-muted">
            {fund.market}
            <span> · {fund.portfolioLabel}</span>
          </p>
          <div className="mt-3.5 grid gap-1 text-xs text-muted sm:text-sm">
            <span>{fund.propertyCount} sample properties</span>
            <span>Sample yield {formatPercent(fund.sampleReturnPct)}</span>
            <span>Sample minimum {formatSampleAmount(sampleFundMinimum)}</span>
          </div>
          <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors duration-300 group-hover:text-primary">
            View fund
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
