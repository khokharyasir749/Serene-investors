'use client'

import { useLayoutEffect, useRef } from 'react'
import { heroCopy } from '@/data'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { gsap, registerGsapPlugins } from '@/lib/gsap'
import { Link } from '@/components/ui/Link'
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
          {/* Left Column (Editorial Content & Dual App Store Badges) */}
          <div className="order-1 w-full max-w-2xl lg:col-span-7 xl:col-span-7 lg:max-w-none">
            {/* Top Kicker Pill: green live dot + 10%+ average returns in 2025/2026 */}
            <div
              data-hero-eyebrow
              className="inline-flex items-center gap-2 rounded-full border border-ink/[0.08] bg-surface/90 px-3.5 py-1.5 text-xs font-medium text-ink shadow-2xs backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              <span className="tracking-normal font-medium text-ink/90">{heroCopy.eyebrow}</span>
            </div>

            {/* Main Headline: Bold display font with brand emerald highlight */}
            <h1
              data-hero-title
              className="mt-6 text-[clamp(2.75rem,5.2vw,4.75rem)] font-bold leading-[1.05] tracking-[-0.035em] text-ink text-balance"
            >
              Build your wealth through{' '}
              <span className="text-primary selection:bg-primary/20">prime real estate</span>
            </h1>

            {/* Descriptive Subtext */}
            <p
              data-hero-body
              className="mt-6 max-w-[46ch] text-[clamp(1.05rem,1.3vw,1.18rem)] leading-relaxed text-muted text-pretty"
            >
              {heroCopy.body}
            </p>

            {/* Dual App Store / Download Badges */}
            <div data-hero-cta className="mt-8 flex flex-col gap-3.5">
              <div className="flex flex-wrap items-center gap-3">
                {/* Download on the App Store */}
                <a
                  href="#app"
                  aria-label="Download on the App Store"
                  className="group inline-flex items-center gap-3 rounded-xl bg-black px-4 py-2.5 text-white shadow-md transition-all duration-200 hover:bg-zinc-800 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
                >
                  <svg
                    className="size-6 text-white shrink-0 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.92.04-2.01.62-2.65 1.37-.56.65-1.06 1.71-.92 2.73 1.03.08 2.05-.53 2.65-1.25" />
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[9.5px] uppercase font-medium tracking-tight text-white/75 leading-none">
                      Download on the
                    </span>
                    <span className="text-[0.9375rem] font-semibold tracking-tight text-white leading-tight mt-0.5 font-sans">
                      App Store
                    </span>
                  </div>
                </a>

                {/* GET IT ON Google Play */}
                <a
                  href="#app"
                  aria-label="Get it on Google Play"
                  className="group inline-flex items-center gap-3 rounded-xl bg-black px-4 py-2.5 text-white shadow-md transition-all duration-200 hover:bg-zinc-800 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
                >
                  <svg
                    className="size-6 text-white shrink-0 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M3.609 1.814C3.239 2.122 3 2.601 3 3.167v17.666c0 .566.239 1.045.609 1.353l10.184-10.186L3.609 1.814zm13.571 6.799l-3.387 3.387 3.387 3.387 3.736-2.097c.725-.407 1.084-1.127 1.084-1.903s-.359-1.496-1.084-1.903l-3.736-2.097zM4.5 1.5c-.338 0-.65.115-.89.314L13.793 12l3.387-3.387-11.352-6.371C5.537 1.79 5.042 1.5 4.5 1.5zm-.89 20.686c.24.199.552.314.89.314.542 0 1.037-.29 1.328-.743l11.352-6.37-3.387-3.387L3.61 22.186z" />
                  </svg>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] uppercase font-medium tracking-wider text-white/75 leading-none">
                      GET IT ON
                    </span>
                    <span className="text-[0.9375rem] font-semibold tracking-tight text-white leading-tight mt-0.5 font-sans">
                      Google Play
                    </span>
                  </div>
                </a>
              </div>

              {/* Subtle Trust Footnote */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
                <span>Available on iOS &amp; Android • Direct Web Access</span>
                <span className="text-ink/20 hidden sm:inline">•</span>
                <Link
                  href="/properties"
                  className="text-ink font-medium hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  Explore properties on web &rarr;
                </Link>
              </div>
            </div>

            {/* Proof Points Row: 3 micro trust metrics below buttons */}
            <div
              data-hero-proof
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink/[0.08] pt-5 text-xs text-muted"
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
