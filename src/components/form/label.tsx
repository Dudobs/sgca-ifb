import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface LabelProps extends ComponentProps<'label'> {
  isRequired?: boolean
  label?: string
}

export function Label({ isRequired, label, ...props }: LabelProps) {
  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: <explanation>
    <label
      {...props}
      className={twMerge(
        'text-sm text-zinc-950 tracking-tight leading-normal flex justify-between',
        props.className
      )}
    >
      <span>{label}</span>
      {isRequired && <span className="text-sm text-red-400">*</span>}
    </label>
  )
}
