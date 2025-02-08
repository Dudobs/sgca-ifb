import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from '@headlessui/react'
import { Button } from '../../../components/button'
import { Label } from '../../../components/form/label'
import { Textarea } from '../../../components/form/textarea'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { updateAccessStatus } from '../../../http/update_access_status'

const updateAccessStatusForm = z.object({
  // status_acesso: z.string().transform(value => value === '1'),
  status_acesso: z.boolean(),
  justificativa: z.string().max(400),
})

type updateAccessStatusForm = z.infer<typeof updateAccessStatusForm>

type UserProps = {
  userId: string
  name: string
  cpf: string
  email: string
  tipo_usuario: string
  id_tipo_usuario: number
  matricula: string
  status_acesso: number
  usuario_admin: number
}

interface DialogProps {
  dialogIsOpen: boolean
  onClose: () => void
  refetchUsersQuery: () => void
  userData: UserProps
  id_admin: string
}

export function AlterarStatusAcesso({
  dialogIsOpen,
  onClose,
  refetchUsersQuery,
  userData,
  id_admin,
}: DialogProps) {
  if (!dialogIsOpen) return null

  const { handleSubmit, register, setValue, reset } =
    useForm<updateAccessStatusForm>({
      resolver: zodResolver(updateAccessStatusForm),
    })

  const { userId: id_usuario, name, status_acesso } = userData

  setValue('status_acesso', !status_acesso)

  async function handleUpdateAccessStatus({
    status_acesso,
    justificativa,
  }: updateAccessStatusForm) {
    try {
      await updateAccessStatus({
        id_usuario,
        id_admin,
        status_acesso,
        justificativa,
      })
    } catch (error) {
      console.log('Erro ao alterar status de acesso: ', error)
    }
    reset()
    onClose()
    alert('Status de acesso alterado com sucesso!')
    refetchUsersQuery()
  }

  return (
    <Dialog open={dialogIsOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" />
      <div className="fixed inset-0 z-50 flex w-screen items-center justify-center p-4">
        <DialogPanel className="w-[480px] px-5 py-8 shadow-md rounded-lg border border-zinc-700 bg-zinc-100 flex flex-col gap-4">
          <div className="flex flex-col">
            <DialogTitle className="font-medium text-2xl">
              Alterar status de acesso
            </DialogTitle>
            <Description className="text-lg">
              {status_acesso ? (
                <p>
                  <span className="text-red-800">Bloqueando</span> acesso de{' '}
                  {name}
                </p>
              ) : (
                <p>
                  <span className="text-green-800">Liberando</span> acesso de{' '}
                  {name}
                </p>
              )}
            </Description>
          </div>
          <form
            action="/usuarios"
            onSubmit={handleSubmit(handleUpdateAccessStatus)}
            className="flex flex-col justify-between gap-16"
          >
            <div>
              <Label
                htmlFor="justificativa"
                label="Motivo/Justificativa"
                className="text-sm"
                isRequired
              />
              <Textarea
                id="justificativa"
                {...register('justificativa')}
                placeholder="Obrigatório"
                maxLength={400}
                required
                className="text-md"
              />
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
