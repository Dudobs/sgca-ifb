import { useEffect, useState } from 'react'

import { Table } from '../table/table'
import { TableRow } from '../table/table-row'
import { TableHeader } from '../table/table-header'
import { TableCell } from '../table/table-cell'

import { generateRegistries } from '../../data/registries'
import { IconButton } from '../icon-button'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

interface registries {
  index: number
  name: string
  cpf: number
  matricula: number
  date: string
  time: string
  accessType: string
  userType: string
}

export function RegistriesTable() {
  const [registries, setRegistries] = useState<registries[]>([])

  useEffect(() => {
    const data = generateRegistries()
    setRegistries(data)
    console.log(data)
  }, [])

  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(registries.length / 15)

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
        {registries.slice((page - 1) * 15, page * 15).map(registrie => {
          return (
            <TableRow
              key={registrie.index}
              className={
                registrie.index % 2 === 0
                  ? 'h-10 border-zinc-700'
                  : 'h-10 border-zinc-700 bg-zinc-200'
              }
            >
              <TableCell className="text-start">{registrie.index}</TableCell>
              <TableCell>{registrie.name}</TableCell>
              <TableCell>{registrie.cpf}</TableCell>
              <TableCell>{registrie.matricula}</TableCell>
              <TableCell>
                {registrie.date} ás {registrie.time}
              </TableCell>
              <TableCell>{registrie.accessType}</TableCell>
              <TableCell>{registrie.userType}</TableCell>
            </TableRow>
          )
        })}
      </tbody>
      <tfoot>
        <TableRow className="border-t border-zinc-700">
          <TableCell colSpan={4} className="text-left">
            Mostrando 15 de 76 resultados
          </TableCell>
          <TableCell className="text-right" colSpan={3}>
            <div className="inline-flex items-center gap-8">
              <span>
                Página {page} de {totalPages}
              </span>
              {/*Math.ceil arredonda o número para cima*/}
              <div className="flex gap-1.5">
                <IconButton onClick={goToFirstPage} disabled={page === 1}>
                  <ChevronsLeft className="size-4 text-zinc-50" />
                </IconButton>
                <IconButton onClick={goToPreviousPage} disabled={page === 1}>
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
  )
}
