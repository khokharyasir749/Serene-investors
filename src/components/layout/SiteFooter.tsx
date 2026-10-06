import Link from 'next/link'
import { ArrowRight, Landmark, FileCheck, Scale, ShieldCheck } from 'lucide-react'
import type { FooterColumn } from '@/types'
import { ButtonLink } from '@/components/ui/Button'
import { footerColumns, footerIntro, site } from '@/data'

function FooterNavGroup({ column }: { column: FooterColumn }) {
  const headingId = `footer-${column.id}`

  return (
    <nav aria-labelledby={headingId}>
      <h2 id={headingId} className="brand-label text-[#dce7de]">
        {column.title}
      </h2>
      <ul className="mt-4 space-y-2.5">
        {column.links.map((link) => (
          <li key={link.id}>
            {link.href ? (
              <Link href={link.href} className="text-[0.9375rem]">
                {link.label}
              </Link>
            ) : (
              <span className="site-footer__static text-[0.9375rem]">{link.label}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function SiteFooter() {
  const legalLinks = footerColumns.find((column) => column.id === 'legal')?.links ?? []

  return (
    <footer className="site-footer px-5 py-16 md:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[var(--container-wide)]">
        {/* High-Credibility Compliance & Security Strip (Stake FinTech Pattern) */}
        <div className="border-b border-[#f7f5ef]/15 pb-12 mb-14 lg:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* 1. Regulated Custody */}
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xs transition-colors duration-200 hover:bg-white/[0.07]">
              <div className="size-10 rounded-lg bg-emerald-900/60 border border-emerald-400/20 flex items-center justify-center text-emerald-300 shrink-0">
                <Landmark size={20} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white tracking-tight">Regulated Custody</h3>
                <p className="mt-1 text-xs text-[#aebbaf] leading-relaxed">
                  Client funds held in segregated tier-1 UK accounts.
                </p>
              </div>
            </div>

            {/* 2. Land Registry Backed */}
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xs transition-colors duration-200 hover:bg-white/[0.07]">
              <div className="size-10 rounded-lg bg-emerald-900/60 border border-emerald-400/20 flex items-center justify-center text-emerald-300 shrink-0">
                <FileCheck size={20} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white tracking-tight">Land Registry Backed</h3>
                <p className="mt-1 text-xs text-[#aebbaf] leading-relaxed">
                  SPV fractional ownership registered directly on title deeds.
                </p>
              </div>
            </div>

            {/* 3. Independent Valuations */}
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xs transition-colors duration-200 hover:bg-white/[0.07]">
              <div className="size-10 rounded-lg bg-emerald-900/60 border border-emerald-400/20 flex items-center justify-center text-emerald-300 shrink-0">
                <Scale size={20} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white tracking-tight">Independent Valuations</h3>
                <p className="mt-1 text-xs text-[#aebbaf] leading-relaxed">
                  RICS accredited quarterly property appraisal.
                </p>
              </div>
            </div>

            {/* 4. Bank-Grade Encryption */}
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xs transition-colors duration-200 hover:bg-white/[0.07]">
              <div className="size-10 rounded-lg bg-emerald-900/60 border border-emerald-400/20 flex items-center justify-center text-emerald-300 shrink-0">
                <ShieldCheck size={20} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white tracking-tight">Bank-Grade Encryption</h3>
                <p className="mt-1 text-xs text-[#aebbaf] leading-relaxed">
                  256-bit SSL and biometric authentication.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="lg:grid lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:items-start lg:gap-x-20">
          <div>
            <p className="text-[0.78rem] font-semibold tracking-[0.16em]">{site.name}</p>
            <p className="mt-4 max-w-[24ch] text-[1.02rem] leading-[1.7] text-[#dce7de]">
              {footerIntro.description}
            </p>
            <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.12em] text-[#aebbaf]">
              {footerIntro.sampleLabel}
            </p>
            <div className="mt-7">
              <ButtonLink
                href={footerIntro.cta.href}
                variant="ghost"
                className="gap-1.5 bg-[#f7f5ef] text-[#1f3d2e] hover:bg-[#dce7de] hover:text-[#1f3d2e]"
              >
                {footerIntro.cta.label}
                <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8 lg:mt-1 lg:grid-cols-4 lg:gap-x-10">
            {footerColumns.map((column) => (
              <FooterNavGroup key={column.id} column={column} />
            ))}
          </div>
        </div>

        <hr className="site-footer__rule mt-14 lg:mt-16" />

        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm text-[#dce7de]">{footerIntro.copyright}</p>
            <p className="mt-1 max-w-[46ch] text-sm leading-relaxed text-[#aebbaf]">{footerIntro.note}</p>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) =>
              link.href ? (
                <li key={link.id}>
                  <Link href={link.href} className="text-sm">
                    {link.label}
                  </Link>
                </li>
              ) : null,
            )}
          </ul>
        </div>

        {/* Institutional UK Regulatory Disclosure Copy */}
        <div className="mt-10 border-t border-[#f7f5ef]/10 pt-6 text-[11px] leading-relaxed text-[#aebbaf]/80 space-y-2">
          <p>
            <strong>Regulatory Disclosure & Risk Notice:</strong> Real estate investments carry risk to your invested capital. Property values and rental distributions can fluctuate, and past performance or projected financial modeling is not a reliable indicator of future results. Fractional allocations represent indirect ownership shares in dedicated UK Special Purpose Vehicles (SPVs) holding the registered freehold or leasehold asset. Client money is held in segregated client trust accounts with tier-1 UK authorized institutions. Not covered by the Financial Services Compensation Scheme (FSCS) regarding market performance.
          </p>
          <p>
            Serene Investors Limited is incorporated in England and Wales. Regulated private real estate syndication and fractional custody arrangements adhere strictly to UK FCA compliance frameworks.
          </p>
        </div>
      </div>
    </footer>
  )
}
