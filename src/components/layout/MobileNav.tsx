import { useCallback, useRef } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { LayoutDashboard, LogOut, ShieldCheck } from 'lucide-react'
import { primaryNav, utilityNav } from '@/data'
import { useFocusTrap } from '@/hooks/useFocusTrap'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { Badge } from '@/components/ui/Badge'
import { ButtonLink } from '@/components/ui/Button'
import { getInitials } from '@/components/layout/UserProfileDropdown'
import { useAuth } from '@/context/AuthContext'
import { cn } from '@/lib/cn'

type Props = {
  open: boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const close = useCallback(() => onClose(), [onClose])

  useLockBodyScroll(open)
  useFocusTrap(open, dialogRef, close, '[aria-controls="mobile-menu"]')

  const pathname = usePathname()
  const router = useRouter()
  const { isAuthenticated, user, isLoaded, logout } = useAuth()

  if (!open) return null

  const start = utilityNav.find((item) => item.id === 'start')
  const login = utilityNav.find((item) => item.id === 'login')

  function handleLogout() {
    close()
    logout()
    router.push('/login')
  }

  return (
    <div
      ref={dialogRef}
      id="mobile-menu"
      className="fixed inset-x-0 bottom-0 top-[calc(var(--header-h)+var(--promo-h))] z-[var(--z-modal)] bg-bg motion-safe:animate-[sheet-in_320ms_cubic-bezier(0.16,1,0.3,1)]"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <nav className="mx-auto flex h-full max-w-[var(--container-wide)] flex-col px-5 py-8 md:px-8">
        <ul className="flex flex-col gap-1.5">
          {primaryNav.map((item) => {
            const current =
              pathname === item.href ||
              (item.href !== '/' && !!pathname?.startsWith(`${item.href}/`))
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  aria-current={current ? 'page' : undefined}
                  className={cn(
                    'flex items-center justify-between rounded-xl px-4 py-3 text-xl tracking-tight transition-all duration-200',
                    current
                      ? 'font-semibold text-primary bg-primary/[0.08] border-l-4 border-primary pl-3.5 shadow-xs'
                      : 'font-normal text-ink/70 hover:text-ink hover:bg-ink/[0.03]',
                  )}
                >
                  <span className="flex items-center gap-2">
                    {item.label}
                    {item.badge ? (
                      <Badge className={cn('transition-colors', current && 'bg-primary/20 text-primary')}>
                        {item.badge}
                      </Badge>
                    ) : null}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="mt-auto flex flex-col gap-3 pb-6">
          {isLoaded && isAuthenticated && user ? (
            <div className="rounded-2xl border border-line bg-surface/90 p-4">
              <div className="flex items-center gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-sm font-bold text-primary-ink shadow-xs">
                  {getInitials(user.name)}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-ink">{user.name}</p>
                  <p className="truncate text-xs text-muted">{user.email}</p>
                  <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[0.65rem] font-semibold text-emerald-800">
                    <ShieldCheck size={10} />
                    {user.investorType === 'institutional' ? 'Institutional' : 'Individual'} Investor
                  </span>
                </div>
              </div>

              <div className="my-3.5 h-px bg-line" />

              <div className="flex flex-col gap-2">
                <Link
                  href="/properties"
                  onClick={onClose}
                  className="flex items-center gap-2.5 rounded-xl px-2 py-2 text-sm font-medium text-ink transition-colors hover:bg-bg-warm hover:text-primary"
                >
                  <LayoutDashboard size={16} className="text-muted" />
                  Portfolio / Dashboard
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex w-full items-center gap-2.5 rounded-xl px-2 py-2 text-sm font-semibold text-danger transition-colors hover:bg-danger/10 text-left"
                >
                  <LogOut size={16} />
                  Log out
                </button>
              </div>
            </div>
          ) : (
            <>
              {login ? (
                <Link
                  href={login.href}
                  onClick={onClose}
                  aria-current={pathname === login.href ? 'page' : undefined}
                  className={cn(
                    'inline-flex min-h-11 items-center rounded-xl px-4 text-base font-medium transition-all duration-200',
                    pathname === login.href
                      ? 'font-semibold text-primary bg-primary/[0.08] border-l-4 border-primary pl-3.5 shadow-xs'
                      : 'text-ink/75 hover:text-ink hover:bg-ink/[0.03]',
                  )}
                >
                  {login.label}
                </Link>
              ) : null}
              {start ? (
                <ButtonLink href={start.href} className="w-full" onClick={onClose}>
                  {start.label}
                </ButtonLink>
              ) : null}
            </>
          )}
        </div>
      </nav>
    </div>
  )
}

