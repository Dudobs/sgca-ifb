import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from '@headlessui/react'
import { Button } from '../button'
import { Label } from '../form/label'
import { Textarea } from '../form/textarea'

interface DialogProps {
  dialogIsOpen: boolean
  onClose: () => void
}

export function AlterarStatusAcesso({ dialogIsOpen, onClose }: DialogProps) {
  if (!dialogIsOpen) return null

  return (
    <Dialog open={dialogIsOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" />
      <div className="fixed inset-0 z-50 flex w-screen items-center justify-center p-4">
        <DialogPanel className="w-[480px] px-5 py-8 shadow-md rounded-lg border border-zinc-700 bg-zinc-100 flex flex-col gap-4">
          <div className="flex flex-col">
            <DialogTitle className="font-medium text-2xl">
              Adicionar status de acesso
            </DialogTitle>
            <Description className="text-sm">
              Gerencia o status de acesso de um usuário, permitindo bloquear ou
              desbloquear o acesso às catracas da portaria.
            </Description>
          </div>
          <form action="" className="flex flex-col justify-between gap-16">
            <div className="flex flex-col gap-4">
              <div>
                <Label
                  htmlFor="justificativa"
                  label="Status de acesso"
                  className="text-sm"
                  isRequired
                />
                <select
                  id="user-type"
                  name="user-type"
                  required
                  className="h-10 w-full py-0 text-md shadow-sm rounded-md border-zinc-700 focus:border-green-300  text-zinc-500 focus:ring-1 focus:ring-green-200 focus:ring-opacity-50"
                >
                  <option value={''} />
                  <option className="text-zinc-950">Ativo</option>
                  <option className="text-zinc-950">Inativo</option>
                </select>
              </div>

              <div>
                <Label
                  htmlFor="justificativa"
                  label="Motivo/Justificativa"
                  className="text-sm"
                  isRequired
                />
                <Textarea
                  id="justificativa"
                  name="justificativa"
                  placeholder="Obrigatório"
                  required
                  className="text-md"
                />
              </div>
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
