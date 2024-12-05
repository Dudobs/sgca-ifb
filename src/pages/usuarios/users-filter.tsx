import { useQuery } from '@tanstack/react-query'
import { Search } from 'lucide-react'
import { getUSersType } from '../../http/get_tipos_usuarios'

export function UsersFilter() {
  const { data = [] } = useQuery({
    queryKey: ['usersType'],
    queryFn: getUSersType,
    staleTime: 1000 * 60, // 60 seconds
  })

  return (
    <div className="flex items-center gap-3">
      <div className="px-3 h-8 w-72 border border-zinc-700 rounded-lg flex items-center gap-3">
        <Search className="size-4 text-green-500" />
        <input
          id="search-query"
          name="search-query"
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
        {data.map(tipo_usuario => {
          return (
            <option
              key={tipo_usuario.id_tipo_usuario}
              value={tipo_usuario.id_tipo_usuario}
            >
              {tipo_usuario.tipo_usuario}
            </option>
          )
        })}
      </select>

      <select
        id="access-status"
        name="access-status"
        className="h-8 py-0 rounded-md border-zinc-700 shadow-sm focus:border-green-300 text-sm text-zinc-500 focus:ring-1 focus:ring-green-200 focus:ring-opacity-50"
      >
        <option value={''} className="text-zinc-300">
          Status de acesso
        </option>
        <option value={1} className="text-zinc-950">
          Ativo
        </option>
        <option value={0} className="text-zinc-950">
          Inativo
        </option>
      </select>
    </div>
  )
}
