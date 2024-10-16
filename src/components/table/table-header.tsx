import { forwardRef, type ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const thead = tv({
  base: 'text-sm',

  variants: {
    variant: {
      primary: 'py-3 px-4 font-semibold',
      secondary:
        'py-1.5 px-2.5 font-bold bg-gray-200 text-zinc-600 border border-gray-300',
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

type TableHeaderProps = ComponentProps<'th'> & VariantProps<typeof thead>

export const TableHeader = forwardRef<HTMLTableCellElement, TableHeaderProps>(
  ({ className, variant, ...props }, ref) => {
    return <th {...props} ref={ref} className={thead({ variant, className })} />
  }
)
