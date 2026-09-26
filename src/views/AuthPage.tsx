'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { CheckCircle2, ShieldCheck } from 'lucide-react'
import { Button, ButtonLink } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { funds, properties, site } from '@/data'
import { usePageMeta } from '@/hooks/usePageMeta'

type Props = {
  title: string
}

export function AuthPage({ title }: Props) {
  const params = useSearchParams()
  const [submitted, setSubmitted] = useState(false)
  const isLogin = title === 'Login'
  const intent = params?.get('intent')
  const relatedId = params?.get('id')
  const property = intent === 'property' ? properties.find((item) => item.id === relatedId) : undefined
  const fund = intent === 'fund' ? funds.find((item) => item.id === relatedId) : undefined

  const signupHref =
    intent && relatedId
      ? `/signup?intent=${encodeURIComponent(intent)}&id=${encodeURIComponent(relatedId)}`
      : '/signup'

  usePageMeta(
    `${site.name} | ${title}`,
    `${title} for the SERENE INVESTORS demonstration platform. This is a sample interaction and does not create a real account.`,
  )

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <Container as="section" className="flex justify-center py-12 md:py-16 lg:py-20">
      <div className="w-full max-w-md rounded-3xl border border-line bg-surface/90 p-7 sm:p-10 shadow-xl backdrop-blur-xl transition-all">
        {submitted ? (
          <div className="py-2 text-center" role="status">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
              <CheckCircle2 size={32} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
              {isLogin ? 'Demo session started' : 'Demo request received'}
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted">
              This is a sample interaction on {site.name}. Nothing was sent and no credentials were saved.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {property ? (
                <>
                  <ButtonLink href={`/properties/${property.id}`} className="w-full sm:w-auto">
                    View {property.name}
                  </ButtonLink>
                  <ButtonLink href="/properties" variant="ghost" className="w-full sm:w-auto">
                    Browse properties
                  </ButtonLink>
                </>
              ) : fund ? (
                <>
                  <ButtonLink href={`/funds/${fund.id}`} className="w-full sm:w-auto">
                    View {fund.name}
                  </ButtonLink>
                  <ButtonLink href="/funds" variant="ghost" className="w-full sm:w-auto">
                    Explore funds
                  </ButtonLink>
                </>
              ) : (
                <>
                  <ButtonLink href="/properties" className="w-full sm:w-auto">
                    Browse properties
                  </ButtonLink>
                  <ButtonLink href="/funds" variant="ghost" className="w-full sm:w-auto">
                    Explore funds
                  </ButtonLink>
                </>
              )}
            </div>
            {isLogin ? (
              <div className="mt-8 border-t border-line pt-4 text-xs text-muted">
                Don&apos;t have an account?{' '}
                <Link
                  href={signupHref}
                  className="font-semibold text-primary underline underline-offset-4 transition-colors hover:text-accent"
                >
                  Sign up
                </Link>
              </div>
            ) : null}
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="brand-label text-muted">Demo platform · {isLogin ? 'Member login' : 'Access'}</span>
            </div>

            <h1 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
              {title}
            </h1>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              {isLogin
                ? 'Use this sample form to preview a demo login. No credentials are stored and no real account is created.'
                : 'Use this sample form to preview onboarding. Submitting it does not open an account or place an investment.'}
            </p>

            {property ? (
              <div className="mt-4 flex items-center justify-between rounded-xl border border-line bg-bg-warm/60 px-4 py-2.5 text-xs text-ink">
                <span>
                  Continuing from sample property: <strong>{property.name}</strong>
                </span>
                <Link
                  href={`/properties/${property.id}`}
                  className="font-medium text-primary underline underline-offset-2 hover:text-accent"
                >
                  View
                </Link>
              </div>
            ) : null}

            {fund ? (
              <div className="mt-4 flex items-center justify-between rounded-xl border border-line bg-bg-warm/60 px-4 py-2.5 text-xs text-ink">
                <span>
                  Continuing from sample fund: <strong>{fund.name}</strong>
                </span>
                <Link
                  href={`/funds/${fund.id}`}
                  className="font-medium text-primary underline underline-offset-2 hover:text-accent"
                >
                  View
                </Link>
              </div>
            ) : null}

            <form className="mt-6 flex flex-col gap-4" onSubmit={onSubmit}>
              {!isLogin ? (
                <div>
                  <label
                    htmlFor="auth-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-muted"
                  >
                    Name
                  </label>
                  <input
                    id="auth-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    placeholder="e.g. Eleanor Vance"
                    className="mt-1.5 w-full rounded-xl border border-line bg-bg/50 px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors focus:border-primary focus:bg-surface focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              ) : null}

              <div>
                <label
                  htmlFor="auth-email"
                  className="block text-xs font-semibold uppercase tracking-wider text-muted"
                >
                  Email
                </label>
                <input
                  id="auth-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="name@example.com"
                  className="mt-1.5 w-full rounded-xl border border-line bg-bg/50 px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors focus:border-primary focus:bg-surface focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="auth-password"
                  className="block text-xs font-semibold uppercase tracking-wider text-muted"
                >
                  {isLogin ? 'Password' : 'Create a demo password'}
                </label>
                <input
                  id="auth-password"
                  type="password"
                  name="password"
                  autoComplete={isLogin ? 'current-password' : 'new-password'}
                  required
                  minLength={8}
                  placeholder="••••••••"
                  className="mt-1.5 w-full rounded-xl border border-line bg-bg/50 px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors focus:border-primary focus:bg-surface focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="flex items-start gap-2.5 rounded-xl border border-line/60 bg-bg-warm/50 p-3 text-xs text-muted leading-relaxed">
                <ShieldCheck size={16} className="mt-0.5 shrink-0 text-muted" />
                <span>
                  <strong>Demo platform disclaimer:</strong> Sample interaction only. Do not enter a real password.
                </span>
              </div>

              <Button type="submit" className="mt-2 w-full py-3 text-sm font-semibold tracking-wide">
                {isLogin ? 'Enter demo' : 'Create demo account'}
              </Button>

              <div className="mt-2 flex flex-col items-center gap-2 text-center text-xs text-muted">
                {isLogin ? (
                  <p>
                    Don&apos;t have an account?{' '}
                    <Link
                      href={signupHref}
                      className="font-semibold text-primary underline underline-offset-4 transition-colors hover:text-accent"
                    >
                      Sign up
                    </Link>
                  </p>
                ) : (
                  <p>
                    Already have an account?{' '}
                    <Link
                      href="/login"
                      className="font-semibold text-primary underline underline-offset-4 transition-colors hover:text-accent"
                    >
                      Log in
                    </Link>
                  </p>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </Container>
  )
}
