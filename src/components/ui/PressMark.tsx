import { cn } from '@/lib/cn'
import {
  TechCrunchLogo,
  ArabNewsLogo,
  FinancialTimesLogo,
  TimeLogo,
  ForbesLogo,
  CnnLogo,
  BloombergLogo,
} from '@/components/ui/PublicationLogos'

type Props = {
  id?: string
  name: string
  index?: number
  className?: string
}

export function PressMark({ id, name, className }: Props) {
  switch (id) {
    case 'techcrunch':
      return <TechCrunchLogo className={cn('h-5 sm:h-6 w-auto', className)} />
    case 'arab-news':
      return <ArabNewsLogo className={cn('h-4 sm:h-5 w-auto', className)} />
    case 'financial-times':
      return <FinancialTimesLogo className={cn('h-4 sm:h-5 w-auto', className)} />
    case 'time':
      return <TimeLogo className={cn('h-5 sm:h-6 w-auto', className)} />
    case 'forbes':
      return <ForbesLogo className={cn('h-5 sm:h-6 w-auto', className)} />
    case 'cnn':
      return <CnnLogo className={cn('h-5 sm:h-6 w-auto', className)} />
    case 'bloomberg':
      return <BloombergLogo className={cn('h-4.5 sm:h-5.5 w-auto', className)} />
    default:
      return (
        <span className={cn('font-serif font-bold tracking-tight text-base', className)}>
          {name}
        </span>
      )
  }
}
