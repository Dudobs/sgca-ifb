import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import utc from 'dayjs/plugin/utc'
import { Eye, RotateCw } from 'lucide-react'

import { Navbar } from '../components/navbar/navbar'
import { Footer } from '../components/footer'
import { Table } from '../components/table/table'
import { Button } from '../components/button'
import { TableRow } from '../components/table/table-row'
import { TableCell } from '../components/table/table-cell'
import { TableHeader } from '../components/table/table-header'
import { getRegistries } from '../http/get_registries'
import { useState } from 'react'
import { EyeClosed } from '../assets/eye-closed'
import clsx from 'clsx'

export function Home() {
  const [hideInfo, setHideInfo] = useState(true)

  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ['registries'],
    queryFn: () => getRegistries(undefined),
    refetchOnWindowFocus: true,
    staleTime: 1000 * 10, // 10 segundos
  })

  dayjs.extend(utc)
  dayjs.locale('pt-br')

  return (
    <div className="flex gap-10">
      <Navbar />

      <div className="pt-8 pr-10 flex flex-1 flex-col justify-between gap-8">
        <main className="flex flex-col gap-3">
          <div>
            <div className="p-3 flex items-center justify-between">
              <h1 className="font-bold text-3xl">Últimos Acessos</h1>
              <div className="flex items-center">
                {hideInfo ? (
                  <button
                    onClick={() => setHideInfo(false)}
                    type="button"
                    title="Exibir informações sensíveis"
                  >
                    <EyeClosed color="#3f3f46" />
                  </button>
                ) : (
                  <button
                    onClick={() => setHideInfo(true)}
                    type="button"
                    title="Esconder informações sensíveis"
                  >
                    <Eye color="#3f3f46" />
                  </button>
                )}
              </div>
            </div>
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
                    const registrieDate = dayjs
                      .utc(registrie.hora_acesso)
                      .format('DD MMM YYYY')
                    const registrieTime = dayjs
                      .utc(registrie.hora_acesso)
                      .format('HH:mm')
                    return (
                      <TableRow
                        key={registrie.id_registro}
                        className={index % 2 !== 0 ? '' : ' bg-zinc-200'}
                      >
                        <TableCell className="text-start">
                          {registrie.id_registro}
                        </TableCell>
                        <TableCell>{registrie.nome}</TableCell>
                        <TableCell
                          className={clsx({
                            'blur-sm': hideInfo,
                          })}
                        >
                          {registrie.cpf}
                        </TableCell>
                        <TableCell
                          className={clsx({
                            'blur-sm': hideInfo,
                          })}
                        >
                          {registrie.matricula}
                        </TableCell>
                        <TableCell>
                          {registrieDate} ás {registrieTime}
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
