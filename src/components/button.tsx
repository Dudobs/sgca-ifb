import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function Button(props: ComponentProps<'button'>) {
  return (
    <button
      {...props}
      className={twMerge(
        'w-fit px-3 py-2 bg-green-600 rounded-lg text-zinc-50 text-sm font-medium hover:bg-green-700 flex items-center justify-center gap-2',
        props.className
      )}
    />
  )
}
