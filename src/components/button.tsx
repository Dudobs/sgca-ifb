import { forwardRef, type ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'w-fit text-zinc-50 text-sm font-medium rounded shadow-sm flex items-center justify-center gap-2',

  variants: {
    variant: {
      primary: 'bg-green-600 hover:bg-green-700',
      secondary: 'bg-red-500 hover:bg-red-600',
    },

    size: {
      default: 'py-1.5 px-3',
      md: 'py-2 px-5',
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={button({ variant, size, className })}
      />
    )
  }
)
