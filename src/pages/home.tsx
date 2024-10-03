import { RotateCw } from "lucide-react";
import { Navbar } from "../components/navbar/navbar";
import { Footer } from "../components/footer";

export function Home() {
  return (
    <div className="flex gap-10">
      <Navbar />

      <div className="pt-8 pr-10 flex flex-col justify-between gap-8">
        <main className="flex flex-col gap-3">
          <div className="border border-zinc-700 rounded-lg">
            <h1 className="p-3 font-bold text-3xl border-b border-zinc-700">
              Acessos
            </h1>
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
                          ? "h-10 border-zinc-700"
                          : "h-10 border-zinc-700 bg-zinc-200"
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
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              className="p-2 bg-green-600 rounded-md hover:bg-green-700"
            >
              <RotateCw className="size-5 text-zinc-50" />
            </button>
            <button
              type="button"
              className="w-28 py-2 px-3 bg-green-600 rounded-md text-zinc-50 text-sm font-bold hover:bg-green-700"
            >
              <a href="/registros">Ver mais</a>
            </button>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
