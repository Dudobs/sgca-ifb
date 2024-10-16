import { House, TableProperties, Users } from 'lucide-react'
import { NavLink } from 'react-router-dom'
interface LinkProps {
  navbarIsOpen: boolean
}

const links = [
  {
    href: '/home',
    label: 'Início',
    icon: <House />,
  },
  {
    href: '/registros',
    label: 'Registros',
    icon: <TableProperties />,
  },
  {
    href: '/usuarios',
    label: 'Usuários',
    icon: <Users />,
  },
]

export function NavbarLinks({ navbarIsOpen }: LinkProps) {
  return (
    <div className="flex flex-col gap-2 font-medium">
      {links.map(link => (
        <NavLink
          key={link.href}
          to={link.href}
          className={({ isActive, isPending, isTransitioning }) =>
            [
              isPending ? '' : '',
              isActive ? ' text-emerald-800' : ' hover:text-emerald-200',
              isTransitioning ? '' : '',
            ].join(' flex items-center gap-1')
          }
        >
          {link.icon}
          {navbarIsOpen && <p className="leading-none">{link.label}</p>}
        </NavLink>
      ))}
    </div>
  )
}
