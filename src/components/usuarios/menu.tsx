import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVertical } from 'lucide-react'
import {
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '../dialog'
import { Button } from '../button'

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
          <MenuItem>
            <a
              href="/usuarios/editar"
              className="block px-4 py-2 text-sm text-zinc-950 data-[focus]:bg-green-50 data-[focus]:text-green-900"
            >
              Editar
            </a>
          </MenuItem>

          <MenuItem>
            <div>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="block px-4 py-2 text-sm text-zinc-950 data-[focus]:bg-green-50 data-[focus]:text-green-900"
                >
                  Adicionar registro
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>Adicionar registro manualmente?</DialogTitle>
                <form action="">
                  <input type="button" value={'Entrada'} />
                  <input type="button" value={'Saída'} />

                  <Button type="submit">Salvar</Button>
                  <DialogClose asChild>
                    <Button>Cancelar</Button>
                  </DialogClose>
                </form>
              </DialogContent>
            </div>
          </MenuItem>

          <MenuItem>
            <a
              href="/usuarios/editar"
              className="block px-4 py-2 text-sm text-zinc-950 data-[focus]:bg-green-50 data-[focus]:text-green-900"
            >
              Alterar status de acesso
            </a>
          </MenuItem>

          <MenuItem>
            <a
              href="/usuarios/observacoes"
              className="block px-4 py-2 text-sm text-zinc-950 data-[focus]:bg-green-50 data-[focus]:text-green-900"
            >
              Observações
            </a>
          </MenuItem>

          <MenuItem>
            <a
              href="/usuarios/editar"
              className="block px-4 py-2 text-sm text-zinc-950 data-[focus]:bg-green-50 data-[focus]:text-green-900"
            >
              Tornar administrador
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
