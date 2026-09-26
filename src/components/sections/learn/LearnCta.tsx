import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/ui/Button'
import { learnCta } from '@/data'
import { useSectionReveal } from '@/hooks/useSectionReveal'

export function LearnCta() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  return (
    <section ref={rootRef} className="learn-cta py-20 px-6 bg-soft text-soft-ink" aria-labelledby="learn-cta-heading">
      <div className="mx-auto max-w-7xl">
        <p data-reveal-heading className="text-xs font-semibold uppercase tracking-[0.14em] text-muted m-0">
          Next step
        </p>
        <h2
          data-reveal-heading
          id="learn-cta-heading"
          className="mt-4 max-w-[12ch] text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance text-ink"
        >
          {learnCta.heading}
        </h2>
        <p
          data-reveal-heading
          className="mt-5 max-w-[38ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
        >
          {learnCta.body}
        </p>
        <div data-reveal-heading className="learn-cta__actions flex flex-col sm:flex-row items-center gap-4 mt-8">
          <ButtonLink href="/properties" className="min-h-11 w-full gap-1.5 sm:w-auto">
            Explore properties
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="/funds" variant="ghost" className="min-h-11 w-full sm:w-auto">
            Explore funds
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
