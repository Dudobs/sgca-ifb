import { useState } from 'react'
import { ChevronLeft } from 'lucide-react'

import { OpenedNavbar } from './opened-navbar'
import { ClosedNavbar } from './closed-navbar'

export function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState(true)

  function handleToggleNavbar() {
    toggleNavbar ? setToggleNavbar(false) : setToggleNavbar(true)
    console.log(toggleNavbar)
  }

  return (
    <div
      className={
        toggleNavbar
          ? 'h-screen w-80 fixed top-0 left-0 py-8 px-5 rounded-r-3xl bg-green-600 text-zinc-50 uppercase'
          : 'h-screen w-[5.125rem] fixed top-0 left-0 py-8 px-5 rounded-r-3xl bg-green-600 text-zinc-50 uppercase'
      }
    >
      <button
        className={
          toggleNavbar
            ? 'absolute top-8 right-2.5 z-10 hover:bg-green-700'
            : 'absolute top-8 right-0 z-10 rotate-180 hover:bg-green-700'
        }
        type="button"
        onClick={handleToggleNavbar}
      >
        <ChevronLeft className="size-5" />
      </button>

      {toggleNavbar ? <OpenedNavbar /> : <ClosedNavbar />}
    </div>
  )
}
