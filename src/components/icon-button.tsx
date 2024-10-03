import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function IconButton(props: ComponentProps<'button'>) {
  return (
    <button
      {...props}
      className={twMerge(
        'bg-green-600 rounded-md p-1.5 hover:bg-green-700',
        props.disabled ? 'opacity-50 hover:bg-green-600' : null //Classe adicional caso o botão esteja desabilitado
      )}
    />
  )
}
