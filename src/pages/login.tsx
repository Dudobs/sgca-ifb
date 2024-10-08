import { useNavigate } from 'react-router-dom'

import LogoIFBAccess from '../assets/Logo-ifb-access.svg'
import { Label } from '../components/form/label'
import { Input } from '../components/form/input'
import { LogoIFB } from '../components/logo-ifb'

export function Login() {
  const navigate = useNavigate()

  function handleSignIn() {
    navigate('/home')
  }

  return (
    <div className="min-h-screen px-32 py-20 bg-gradient-to-br from-teal-950 to-emerald-700 flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <LogoIFB />
        <p className="text-zinc-50 text-4xl font-semibold uppercase">
          Sistema de Gerenciamento
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="px-32 py-8 bg-teal-800 rounded-3xl flex flex-col justify-center items-center gap-8">
          <img src={LogoIFBAccess} alt="Logo do IFB Access" />
          <form
            action=""
            onSubmit={handleSignIn}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col">
              <Label htmlFor="username" className="text-zinc-50">
                Usuário:
              </Label>
              <Input
                id="username"
                className="px-4 w-80 h-14 bg-zinc-50 border rounded-lg outline-none text-md focus-visible:border-emerald-500 focus-visible:ring-1 ring-zinc-500/10"
              />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="password" className="text-zinc-50">
                Senha:
              </Label>
              <Input
                id="password"
                type="password"
                className="px-4 w-80 h-14 bg-zinc-50 border rounded-lg outline-none text-md focus-visible:border-emerald-500 focus-visible:ring-1"
              />
            </div>
            <button
              type="submit"
              className="px-4 w-80 h-14 bg-emerald-400 rounded-full text-zinc-950 text-lg hover:bg-emerald-300"
            >
              Acessar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
