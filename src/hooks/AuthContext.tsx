import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import {
  googleLogout,
  useGoogleLogin,
  type TokenResponse,
} from '@react-oauth/google'

type AuthContextType = {
  user: Omit<TokenResponse, 'error' | 'error_description' | 'error_uri'> | null
  setUser: React.Dispatch<
    React.SetStateAction<Omit<
      TokenResponse,
      'error' | 'error_description' | 'error_uri'
    > | null>
  >
  profile?: GoogleUserProfile | null
  setProfile: React.Dispatch<React.SetStateAction<GoogleUserProfile | null>>
  adminProfile: AdminProfile | undefined
  setAdminProfile: React.Dispatch<React.SetStateAction<AdminProfile>>
  login: () => void
  logOut: () => void
}

type GoogleUserProfile = {
  id: string
  email: string
  verified_email: boolean
  name: string
  given_name: string
  family_name: string
  picture: string
}

type AdminProfile = {
  admin_id: string
  name: string
  email: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Dados de token e credencial do usuário de seua conta Google
  const [user, setUser] = useState<Omit<
    TokenResponse,
    'error' | 'error_description' | 'error_uri'
  > | null>(null)

  // Dados do usuário da API do Google - Nome, email, foto...
  const [profile, setProfile] = useState<GoogleUserProfile | null>(null)

  // Dados do administrador que serão usados para realizar operações dentro do sistema, como adicionar uma observação - Id, nome, email...
  const defaultAdminProfile: AdminProfile = {
    admin_id: '',
    name: '',
    email: '',
  }

  const [adminProfile, setAdminProfile] =
    useState<AdminProfile>(defaultAdminProfile)

  // Recupera o usuário do localStorage no carregamento
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser)) // Converte o usuário do localStorage para o formato correto
    }

    const storedProfile = localStorage.getItem('profile')
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile))
    }

    const storedAdminProfile = localStorage.getItem('adminProfile')
    if (storedAdminProfile) {
      setAdminProfile(JSON.parse(storedAdminProfile))
    }
  }, [])

  // Salva o usuário no localStorage sempre que o estado `user`, `profile` ou `adminProfile` mudar
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    }

    if (profile) {
      localStorage.setItem('profile', JSON.stringify(profile))
    }

    if (adminProfile) {
      localStorage.setItem('adminProfile', JSON.stringify(adminProfile))
    }
  }, [user, profile, adminProfile])

  // Funções para login e logout
  const login = useGoogleLogin({
    onSuccess: codeResponse => {
      setUser(codeResponse)
    },
    onError: error => console.log('Login Failed:', error),
  })

  const logOut = () => {
    const result = confirm('Deseja sair da sua conta?')
    if (result) {
      googleLogout()
      setUser(null)
      setProfile(null)
      setAdminProfile(defaultAdminProfile)
      localStorage.removeItem('user') // Remove o usuário do localStorage
      localStorage.removeItem('profile') // Remove os dados do perfil do usuário do localStorage
      localStorage.removeItem('adminProfile')
    } else {
      return
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        profile,
        setProfile,
        adminProfile,
        setAdminProfile,
        login,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
