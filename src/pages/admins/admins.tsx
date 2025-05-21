import { useQuery } from '@tanstack/react-query'

import { AdminMenuDropdown } from './admin-menu-dropdown'
import { Footer } from '../../components/footer'
import { Navbar } from '../../components/navbar/navbar'
import { Table } from '../../components/table/table'
import { TableCell } from '../../components/table/table-cell'
import { TableHeader } from '../../components/table/table-header'
import { TableRow } from '../../components/table/table-row'
import { getAdmins } from '../../http/get_admins'
import clsx from 'clsx'
import { useState } from 'react'
import { EyeClosed } from '../../assets/eye-closed'
import { Eye } from 'lucide-react'

export function Admins() {
  // ESTADO HIDE INFO
  const [hideInfo, setHideInfo] = useState(true)

  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ['admins'],
    queryFn: getAdmins,
    staleTime: 1000 * 60, // 1 minuto
  })

  return (
    <div className="flex gap-10">
      <Navbar />

      <div className="pt-8 pr-10 flex flex-1 flex-col justify-between gap-8">
        <main className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="px-3 pt-3 font-bold text-3xl">Administradores</h1>
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
              {isPending ? (
                <div>Loading...</div>
              ) : isError ? (
                <div>Error: {error.message}</div>
              ) : (
                data.map((admin, index) => {
                  return (
                    <TableRow
                      key={admin.id_usuario}
                      className={
                        index % 2 === 0
                          ? 'h-10 border-zinc-700'
                          : 'h-10 border-zinc-700 bg-zinc-200'
                      }
                    >
                      <TableCell>
                        <AdminMenuDropdown
                          id_usuario={admin.id_usuario}
                          refetchQuery={refetch}
                        />
                      </TableCell>
                      <TableCell className="min-w-96">{admin.nome}</TableCell>
                      <TableCell
                        className={clsx('min-w-96', {
                          'blur-sm': hideInfo,
                        })}
                      >
                        {admin.email}
                      </TableCell>
                      <TableCell
                        className={clsx('min-w-36', {
                          'blur-sm': hideInfo,
                        })}
                      >
                        {admin.cpf}
                      </TableCell>
                      <TableCell
                        className={clsx('min-w-36', {
                          'blur-sm': hideInfo,
                        })}
                      >
                        {admin.matricula}
                      </TableCell>
                      <TableCell
                        className={clsx('text-red-900', {
                          'text-green-800': admin.status_acesso,
                        })}
                      >
                        {admin.status_acesso ? 'Ativo' : 'Inativo'}
                      </TableCell>
                      <TableCell className="min-w-48">
                        {admin.tipo_usuario}
                      </TableCell>
                    </TableRow>
                  )
                })
              )}
            </tbody>
          </Table>
        </main>

        <Footer />
      </div>
    </div>
  )
}
