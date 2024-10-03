import { useEffect, useState } from 'react'
import { ChevronLeft, CircleUserRound, LogOut } from 'lucide-react'

import LogoIFBAccess from '../../assets/images/Logo-ifb-access.svg'
import { NavbarLinks } from './navbar-links'
import { useLocation } from 'react-router-dom'

export function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState(() => {
    const savedState = localStorage.getItem('navbarOpen')
    return savedState === 'true'
  })

  useEffect(() => {
    localStorage.setItem('navbarOpen', toggleNavbar.toString())
  }, [toggleNavbar])

  function handleToggleNavbar() {
    setToggleNavbar(prev => !prev)
  }

  const location = useLocation()

  return toggleNavbar ? (
    <div className="h-screen w-80 sticky top-0 left-0 py-8 px-5 rounded-r-3xl bg-green-600 text-zinc-50 uppercase">
      <button
        className="absolute top-8 right-2.5 z-10 hover:bg-green-700"
        type="button"
        onClick={handleToggleNavbar}
      >
        <ChevronLeft className="size-5" />
      </button>

      <div className="mb-10 flex items-end gap-2">
        <img className="size-16" src={LogoIFBAccess} alt="Logo do IFB Access" />
        <span className="font-bold text-lg uppercase">
          Sistema de Gerenciamento
        </span>
      </div>

      <div className="mb-4 flex items-center gap-2">
        <a
          href="/admin"
          className={
            location.pathname === '/admin'
              ? 'flex items-center text-emerald-800 '
              : 'flex items-center  hover:text-emerald-200'
          }
        >
          <CircleUserRound className="size-11 mr-[-40px]" strokeWidth={1} />
          <div
            className={
              location.pathname === '/admin'
                ? 'w-52 h-10 border-y border-r border-emerald-800 rounded-full flex items-center'
                : 'w-52 h-10 border-y border-r border-zinc-50 rounded-full flex items-center hover:border-emerald-200'
            }
          >
            <p className="ml-12 font-semibold">Admin</p>
          </div>
        </a>
        <a href="/">
          <LogOut className="text-red-700 size-8 hover:text-red-600" />
        </a>
      </div>

      <div className="mb-8 border-t border-zinc-50 w-full" />

      <NavbarLinks navbarIsOpen />
    </div>
  ) : (
    <div className="h-screen w-[5.125rem] sticky top-0 bottom-0 left-0 py-8 px-5 rounded-r-3xl bg-green-600 text-zinc-50 uppercase flex flex-col items-center gap-6">
      <button
        className="absolute top-8 right-0 z-10 rotate-180 hover:bg-green-700"
        type="button"
        onClick={handleToggleNavbar}
      >
        <ChevronLeft className="size-5" />
      </button>

      <img className="size-10" src={LogoIFBAccess} alt="Logo do IFB Access" />

      <div className="flex flex-col items-center gap-2">
        <a
          href="/admin"
          className={
            location.pathname === '/admin'
              ? 'flex items-center text-emerald-800  hover:text-emerald-100'
              : 'flex items-center  hover:text-emerald-100'
          }
        >
          <CircleUserRound className="size-11" strokeWidth={1} />
        </a>
        <a href="/">
          <LogOut className="text-red-700 size-8 hover:text-red-600" />
        </a>
      </div>

      <div className="border-t border-zinc-50 w-full" />

      <NavbarLinks navbarIsOpen={false} />
    </div>
  )
}
