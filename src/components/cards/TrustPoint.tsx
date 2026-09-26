import type { TrustItem } from '@/types'

type Props = {
  item: TrustItem
  index: number
}

export function TrustPoint({ item, index }: Props) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <li
      data-trust-point
      className="border-t border-[rgb(247_245_239/0.16)] py-6 first:border-t-0 md:py-7 md:[&:nth-child(even)]:border-l md:[&:nth-child(even)]:border-[rgb(247_245_239/0.16)] md:[&:nth-child(even)]:pl-7 md:[&:nth-child(odd)]:pr-7 md:[&:nth-child(n+3)]:border-t md:[&:nth-child(n+3)]:border-[rgb(247_245_239/0.16)]"
    >
      <p className="m-0 text-xs font-medium uppercase tracking-widest text-[#aebbaf] tabular-nums" aria-hidden="true">
        {number}
      </p>
      <h3 className="mt-3.5 max-w-[12ch] text-[clamp(1.45rem,2.1vw,1.75rem)] font-[560] leading-snug tracking-[-0.02em] text-accent-ink text-balance">
        {item.title}
      </h3>
      <p className="mt-2.5 max-w-[34ch] text-base leading-relaxed tracking-wide text-[#c8d2c9] text-pretty">
        {item.body}
      </p>
    </li>
  )
}
