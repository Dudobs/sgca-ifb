import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function Button(props: ComponentProps<'button'>) {
  return (
    <button
      {...props}
      className={twMerge(
        'w-28 px-2 py-1.5 bg-green-600 rounded text-zinc-50 text-sm font-medium hover:bg-green-700 flex items-center justify-center gap-2',
        props.className
      )}
    />
  )
}
