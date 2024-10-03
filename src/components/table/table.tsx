import type { ComponentProps } from 'react'
import { TableRow } from './table-row'
import { TableCell } from './table-cell'
import { IconButton } from '../icon-button'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import { TableHeader } from './table-header'

interface TableProps extends ComponentProps<'table'> {
  hasPagination?: boolean
}

export function Table({ hasPagination, ...props }: TableProps) {
  return (
    <div className="min-w-[79rem] border border-zinc-700 rounded-lg text-center">
      <table className="w-full" {...props}>
        <thead>
          <TableRow className="border-b border-zinc-700">
            <TableHeader className="p-2 text-start">N°</TableHeader>
            <TableHeader>Nome</TableHeader>
            <TableHeader>CPF</TableHeader>
            <TableHeader>Matrícula</TableHeader>
            <TableHeader>Data/Hora</TableHeader>
            <TableHeader>Tipo de acesso</TableHeader>
            <TableHeader>Tipo de usuário</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, i) => {
            return (
              <TableRow
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                key={i}
                className={
                  i % 2 === 0
                    ? 'h-10 border-zinc-700'
                    : 'h-10 border-zinc-700 bg-zinc-200'
                }
              >
                <TableCell className="text-start">0001</TableCell>
                <TableCell>Eduardo Vieira Campos</TableCell>
                <TableCell>000.000.181-14</TableCell>
                <TableCell>2220000000</TableCell>
                <TableCell>02/10/24 ás 16:00</TableCell>
                <TableCell>Entrada</TableCell>
                <TableCell>Graduação</TableCell>
              </TableRow>
            )
          })}
        </tbody>
        {hasPagination && (
          <tfoot>
            <TableRow className="border-t border-zinc-700">
              <TableCell colSpan={4} className="text-left">
                Mostrando 10 de 76 resultados
              </TableCell>
              <TableCell className="text-right" colSpan={3}>
                <div className="inline-flex items-center gap-8">
                  <span>Página 1 de 6</span>
                  {/*Math.ceil arredonda o número para cima*/}
                  <div className="flex gap-1.5">
                    <IconButton disabled>
                      {/* onClick={goToFirstPage} 
                          disabled={page === 1}> {/*Desativa o botão caso esteja na primeira página*/}
                      <ChevronsLeft className="size-4 text-zinc-50" />
                    </IconButton>
                    <IconButton disabled>
                      <ChevronLeft className="size-4 text-zinc-50" />
                    </IconButton>
                    <IconButton>
                      <ChevronRight className="size-4 text-zinc-50" />
                    </IconButton>
                    <IconButton>
                      <ChevronsRight className="size-4 text-zinc-50" />
                    </IconButton>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </tfoot>
        )}
      </table>
    </div>
  )
}
