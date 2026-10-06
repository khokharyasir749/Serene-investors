import { useRef, useState } from 'react'
import type { Testimonial } from '@/types'
import {
  TestimonialControls,
  TestimonialCopy,
  TestimonialSlide,
  TestimonialView,
} from '@/components/ui/TestimonialView'
import { usePointerTilt } from '@/hooks/usePointerTilt'
import { useScrollDepth } from '@/hooks/useScrollDepth'
import { useTestimonialsPin } from '@/hooks/useTestimonialsPin'
import { useTestimonialsReveal } from '@/hooks/useTestimonialsReveal'

type Props = {
  items: Testimonial[]
}

export function TestimonialsSection({ items }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const { pinned, step } = useTestimonialsPin({
    rootRef,
    pinRef,
    trackRef,
    count: items.length,
    onIndex: setIndex,
  })

  useTestimonialsReveal(rootRef, { skipVisual: pinned })
  useScrollDepth(rootRef, {
    selector: '[data-story-portrait] img',
    yPercent: 5,
    scale: 1.02,
    enabled: !pinned,
  })
  usePointerTilt(rootRef, {
    enabled: !pinned,
    layers: [
      { selector: '[data-story-portrait]', x: 8, y: 6, rotateX: 1.6, rotateY: 2, z: -16, invert: true },
      { selector: '[data-story-quote]', x: 10, y: 7, rotateX: 1.2, rotateY: 1.6, z: 20 },
    ],
  })

  const total = items.length
  const item = items[index]

  if (!item || total === 0) return null

  function showPrev() {
    step(-1)
  }

  function showNext() {
    step(1)
  }

  return (
    <section
      ref={rootRef}
      id="stories"
      className="home-band home-band--stage bg-soft"
      aria-labelledby="stories-heading"
    >
      <div ref={pinRef} className={pinned ? 'stories-pin' : undefined}>
        <div className="mx-auto max-w-[var(--container-wide)]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#00A663] mb-2">
              GLOBAL COMMUNITY
            </p>
            <h2 id="stories-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0D1117] leading-[1.12]">
              Hear from our global investors
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#4B5563]">
              Real stories from everyday and institutional investors building passive wealth with Serene.
            </p>
          </div>

          <div className="mt-10 lg:mt-14">
            {pinned ? (
              <div className="stories-stage">
                <div className="stories-viewport">
                  <div ref={trackRef} className="stories-track">
                    {items.map((entry, slideIndex) => (
                      <TestimonialSlide
                        key={entry.id}
                        item={entry}
                        active={slideIndex === index}
                      />
                    ))}
                  </div>
                </div>

                <div className="stories-chrome">
                  <div className="stories-chrome__grid">
                    <div aria-hidden="true" />
                    <div>
                      <div className="stories-chrome__ghost" aria-hidden="true">
                        <TestimonialCopy item={item} />
                      </div>
                      <TestimonialControls
                        index={index}
                        total={total}
                        onPrev={showPrev}
                        onNext={showNext}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <TestimonialView
                item={item}
                index={index}
                total={total}
                onPrev={showPrev}
                onNext={showNext}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
