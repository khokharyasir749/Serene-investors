import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { OfferingSplit } from '@/types'
import { fundStageIntro, funds, sampleFundMinimum } from '@/data'
import { fundStageAssets, fundStageImage } from '@/data/fund-stage-assets'
import { formatSampleAmount } from '@/lib/format'
import { useOfferingsReveal } from '@/hooks/useOfferingsReveal'

type Props = {
  offering: OfferingSplit
}

const FLOAT_CONFIGS = [
  { id: 'fund-float-0', defaultZIndex: 2, defaultTransform: 'rotate(3deg)', positionClass: 'fund-float--one' },
  { id: 'fund-float-1', defaultZIndex: 6, defaultTransform: 'rotate(-3.5deg)', positionClass: 'fund-float--two' },
  { id: 'fund-float-2', defaultZIndex: 4, defaultTransform: 'rotate(2deg)', positionClass: 'fund-float--three' },
] as const

export function FundStageSection({ offering }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  useOfferingsReveal(rootRef)

  const urban = funds.find((item) => item.id === 'urban-living-fund')
  const quay = funds.find((item) => item.id === 'quay-mixed-fund')
  const olive = funds.find((item) => item.id === 'olive-court-fund')
  const floats = [urban, quay, olive].filter((item) => item !== undefined)

  const isPhoneHovered = hoveredCard === 'fund-phone'
  const phoneStyle = {
    zIndex: isPhoneHovered ? 9999 : (hoveredCard ? 1 : 5),
    transform: isPhoneHovered ? 'translate3d(0, -14px, 0) scale(1.05)' : undefined,
    transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, z-index 0s',
    boxShadow: isPhoneHovered ? '0 30px 60px -12px rgba(0, 0, 0, 0.45)' : undefined,
    pointerEvents: 'auto' as const,
  }

  return (
    <section
      ref={rootRef}
      id="funds-stage"
      className="chapter-green home-band home-band--stage overflow-x-clip"
      aria-labelledby="fund-stage-heading"
    >
      <div className="fund-stage mx-auto max-w-[var(--container-wide)]">
        <div className="max-w-xl">
          <p data-reveal-heading className="home-kicker">
            {fundStageIntro.eyebrow}
          </p>
          <h2
            data-reveal-heading
            id="fund-stage-heading"
            className="home-heading mt-3 max-w-[12ch]"
          >
            {fundStageIntro.heading}
          </h2>
          <p data-reveal-heading className="home-lede max-w-[38ch]">
            {fundStageIntro.body}
          </p>
          <Link
            data-reveal-heading
            to={offering.href}
            className="mt-8 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium"
          >
            {offering.cta}
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </Link>
        </div>

        <div data-reveal-item data-depth-stage className="fund-stage__scene">
          <div data-offering-media data-depth="back" className="fund-stage__field pointer-events-none">
            <img
              src={fundStageAssets.field.src}
              alt=""
              width={1600}
              height={900}
              loading="lazy"
              decoding="async"
              className="pointer-events-none"
            />
          </div>

          <article
            data-offering-card
            data-fund-phone
            data-depth="mid"
            className="fund-phone app-phone"
            style={phoneStyle}
            onMouseEnter={() => setHoveredCard('fund-phone')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="app-phone__screen fund-phone__screen">
              <div className="px-3.5 pt-2">
                <div className="app-phone__island" />
                <p className="home-kicker mt-5 text-muted">Sample fund</p>
                <p className="mt-3 text-xl font-semibold tracking-tight">
                  {urban?.name ?? offering.example.name}
                </p>
                <p className="mt-1 text-sm text-muted">
                  {urban ? `${urban.propertyCount} sample properties` : offering.example.meta}
                </p>
              </div>
              <img
                className="fund-phone__photo"
                src={fundStageAssets['urban-living-fund'].src}
                alt=""
                width={900}
                height={1200}
              />
              <div className="px-3.5 pb-5 pt-4">
                <p className="text-[11px] uppercase tracking-[0.12em] text-subtle">
                  Sample minimum
                </p>
                <p className="mt-1 text-3xl font-semibold tabular-nums tracking-tight">
                  {formatSampleAmount(sampleFundMinimum)}
                </p>
                <p className="mt-3 text-sm text-muted">{urban?.portfolioLabel ?? offering.example.detail}</p>
              </div>
            </div>
          </article>

          {floats.map((fund, index) => {
            const config = FLOAT_CONFIGS[index] ?? FLOAT_CONFIGS[0]
            const isHovered = hoveredCard === config.id
            const image = fundStageImage(fund.id)

            const floatStyle = {
              zIndex: isHovered ? 9999 : (hoveredCard ? 1 : config.defaultZIndex),
              transform: isHovered
                ? 'translate3d(0, -14px, 0) scale(1.05)'
                : (hoveredCard ? `${config.defaultTransform} scale(0.97)` : config.defaultTransform),
              transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, z-index 0s',
              boxShadow: isHovered ? '0 30px 60px -12px rgba(0, 0, 0, 0.45)' : undefined,
              pointerEvents: 'auto' as const,
            }

            return (
              <aside
                key={fund.id}
                data-offering-card
                data-fund-float={index}
                className={`fund-float ${config.positionClass} stage-card`}
                style={floatStyle}
                onMouseEnter={() => setHoveredCard(config.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img
                  className="fund-float__image pointer-events-none"
                  src={image.src}
                  alt={image.alt}
                  width={720}
                  height={540}
                  loading="lazy"
                  decoding="async"
                />
                <div className="fund-float__body">
                  <p className="home-kicker text-muted">Sample fund</p>
                  <p className="mt-2 text-lg font-medium tracking-tight">{fund.name}</p>
                  <p className="mt-1 text-sm text-muted">
                    {fund.market} · {fund.propertyCount} sample properties
                  </p>
                  <p className="mt-4 flex items-baseline justify-between gap-4 text-sm">
                    <span className="text-muted">Sample minimum</span>
                    <span className="font-semibold tabular-nums">{formatSampleAmount(sampleFundMinimum)}</span>
                  </p>
                  <Link
                    to={`/funds#${fund.id}`}
                    className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium"
                  >
                    Explore funds
                    <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
                  </Link>
                </div>
              </aside>
            )
          })}
        </div>
      </div>
    </section>
  )
}
