import { forwardRef, type ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const tcell = tv({
  base: 'text-sm',

  variants: {
    variant: {
      primary: 'py-3 px-4 text-zinc-950',
      secondary: 'py-4 px-2.5 bg-gray-200 text-zinc-600 border border-gray-300',
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

type TableCellProps = ComponentProps<'td'> & VariantProps<typeof tcell>

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, variant, ...props }, ref) => {
    return <td {...props} ref={ref} className={tcell({ variant, className })} />
  }
)
