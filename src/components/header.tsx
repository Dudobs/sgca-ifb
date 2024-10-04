import LogoIFBAccess from '../assets/Logo-ifb-access.svg'

interface HeaderProps {
  navbarIsOpen: boolean
}

export function Header({ navbarIsOpen }: HeaderProps) {
  return (
    <div className="mb-10 flex items-end gap-2">
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
