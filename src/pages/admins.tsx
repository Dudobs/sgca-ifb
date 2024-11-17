import { useQuery } from '@tanstack/react-query'

import { Footer } from '../components/footer'
import { Navbar } from '../components/navbar/navbar'
import { Table } from '../components/table/table'
import { TableCell } from '../components/table/table-cell'
import { TableHeader } from '../components/table/table-header'
import { TableRow } from '../components/table/table-row'
import { AdminMenuDropdown } from '../components/admin-menu-dropdown'
import { getAdmins } from '../http/get_admins'

export function Admins() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["admins"],
    queryFn: getAdmins,
    staleTime: 1000 * 60 // 1 minuto
  })
  console.log(data)

  return (
    <div className="flex gap-10">
      <Navbar />

      <div className="pt-8 pr-10 flex flex-col justify-between gap-8">
        <main className="flex flex-col gap-4">
          <h1 className="px-3 pt-3 font-bold text-3xl">Administradores</h1>

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
                        <AdminMenuDropdown adminId={admin.id_usuario}/>
                      </TableCell>
                      <TableCell className="min-w-96">{admin.nome}</TableCell>
                      <TableCell className="min-w-96">{admin.email}</TableCell>
                      <TableCell className="min-w-36">{admin.cpf}</TableCell>
                      <TableCell className="min-w-36">
                        {admin.matricula}
                      </TableCell>
                      <TableCell>{admin.status_acesso}</TableCell>
                      <TableCell>{admin.tipo_usuario}</TableCell>
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
