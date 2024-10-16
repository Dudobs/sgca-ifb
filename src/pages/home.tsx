import { RotateCw } from 'lucide-react'
import { Navbar } from '../components/navbar/navbar'
import { Footer } from '../components/footer'
import { Table } from '../components/table/table'
import { Button } from '../components/button'
import { TableRow } from '../components/table/table-row'
import { TableCell } from '../components/table/table-cell'
import { TableHeader } from '../components/table/table-header'
import { useEffect, useState } from 'react'
import { generateRegistries } from '../data/registries'
import { Link } from 'react-router-dom'

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

export function Home() {
  const [registries, setRegistries] = useState<registries[]>([])

  useEffect(() => {
    const data = generateRegistries()
    setRegistries(data)
  }, [])

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
                {registries.slice(0, 15).map(registrie => {
                  return (
                    <TableRow
                      key={registrie.index}
                      className={
                        registrie.index % 2 !== 0 ? '' : ' bg-zinc-200'
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
            </Table>
          </div>

          <div className="flex gap-3">
            <Button className="px-2">
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
