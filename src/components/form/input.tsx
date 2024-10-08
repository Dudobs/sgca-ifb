import { forwardRef, type ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = ComponentProps<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={twMerge(
        'px-2 w-36 h-8 bg-zinc-50 border border-zinc-500 rounded-[4px] outline-none text-sm shadow-sm focus:border-green-300 text-zinc-500 focus:ring-1 focus:ring-green-200 focus:ring-opacity-50',
        props.className
      )}
    />
  )
})

Input.displayName = 'Input'
