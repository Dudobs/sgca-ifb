import type { ComponentProps } from 'react'

export function EyeClosed({ ...props }: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      role="img"
      aria-label="Ícone de olho fechado"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-eye-closed"
      {...props}
    >
      <path d="M15 18l-.722-3.25M2 8a10.645 10.645 0 0020 0M20 15l-1.726-2.05M4 15l1.726-2.05M9 18l.722-3.25" />
    </svg>
  )
}
