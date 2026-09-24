import { useState, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import type { RewardItem as RewardContent } from '@/types'
import { RewardItem } from '@/components/cards/RewardItem'
import { ButtonLink } from '@/components/ui/Button'
import { rewardsIntro } from '@/data'
import { useRewardsReveal } from '@/hooks/useRewardsReveal'

type Props = {
  items: RewardContent[]
}

const REWARD_CONFIGS: Record<string, { defaultZIndex: number; defaultTransform: string }> = {
  referral: { defaultZIndex: 2, defaultTransform: 'rotate(-2.4deg) translateY(10px)' },
  access: { defaultZIndex: 6, defaultTransform: 'rotate(0.5deg) translateY(-12px)' },
  milestones: { defaultZIndex: 2, defaultTransform: 'rotate(2.3deg) translateY(8px)' },
}

export function RewardsSection({ items }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  useRewardsReveal(rootRef)

  return (
    <section
      ref={rootRef}
      id="rewards"
      className="home-band home-band--stage overflow-x-clip bg-soft"
      aria-labelledby="rewards-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)]">
        <div className="mx-auto max-w-3xl text-center">
          <p data-reveal-heading className="home-kicker text-muted">
            {rewardsIntro.eyebrow}
          </p>
          <h2
            data-reveal-heading
            id="rewards-heading"
            className="home-heading mx-auto mt-4 max-w-[16ch] text-[clamp(2.4rem,4.6vw,4rem)]"
          >
            {rewardsIntro.heading}
          </h2>
          <p
            data-reveal-heading
            className="mt-5 inline-block rounded-pill bg-surface px-2.5 py-1 text-xs font-medium text-soft-ink"
          >
            {rewardsIntro.sampleLabel}
          </p>
        </div>

        <div className="reward-deck mt-14 lg:mt-20" data-depth-stage>
          <p className="reward-deck__mark pointer-events-none select-none" data-reward-mark aria-hidden="true">
            Rewards
          </p>
          {items.map((item, index) => {
            const config = REWARD_CONFIGS[item.id] ?? { defaultZIndex: 2, defaultTransform: 'none' }
            const isHovered = hoveredCard === item.id

            const cardStyle = {
              zIndex: isHovered ? 9999 : (hoveredCard ? 1 : config.defaultZIndex),
              transform: isHovered
                ? 'translate3d(0, -14px, 0) scale(1.04) rotate(0deg)'
                : (hoveredCard ? `${config.defaultTransform} scale(0.97)` : config.defaultTransform),
              transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, z-index 0s',
              boxShadow: isHovered
                ? '0 30px 60px -12px rgba(0, 0, 0, 0.4)'
                : undefined,
              pointerEvents: 'auto' as const,
            }

            return (
              <RewardItem
                key={item.id}
                item={item}
                index={index}
                style={cardStyle}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
              />
            )
          })}
        </div>

        <div data-rewards-cta className="mt-14 text-center">
          <ButtonLink to={rewardsIntro.action.href} variant="ghost" className="home-cta gap-1.5 px-0">
            {rewardsIntro.action.label}
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
