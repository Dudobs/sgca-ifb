import { House, TableProperties, Users } from 'lucide-react'
import { useLocation } from 'react-router-dom'

interface LinkProps {
  navbarIsOpen: boolean
}

const links = [
  { href: '/home', label: 'Início', icon: <House /> },
  { href: '/registros', label: 'Registros', icon: <TableProperties /> },
  { href: '/usuarios', label: 'Usuários', icon: <Users /> },
]

export function NavbarLinks({ navbarIsOpen }: LinkProps) {
  const location = useLocation()

  return (
    <div className="flex flex-col gap-2 font-medium">
      {links.map(link => (
        <a
          key={link.href}
          href={link.href}
          className={
            location.pathname === link.href
              ? 'flex items-center gap-1 text-emerald-800'
              : 'flex items-center gap-1 hover:text-emerald-200'
          }
        >
          {link.icon}
          {navbarIsOpen && <p className="leading-none">{link.label}</p>}
        </a>
      ))}
    </div>
  )
}
