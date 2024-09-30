import LogoIFBAccess from '../assets/images/Logo-ifb-access.svg'
import {
  ChevronLeft,
  CircleUserRound,
  House,
  LogOut,
  TableProperties,
  Users,
} from 'lucide-react'

export function Home() {
  return (
    <div className="h-screen w-80 fixed top-0 left-0 py-8 px-5 rounded-r-3xl bg-green-600 text-zinc-50 uppercase">
      <button
        className="absolute top-8 right-2.5 hover:bg-green-700"
        type="button"
      >
        <ChevronLeft className="" />
      </button>

      <div className="mb-10 flex items-end gap-2">
        <img className="size-16" src={LogoIFBAccess} alt="" />
        <span className="font-bold text-lg uppercase">
          Sistema de Gerenciamento
        </span>
      </div>

      <div className="mb-4 flex items-center gap-2">
        <a href="/admins" className="flex items-center  hover:text-emerald-100">
          <CircleUserRound className="size-11 mr-[-40px]" strokeWidth={1} />
          <div className="w-52 h-10 border-y border-r border-zinc-50 rounded-full flex items-center hover:border-emerald-100">
            <p className="ml-12 font-semibold">Admin</p>
          </div>
        </a>
        <a href="/">
          <LogOut className="text-red-700 size-8 hover:text-red-600" />
        </a>
      </div>

      <div className="mb-8 border-t border-zinc-50 w-full" />

      <div className="flex flex-col gap-2 font-medium">
        <a
          href="/home"
          className="flex items-center gap-1 text-emerald-800 hover:text-emerald-100"
        >
          <House />
          <p>Início</p>
        </a>
        <a
          href="/registros"
          className="flex items-end gap-1 hover:text-emerald-100"
        >
          <TableProperties />
          <p>Registros</p>
        </a>
        <a
          href="/usuarios"
          className="flex items-end gap-1 hover:text-emerald-100"
        >
          <Users />
          <p>Usuários</p>
        </a>
      </div>
    </div>
  )
}
