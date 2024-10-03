import { Navbar } from '../components/navbar/navbar'
import { Footer } from '../components/footer'

export function Registros() {
  return (
    <div className="flex gap-10">
      <Navbar />

      <div className="pt-8 pr-10 flex flex-col justify-between gap-8">
        <main className="flex flex-col gap-4">
          <h1 className="p-3 font-bold text-3xl">Registros</h1>
          <div className="border border-zinc-700 rounded-lg">
            <table className="text-center min-w-[79rem]">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="p-2 text-start">N°</th>
                  <th>Nome</th>
                  <th>CPF</th>
                  <th>Matrícula</th>
                  <th>Data/Hora</th>
                  <th>Tipo de acesso</th>
                  <th>Tipo de usuário</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 15 }).map((_, i) => {
                  return (
                    <tr
                      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                      key={i}
                      className={
                        i % 2 === 0
                          ? 'h-10 border-zinc-700'
                          : 'h-10 border-zinc-700 bg-zinc-200'
                      }
                    >
                      <td className="px-2 text-start">0001</td>
                      <td>Eduardo Vieira Campos</td>
                      <td>000.000.181-14</td>
                      <td>2220000000</td>
                      <td>02/10/24 ás 16:00</td>
                      <td>Entrada</td>
                      <td>Graduação</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
