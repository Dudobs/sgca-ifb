import { Navbar } from '../../components/navbar/navbar'
import { Footer } from '../../components/footer'
import { type filtersForm, RegistriesFilter } from './registries-filter'
import { RegistriesTable } from './registries-table'
import { useState } from 'react'

export function Registros() {
  const [searchParams, setSearchParams] = useState({
    nome: '',
    cpf: '',
    matricula: '',
    tipo_usuario: '',
    tipo_acesso: '',
  })

  const [hideInfo, setHideInfo] = useState(false)

  function handleSearchRegistries(params: filtersForm) {
    setSearchParams(params) // Atualiza os parâmetros de busca
  }

  return (
    <div className="flex gap-10">
      <Navbar />

      <div className="pt-8 pr-10 flex flex-col justify-between gap-8">
        <main className="flex flex-col gap-4">
          <h1 className="p-3 font-bold text-3xl">Registros</h1>

          <RegistriesFilter
            onSearch={handleSearchRegistries}
            handleHideInfo={setHideInfo}
            infoIsHided={hideInfo}
          />

          <RegistriesTable searchParams={searchParams} infoIsHided={hideInfo} />
        </main>

        <Footer />
      </div>
    </div>
  )
}
