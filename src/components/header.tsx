import { twMerge } from 'tailwind-merge'
import LogoIFBAccess from '../assets/Logo-ifb-access.svg'
import type { ComponentProps } from 'react'

interface HeaderProps extends ComponentProps<'div'> {
  navbarIsOpen: boolean
}

export function Header({ navbarIsOpen, ...props }: HeaderProps) {
  return (
    <div
      {...props}
      className={twMerge('mb-10 flex items-end gap-2', props.className)}
    >
      <img
        className={navbarIsOpen ? 'size-16' : 'size-10'}
        src={LogoIFBAccess}
        alt="Logo do IFB Access"
      />
      {navbarIsOpen && (
        <span className="font-bold text-lg uppercase">
          Sistema de Gerenciamento
        </span>
      )}
    </div>
  )
}
