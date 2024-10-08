import { useEffect, useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  UserRoundPlus,
} from 'lucide-react'

import { Footer } from '../components/footer'
import { IconButton } from '../components/icon-button'
import { Navbar } from '../components/navbar/navbar'
import { Table } from '../components/table/table'
import { TableCell } from '../components/table/table-cell'
import { TableRow } from '../components/table/table-row'
import { TableHeader } from '../components/table/table-header'
import { generateUsers } from '../data/users'
import { Checkbox } from '../components/form/checkbox'
import Example from '../components/usuarios/menu'
import { UsersFilter } from '../components/usuarios/users-filter'
import { Button } from '../components/button'

interface users {
  index: number
  name: string
  email: string
  cpf: number
  matricula: number
  accessStatus: string
  userType: string
}

export function Usuarios() {
  const [registries, setRegistries] = useState<users[]>([])

  useEffect(() => {
    const data = generateUsers()
    setRegistries(data)
  }, [])

  const [page, setPage] = useState(1)

  const usersPerPage = 10

  const totalPages = Math.ceil(registries.length / usersPerPage)

  function goToFirstPage() {
    setPage(1)
  }

  function goToPreviousPage() {
    setPage(page - 1)
  }

  function goToNextPage() {
    setPage(page + 1)
  }

  function goToLastPage() {
    setPage(totalPages)
  }

  return (
    <div className="flex gap-10">
      <Navbar />

      <div className="pt-16 pr-10 flex flex-col justify-between gap-8">
        <main className="flex flex-col gap-4">
          <div className="flex  justify-between items-center">
            <h1 className="px-3 font-bold text-3xl">Usuários</h1>

            <Button>
              <UserRoundPlus className="size-5" />
              <span className="text-sm font-bold">Adicionar usuário</span>
            </Button>
          </div>

          <div className="min-w-[79rem] border border-zinc-700 rounded-lg text-center">
            <div className="px-4 py-2 border-b border-zinc-700 flex gap-3">
              <Example />

              <UsersFilter />
            </div>

            <Table className="min-w-[79rem] rounded-none border-none">
              <thead>
                <TableRow className="border-b border-zinc-700">
                  <TableHeader>
                    <Checkbox />
                  </TableHeader>
                  <TableHeader>Nome</TableHeader>
                  <TableHeader>Email</TableHeader>
                  <TableHeader>CPF</TableHeader>
                  <TableHeader>Matrícula</TableHeader>
                  <TableHeader>Status</TableHeader>
                  <TableHeader>Tipo de usuário</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                {registries
                  .slice((page - 1) * usersPerPage, page * usersPerPage)
                  .map(registrie => {
                    return (
                      <TableRow
                        key={registrie.index}
                        className={
                          registrie.index % 2 === 0
                            ? 'h-10 border-zinc-700'
                            : 'h-10 border-zinc-700 bg-zinc-200'
                        }
                      >
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                        <TableCell>{registrie.name}</TableCell>
                        <TableCell>{registrie.email}</TableCell>
                        <TableCell>{registrie.cpf}</TableCell>
                        <TableCell>{registrie.matricula}</TableCell>
                        <TableCell>{registrie.accessStatus}</TableCell>
                        <TableCell>{registrie.userType}</TableCell>
                      </TableRow>
                    )
                  })}
              </tbody>
              <tfoot>
                <TableRow className="border-t border-zinc-700">
                  <TableCell colSpan={4} className="text-left">
                    Mostrando {usersPerPage} de {registries.length} resultados
                  </TableCell>
                  <TableCell className="text-right" colSpan={3}>
                    <div className="inline-flex items-center gap-8">
                      <span>
                        Página {page} de {totalPages}
                      </span>
                      {/*Math.ceil arredonda o número para cima*/}
                      <div className="flex gap-1.5">
                        <IconButton
                          onClick={goToFirstPage}
                          disabled={page === 1}
                        >
                          <ChevronsLeft className="size-4 text-zinc-50" />
                        </IconButton>
                        <IconButton
                          onClick={goToPreviousPage}
                          disabled={page === 1}
                        >
                          <ChevronLeft className="size-4 text-zinc-50" />
                        </IconButton>
                        <IconButton
                          onClick={goToNextPage}
                          disabled={page === totalPages}
                        >
                          <ChevronRight className="size-4 text-zinc-50" />
                        </IconButton>
                        <IconButton
                          onClick={goToLastPage}
                          disabled={page === totalPages}
                        >
                          <ChevronsRight className="size-4 text-zinc-50" />
                        </IconButton>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              </tfoot>
            </Table>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
