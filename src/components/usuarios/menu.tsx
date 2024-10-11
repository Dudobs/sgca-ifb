import { useState } from 'react'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from '@headlessui/react'
import { EllipsisVertical } from 'lucide-react'

import { Button } from '../button'

export function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false)

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
            <>
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="block px-4 py-2 text-sm text-zinc-950 data-[focus]:bg-green-50 data-[focus]:text-green-900"
              >
                Adicionar registro
              </button>

              <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-50"
              >
                <DialogBackdrop className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" />
                <div className="fixed inset-0 z-50 flex w-screen items-center justify-center p-4">
                  <DialogPanel className="w-[450px] px-5 py-8 shadow-md rounded-lg border border-zinc-700 bg-zinc-100 flex flex-col gap-4">
                    <div className="flex flex-col">
                      <DialogTitle className="font-medium text-2xl">
                        Adicionar registro
                      </DialogTitle>
                      <Description className="text-sm">
                        Adiciona um registro manualmente, liberando o acesso da
                        catraca logo após a operação.
                      </Description>
                    </div>
                    <form
                      action=""
                      onSubmit={e => {
                        e.preventDefault()
                        const form = e.target as HTMLFormElement
                        const formData = new FormData(form)
                        const tipo = formData.get('registro')
                        console.log(tipo)
                      }}
                      className="flex flex-col justify-between gap-16"
                    >
                      <div className="flex items-center gap-4">
                        <label htmlFor="entrada" className="flex-1">
                          <input
                            type="radio"
                            name="registro"
                            value="entrada"
                            id="entrada"
                            className="hidden"
                          />
                          <Button
                            className=""
                            variant="access_type"
                            size="md"
                            onClick={() =>
                              document.getElementById('entrada')?.click()
                            }
                          >
                            Entrada
                          </Button>
                        </label>

                        <label htmlFor="saida" className="flex-1">
                          <Button
                            variant="access_type"
                            size="md"
                            onClick={() =>
                              document.getElementById('saida')?.click()
                            }
                          >
                            <input
                              type="radio"
                              name="registro"
                              value="saida"
                              id="saida"
                              className="hidden"
                            />
                            Saída
                          </Button>
                        </label>
                      </div>

                      <div className="flex items-center gap-4">
                        <Button
                          onClick={() => setIsOpen(false)}
                          type="submit"
                          size="md"
                          className="flex-1"
                        >
                          Continuar
                        </Button>
                        <Button
                          onClick={() => setIsOpen(false)}
                          type="reset"
                          variant="secondary"
                          size="md"
                          className="flex-1"
                        >
                          Cancelar
                        </Button>
                      </div>
                    </form>
                  </DialogPanel>
                </div>
              </Dialog>
            </>
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
