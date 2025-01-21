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

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<Omit<
    TokenResponse,
    'error' | 'error_description' | 'error_uri'
  > | null>(null)

  const [profile, setProfile] = useState<GoogleUserProfile | null>(null)

  // Recupera o usuário do localStorage no carregamento
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser)) // Converte o usuário do localStorage para o formato correto
    }

    const storedProfile = localStorage.getItem('profile')
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile)) // Converte o usuário do localStorage para o formato correto
    }
  }, [])

  // Salva o usuário no localStorage sempre que o estado `user` mudar
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    }

    if (profile) {
      localStorage.setItem('profile', JSON.stringify(profile))
    }
  }, [user, profile])

  const login = useGoogleLogin({
    onSuccess: codeResponse => {
      setUser(codeResponse)
    },
    onError: error => console.log('Login Failed:', error),
  })

  const logOut = () => {
    googleLogout()
    setUser(null) // Use navigate to redirect to login
    localStorage.removeItem('user') // Remove o usuário do localStorage
    localStorage.removeItem('profile') // Remove os dados do perfil do usuário do localStorage
  }

  console.log('Profile: ', profile)

  return (
    <AuthContext.Provider
      value={{ user, setUser, profile, setProfile, login, logOut }}
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
