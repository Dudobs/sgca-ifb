import { forwardRef, type ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type CheckboxProps = ComponentProps<'input'>

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        type="checkbox"
        className={twMerge(
          'rounded border-zinc-700 text-green-600/90 shadow-sm focus:border-green-300 focus:ring focus:ring-offset-0 focus:ring-green-200 focus:ring-opacity-50',
          props.className
        )}
      />
    )
  }
)

Checkbox.displayName = 'Checkbox'
