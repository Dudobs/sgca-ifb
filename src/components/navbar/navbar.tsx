import { useEffect, useState } from 'react'
import { ChevronLeft, CircleUserRound, LogOut } from 'lucide-react'

import { NavbarLinks } from './navbar-links'
import { Link, useLocation } from 'react-router-dom'
import { Header } from '../header'
import { useAuth } from '../../hooks/AuthContext'

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

  const { profile, logOut } = useAuth()

  function handleLogout() {
    const result = confirm('Deseja sair da sua conta?')
    if (result) {
      logOut()
    } else {
      return
    }
  }

  return toggleNavbar ? (
    <div className="h-screen min-w-80 max-w-80 sticky top-0 left-0 z-10 py-8 px-5 rounded-r-3xl bg-green-600 text-zinc-50 uppercase">
      <button
        className="absolute top-8 right-2.5 z-10 hover:bg-green-700"
        type="button"
        onClick={handleToggleNavbar}
      >
        <ChevronLeft className="size-5" />
      </button>

      <Header navbarIsOpen />

      <div className="mb-4 flex items-center gap-2">
        <Link
          to={'/admin'}
          className={
            location.pathname === '/admin'
              ? 'flex items-center text-emerald-800'
              : 'flex items-center  hover:text-emerald-200'
          }
        >
          {profile?.picture ? (
            <img
              src={profile.picture}
              className={
                location.pathname === '/admin'
                  ? 'mr-[-40px] size-10 rounded-full border border-emerald-800'
                  : 'mr-[-40px] size-10 rounded-full border border-white'
              }
              alt="Foto de perfil do administrador"
              referrerPolicy="no-referrer"
            />
          ) : (
            <CircleUserRound className="size-11 mr-[-40px]" strokeWidth={1} />
          )}
          <div
            className={
              location.pathname === '/admin'
                ? 'w-52 h-10 border-y border-r border-emerald-800 rounded-full flex items-center'
                : 'w-52 h-10 border-y border-r border-zinc-50 rounded-full flex items-center hover:border-emerald-200'
            }
          >
            <p className="ml-11 font-semibold truncate">
              {profile
                ? `${profile.given_name} ${profile.family_name}`
                : 'Admin'}
            </p>
          </div>
        </Link>
        <Link to={'/login'} onClick={handleLogout}>
          <LogOut className="text-red-700 size-8 hover:text-red-600" />
        </Link>
      </div>

      <div className="mb-8 border-t border-zinc-50 w-full" />

      <NavbarLinks navbarIsOpen />
    </div>
  ) : (
    <div className="h-screen w-[5.125rem] sticky top-0 left-0 z-10 py-8 px-5 rounded-r-3xl bg-green-600 text-zinc-50 uppercase flex flex-col items-center gap-6">
      <button
        className="absolute top-8 right-0 z-10 rotate-180 hover:bg-green-700"
        type="button"
        onClick={handleToggleNavbar}
      >
        <ChevronLeft className="size-5" />
      </button>

      <Header navbarIsOpen={false} className="mb-0" />

      <div className="flex flex-col items-center gap-2">
        <Link
          to={'/admin'}
          className={
            location.pathname === '/admin'
              ? 'flex items-center text-emerald-800'
              : 'flex items-center  hover:text-emerald-100'
          }
        >
          {profile?.picture ? (
            <img
              src={profile.picture}
              className={
                location.pathname === '/admin'
                  ? 'w-10 rounded-full border border-emerald-800'
                  : 'w-10 rounded-full border border-white'
              }
              alt="Foto de perfil do administrador"
              referrerPolicy="no-referrer"
            />
          ) : (
            <CircleUserRound className="size-11" strokeWidth={1} />
          )}
        </Link>
        <Link to={'/login'} onClick={handleLogout}>
          <LogOut className="text-red-700 size-8 hover:text-red-600" />
        </Link>
      </div>

      <div className="border-t border-zinc-50 w-full" />

      <NavbarLinks navbarIsOpen={false} />
    </div>
  )
}
