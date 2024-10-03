import { RotateCw } from 'lucide-react'
import { Navbar } from '../components/navbar/navbar'
import { Footer } from '../components/footer'
import { Table } from '../components/table/table'
import { Button } from '../components/button'

export function Home() {
  return (
    <div className="flex gap-10">
      <Navbar />

      <div className="pt-8 pr-10 flex flex-col justify-between gap-8">
        <main className="flex flex-col gap-3">
          <div>
            <h1 className="p-3 font-bold text-3xl">Últimos Acessos</h1>

            <Table hasPagination={false} />
          </div>

          <div className="flex gap-3">
            <Button className="w-9">
              <RotateCw className="size-5 text-zinc-50" />
            </Button>

            <Button>
              <a href="/registros">Ver mais</a>
            </Button>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
