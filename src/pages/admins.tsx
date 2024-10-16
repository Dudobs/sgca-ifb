import { useEffect, useState } from 'react'
import { Footer } from '../components/footer'
import { Navbar } from '../components/navbar/navbar'
import { Table } from '../components/table/table'
import { TableCell } from '../components/table/table-cell'
import { TableHeader } from '../components/table/table-header'
import { TableRow } from '../components/table/table-row'
import { generateAdmins } from '../data/admins'
import { AdminMenuDropdown } from '../components/admin-menu-dropdown'

interface admins {
  index: number
  name: string
  email: string
  cpf: number
  matricula: number
  accessStatus: string
  userType: string
}

export function Admins() {
  const [adminsData, setAdminsData] = useState<admins[]>([])

  useEffect(() => {
    const data = generateAdmins()
    setAdminsData(data)
  }, [])

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
              {adminsData.map(admin => {
                return (
                  <TableRow
                    key={admin.index}
                    className={
                      admin.index % 2 === 0
                        ? 'h-10 border-zinc-700'
                        : 'h-10 border-zinc-700 bg-zinc-200'
                    }
                  >
                    <TableCell>
                      <AdminMenuDropdown />
                    </TableCell>
                    <TableCell className="min-w-96">{admin.name}</TableCell>
                    <TableCell className="min-w-96">{admin.email}</TableCell>
                    <TableCell className="min-w-36">{admin.cpf}</TableCell>
                    <TableCell className="min-w-36">
                      {admin.matricula}
                    </TableCell>
                    <TableCell>{admin.accessStatus}</TableCell>
                    <TableCell>{admin.userType}</TableCell>
                  </TableRow>
                )
              })}
            </tbody>
          </Table>
        </main>

        <Footer />
      </div>
    </div>
  )
}
