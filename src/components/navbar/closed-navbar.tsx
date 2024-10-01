import LogoIFBAccess from '../../assets/images/Logo-ifb-access.svg'
import {
  CircleUserRound,
  House,
  LogOut,
  TableProperties,
  Users,
} from 'lucide-react'

export function ClosedNavbar() {
  return (
    <div className="flex flex-col items-center gap-6">
      <img className="size-10" src={LogoIFBAccess} alt="Logo do IFB Access" />

      <div className="flex flex-col items-center gap-2">
        <a href="/admins" className="hover:text-emerald-100">
          <CircleUserRound className="size-11" strokeWidth={1} />
        </a>
        <a href="/">
          <LogOut className="text-red-700 size-8 hover:text-red-600" />
        </a>
      </div>

      <div className="border-t border-zinc-50 w-full" />

      <div className="flex flex-col gap-2 font-medium">
        <a
          href="/home"
          className="flex items-center gap-1 text-emerald-800 hover:text-emerald-100"
        >
          <House />
        </a>
        <a
          href="/registros"
          className="flex items-end gap-1 hover:text-emerald-100"
        >
          <TableProperties />
        </a>
        <a
          href="/usuarios"
          className="flex items-end gap-1 hover:text-emerald-100"
        >
          <Users />
        </a>
      </div>
    </div>
  )
}
