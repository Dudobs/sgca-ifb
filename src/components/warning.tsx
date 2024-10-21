import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { WarningIcon } from '../assets/warning-icon'

interface WarningProps extends ComponentProps<'div'> {
  warningText: string
}

export function Warning(props: WarningProps) {
  return (
    <div
      className={twMerge(
        'w-full px-4 py-1.5 bg-yellow-100 text-sm text-zinc-600 flex items-center gap-1',
        props.className
      )}
    >
      <WarningIcon />
      {props.warningText}
    </div>
  )
}
