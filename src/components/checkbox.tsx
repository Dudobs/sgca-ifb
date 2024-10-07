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
          'appearance-none size-4 rounded border border-zinc-500 bg-zinc-50 hover:border-green-500 hover:bg-green-500/5 checked:border-green-900 checked:bg-green-500/30',
          props.className
        )}
      />
    )
  }
)

Checkbox.displayName = 'Checkbox'
