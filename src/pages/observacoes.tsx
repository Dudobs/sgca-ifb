import { useQuery } from '@tanstack/react-query'

import { Footer } from '../components/footer'
import { Navbar } from '../components/navbar/navbar'
import { Table } from '../components/table/table'
import { TableCell } from '../components/table/table-cell'
import { TableHeader } from '../components/table/table-header'
import { TableRow } from '../components/table/table-row'
import { Warning } from '../components/warning'
import { getObservacoes } from '../http/get_observacoes'
import { useLocation } from 'react-router-dom'
import dayjs from 'dayjs'

export function Observacoes() {
  const location = useLocation()
  const user = location.state?.userData

  const { data = [] } = useQuery({
    queryKey: ['observations', user.userId],
    queryFn: () => getObservacoes({ id_usuario: user.userId }),
    staleTime: 1000 * 10, // 10 seconds
  })

  console.log(data)

  return (
    <div className="flex gap-10">
      <Navbar />

      <div className="pt-8 pr-10 flex flex-col justify-between gap-8">
        <main className="flex flex-col gap-4">
          <h1 className="px-3 pt-3 font-bold text-3xl">
            Eduardo Vieira Campos
          </h1>

          {data?.length >= 1 ? (
            <Table variant="secondary">
              <thead>
                <TableRow variant="secondary">
                  <TableHeader variant="secondary">Data</TableHeader>
                  <TableHeader variant="secondary">Alterações</TableHeader>
                  <TableHeader variant="secondary">Alterado por</TableHeader>
                  <TableHeader variant="secondary">
                    Observação/Motivo
                  </TableHeader>
                </TableRow>
              </thead>
              <tbody>
                {data.map(obs => {
                  const observationDate = dayjs(obs.created_at).format(
                    'DD MMM YYYY'
                  )
                  return (
                    <TableRow key={obs.id_observacao} variant="secondary">
                      <TableCell variant="secondary">
                        {observationDate}
                      </TableCell>
                      <TableCell variant="secondary">{obs.alteracao}</TableCell>
                      <TableCell variant="secondary" className="w-48">
                        {obs.admin}
                      </TableCell>
                      <TableCell variant="secondary" className="max-w-80">
                        {obs.observacao}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </tbody>
            </Table>
          ) : (
            <Warning warningText="Nenhuma observação encontrada." />
          )}
        </main>

        <Footer />
      </div>
    </div>
  )
}
