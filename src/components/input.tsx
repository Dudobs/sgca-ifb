import { forwardRef, type ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = ComponentProps<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={twMerge(
        'px-4 w-80 h-14 bg-zinc-50 border-2 rounded-lg outline-none text-md focus-visible:border-emerald-500 focus-visible:ring-4 ring-zinc-500/10',
        props.className
      )}
    />
  )
})

Input.displayName = 'Input'
