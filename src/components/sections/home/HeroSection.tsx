'use client'

import { useLayoutEffect, useRef } from 'react'
import { heroCopy } from '@/data'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { gsap, registerGsapPlugins } from '@/lib/gsap'
import { ButtonLink } from '@/components/ui/Button'
import { useHeroDepth } from '@/hooks/useHeroDepth'
import { HeroVisual } from './HeroVisual'

export function HeroSection() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()
  useHeroDepth(rootRef)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return

    registerGsapPlugins()

    const kicker = root.querySelector('[data-hero-eyebrow]')
    const title = root.querySelector('[data-hero-title]')
    const body = root.querySelector('[data-hero-body]')
    const cta = root.querySelector('[data-hero-cta]')
    const proof = root.querySelector('[data-hero-proof]')
    const visual = root.querySelector('[data-hero-visual]')
    const pill = root.querySelector('[data-hero-pill]')

    const ctx = gsap.context(() => {
      gsap.set([kicker, title, body, cta, proof], { opacity: 0, y: 24 })
      if (visual) gsap.set(visual, { opacity: 0, y: 32, scale: 0.98 })
      if (pill) gsap.set(pill, { opacity: 0, y: -12, scale: 0.9 })

      const timeline = gsap.timeline({
        defaults: { ease: 'power4.out' },
      })

      timeline
        .to(kicker, { opacity: 1, y: 0, duration: 0.5 }, 0.1)
        .to(title, { opacity: 1, y: 0, duration: 0.7 }, 0.2)
        .to(body, { opacity: 1, y: 0, duration: 0.55 }, 0.32)
        .to(cta, { opacity: 1, y: 0, duration: 0.5 }, 0.42)
        .to(proof, { opacity: 1, y: 0, duration: 0.5 }, 0.5)
        .to(visual, { opacity: 1, y: 0, scale: 1, duration: 0.85, ease: 'power3.out' }, 0.3)
        .to(pill, { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: 'back.out(1.7)' }, 0.6)
    }, root)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section
      ref={rootRef}
      id="hero"
      className="relative flex min-h-[calc(100dvh-var(--header-h)-var(--promo-h))] items-center overflow-x-clip px-5 py-12 md:px-8 md:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[var(--container-wide)]">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Left Column (High-Credibility Editorial Content) */}
          <div className="order-1 w-full max-w-2xl lg:col-span-7 xl:col-span-7 lg:max-w-none">
            {/* Top Trust Kicker: Frosted luxury pill with green live dot */}
            <div
              data-hero-eyebrow
              className="inline-flex items-center gap-2 rounded-full border border-ink/[0.08] bg-surface/90 px-3.5 py-1.5 text-xs font-medium text-ink shadow-xs backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              <span className="tracking-wide">{heroCopy.eyebrow}</span>
            </div>

            {/* Headline: Bold, confident, editorial statement */}
            <h1
              data-hero-title
              className="mt-6 text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-ink text-balance"
            >
              {heroCopy.headline}
            </h1>

            {/* Subheadline: Concise value proposition */}
            <p
              data-hero-body
              className="mt-6 max-w-[44ch] text-[clamp(1.05rem,1.35vw,1.18rem)] leading-relaxed text-muted text-pretty"
            >
              {heroCopy.body}
            </p>

            {/* Primary CTAs */}
            <div
              data-hero-cta
              className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4"
            >
              <ButtonLink
                href={heroCopy.primary.href}
                className="relative overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-ink shadow-sm transition-all duration-300 hover:bg-accent hover:shadow-md hover:-translate-y-0.5 active:scale-95"
              >
                <span>{heroCopy.primary.label}</span>
              </ButtonLink>
              <a
                href={heroCopy.secondary.href}
                className="inline-flex items-center justify-center rounded-full border border-ink/20 bg-surface/80 px-6 py-3.5 text-sm font-semibold text-ink shadow-xs backdrop-blur-sm transition-all duration-300 hover:bg-surface hover:border-ink/30 hover:-translate-y-0.5 active:scale-95"
              >
                <span>{heroCopy.secondary.label}</span>
              </a>
            </div>

            {/* Proof Points Row: 3 micro trust metrics below buttons */}
            <div
              data-hero-proof
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink/[0.08] pt-6 text-xs text-muted"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span>
                  <strong className="font-semibold text-ink">£140M+</strong> Assets Transacted
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span>
                  <strong className="font-semibold text-ink">Quarterly</strong> Liquidity
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span>
                  <strong className="font-semibold text-ink">100%</strong> Asset-Backed Deeds
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (Live Interactive Asset Showcase) */}
          <div className="order-2 w-full lg:col-span-5 xl:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
