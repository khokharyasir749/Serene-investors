import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Props = {
  active: boolean
  stacked: boolean
  children: ReactNode
  order?: number
}

export function StoryVisual({ active, stacked, children, order }: Props) {
  const style =
    order === undefined
      ? undefined
      : ({ '--story-order': order } as CSSProperties)

  return (
    <div
      data-story-visual
      className={cn(
        'story-visual story-visual-layer w-full',
        stacked
          ? 'lg:absolute lg:inset-0 lg:flex lg:flex-col lg:justify-center'
          : 'mb-12 lg:mb-0',
        active ? 'is-active' : stacked ? 'lg:pointer-events-none' : '',
      )}
      style={style}
      aria-hidden={stacked && !active ? true : undefined}
      inert={stacked && !active ? true : undefined}
    >
      {children}
    </div>
  )
}
