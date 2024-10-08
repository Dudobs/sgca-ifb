import { Navbar } from '../components/navbar/navbar'
import { Footer } from '../components/footer'
import { RegistriesFilter } from '../components/registros/registries-filter'
import { RegistriesTable } from '../components/registros/registries-table'

export function Registros() {
  return (
    <div className="flex gap-10">
      <Navbar />

      <div className="pt-8 pr-10 flex flex-col justify-between gap-8">
        <main className="flex flex-col gap-4">
          <h1 className="p-3 font-bold text-3xl">Registros</h1>

          <RegistriesFilter />

          <RegistriesTable />
        </main>

        <Footer />
      </div>
    </div>
  )
}
