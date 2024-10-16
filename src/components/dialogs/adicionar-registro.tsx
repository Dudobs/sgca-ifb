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

export function AdicionarRegistro({ dialogIsOpen, onClose }: DialogProps) {
  if (!dialogIsOpen) return null

  return (
    <Dialog open={dialogIsOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" />
      <div className="fixed inset-0 z-50 flex w-screen items-center justify-center p-4">
        <DialogPanel className="w-[480px] px-5 py-8 shadow-md rounded-lg border border-zinc-700 bg-zinc-100 flex flex-col gap-4">
          <div className="flex flex-col">
            <DialogTitle className="font-medium text-2xl">
              Adicionar registro
            </DialogTitle>
            <Description className="text-sm">
              Adiciona um registro manualmente, liberando o acesso da catraca
              logo após a operação.
            </Description>
          </div>

          <form
            action=""
            onSubmit={e => {
              e.preventDefault()
              const form = e.target as HTMLFormElement
              const formData = new FormData(form)
              const tipo = formData.get('registro')

              if (!tipo) {
                alert('Por favor, selecione uma opção antes de continuar.')
                return
              }

              onClose()
              console.log(tipo)
            }}
            className="flex flex-col justify-between gap-16"
          >
            <div className="flex items-center gap-4">
              <label htmlFor="entrada" className="flex-1">
                <input
                  type="radio"
                  id="entrada"
                  name="registro"
                  value="entrada"
                  className="hidden"
                />
                <Button
                  type="button"
                  className=""
                  variant="access_type"
                  size="md"
                  onClick={() => document.getElementById('entrada')?.click()}
                >
                  Entrada
                </Button>
              </label>

              <label htmlFor="saida" className="flex-1">
                <Button
                  type="button"
                  variant="access_type"
                  size="md"
                  onClick={() => document.getElementById('saida')?.click()}
                >
                  <input
                    type="radio"
                    id="saida"
                    name="registro"
                    value="saida"
                    className="hidden"
                  />
                  Saída
                </Button>
              </label>
            </div>

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
  )
}
