import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVertical } from 'lucide-react'
import { useState } from 'react'

import { AdicionarRegistro } from './dialogs/adicionar-registro'
import { AlterarStatusAcesso } from './dialogs/alterar-status-acesso'
import { TornarAdministrador } from './dialogs/tornar-administrador'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/AuthContext'

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

interface UserMenuDropdownProps {
  userData: UserProps
  refetchUsersQuery: () => void
}

export function UserMenuDropdown({
  userData,
  refetchUsersQuery,
}: UserMenuDropdownProps) {
  // STATE - Adicionar registro
  const [dialogAdicionarRegistroIsOpen, setDialogAdicionarRegistroIsOpen] =
    useState(false)

  function showDialogAdicionarRegistro() {
    setDialogAdicionarRegistroIsOpen(true)
  }

  const closeDialogAdicionarRegistro = () => {
    setDialogAdicionarRegistroIsOpen(false)
  }

  // STATE - Alterar status de acesso
  const [dialogAlterarStatusAcessoIsOpen, setDialogAlterarStatusAcessoIsOpen] =
    useState(false)

  function showDialogAlterarStatusAcesso() {
    setDialogAlterarStatusAcessoIsOpen(true)
  }

  const closeDialogAlterarStatusAcesso = () => {
    setDialogAlterarStatusAcessoIsOpen(false)
  }

  // STATE - Tornar administrador
  const [dialogTornarAdminIsOpen, setDialogTornarAdminIsOpen] = useState(false)

  const showDialogTornarAdmin = () => {
    setDialogTornarAdminIsOpen(true)
  }

  const closeDialogTornarAdmin = () => {
    setDialogTornarAdminIsOpen(false)
  }

  const { adminProfile } = useAuth()

  return (
    <>
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
              <Link
                to={'/usuarios/editar'}
                state={{ userData }}
                className="block px-4 py-2 text-sm text-zinc-950 data-[focus]:bg-green-50 data-[focus]:text-green-900"
              >
                Editar
              </Link>
            </MenuItem>

            <MenuItem>
              <button
                type="button"
                onClick={showDialogAdicionarRegistro}
                className="w-full text-left block px-4 py-2 text-sm text-zinc-950 hover:bg-green-50 hover:text-green-900"
              >
                Adicionar registro
              </button>
            </MenuItem>

            <MenuItem>
              <button
                type="button"
                onClick={showDialogAlterarStatusAcesso}
                className="w-full text-left block px-4 py-2 text-sm text-zinc-950 hover:bg-green-50 hover:text-green-900"
              >
                Alterar status de acesso
              </button>
            </MenuItem>
            <MenuItem>
              <Link
                to={'/usuarios/observacoes'}
                state={{ userData }}
                className="block px-4 py-2 text-sm text-zinc-950 data-[focus]:bg-green-50 data-[focus]:text-green-900"
              >
                Observações
              </Link>
            </MenuItem>
            {/* Só exibe a opção caso o usuário não seja administrador */}
            {userData.usuario_admin ? (
              ''
            ) : (
              <MenuItem>
                <button
                  type="button"
                  onClick={showDialogTornarAdmin}
                  className="w-full text-left block px-4 py-2 text-sm text-zinc-950 hover:bg-green-50 hover:text-green-900"
                >
                  Tornar administrador
                </button>
              </MenuItem>
            )}
          </div>
        </MenuItems>
      </Menu>

      <AdicionarRegistro
        dialogIsOpen={dialogAdicionarRegistroIsOpen}
        onClose={closeDialogAdicionarRegistro}
        refetchUsersQuery={refetchUsersQuery}
        id_usuario={userData.userId}
        id_admin={adminProfile?.admin_id}
      />

      <AlterarStatusAcesso
        dialogIsOpen={dialogAlterarStatusAcessoIsOpen}
        onClose={closeDialogAlterarStatusAcesso}
        refetchUsersQuery={refetchUsersQuery}
        userData={userData}
        id_admin={adminProfile?.admin_id ?? ''}
      />

      <TornarAdministrador
        dialogIsOpen={dialogTornarAdminIsOpen}
        onClose={closeDialogTornarAdmin}
        id_usuario={userData.userId}
        id_admin={adminProfile?.admin_id}
      />
    </>
  )
}
