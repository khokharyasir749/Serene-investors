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
      className="group relative rounded-2xl transition-all duration-300 hover:shadow-xl scroll-mt-[calc(var(--header-h)+var(--promo-h)+1.5rem)]"
    >
      <Link
        href={`/funds/${fund.id}`}
        aria-label={`${fund.name}, ${fund.market}, ${fund.propertyCount} sample properties, ${fundSampleStatus}. View fund.`}
        className="block text-inherit no-underline rounded-2xl focus-visible:outline-2 focus-visible:outline-primary"
      >
        <div className="relative overflow-hidden rounded-2xl bg-bg-warm">
          <div className="overflow-hidden">
            <img
              data-fund-card-image
              src={fund.image}
              alt={fund.imageAlt}
              width={1400}
              height={1050}
              loading="lazy"
              decoding="async"
              className="block w-full aspect-[4/5] object-cover object-[50%_35%] transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <p className="absolute left-3.5 top-3.5 rounded-full bg-surface px-3 py-1 text-xs font-medium text-ink shadow-sm">
            {formatFundType(fund.type)}
            <span className="text-muted"> / {fundSampleStatus}</span>
          </p>
        </div>

        <div className="pt-4.5 text-ink">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink group-hover:text-primary transition-colors">{fund.name}</h3>
          <p className="mt-1 text-sm text-muted">
            {fund.market}
            <span> · {fund.portfolioLabel}</span>
          </p>
          <p className="grid gap-1 mt-3.5 text-sm text-muted">
            <span>{fund.propertyCount} sample properties</span>
            <span>Sample yield {formatPercent(fund.sampleReturnPct)}</span>
            <span>Sample minimum {formatSampleAmount(sampleFundMinimum)}</span>
          </p>
          <p className="inline-flex items-center gap-1.5 mt-3.5 text-sm font-medium text-ink group-hover:text-primary transition-colors">
            View fund
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
          </p>
        </div>
      </Link>
    </article>
  )
}

