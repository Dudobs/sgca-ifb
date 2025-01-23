import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'

import { useForm } from 'react-hook-form'
import { Button } from '../../../components/button'
import { updateAdminToCommonUser } from '../../../http/update_admin_to_common_user'

interface DialogProps {
  dialogIsOpen: boolean
  onClose: () => void
  refetch: () => void
  id_usuario: string
  id_admin?: string
}

export function RemoverAdministrador({
  dialogIsOpen,
  onClose,
  refetch,
  id_usuario,
  id_admin,
}: DialogProps) {
  if (!dialogIsOpen) return null

  const { handleSubmit } = useForm()

  async function handleUpdateAdminToCommonUser() {
    console.log('Usuário com ', id_usuario, ' não será mais um administrador')
    try {
      await updateAdminToCommonUser({ id_usuario, id_admin })
      alert('Alteração feita com sucesso!')
      onClose()
    } catch (error) {
      console.log('Falha ao realizar a alteraçaõ: ', error)
    }

    refetch()
  }

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
              onSubmit={handleSubmit(handleUpdateAdminToCommonUser)}
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
