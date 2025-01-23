import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from '@headlessui/react'
import { Button } from '../../../components/button'
import { updateUserToAdmin } from '../../../http/update_user_to_admin'
import { useForm } from 'react-hook-form'

interface DialogProps {
  dialogIsOpen: boolean
  onClose: () => void
  id_usuario: string
  id_admin?: string
}

export function TornarAdministrador({
  dialogIsOpen,
  onClose,
  id_usuario,
  id_admin,
}: DialogProps) {
  if (!dialogIsOpen) return null

  const { handleSubmit } = useForm()

  async function handleUpdateUserToAdmin() {
    console.log('Usuário com o id: ', { id_usuario }, ' será um administrador')
    try {
      await updateUserToAdmin({ id_usuario, id_admin })
      alert('Alteração feita com sucesso!')
      onClose()
    } catch (error) {
      alert('Falha ao realizar a alteraçãoFalha ao realizar a alteração')
      console.log('Falha ao realizar a alteração: ', error)
    }
  }

  return (
    <Dialog open={dialogIsOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" />
      <div className="fixed inset-0 z-50 flex w-screen items-center justify-center p-4">
        <DialogPanel className="w-[480px] px-5 py-8 shadow-md rounded-lg border border-zinc-700 bg-zinc-100 flex flex-col gap-16">
          <div className="flex flex-col">
            <DialogTitle className="font-medium text-2xl">
              Tornar usuário administrador
            </DialogTitle>
            <Description className="text-sm">
              Este usuário terá acesso a todas as funcionalidades
              administrativas. Deseja continuar?
            </Description>
          </div>

          <form action="" onSubmit={handleSubmit(handleUpdateUserToAdmin)}>
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
