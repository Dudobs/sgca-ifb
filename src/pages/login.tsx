import { useNavigate } from 'react-router-dom'

import LogoIFBAccess from '../assets/Logo-ifb-access.svg'
import { Label } from '../components/form/label'
import { Input } from '../components/form/input'
import { LogoIFB } from '../assets/logo-ifb'
import { GoogleSignIn } from '../components/google-sign-in'
import { useAuth } from '../hooks/AuthContext'

export function Login() {
  const navigate = useNavigate()

  function handleSignIn() {
    navigate('/')
  }

  const { login } = useAuth()

  return (
    <div className="min-h-screen px-32 py-20 bg-gradient-to-br from-teal-950 to-emerald-700 flex flex-col justify-around">
      <div className="flex justify-around items-center">
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
            {/* <div className="flex flex-col">
              <Label
                htmlFor="username"
                label="Usuário:"
                className="text-zinc-50 text-md"
              />
              <Input
                id="username"
                name="username"
                autoComplete="on"
                className="px-4 w-80 h-14 bg-zinc-50 border rounded-lg outline-none text-md focus-visible:border-emerald-500 focus-visible:ring-1 ring-zinc-500/10"
              />
            </div>
            <div className="flex flex-col">
              <Label
                htmlFor="password"
                label="Senha:"
                className="text-zinc-50 text-md"
              />
              <Input
                id="password"
                name="password"
                type="password"
                className="px-4 w-80 h-14 bg-zinc-50 border rounded-lg outline-none text-md focus-visible:border-emerald-500 focus-visible:ring-1"
              />
            </div>
            <button
              type="submit"
              className="px-4 w-80 h-14 bg-emerald-400 rounded-full text-zinc-950 text-lg hover:bg-emerald-300"
            >
              Acessar
            </button> */}

            <div className="flex justify-center">
              <button type="button" onClick={login}>
                <GoogleSignIn />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
