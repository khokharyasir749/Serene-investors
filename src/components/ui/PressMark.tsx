import { cn } from '@/lib/cn'

const mastheads: Record<string, string> = {
  'property-journal': 'font-serif italic font-medium tracking-tight text-[1.125rem]',
  'urban-ledger': 'font-sans font-bold tracking-[0.08em] uppercase text-[0.875rem]',
  'capital-review': 'font-serif font-semibold tracking-wide text-[1.0625rem]',
  'the-residence': 'font-serif uppercase tracking-[0.14em] text-[0.8125rem] font-medium',
}

const fallbackTones = [
  'font-serif italic font-medium',
  'font-sans font-semibold tracking-[0.08em] uppercase',
  'font-serif font-semibold tracking-wide',
  'font-serif uppercase tracking-[0.14em] font-medium',
]

type Props = {
  id?: string
  name: string
  index: number
  className?: string
}

export function PressMark({ id, name, index, className }: Props) {
  const mastheadStyle = (id && mastheads[id]) || fallbackTones[index % fallbackTones.length]

  return (
    <span
      className={cn(
        'block text-center transition-colors duration-300',
        mastheadStyle,
        className,
      )}
    >
      {name}
    </span>
  )
}
