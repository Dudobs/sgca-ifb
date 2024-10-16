import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from '@headlessui/react'

import { Button } from '../button'

interface DialogProps {
  dialogIsOpen: boolean
  onClose: () => void
}

export function RemoverAdministrador({ dialogIsOpen, onClose }: DialogProps) {
  if (!dialogIsOpen) return null

  return (
    <>
      <Dialog open={dialogIsOpen} onClose={onClose} className="relative z-50">
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

            <form
              action=""
              onSubmit={() => {
                onClose()

                console.log('Você não é mais um admin :(')
              }}
            >
              <div className="flex items-center gap-4">
                <Button type="submit" size="md" className="flex-1">
                  Continuar
                </Button>
                <Button
                  onClick={onClose}
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
  )
}
