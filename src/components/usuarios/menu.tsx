import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { EllipsisVertical } from "lucide-react";

import { AdicionarRegistro } from "../dialogs/adicionar-registro";
import { AlterarStatusAcesso } from "../dialogs/alterar-status-acesso";
import { TornarAdministrador } from "../dialogs/tornar-administrador";
import { useState } from "react";

export function DropdownMenu() {
  const [dialogTornarAdminIsOpen, setDialogTornarAdminIsOpen] = useState(false);
  const [dialogAdicionarRegistroIsOpen, setDialogAdicionarRegistroIsOpen] =
    useState(false);
  // Adicionar registro
  const showDialogAdicionarRegistro = () => {
    setDialogAdicionarRegistroIsOpen(true);
  };

  const closeDialogAdicionarRegistro = () => {
    setDialogTornarAdminIsOpen(false);
  };

  // Tornar administrador
  const showDialogTornarAdmin = () => {
    setDialogTornarAdminIsOpen(true);
  };

  const closeDialogTornarAdmin = () => {
    setDialogTornarAdminIsOpen(false);
  };

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
              <a
                href="/usuarios/editar"
                className="block px-4 py-2 text-sm text-zinc-950 data-[focus]:bg-green-50 data-[focus]:text-green-900"
              >
                Editar
              </a>
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
              <AlterarStatusAcesso />
            </MenuItem>
            <MenuItem>
              <a
                href="/usuarios/observacoes"
                className="block px-4 py-2 text-sm text-zinc-950 data-[focus]:bg-green-50 data-[focus]:text-green-900"
              >
                Observações
              </a>
            </MenuItem>
            <MenuItem>
              <button
                type="button"
                onClick={showDialogTornarAdmin}
                className="w-full text-left block px-4 py-2 text-sm text-zinc-950 hover:bg-green-50 hover:text-green-900"
              >
                Tornar administrador
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>

      <AdicionarRegistro
        dialogIsOpen={dialogAdicionarRegistroIsOpen}
        onClose={closeDialogAdicionarRegistro}
      />

      <TornarAdministrador
        dialogIsOpen={dialogTornarAdminIsOpen}
        onClose={closeDialogTornarAdmin}
      />
    </>
  );
}
