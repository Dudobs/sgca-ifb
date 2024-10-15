import { Footer } from '../components/footer'
import { Navbar } from '../components/navbar/navbar'

export function Observacoes() {
  return (
    <div className="flex gap-10">
      <Navbar />

      <div className="pt-16 pr-10 flex flex-col justify-between gap-8">
        <main className="flex flex-col gap-8">
          <h1 className="px-3 font-bold text-3xl">Eduardo Vieira Campos</h1>

          <table className="border border-gray-300">
            <thead className="text-md font-normal">
              <tr>
                <th className="border border-gray-300 bg-slate-200">Data</th>
                <th className="border border-gray-300 bg-slate-200">
                  Alterações
                </th>
                <th className="border border-gray-300 bg-slate-200">
                  Alterado por
                </th>
                <th className="border border-gray-300 bg-slate-200">
                  Observação/Motivo
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr>
                <td className="h-16 border border-gray-300 bg-slate-200">
                  21/06/2024
                </td>
                <td className="border border-gray-300 bg-slate-200">
                  Informações pessoais
                </td>
                <td className="border border-gray-300 bg-slate-200">
                  Administrador 01
                </td>
                <td className="max-w-80 p-3 border border-gray-300 bg-slate-200">
                  Email de cadastro incorretoEmail de cadastro incorretoEmail de
                  cadastro incorretoEmail de cadastro incorreto incorreto
                </td>
              </tr>
            </tbody>
          </table>
        </main>

        <Footer />
      </div>
    </div>
  )
}
