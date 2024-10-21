import type { ComponentProps } from 'react'

export function WarningIcon({ ...props }: ComponentProps<'svg'>) {
  return (
    <svg
      width={20}
      height={20}
      role="img"
      aria-label="Ícone de aviso"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 1.875A8.125 8.125 0 1018.125 10 8.133 8.133 0 0010 1.875zM9.375 6.25a.625.625 0 011.25 0v4.375a.624.624 0 11-1.25 0V6.25zM10 14.375a.938.938 0 110-1.875.938.938 0 010 1.875z"
        fill="#A16207"
      />
    </svg>
  )
}
