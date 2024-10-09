import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVertical } from 'lucide-react'

const links = [
  { key: 1, href: '/usuarios/editar', label: 'Editar' },
  { key: 2, href: '', label: 'Adicionar registro' },
  { key: 3, href: '', label: 'Alterar status de acesso' },
  { key: 4, href: '/usuarios/observacoes', label: 'Observações' },
  { key: 5, href: '', label: 'Tornar administrador' },
]

export function DropdownMenu() {
  return (
    <Menu
      as="div"
      className="w-7 relative flex justify-center items-center text-left"
    >
      <div>
        <MenuButton className="py-1 rounded flex items-center justify-center hover:bg-green-900/10">
          <EllipsisVertical className="size-5" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute left-0 top-6 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {links.map(link => (
            <MenuItem key={link.key}>
              <a
                href={link.href}
                className="block px-4 py-2 text-sm text-zinc-950 data-[focus]:bg-green-50 data-[focus]:text-green-900"
              >
                {link.label}
              </a>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  )
}
