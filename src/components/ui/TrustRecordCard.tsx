import type { TrustRecord } from '@/types'

type Props = {
  record: TrustRecord
}

export function TrustRecordCard({ record }: Props) {
  return (
    <aside
      data-trust-record
      className="rounded-2xl border border-white/75 bg-white/90 p-7 text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_20px_40px_-15px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:z-50 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl"
    >
      <div>
        <p className="m-0 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-primary opacity-90">
          {record.eyebrow}
        </p>
        <p className="mt-2.5 text-[clamp(1.4rem,2.2vw,1.75rem)] font-semibold leading-tight tracking-[-0.025em] text-ink text-balance">
          {record.name}
        </p>
        <p className="mt-1 text-sm leading-snug text-muted">{record.meta}</p>
      </div>
      <dl className="mt-5 border-t border-black/[0.07] pt-1">
        <div className="flex items-center justify-between gap-5 border-b border-black/[0.05] py-2.5">
          <dt className="text-xs font-medium tracking-wide text-muted">{record.recordLabel}</dt>
          <dd className="m-0 text-[0.9375rem] font-semibold tracking-wider tabular-nums text-ink">{record.recordValue}</dd>
        </div>
        <div className="flex items-center justify-between gap-5 border-b border-black/[0.05] py-2.5">
          <dt className="text-xs font-medium tracking-wide text-muted">{record.statusLabel}</dt>
          <dd className="m-0 text-[0.9375rem] font-semibold text-ink">{record.statusValue}</dd>
        </div>
        <div className="flex items-center justify-between gap-5 py-2.5">
          <dt className="text-xs font-medium tracking-wide text-muted">{record.documentationLabel}</dt>
          <dd className="m-0 text-[0.9375rem] font-semibold text-ink">{record.documentationValue}</dd>
        </div>
      </dl>
    </aside>
  )
}

