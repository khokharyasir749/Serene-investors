'use client'

import { useEffect, useState, useRef, type CSSProperties, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { useHeaderState } from '@/hooks/useHeaderState'
import { useScrollToHash } from '@/hooks/useScrollToHash'
import { registerGsapPlugins, ScrollTrigger } from '@/lib/gsap'
import { MobileNav } from './MobileNav'
import { PromoBar } from './PromoBar'
import { ScrollProgressIndicator } from './ScrollProgressIndicator'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

type Props = {
  children: ReactNode
}

export function AppShellClient({ children }: Props) {
  const [promoOpen, setPromoOpen] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)
  const { elevated } = useHeaderState(sentinelRef)
  const pathname = usePathname()
  useScrollToHash()

  useEffect(() => {
    registerGsapPlugins()
    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, promoOpen])

  return (
    <div
      className="min-h-[100dvh] bg-bg text-ink"
      style={
        {
          '--promo-h': promoOpen ? 'var(--promo-h-open)' : '0px',
        } as CSSProperties
      }
    >
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollProgressIndicator />
      <div ref={sentinelRef} className="h-px" aria-hidden="true" />
      <div
        className="sticky top-0 z-[100000] bg-surface"
        data-site-sticky
        style={{ zIndex: 100000 }}
      >
        {promoOpen ? <PromoBar onDismiss={() => setPromoOpen(false)} /> : null}
        <SiteHeader
          elevated={elevated}
          menuOpen={menuOpen}
          onMenuToggle={() => setMenuOpen((value) => !value)}
          onMenuClose={() => setMenuOpen(false)}
        />
      </div>
      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div inert={menuOpen || undefined}>
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
