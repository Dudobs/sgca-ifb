import { Footer } from '../components/footer'
import { Navbar } from '../components/navbar/navbar'
import { Table } from '../components/table/table'
import { TableCell } from '../components/table/table-cell'
import { TableHeader } from '../components/table/table-header'
import { TableRow } from '../components/table/table-row'

export function Observacoes() {
  return (
    <div className="flex gap-10">
      <Navbar />

      <div className="pt-8 pr-10 flex flex-col justify-between gap-8">
        <main className="flex flex-col gap-4">
          <h1 className="px-3 pt-3 font-bold text-3xl">
            Eduardo Vieira Campos
          </h1>

          <Table variant="secondary">
            <thead>
              <TableRow variant="secondary">
                <TableHeader variant="secondary">Data</TableHeader>
                <TableHeader variant="secondary">Alterações</TableHeader>
                <TableHeader variant="secondary">Alterado por</TableHeader>
                <TableHeader variant="secondary">Observação/Motivo</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              <TableRow variant="secondary">
                <TableCell variant="secondary">21/06/2024</TableCell>
                <TableCell variant="secondary">Informações pessoais</TableCell>
                <TableCell variant="secondary" className="w-48">
                  Administrador 01
                </TableCell>
                <TableCell variant="secondary" className="max-w-80">
                  Email de cadastro incorreto
                </TableCell>
              </TableRow>
              <TableRow variant="secondary">
                <TableCell variant="secondary">17/06/2025</TableCell>
                <TableCell variant="secondary">Status de acesso</TableCell>
                <TableCell variant="secondary" className="w-48">
                  Administrador 03
                </TableCell>
                <TableCell variant="secondary" className="max-w-80">
                  Conclusão de curso
                </TableCell>
              </TableRow>
            </tbody>
          </Table>
        </main>

        <Footer />
      </div>
    </div>
  )
}
