import { Search } from 'lucide-react'

export function UsersFilter() {
  return (
    <div className="flex items-center gap-3">
      <div className="px-3 h-8 w-72 border border-zinc-700 rounded-lg flex items-center gap-3">
        <Search className="size-4 text-green-500" />
        <input
          className="bg-transparent flex-1 outline-none border-0 p-0 focus:border-green-300 text-sm focus:ring-0"
          placeholder="Buscar usuário..."
        />
      </div>

      <select
        id="user-type"
        name="user-type"
        className="h-8 py-0 rounded-md border-zinc-700 shadow-sm focus:border-green-300 text-sm text-zinc-500 focus:ring-1 focus:ring-green-200 focus:ring-opacity-50"
      >
        <option value={''} className="text-zinc-300">
          Tipo de usuário
        </option>
        <option className="text-zinc-950">02</option>
        <option className="text-zinc-950">03</option>
        <option className="text-zinc-950">04</option>
        <option className="text-zinc-950">05</option>
      </select>

      <select
        id="user-type"
        name="user-type"
        className="h-8 py-0 rounded-md border-zinc-700 shadow-sm focus:border-green-300 text-sm text-zinc-500 focus:ring-1 focus:ring-green-200 focus:ring-opacity-50"
      >
        <option value={''} className="text-zinc-300">
          Status de acesso
        </option>
        <option className="text-zinc-950">Ativo</option>
        <option className="text-zinc-950">Inativo</option>
      </select>
    </div>
  )
}
