import { twMerge } from 'tailwind-merge'
import LogoIFBAccess from '../assets/Logo-ifb-access.svg'
import type { ComponentProps } from 'react'
import { Link } from 'react-router-dom'

interface HeaderProps extends ComponentProps<'div'> {
  navbarIsOpen: boolean
}

export function Header({ navbarIsOpen, ...props }: HeaderProps) {
  return (
    <header {...props} className={twMerge('mb-10', props.className)}>
      <Link to={'/'} className="flex items-end gap-2">
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
      </Link>
    </header>
  )
}
