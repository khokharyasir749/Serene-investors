import type { CSSProperties } from 'react'
import type { StoryState } from '@/types'
import { cn } from '@/lib/cn'

type Props = {
  state: StoryState
  active: boolean
  stacked: boolean
  order?: number
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function supportPhrase(heading: string, subtitle?: string) {
  if (!subtitle) return undefined

  const remainder = subtitle
    .replace(new RegExp(`^${escapeRegExp(heading)}\\s+`, 'i'), '')
    .trim()

  return remainder || undefined
}

export function StoryCopy({ state, active, stacked, order }: Props) {
  const style =
    order === undefined
      ? undefined
      : ({ '--story-order': order } as CSSProperties)
  const support = supportPhrase(state.heading, state.subtitle)
  const body =
    state.body && state.body !== state.subtitle && state.body !== support
      ? state.body
      : undefined

  const headingText = state.heading
  let supportText = support || ''
  if (
    state.id === 'choose' ||
    (headingText.toLowerCase() === 'choose' && supportText.startsWith('A '))
  ) {
    supportText = supportText.replace(/^A\s+/, 'a ')
  }

  return (
    <div
      data-story-copy
      data-story-id={state.id}
      className={cn(
        'story-copy story-copy-state w-full',
        stacked
          ? 'lg:absolute lg:inset-0 lg:flex lg:flex-col lg:justify-center'
          : 'mb-12 lg:mb-0',
        active ? 'is-active' : stacked ? 'lg:pointer-events-none' : '',
      )}
      style={style}
      aria-hidden={stacked && !active ? true : undefined}
      inert={stacked && !active ? true : undefined}
    >
      <div className="story-copy__inner">
        <div className="flex items-center gap-3 mb-4">
          {state.number ? (
            <span className="text-xs font-mono font-bold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full inline-block">
              {state.number}
            </span>
          ) : null}
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/60">
            {state.kicker}
          </span>
        </div>

        <h3 className="text-3xl lg:text-4xl font-semibold mb-4 text-ink flex flex-wrap items-baseline gap-2">
          <span>{headingText}</span>
          {supportText ? (
            <span className="text-ink/80 font-normal">{supportText}</span>
          ) : null}
        </h3>

        {body ? (
          <p className="text-lg text-ink/70 leading-relaxed mb-4 max-w-xl">
            {body}
          </p>
        ) : null}

        {state.note ? (
          <p className="text-xs font-medium uppercase tracking-wider text-ink/40">
            {state.note}
          </p>
        ) : null}
      </div>
    </div>
  )
}
