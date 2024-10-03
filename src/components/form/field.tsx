import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function Field(props: ComponentProps<'div'>) {
  return (
    <div {...props} className={twMerge('flex flex-col', props.className)} />
  )
}
