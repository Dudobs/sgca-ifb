import { forwardRef, type ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type TextareaProps = ComponentProps<'textarea'>

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    return (
      <textarea
        {...props}
        ref={ref}
        className={twMerge(
          'block w-full rounded-md border-zinc-700 text-sm shadow-sm focus:border-green-300 focus:ring-1 focus:ring-green-200 focus:ring-opacity-50',
          props.className
        )}
        rows={4}
      />
    )
  }
)

Textarea.displayName = 'Textarea'
