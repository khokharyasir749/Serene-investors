import type { CSSProperties } from 'react'
import type { RewardItem as RewardContent } from '@/types'

type Props = {
  item: RewardContent
  index: number
  style?: CSSProperties
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

const TONE_CLASSES = [
  'bg-surface text-ink border border-black/5',
  'bg-primary text-primary-ink border border-white/10 shadow-2xl',
  'bg-accent text-accent-ink border border-white/10',
] as const

const MUTED_CLASSES = [
  'text-muted',
  'text-[#f7f5ef]/75',
  'text-[#f7f5ef]/75',
] as const

export function RewardItem({ item, index, style, onMouseEnter, onMouseLeave }: Props) {
  const toneClass = TONE_CLASSES[index] ?? TONE_CLASSES[0]
  const mutedClass = MUTED_CLASSES[index] ?? MUTED_CLASSES[0]

  return (
    <article
      data-reward-item={index}
      className={`relative min-h-[22rem] p-7 md:p-6 lg:p-7 rounded-2xl shadow-xl transition-all duration-300 md:-mx-2.5 cursor-pointer ${toneClass}`}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative">
        <p data-reward-kicker className={`text-xs font-semibold uppercase tracking-[0.14em] ${mutedClass}`}>
          {item.level}
        </p>
        <h3 className="mt-5 text-[1.65rem] font-semibold tracking-tight">{item.title}</h3>
        <p className={`mt-3 text-sm ${mutedClass}`}>Sample threshold</p>
        <p data-reward-figure className="mt-1 text-base font-medium">
          {item.threshold}
        </p>
        <p className={`mt-6 text-sm ${mutedClass}`}>Current benefits</p>
        <ul className="mt-2 space-y-2">
          {item.benefits.map((benefit) => (
            <li key={benefit} className="text-[0.9375rem] leading-snug">
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

