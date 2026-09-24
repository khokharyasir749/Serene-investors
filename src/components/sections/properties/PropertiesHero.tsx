import { useRef } from 'react'
import { propertiesIntro } from '@/data'
import { Image } from '@/components/ui/Image'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { usePointerTilt } from '@/hooks/usePointerTilt'
import { useSectionReveal } from '@/hooks/useSectionReveal'

export function PropertiesHero() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { media: '[data-properties-hero-image]' })
  usePointerTilt(rootRef, {
    layers: [
      { selector: '[data-properties-hero-image]', x: 8, y: 5, rotateX: 1.2, rotateY: 1.5, invert: true },
    ],
  })
  useDepthParallax(rootRef, [{ selector: '[data-properties-hero-image]', yPercent: 4 }])

  return (
    <section ref={rootRef} className="properties-hero" aria-labelledby="properties-heading">
      <div className="properties-hero__layout mx-auto max-w-[var(--container-wide)]">
        <div className="properties-hero__copy">
          <p data-reveal-heading className="property-hero__mark">
            Illustrative sample
          </p>
          <h1
            data-reveal-heading
            id="properties-heading"
            className="mt-6 max-w-[12ch] text-[clamp(2.6rem,5.4vw,4.6rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance"
          >
            {propertiesIntro.heading}
          </h1>
          <p
            data-reveal-heading
            className="mt-5 max-w-[38ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
          >
            {propertiesIntro.body}
          </p>
          <div data-reveal-heading className="properties-hero__rule" />
        </div>

        <figure data-reveal-item data-depth-stage className="properties-hero__media m-0">
          <Image
            data-properties-hero-image
            src={propertiesIntro.image.src}
            alt={propertiesIntro.image.alt}
            width={1600}
            height={1200}
            priority
            className="properties-hero__image"
          />
        </figure>
      </div>
    </section>
  )
}

