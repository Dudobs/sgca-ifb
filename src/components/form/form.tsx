import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function Form(props: ComponentProps<'form'>) {
  return (
    <form
      {...props}
      className={twMerge(
        'p-4 relative bg-zinc-100 shadow-md flex justify-between items-end',
        props.className
      )}
    />
  )
}
