import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { PaginationButton } from '../../components/pagination-button'
import { Table } from '../../components/table/table'
import { TableCell } from '../../components/table/table-cell'
import { TableHeader } from '../../components/table/table-header'
import { TableRow } from '../../components/table/table-row'
import { getRegistries } from '../../http/get_registries'

export function RegistriesTable() {
  const [page, setPage] = useState(1)

  const {
    data = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['registries'],
    queryFn: getRegistries,
    staleTime: 1000 * 5, // 5 Segundos
  })

  const registriesPerPage = 15

  const totalPages = Math.ceil(data.length / registriesPerPage)

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

  dayjs.extend(utc)

  return (
    <Table>
      <thead>
        <TableRow className="border-b border-zinc-700">
          <TableHeader className="px-4 text-start">N°</TableHeader>
          <TableHeader>Nome</TableHeader>
          <TableHeader>CPF</TableHeader>
          <TableHeader>Matrícula</TableHeader>
          <TableHeader>Data/Hora</TableHeader>
          <TableHeader>Tipo de acesso</TableHeader>
          <TableHeader>Tipo de usuário</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {isPending ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>{error.message}</div>
        ) : (
          data
            .slice((page - 1) * registriesPerPage, page * registriesPerPage)
            .map((registrie, index) => {
              const date = dayjs.utc(registrie.hora_acesso).format('D MMM YYYY')
              const time = dayjs.utc(registrie.hora_acesso).format('HH:mm')
              return (
                <TableRow
                  key={registrie.id_registro}
                  className={
                    index % 2 === 0
                      ? 'h-10 border-zinc-700'
                      : 'h-10 border-zinc-700 bg-zinc-200'
                  }
                >
                  <TableCell className="text-start">
                    {registrie.id_registro}
                  </TableCell>
                  <TableCell>{registrie.nome}</TableCell>
                  <TableCell>{registrie.cpf}</TableCell>
                  <TableCell>{registrie.matricula}</TableCell>
                  <TableCell>
                    {date} às {time}
                  </TableCell>
                  <TableCell>
                    {registrie.tipo_acesso ? 'Entrada' : 'Saída'}
                  </TableCell>
                  <TableCell>{registrie.tipo_usuario}</TableCell>
                </TableRow>
              )
            })
        )}
      </tbody>
      <tfoot>
        <TableRow className="border-t border-zinc-700">
          <TableCell colSpan={4} className="text-left">
            {data.length > registriesPerPage ? registriesPerPage : data.length}{' '}
            de {data?.length} resultados
          </TableCell>
          <TableCell className="text-right" colSpan={3}>
            <div className="inline-flex items-center gap-8">
              <span>
                Página {page} de {totalPages}
              </span>
              {/*Math.ceil arredonda o número para cima*/}
              <div className="flex gap-1.5">
                <PaginationButton onClick={goToFirstPage} disabled={page === 1}>
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
  )
}
