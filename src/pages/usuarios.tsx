import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import { Footer } from '../components/footer'
import { IconButton } from '../components/icon-button'
import { Navbar } from '../components/navbar/navbar'
import { Table } from '../components/table/table'
import { TableCell } from '../components/table/table-cell'
import { TableRow } from '../components/table/table-row'
import { TableHeader } from '../components/table/table-header'
import { useEffect, useState } from 'react'
import { generateRegistries } from '../data/registries'

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

export function Usuarios() {
  const [registries, setRegistries] = useState<registries[]>([])

  useEffect(() => {
    const data = generateRegistries()
    setRegistries(data)
  }, [])

  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(registries.length / 10)

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
          <h1 className="p-3 font-bold text-3xl">Usuários</h1>

          <Table>
            <thead>
              <TableRow className="border-b border-zinc-700">
                <TableHeader>
                  <input
                    type="checkbox"
                    className="appearance-none size-4 rounded border border-zinc-500 bg-zinc-50 hover:border-green-500 hover:bg-green-500/5 checked:border-green-800 checked:bg-green-500/30"
                  />
                </TableHeader>
                <TableHeader>Nome</TableHeader>
                <TableHeader>CPF</TableHeader>
                <TableHeader>Matrícula</TableHeader>
                <TableHeader>Data/Hora</TableHeader>
                <TableHeader>Tipo de acesso</TableHeader>
                <TableHeader>Tipo de usuário</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {registries.slice((page - 1) * 10, page * 10).map(registrie => {
                return (
                  <TableRow
                    key={registrie.index}
                    className={
                      registrie.index % 2 === 0
                        ? 'h-10 border-zinc-700'
                        : 'h-10 border-zinc-700 bg-zinc-200'
                    }
                  >
                    <TableCell className="text-start">
                      {registrie.index}
                    </TableCell>
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
                  Mostrando 15 de {registries.length} resultados
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
        </main>

        <Footer />
      </div>
    </div>
  )
}
