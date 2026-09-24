import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/ui/Button'
import { Image } from '@/components/ui/Image'
import { catalogueFeaturedFund, fundsCta } from '@/data'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { usePointerTilt } from '@/hooks/usePointerTilt'
import { useSectionReveal } from '@/hooks/useSectionReveal'

export function FundsCta() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { media: '[data-funds-cta-image]' })
  usePointerTilt(rootRef, {
    layers: [
      { selector: '[data-funds-cta-card]', x: 8, y: 5, rotateX: 1.2, rotateY: 1.4 },
    ],
  })
  useDepthParallax(rootRef, [{ selector: '[data-funds-cta-card]', yPercent: 4 }])

  return (
    <section ref={rootRef} className="funds-cta" aria-labelledby="funds-cta-heading">
      <div className="funds-cta__layout mx-auto max-w-[var(--container-wide)]">
        <div className="funds-cta__copy">
          <p data-reveal-heading className="property-hero__mark">
            Next step
          </p>
          <h2
            data-reveal-heading
            id="funds-cta-heading"
            className="mt-6 max-w-[12ch] text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance"
          >
            {fundsCta.heading}
          </h2>
          <p
            data-reveal-heading
            className="mt-5 max-w-[38ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
          >
            {fundsCta.body}
          </p>
          <div data-reveal-heading className="funds-cta__actions">
            <ButtonLink to={`/funds/${catalogueFeaturedFund.id}`} className="min-h-11 w-full gap-1.5 sm:w-auto">
              View a fund
              <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink to="/how-it-works" variant="ghost" className="min-h-11 w-full sm:w-auto">
              How it works
            </ButtonLink>
          </div>
        </div>

        <figure data-reveal-item data-depth-stage className="funds-cta__visual m-0">
          <Link
            to={`/funds/${catalogueFeaturedFund.id}`}
            data-funds-cta-card
            className="funds-cta__card block"
            aria-label={`View sample fund: ${catalogueFeaturedFund.name}`}
          >
            <Image
              data-funds-cta-image
              src={fundsCta.image.src}
              alt={fundsCta.image.alt}
              width={1600}
              height={1200}
              className="funds-cta__image"
            />
          </Link>
        </figure>
      </div>
    </section>
  )
}

