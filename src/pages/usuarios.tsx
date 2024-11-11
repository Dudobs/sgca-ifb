import { useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  UserRoundPlus,
} from 'lucide-react'

import { Footer } from '../components/footer'
import { PaginationButton } from '../components/pagination-button'
import { Navbar } from '../components/navbar/navbar'
import { Table } from '../components/table/table'
import { TableCell } from '../components/table/table-cell'
import { TableRow } from '../components/table/table-row'
import { TableHeader } from '../components/table/table-header'
import { UsersFilter } from '../components/usuarios/users-filter'
import { Button } from '../components/button'
import { UserMenuDropdown } from '../components/usuarios/user-menu-dropdown'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getUSers } from '../http/get-users'

export function Usuarios() {
  const { data = [] } = useQuery({
    queryKey: ['users'],
    queryFn: getUSers,
    staleTime: 1000 * 60, // 60 segundos
  })

  if (!data) {
    return null
  }

  console.log(data)

  const [page, setPage] = useState(1)

  const usersPerPage = 10

  const totalPages = Math.ceil(data.length / usersPerPage)

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

      <div className="pt-8 pr-10 flex flex-col justify-between gap-8">
        <main className="flex flex-col gap-4">
          <div className="flex  justify-between items-center">
            <h1 className="px-3 pt-3 font-bold text-3xl">Usuários</h1>

            <Link to={'/usuarios/adicionar'}>
              <Button>
                <UserRoundPlus className="size-5" />
                <span className="text-sm medium normal-case">
                  Adicionar usuário
                </span>
              </Button>
            </Link>
          </div>

          <div className="min-w-[79rem] border border-zinc-700 rounded-lg text-center">
            <div className="px-4 py-2 border-b border-zinc-700 flex gap-3">
              <UsersFilter />
            </div>

            <Table className="min-w-[79rem] rounded-none border-none">
              <thead>
                <TableRow className="border-b border-zinc-700">
                  <TableHeader> </TableHeader>
                  <TableHeader>Nome</TableHeader>
                  <TableHeader>Email</TableHeader>
                  <TableHeader>CPF</TableHeader>
                  <TableHeader>Matrícula</TableHeader>
                  <TableHeader>Status</TableHeader>
                  <TableHeader>Tipo de usuário</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                {data
                  // .slice((page - 1) * usersPerPage, page * usersPerPage)
                  .map(user => {
                    return (
                      <TableRow
                        key={user.id_usuario}
                        className={
                           user.id_usuario % 2 === 0
                            ? 'h-10 border-zinc-700'
                            : 'h-10 border-zinc-700 bg-zinc-200'
                        }
                      >
                        <TableCell>
                          <UserMenuDropdown userId={user.id_usuario} />
                        </TableCell>
                        <TableCell className="min-w-96">{user.nome}</TableCell>
                        <TableCell className="min-w-96">{user.email}</TableCell>
                        <TableCell className="min-w-36">{user.cpf}</TableCell>
                        <TableCell className="min-w-36">
                          {user.matricula}
                        </TableCell>
                        <TableCell>{user.status_acesso}</TableCell>
                        <TableCell>{user.tipo_usuario}</TableCell>
                      </TableRow>
                    )
                  })}
              </tbody>
              <tfoot>
                <TableRow className="border-t border-zinc-700">
                  <TableCell colSpan={4} className="text-left">
                    Mostrando {usersPerPage < 10 ? usersPerPage : data.length}{' '}
                    de {data?.length} resultados
                  </TableCell>
                  <TableCell className="text-right" colSpan={3}>
                    <div className="inline-flex items-center gap-8">
                      <span>
                        Página {page} de {totalPages}
                      </span>
                      {/*Math.ceil arredonda o número para cima*/}
                      <div className="flex gap-1.5">
                        <PaginationButton
                          onClick={goToFirstPage}
                          disabled={page === 1}
                        >
                          <ChevronsLeft className="size-4 text-zinc-50" />
                        </PaginationButton>
                        <PaginationButton
                          onClick={goToPreviousPage}
                          disabled={page === 1}
                        >
                          <ChevronLeft className="size-4 text-zinc-50" />
                        </PaginationButton>
                        <PaginationButton
                          onClick={goToNextPage}
                          disabled={page === totalPages}
                        >
                          <ChevronRight className="size-4 text-zinc-50" />
                        </PaginationButton>
                        <PaginationButton
                          onClick={goToLastPage}
                          disabled={page === totalPages}
                        >
                          <ChevronsRight className="size-4 text-zinc-50" />
                        </PaginationButton>
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
