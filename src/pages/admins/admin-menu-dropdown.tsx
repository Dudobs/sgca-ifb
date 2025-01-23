import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisVertical } from 'lucide-react'
import { useState } from 'react'

import { RemoverAdministrador } from './dialogs/remover-administrador'
import { useAuth } from '../../hooks/AuthContext'

type adminProps = {
  id_usuario: string
  refetchQuery: () => void
}

export function AdminMenuDropdown({ id_usuario, refetchQuery }: adminProps) {
  const [dialogRemoverAdminIsOpen, setDialogRemoverAdminIsOpen] =
    useState(false)

  const showDialogRemoverAdmin = () => {
    setDialogRemoverAdminIsOpen(true)
  }

  const closeDialogRemoverAdmin = () => {
    setDialogRemoverAdminIsOpen(false)
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
              <button
                type="button"
                onClick={showDialogRemoverAdmin}
                className="w-full text-left block px-4 py-2 text-sm text-zinc-950 hover:bg-green-50 hover:text-green-900"
              >
                Remover administrador
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>

      <RemoverAdministrador
        dialogIsOpen={dialogRemoverAdminIsOpen}
        onClose={closeDialogRemoverAdmin}
        refetch={refetchQuery}
        id_usuario={id_usuario}
        id_admin={adminProfile?.admin_id}
      />
    </>
  )
}
