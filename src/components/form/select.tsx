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
          'px-2 py-0 h-8 bg-zinc-50 border border-zinc-500 rounded outline-none text-sm shadow-sm focus:border-green-300 text-zinc-500 focus:ring-1 focus:ring-green-200 focus:ring-opacity-50',
          props.className
        )}
      />
    )
  }
)

Select.displayName = 'Select'
