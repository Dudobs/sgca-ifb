import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import * as Dialog from "@radix-ui/react-dialog";
import { EllipsisVertical, X } from 'lucide-react'
import { Button } from '../button'
import { Input } from '../form/input';

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
          <Dialog.Root>
            <Dialog.Trigger asChild>
            <button
                  type="button"
                  className="px-4 py-2 text-sm text-zinc-950 data-[focus]:bg-green-50 data-[focus]:text-green-900"
                >
                  Adicionar registro
                </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm data-[state=open]:animate-overlayShow" />
              <Dialog.Content className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] px-5 py-8 shadow-md rounded-lg border border-zinc-700 bg-zinc-100 flex flex-col gap-4 data-[state=open]:animate-contentShow">
                <div className='flex flex-col justify-start gap-1'>
                  <Dialog.Title className='text-2xl'>Adicionar registro</Dialog.Title>
                  <Dialog.Description className='text-xs'>Adiciona um registro manualmente, liberando o acesso da catraca logo após a operação.</Dialog.Description>
                </div>

                <form action="" className='flex flex-col justify-between gap-16'>
                  <div className='flex items-center gap-4'>
                    <Input type="button" value={'Entrada'} className='flex-1' />
                    <Input type="button" value={'Saída'} className='flex-1' />
                  </div>
                  
                  <div className='flex items-center gap-4'>
                    <Dialog.Close asChild>
                      <Button type="submit" className='flex-1'>Salvar</Button>
                    </Dialog.Close>
                    <Dialog.Close asChild>
                      <button className='absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full'>
                        <X />
                      </button>
                    </Dialog.Close>
                  </div>

                </form>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
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
