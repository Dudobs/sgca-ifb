import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface TableProps extends ComponentProps<'table'> {
  hasPagination?: boolean
}

export function Table({ hasPagination, ...props }: TableProps) {
  return (
    <div
      className={twMerge(
        'min-w-[79rem] border border-zinc-700 rounded-lg text-center',
        props.className
      )}
    >
      <table className="w-full" {...props} />
    </div>
  )
}
