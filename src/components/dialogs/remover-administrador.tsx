import { useState } from 'react'
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from '@headlessui/react'
import { Button } from '../button'

export function TornarAdministrador() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full text-left block px-4 py-2 text-sm text-zinc-950 hover:bg-green-50 hover:text-green-900"
      >
        Tornar administrador
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <DialogBackdrop className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex w-screen items-center justify-center p-4">
          <DialogPanel className="w-[480px] px-5 py-8 shadow-md rounded-lg border border-zinc-700 bg-zinc-100 flex flex-col gap-16">
            <div className="flex flex-col">
              <DialogTitle className="font-medium text-2xl">
                Remover permissões de administrador
              </DialogTitle>
              <Description className="text-sm">
                Este usuário perderá todas as permissões administrativas. Deseja
                continuar?
              </Description>
            </div>

            <div className="flex items-center gap-4">
              <Button
                onClick={() => setIsOpen(false)}
                type="button"
                size="md"
                className="flex-1"
              >
                Continuar
              </Button>
              <Button
                onClick={() => setIsOpen(false)}
                type="button"
                variant="secondary"
                size="md"
                className="flex-1"
              >
                Cancelar
              </Button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}
