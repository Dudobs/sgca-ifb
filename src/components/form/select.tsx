import { forwardRef, type ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type SelectProps = ComponentProps<'select'>

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    return (
      <select
        {...props}
        ref={ref}
        className={twMerge(
          'px-2 w-36 h-7 bg-zinc-50 border border-zinc-500 rounded outline-none text-xs focus-visible:border-emerald-500 focus-visible:ring-2 ring-zinc-500/10',
          props.className
        )}
      />
    )
  }
)

Select.displayName = 'Select'
