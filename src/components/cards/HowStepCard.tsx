'use client'

import type { ReactNode } from 'react'

export type HowStepData = {
  number: string
  title: string
  narrative: string
  subtag: string
  icon: ReactNode
}

type Props = {
  step: HowStepData
  index: number
}

export function HowStepCard({ step }: Props) {
  return (
    <div
      data-how-step-card
      className="group relative flex h-full flex-col justify-between rounded-2xl border border-ink/[0.08] bg-surface/95 p-6 sm:p-7 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-lg"
    >
      <div>
        {/* Top Header: Monospace numeral badge and micro-icon */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center rounded-full border border-emerald-800/15 bg-emerald-950/80 px-2.5 py-0.5 font-mono text-xs font-bold text-emerald-300 shadow-xs backdrop-blur-sm">
            {step.number}
          </span>
          <div className="flex size-11 items-center justify-center rounded-xl border border-ink/[0.06] bg-bg-warm text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-ink group-hover:scale-105">
            {step.icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink">
          {step.title}
        </h3>

        {/* Narrative */}
        <p className="mt-2.5 text-sm leading-relaxed text-muted">
          {step.narrative}
        </p>
      </div>

      {/* Sub-tag footer */}
      <div className="mt-6 pt-4 border-t border-ink/[0.06]">
        <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-50/80 px-2.5 py-1 text-[11px] font-semibold text-emerald-900 border border-emerald-200/60 font-mono tracking-tight">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span>{step.subtag}</span>
        </span>
      </div>
    </div>
  )
}
