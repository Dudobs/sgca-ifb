import { type CredentialResponse, GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../hooks/AuthContext'
import { jwtDecode } from 'jwt-decode'
import { checkUserIsAdmin } from '../http/check_admin_user'

type DecodedToken = {
  email: string
  name: string
  picture: string
  sub: string // Google user ID
}

export function GoogleSignIn() {
  const navigate = useNavigate()
  const { setUser, setProfile, setAdminProfile } = useAuth()

  const responseMessage = async (response: CredentialResponse) => {
    if (response.credential) {
      // Decodificar o token JWT
      const decoded: DecodedToken = jwtDecode(response.credential)

      // Atualizar o estado profile com os dados do usuário decodificados
      setProfile({
        id: decoded.sub,
        email: decoded.email,
        verified_email: true,
        name: decoded.name,
        given_name: decoded.name.split(' ')[0],
        family_name: decoded.name.split(' ')[1] || '',
        picture: decoded.picture,
      })

      // Verifica se o usuário é um administrador

      const { admin_id, name, email } = await checkUserIsAdmin(decoded.email)

      if (admin_id) {
        // Atualizar o estado global com o token decodificado
        setUser({
          access_token: response.credential,
          expires_in: 3600, // 1 hora para expirar o token
          scope:
            'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
          token_type: 'Bearer',
          prompt: 'select_account',
        })

        setAdminProfile({
          admin_id: admin_id,
          name: name,
          email: email,
        })

        navigate('/')
      } else {
        alert('Você não tem permissão para acessar esta aplicação.')
      }
    }
  }

  const errorMessage = (error?: () => void) => {
    console.log('Erro no login: ', error)
  }

  return (
    <div>
      <br />
      <GoogleLogin
        onSuccess={responseMessage}
        onError={errorMessage}
        type="standard"
        shape="pill"
        size="large"
        width="320"
        text="signin_with"
        useOneTap={true}
        ux_mode="popup"
      />
    </div>
  )
}
