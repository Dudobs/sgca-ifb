import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function Label(props: ComponentProps<'label'>) {
  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: <explanation>
    <label
      {...props}
      className={twMerge(
        'text-md text-zinc-50 tracking-tight leading-normal',
        props.className
      )}
    />
  )
}
