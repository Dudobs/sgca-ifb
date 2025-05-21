import { useQuery } from '@tanstack/react-query'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  UserRoundCog,
  UserRoundPlus,
} from 'lucide-react'
import { type ChangeEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../../components/button'
import { Footer } from '../../components/footer'
import { Navbar } from '../../components/navbar/navbar'
import { PaginationButton } from '../../components/pagination-button'
import { Table } from '../../components/table/table'
import { TableCell } from '../../components/table/table-cell'
import { TableHeader } from '../../components/table/table-header'
import { TableRow } from '../../components/table/table-row'
import { UserMenuDropdown } from './user-menu-dropdown'
import { UsersFilter } from './users-filter'

import { getUSers } from '../../http/get-users'
import { useAuth } from '../../hooks/AuthContext'
import { Warning } from '../../components/warning'
import clsx from 'clsx'

export function Usuarios() {
  // ESTADO HIDE INFO
  const [hideInfo, setHideInfo] = useState(true)

  // ESTADO PAGE
  const [page, setPage] = useState(1)

  // ESTADOS SEARCH
  // Name
  const [searchName, setSearchName] = useState(() => {
    const url = new URL(window.location.toString())

    if (url.searchParams.has('nome')) {
      return String(url.searchParams.get('nome')) ?? ''
    }

    return ''
  })

  function setCurrentSearchName(nome: string) {
    const url = new URL(window.location.toString())

    url.searchParams.set('nome', nome)

    window.history.pushState({}, '', url)

    setSearchName(nome)
  }

  function onSearchNameInputChanged(event: ChangeEvent<HTMLInputElement>) {
    setCurrentSearchName(event.target.value)
  }

  // User type
  const [searchUserType, setSearchUserType] = useState(() => {
    const url = new URL(window.location.toString())

    if (url.searchParams.has('tipo-usuario')) {
      return String(url.searchParams.get('tipo-usuario')) ?? ''
    }

    return ''
  })

  function setCurrentSearchUserType(tipo_usuario: string) {
    const url = new URL(window.location.toString())

    url.searchParams.set('tipo-usuario', tipo_usuario)

    window.history.pushState({}, '', url)

    setSearchUserType(tipo_usuario)
  }

  function onSearchUserTypeInputChanged(event: ChangeEvent<HTMLSelectElement>) {
    setCurrentSearchUserType(event.target.value)
  }

  // Access status
  const [searchAccessStatus, setSearchAccessStatus] = useState(() => {
    const url = new URL(window.location.toString())

    if (url.searchParams.has('status-acesso')) {
      return String(url.searchParams.get('status-acesso')) ?? ''
    }

    return ''
  })

  function setCurrentSearchAccessStatus(tipo_usuario: string) {
    const url = new URL(window.location.toString())

    url.searchParams.set('status-acesso', tipo_usuario)

    window.history.pushState({}, '', url)

    setSearchAccessStatus(tipo_usuario)
  }

  function onSearchAccessStatusInputChanged(
    event: ChangeEvent<HTMLSelectElement>
  ) {
    setCurrentSearchAccessStatus(event.target.value)
  }

  // API REQUEST
  const { logOut } = useAuth()
  const accessToken = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user') || '').access_token
    : null

  const {
    data = [],
    refetch,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['users', searchName, searchUserType, searchAccessStatus],
    queryFn: () =>
      getUSers(
        searchName,
        searchUserType,
        searchAccessStatus,
        accessToken,
        logOut
      ),
    staleTime: 1000 * 10, // 60 segundos
  })

  // PAGINATION
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

  useEffect(() => {
    if (data.length > 0) setPage(1)
  }, [data])

  return (
    <div className="flex gap-10">
      <Navbar />

      <div className="pt-8 pr-10 flex flex-1 flex-col justify-between gap-8">
        <main className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="px-3 pt-3 font-bold text-3xl">Usuários</h1>

            <Link to={'/usuarios/adicionar'}>
              <Button disabled variant="disabled">
                <UserRoundPlus className="size-5" />
                <span className="text-sm medium normal-case">
                  Adicionar usuário
                </span>
              </Button>
            </Link>
          </div>

          <div className="min-w-[79rem] border border-zinc-700 rounded-lg text-center">
            <div className="px-4 py-2 border-b border-zinc-700 flex gap-3">
              <UsersFilter
                handleOnChangeName={onSearchNameInputChanged}
                NameValue={searchName}
                handleOnChangeUserType={onSearchUserTypeInputChanged}
                UserTypeValue={searchUserType}
                handleOnChangeAccessStatus={onSearchAccessStatusInputChanged}
                AccessStatusValue={searchAccessStatus}
                handleHideInfo={setHideInfo}
                infoIsHided={hideInfo}
              />
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
              {isPending ? (
                <div>Loading...</div>
              ) : isError ? (
                <div>{error.message}</div>
              ) : data.length > 0 ? (
                <>
                  <tbody>
                    {data
                      .slice((page - 1) * usersPerPage, page * usersPerPage)
                      .map((user, index) => {
                        const userData = {
                          userId: user.id_usuario,
                          name: user.nome,
                          cpf: user.cpf,
                          email: user.email,
                          tipo_usuario: user.tipo_usuario,
                          id_tipo_usuario: user.id_tipo_usuario,
                          matricula: user.matricula,
                          status_acesso: user.status_acesso,
                          usuario_admin: user.usuario_admin,
                        }

                        return (
                          <TableRow
                            key={user.id_usuario}
                            className={
                              index % 2 === 0
                                ? 'h-10 border-zinc-700'
                                : 'h-10 border-zinc-700 bg-zinc-200'
                            }
                          >
                            <TableCell>
                              <UserMenuDropdown
                                userData={userData}
                                refetchUsersQuery={refetch}
                              />
                            </TableCell>
                            <TableCell className="min-w-96 flex gap-3 items-center justify-center">
                              {user.nome}
                              {user.usuario_admin ? (
                                <button
                                  type="button"
                                  disabled
                                  title="Administrador"
                                >
                                  <UserRoundCog width={18} />
                                </button>
                              ) : null}
                            </TableCell>
                            <TableCell
                              className={clsx('min-w-96', {
                                'blur-sm': hideInfo,
                              })}
                            >
                              {user.email}
                            </TableCell>
                            <TableCell
                              className={clsx('min-w-36', {
                                'blur-sm': hideInfo,
                              })}
                            >
                              {user.cpf}
                            </TableCell>
                            <TableCell
                              className={clsx('min-w-36', {
                                'blur-sm': hideInfo,
                              })}
                            >
                              {user.matricula}
                            </TableCell>
                            <TableCell
                              className={clsx('text-red-900', {
                                'text-green-800': user.status_acesso,
                              })}
                            >
                              {user.status_acesso ? 'Ativo' : 'Inativo'}
                            </TableCell>
                            <TableCell className="min-w-56">
                              {user.tipo_usuario}
                            </TableCell>
                          </TableRow>
                        )
                      })}
                  </tbody>
                  <tfoot>
                    <TableRow className="border-t border-zinc-700">
                      <TableCell colSpan={4} className="text-left">
                        Mostrando{' '}
                        {data.length > usersPerPage
                          ? usersPerPage
                          : data.length}{' '}
                        de {data?.length} resultados
                      </TableCell>
                      <TableCell className="text-right" colSpan={3}>
                        <div className="inline-flex items-center gap-8">
                          <span>
                            Página {data.length > 0 ? page : '0'} de{' '}
                            {totalPages}
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
                </>
              ) : (
                <Warning
                  warningText="Nenhum usuário encontrado"
                  className="bg-transparent"
                />
              )}
            </Table>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
