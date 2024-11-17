import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import { RotateCw } from 'lucide-react'

import { Navbar } from '../components/navbar/navbar'
import { Footer } from '../components/footer'
import { Table } from '../components/table/table'
import { Button } from '../components/button'
import { TableRow } from '../components/table/table-row'
import { TableCell } from '../components/table/table-cell'
import { TableHeader } from '../components/table/table-header'
import { getRegistries } from '../http/get_registries'

export function Home() {
  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ['registries'],
    queryFn: getRegistries,
    refetchOnWindowFocus: true,
    staleTime: 1000 * 10, // 10 segundos
  })

  return (
    <div className="flex gap-10">
      <Navbar />

      <div className="pt-8 pr-10 flex flex-col justify-between gap-8">
        <main className="flex flex-col gap-3">
          <div>
            <h1 className="p-3 font-bold text-3xl">Últimos Acessos</h1>
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
                  data.slice(0, 15).map((registrie, index) => {
                    const registrieDate = dayjs(registrie.hora_acesso).format('DD MMM YYYY')
                    const registrieTime = dayjs(registrie.hora_acesso).format('HH:mm')
                    return (
                      <TableRow
                        key={registrie.id_registro}
                        className={
                          index % 2 !== 0 ? '' : ' bg-zinc-200'
                        }
                      >
                        <TableCell className="text-start">
                          {registrie.id_registro}
                        </TableCell>
                        <TableCell>{registrie.nome}</TableCell>
                        <TableCell>{registrie.cpf}</TableCell>
                        <TableCell>{registrie.matricula}</TableCell>
                        <TableCell>
                          {registrieDate} ás {registrieTime}
                        </TableCell>
                        <TableCell>{registrie.tipo_acesso ? 'Entrada' : 'Saída'}</TableCell>
                        <TableCell>{registrie.tipo_usuario}</TableCell>
                      </TableRow>
                    )
                  })
                )}
              </tbody>
            </Table>
          </div>

          <div className="flex gap-3">
            <Button className="px-2" onClick={() => refetch()}>
              <RotateCw className="size-5 text-zinc-50" />
            </Button>

            <Button className="normal-case">
              <Link to={'/registros'}>Ver mais</Link>
            </Button>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
