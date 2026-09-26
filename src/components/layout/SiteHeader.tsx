import { useEffect, type MouseEvent } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useLenisControl } from '@/app/providers/LenisProvider'
import { primaryNav, site, utilityNav } from '@/data'
import { Badge } from '@/components/ui/Badge'
import { ButtonLink } from '@/components/ui/Button'
import { UserProfileDropdown } from '@/components/layout/UserProfileDropdown'
import { useAuth } from '@/context/AuthContext'
import { cn } from '@/lib/cn'
import { isModifiedClick } from '@/lib/nav'

type Props = {
  elevated: boolean
  menuOpen: boolean
  onMenuToggle: () => void
  onMenuClose: () => void
}

export function SiteHeader({ elevated, menuOpen, onMenuToggle, onMenuClose }: Props) {
  const pathname = usePathname()
  const router = useRouter()
  const { scrollTo } = useLenisControl()

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    const onChange = () => {
      if (media.matches) onMenuClose()
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [onMenuClose])

  function goToTop(event: MouseEvent<HTMLAnchorElement>) {
    if (isModifiedClick(event)) return
    event.preventDefault()
    onMenuClose()
    if (pathname !== '/') {
      router.push('/')
    }
    scrollTo(0)
    requestAnimationFrame(() => scrollTo(0))
  }

  const { isAuthenticated, user, isLoaded } = useAuth()
  const login = utilityNav.find((item) => item.id === 'login')
  const start = utilityNav.find((item) => item.id === 'start')

  return (
    <header
      className={cn(
        'border-b bg-surface transition-all duration-300 ease-out',
        elevated ? 'border-ink/[0.08] shadow-xs' : 'border-transparent',
      )}
    >
      <div className="relative mx-auto flex h-[var(--header-h)] max-w-[var(--container-wide)] items-center justify-between px-5 md:px-8 lg:px-10">
        <Link
          href="/"
          onClick={goToTop}
          aria-label={`${site.name} home`}
          className="relative z-10 whitespace-nowrap text-[0.875rem] font-semibold tracking-[0.14em] transition-transform duration-300 active:scale-95 sm:text-[1rem] lg:text-[1.0625rem]"
        >
          {site.name}
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1.5 lg:flex"
          aria-label="Primary"
        >
          {primaryNav.map((item) => {
            const current =
              pathname === item.href ||
              (item.href !== '/' && !!pathname?.startsWith(`${item.href}/`))
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={item.href === '/' ? goToTop : undefined}
                aria-current={current ? 'page' : undefined}
                className={cn(
                  'relative inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm transition-all duration-300 ease-out active:scale-95',
                  current
                    ? 'font-semibold text-primary bg-primary/[0.08] shadow-xs after:absolute after:bottom-1 after:left-3.5 after:right-3.5 after:h-0.5 after:rounded-full after:bg-primary'
                    : 'font-normal text-ink/65 hover:text-ink hover:bg-ink/[0.04]',
                )}
              >
                <span>{item.label}</span>
                {item.badge ? (
                  <Badge className={cn('transition-colors', current && 'bg-primary/20 text-primary')}>
                    {item.badge}
                  </Badge>
                ) : null}
              </Link>
            )
          })}
        </nav>

        <div className="relative z-10 flex items-center gap-5">
          {isLoaded && isAuthenticated && user ? (
            <div className="max-lg:hidden">
              <UserProfileDropdown user={user} />
            </div>
          ) : (
            <>
              {login ? (
                <Link
                  href={login.href}
                  aria-current={pathname === login.href ? 'page' : undefined}
                  className={cn(
                    'max-lg:hidden relative inline-flex items-center rounded-full px-3.5 py-1.5 text-sm transition-all duration-300 ease-out active:scale-95',
                    pathname === login.href
                      ? 'font-semibold text-primary bg-primary/[0.08] shadow-xs after:absolute after:bottom-1 after:left-3.5 after:right-3.5 after:h-0.5 after:rounded-full after:bg-primary'
                      : 'font-normal text-ink/65 hover:text-ink hover:bg-ink/[0.04]',
                  )}
                >
                  {login.label}
                </Link>
              ) : null}
              {start ? (
                <ButtonLink href={start.href} className="max-lg:hidden px-4 py-2">
                  {start.label}
                </ButtonLink>
              ) : null}
            </>
          )}

          <button
            type="button"
            className="flex size-11 items-center justify-center lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={onMenuToggle}
          >
            {menuOpen ? <X size={22} strokeWidth={1.75} /> : <Menu size={22} strokeWidth={1.75} />}
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>
    </header>
  )
}
