'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  ChevronDown,
  LayoutDashboard,
  LogOut,
  Settings,
  ShieldCheck,
} from 'lucide-react'
import { useAuth, type User } from '@/context/AuthContext'
import { cn } from '@/lib/cn'

export function getInitials(name?: string): string {
  if (!name) return 'YK'
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

type Props = {
  user: User
}

export function UserProfileDropdown({ user }: Props) {
  const router = useRouter()
  const { logout } = useAuth()
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const initials = getInitials(user.name)
  const isInstitutional = user.investorType === 'institutional'
  const badgeLabel = isInstitutional ? 'Institutional Investor' : 'Individual Investor'

  // Close menu on click outside or escape key
  useEffect(() => {
    if (!open) return

    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  function handleLogout() {
    setOpen(false)
    logout()
    router.push('/login')
  }

  return (
    <div ref={menuRef} className="relative">
      {/* Profile Trigger Pill */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="menu"
        className={cn(
          'flex items-center gap-2.5 rounded-full border bg-surface/90 py-1 pl-1 pr-3 text-left transition-all duration-300 ease-out active:scale-[0.98]',
          open
            ? 'border-primary ring-2 ring-primary/20 shadow-md'
            : 'border-ink/[0.08] hover:border-ink/20 hover:bg-surface hover:shadow-xs',
        )}
      >
        <span className="flex size-7 items-center justify-center rounded-full bg-primary font-mono text-xs font-bold text-primary-ink shadow-xs">
          {initials}
        </span>
        <div className="flex flex-col">
          <span className="max-w-[110px] truncate text-xs font-semibold leading-tight text-ink sm:max-w-[130px]">
            {user.name}
          </span>
          <span className="text-[0.68rem] leading-none text-muted">
            {isInstitutional ? 'Institutional' : 'Individual'}
          </span>
        </div>
        <ChevronDown
          size={14}
          className={cn(
            'text-muted transition-transform duration-300',
            open && 'rotate-180 text-ink',
          )}
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          role="menu"
          aria-label="User account menu"
          className="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-72 origin-top-right rounded-2xl border border-ink/[0.08] bg-surface/95 p-2 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200"
        >
          {/* User Header Details */}
          <div className="flex items-start gap-3 rounded-xl bg-bg-warm/60 p-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-sm font-bold text-primary-ink shadow-xs">
              {initials}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-ink">{user.name}</p>
              <p className="truncate text-xs text-muted">{user.email}</p>
              <div className="mt-1.5 flex items-center gap-1.5">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[0.68rem] font-semibold text-emerald-800">
                  <ShieldCheck size={11} />
                  {badgeLabel}
                </span>
              </div>
            </div>
          </div>

          <div className="my-1.5 h-px bg-line" />

          {/* Navigation Items */}
          <div className="flex flex-col gap-0.5">
            <Link
              href="/properties"
              onClick={() => setOpen(false)}
              role="menuitem"
              className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-xs font-medium text-ink transition-colors hover:bg-bg-warm hover:text-primary"
            >
              <LayoutDashboard size={15} className="text-muted" />
              <span>Portfolio / Dashboard</span>
            </Link>

            <Link
              href="/about#contact"
              onClick={() => setOpen(false)}
              role="menuitem"
              className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-xs font-medium text-ink transition-colors hover:bg-bg-warm hover:text-primary"
            >
              <Settings size={15} className="text-muted" />
              <span>Account Settings</span>
              <span className="ml-auto rounded-md bg-bg-warm px-1.5 py-0.5 text-[0.65rem] text-muted">
                Demo
              </span>
            </Link>
          </div>

          <div className="my-1.5 h-px bg-line" />

          {/* Logout Action */}
          <button
            type="button"
            onClick={handleLogout}
            role="menuitem"
            className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-xs font-semibold text-danger transition-colors hover:bg-danger/10"
          >
            <LogOut size={15} />
            <span>Log out</span>
          </button>
        </div>
      )}
    </div>
  )
}
