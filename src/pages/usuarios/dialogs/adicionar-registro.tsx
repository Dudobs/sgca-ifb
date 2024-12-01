import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from '@headlessui/react'
import { Button } from '../../../components/button'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { addRegister } from '../../../http/add-register'

interface DialogProps {
  dialogIsOpen: boolean
  onClose: () => void
  id_usuario: number
}

export function AdicionarRegistro({
  dialogIsOpen,
  onClose,
  id_usuario,
}: DialogProps) {
  if (!dialogIsOpen) return null

  const addRegisterForm = z.object({
    tipo_acesso: z.boolean(),
  })

  type addRegisterForm = z.infer<typeof addRegisterForm>

  const { handleSubmit, reset, register, setValue } = useForm<addRegisterForm>({
    resolver: zodResolver(addRegisterForm),
  })

  async function handleAddRegister({ tipo_acesso }: addRegisterForm) {
    console.log(
      'Adicionando um registro manualmente para o usuário ',
      id_usuario
    )

    try {
      await addRegister({
        id_usuario,
        tipo_acesso,
      })
      console.log('Acesso registrado com sucesso!')
    } catch (error) {
      console.log('Erro ao registrar acesso: ', error)
    }

    reset()
    onClose()
  }

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
            action="/usuarios"
            onSubmit={handleSubmit(handleAddRegister)}
            className="flex flex-col justify-between gap-16"
          >
            <div className="flex items-center gap-4">
              <label htmlFor="entrada" className="flex-1">
                <input
                  type="radio"
                  id="entrada"
                  value={1}
                  className="hidden"
                  {...register('tipo_acesso')}
                />
                <Button
                  type="button"
                  className=""
                  variant="access_type"
                  size="md"
                  onClick={() => setValue('tipo_acesso', true)}
                >
                  Entrada
                </Button>
              </label>

              <label htmlFor="saida" className="flex-1">
                <input
                  type="radio"
                  id="saida"
                  value={0}
                  className="hidden"
                  {...register('tipo_acesso')}
                />
                <Button
                  type="button"
                  variant="access_type"
                  size="md"
                  onClick={() => setValue('tipo_acesso', false)}
                >
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
