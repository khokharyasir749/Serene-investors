import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'

type Shared = {
  variant?: Variant
  children: ReactNode
  className?: string
}

const variants: Record<Variant, string> = {
  primary:
    'relative overflow-hidden bg-primary text-primary-ink shadow-xs hover:bg-accent hover:shadow-lg hover:shadow-primary/15 before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-700 hover:before:translate-x-full',
  secondary:
    'bg-accent text-accent-ink border border-ink/[0.08] hover:bg-primary hover:text-primary-ink hover:border-primary/20 hover:shadow-md hover:shadow-primary/10',
  ghost:
    'bg-transparent text-ink hover:text-primary hover:bg-ink/[0.04] hover:backdrop-blur-xs border border-transparent hover:border-ink/[0.08]',
}

const base =
  'group inline-flex items-center justify-center rounded-pill px-5 py-2.5 text-sm font-medium transition-all duration-300 ease-out hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-45 disabled:hover:translate-y-0 disabled:hover:scale-100 disabled:shadow-none'

export function Button({
  variant = 'primary',
  className,
  children,
  type = 'button',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & Shared) {
  return (
    <button type={type} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}

type ButtonLinkProps = Shared & {
  to?: string
  href?: string
} & Omit<ComponentProps<typeof Link>, 'href' | 'className' | 'children'>

export function ButtonLink({
  to,
  href,
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonLinkProps) {
  const targetHref = href ?? to ?? '/'
  return (
    <Link href={targetHref} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Link>
  )
}
