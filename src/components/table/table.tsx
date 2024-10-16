import { forwardRef, type ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const table = tv({
  base: 'border',

  variants: {
    variant: {
      primary: 'min-w-[79rem] border-zinc-700 rounded-lg text-center',
      secondary: 'w-full border-gray-300 text-left',
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

type TableProps = ComponentProps<'table'> &
  VariantProps<typeof table> & {
    hasPagination?: boolean
  }

export const Table = forwardRef<HTMLDivElement, TableProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div {...props} ref={ref} className={table({ variant, className })}>
        <table className="w-full" {...props} />
      </div>
    )
  }
)
