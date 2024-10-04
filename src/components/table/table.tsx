import type { ComponentProps } from 'react'

interface TableProps extends ComponentProps<'table'> {
  hasPagination?: boolean
}

export function Table({ hasPagination, ...props }: TableProps) {
  return (
    <div className="min-w-[79rem] border border-zinc-700 rounded-lg text-center">
      <table className="w-full" {...props} />
    </div>
  )
}
