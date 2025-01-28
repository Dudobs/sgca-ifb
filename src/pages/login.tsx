import LogoIFBAccess from '../assets/Logo-ifb-access.svg'
import { LogoIFB } from '../assets/logo-ifb'
import { GoogleSignIn } from '../components/google-sign-in'
import { useAuth } from '../hooks/AuthContext'

export function Login() {
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
          
          <div className="flex justify-center">
            <button type="button" onClick={login}>
              <GoogleSignIn />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
