import { forwardRef, type ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const trow = tv({
  base: '',

  variants: {
    variant: {
      primary: 'h-10 border-zinc-700',
      secondary: '',
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

type TableRowProps = ComponentProps<'tr'> & VariantProps<typeof trow>

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, variant, ...props }, ref) => {
    return <tr {...props} ref={ref} className={trow({ variant, className })} />
  }
)
