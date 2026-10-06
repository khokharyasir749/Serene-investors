'use client'

import { useRef } from 'react'
import type { PressLogo } from '@/types'
import { PressMark } from '@/components/ui/PressMark'
import { pressIntro, pressLogos as defaultLogos } from '@/data'
import { usePressReveal } from '@/hooks/usePressReveal'

type Props = {
  logos?: PressLogo[]
}

export function PressSection({ logos = defaultLogos }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  usePressReveal(rootRef)

  return (
    <section
      ref={rootRef}
      id="press"
      className="relative border-b border-ink/[0.08] bg-surface/50 py-8 md:py-10 backdrop-blur-xs select-none"
      aria-label="Publications and Media Features"
    >
      <div className="mx-auto max-w-[var(--container-wide)] px-5 md:px-8">
        {/* Centered Small Subtitle */}
        <p
          data-reveal-heading
          className="text-center font-mono text-[0.6875rem] sm:text-xs font-semibold uppercase tracking-[0.18em] text-muted/80"
        >
          {pressIntro.label}
        </p>

        {/* Clean Horizontal Monotone Logo Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12 md:gap-x-14 lg:gap-x-16">
          {logos.map((logo, index) => (
            <div
              key={logo.id}
              data-press-mark
              className="group flex items-center justify-center"
            >
              <a
                href={logo.href || '/learn'}
                title={logo.quote ? `“${logo.quote}” — ${logo.name}` : logo.name}
                aria-label={`View feature in ${logo.name}`}
                className="flex items-center justify-center text-ink/45 hover:text-ink opacity-60 hover:opacity-100 transition-all duration-300 transform-gpu hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm"
              >
                <PressMark id={logo.id} name={logo.name} index={index} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
