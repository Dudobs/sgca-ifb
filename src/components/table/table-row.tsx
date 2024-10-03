import type { ComponentProps } from 'react'

interface TableRowProps extends ComponentProps<'tr'> {}

export function TableRow(props: TableRowProps) {
  return <tr className="hover:bg-black/5" {...props} />
}
