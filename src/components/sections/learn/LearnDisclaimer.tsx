import { useRef } from 'react'
import Link from 'next/link'
import { howPageFaq, learnDisclaimer } from '@/data'
import { useSectionReveal } from '@/hooks/useSectionReveal'

export function LearnDisclaimer() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  return (
    <section ref={rootRef} className="learn-disclaimer py-20 px-6 bg-accent text-accent-ink" aria-labelledby="learn-disclaimer-heading">
      <div className="mx-auto max-w-7xl">
        <p data-reveal-heading className="text-xs font-semibold uppercase tracking-[0.14em] text-[#f7f5ef]/60 m-0">
          Illustrative sample
        </p>
        <h2
          data-reveal-heading
          id="learn-disclaimer-heading"
          className="mt-4 max-w-[16ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance text-accent-ink"
        >
          {learnDisclaimer.heading}
        </h2>
        <p
          data-reveal-heading
          className="mt-5 max-w-[46ch] text-[1.05rem] leading-relaxed text-[#f7f5ef]/80 text-pretty"
        >
          {learnDisclaimer.body}
        </p>

        <div id="faq" className="mt-14 max-w-3xl">
          <h3 data-reveal-heading className="text-2xl font-semibold mb-6 text-accent-ink">
            Questions, in brief.
          </h3>
          <div className="border-b border-white/20">
            {howPageFaq.map((item) => (
              <details key={item.id} data-reveal-item className="group border-t border-white/20">
                <summary className="cursor-pointer list-none py-4 pr-7 text-lg font-semibold text-accent-ink flex items-center justify-between">
                  <span>{item.question}</span>
                  <span className="text-xs transition-transform duration-200 group-open:rotate-180" aria-hidden="true">▼</span>
                </summary>
                <p className="pb-5 text-sm text-[#f7f5ef]/80 leading-relaxed max-w-[46ch] m-0">{item.answer}</p>
              </details>
            ))}
          </div>
          <p data-reveal-item className="mt-8 text-sm text-[#f7f5ef]/70 leading-relaxed">
            The same answers also sit on{' '}
            <Link href="/how-it-works" className="font-medium underline underline-offset-4 text-accent-ink">How it works</Link>
            {' '}and in the{' '}
            <Link href="/legal/risks" className="font-medium underline underline-offset-4 text-accent-ink">sample key risks</Link>.
          </p>
        </div>
      </div>
    </section>
  )
}
