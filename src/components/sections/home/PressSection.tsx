'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ArrowUpRight, BookOpen, Quote, X } from 'lucide-react'
import type { PressLogo } from '@/types'
import { PressMark } from '@/components/ui/PressMark'
import { Button, ButtonLink } from '@/components/ui/Button'
import { pressIntro } from '@/data'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { usePressReveal } from '@/hooks/usePressReveal'

type Props = {
  logos: PressLogo[]
}

export function PressSection({ logos }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  usePressReveal(rootRef)

  const [selectedLogo, setSelectedLogo] = useState<PressLogo | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useLockBodyScroll(!!selectedLogo)

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setSelectedLogo(null)
    }
    if (selectedLogo) {
      window.addEventListener('keydown', onKeyDown)
      return () => window.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedLogo])

  return (
    <section
      ref={rootRef}
      id="press"
      className="home-band home-band--quiet overflow-x-clip border-y border-line bg-surface"
      aria-labelledby="press-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)]">
        <div className="mx-auto max-w-xl text-center">
          <p data-reveal-heading id="press-heading" className="home-kicker text-muted">
            {pressIntro.label}
          </p>
          <p data-reveal-heading className="mt-2 text-[0.9375rem] text-ink">
            {pressIntro.line}
          </p>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3.5 sm:mt-10 sm:gap-5 lg:mt-10 lg:grid-cols-4 lg:gap-6">
          {logos.map((logo, index) => (
            <li key={logo.id} data-press-mark className="press-mark w-full">
              <button
                type="button"
                onClick={() => setSelectedLogo(logo)}
                aria-haspopup="dialog"
                aria-expanded={selectedLogo?.id === logo.id}
                aria-label={`View ${logo.name} press feature`}
                className="group relative flex w-full flex-col items-center justify-center rounded-xl border border-ink/[0.08] bg-surface/70 px-4 py-3.5 sm:px-5 sm:py-4 shadow-2xs backdrop-blur-xs transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:bg-surface hover:shadow-md active:scale-95 cursor-pointer text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                {/* Desktop hover quote tooltip */}
                {logo.quote ? (
                  <div
                    role="tooltip"
                    className="pointer-events-none absolute -top-12 left-1/2 z-30 hidden -translate-x-1/2 translate-y-1 items-center gap-1.5 whitespace-nowrap rounded-lg bg-ink px-3 py-1.5 text-xs text-white shadow-xl opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 lg:flex after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-ink"
                  >
                    <Quote size={10} className="text-primary-ink/80 shrink-0" />
                    <span className="max-w-[280px] truncate italic">“{logo.quote}”</span>
                  </div>
                ) : null}

                <div className="flex items-center justify-center gap-1.5 text-ink/50 group-hover:text-ink transition-colors duration-300">
                  <PressMark id={logo.id} name={logo.name} index={index} />
                  <ArrowUpRight
                    size={13}
                    className="shrink-0 opacity-0 -translate-x-1 translate-y-0.5 text-primary transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
                  />
                </div>

                {logo.date ? (
                  <span className="mt-1 text-[0.6875rem] font-medium text-muted/70 transition-colors duration-300 group-hover:text-primary">
                    {logo.date}
                  </span>
                ) : null}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Interactive Press Quote Modal via React Portal */}
      {mounted && selectedLogo
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="press-modal-title"
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            >
              {/* Full-viewport Backdrop with Blur */}
              <div
                className="fixed inset-0 bg-ink/60 backdrop-blur-md transition-opacity motion-safe:animate-[fade-in_200ms_ease-out]"
                onClick={() => setSelectedLogo(null)}
                aria-hidden="true"
              />

              {/* Elevated, centered dialog card */}
              <div
                className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-line bg-surface p-6 sm:p-8 shadow-2xl transition-all motion-safe:animate-[scale-in_200ms_ease-out]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    <Quote size={12} />
                    {selectedLogo.date ?? 'Press Feature'}
                  </span>

                  <button
                    type="button"
                    onClick={() => setSelectedLogo(null)}
                    aria-label="Close modal"
                    className="flex size-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-bg-warm hover:text-ink cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="mt-5">
                  <PressMark
                    id={selectedLogo.id}
                    name={selectedLogo.name}
                    index={0}
                    className="text-xl sm:text-2xl text-ink font-semibold"
                  />

                  <div className="relative mt-5 rounded-xl border border-line/60 bg-bg-warm/60 p-5 sm:p-6">
                    <Quote size={28} className="text-primary/20 mb-2" />
                    <p className="font-serif text-lg sm:text-xl italic leading-relaxed text-ink">
                      “{selectedLogo.quote}”
                    </p>
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-muted">
                    Featured in <strong className="font-semibold text-ink">{selectedLogo.name}</strong>’s editorial study on institutional property syndication and transparent fractional yields.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-line">
                  <Button variant="secondary" onClick={() => setSelectedLogo(null)}>
                    Close
                  </Button>
                  <ButtonLink
                    href={selectedLogo.href || '/learn'}
                    onClick={() => setSelectedLogo(null)}
                    className="gap-1.5"
                  >
                    <BookOpen size={15} />
                    Read in Learn
                  </ButtonLink>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </section>
  )
}
