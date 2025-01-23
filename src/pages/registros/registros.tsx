import { Navbar } from '../../components/navbar/navbar'
import { Footer } from '../../components/footer'
import { type filtersForm, RegistriesFilter } from './registries-filter'
import { RegistriesTable } from './registries-table'
import { useState } from 'react'
import { Warning } from '../../components/warning'

export function Registros() {
  const [searchHasData, setSearchHasData] = useState(true)
  console.log(searchHasData)

  const [searchParams, setSearchParams] = useState({
    nome: '',
    cpf: '',
    matricula: '',
    tipo_usuario: '',
    tipo_acesso: '',
  })

  function handleSearchRegistries(params: filtersForm) {
    setSearchParams(params) // Atualiza os parâmetros de busca
  }

  return (
    <div className="flex gap-10">
      <Navbar />

      <div className="pt-8 pr-10 flex flex-col justify-between gap-8">
        <main className="flex flex-col gap-4">
          <h1 className="p-3 font-bold text-3xl">Registros</h1>

          <RegistriesFilter onSearch={handleSearchRegistries} />

          {searchHasData ? (
            <RegistriesTable
              searchParams={searchParams}
              setSearchState={setSearchHasData}
            />
          ) : (
            <Warning warningText="Nenhum registro de acesso encontrado." />
          )}
        </main>

        <Footer />
      </div>
    </div>
  )
}
