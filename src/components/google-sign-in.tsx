import { type CredentialResponse, GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../hooks/AuthContext'
import { jwtDecode } from 'jwt-decode'

type DecodedToken = {
  email: string
  name: string
  picture: string
  sub: string // Google user ID
}

export function GoogleSignIn() {
  const navigate = useNavigate()
  const { setUser, setProfile } = useAuth() // Modifique o contexto para expor esses setters

  const responseMessage = (response: CredentialResponse) => {
    if (response.credential) {
      // Decodificar o token JWT
      const decoded: DecodedToken = jwtDecode(response.credential)

      // Atualizar o estado global com o token decodificado
      setUser({
        access_token: response.credential,
        expires_in: 3600, // Estime ou substitua com valor correto
        scope:
          'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email',
        token_type: 'Bearer',
        prompt: 'select_account',
      })

      // Atualizar o profile com os dados decodificados
      setProfile({
        id: decoded.sub,
        email: decoded.email,
        verified_email: true, // Aqui você pode alterar para algo mais dinâmico, se necessário
        name: decoded.name,
        given_name: decoded.name.split(' ')[0], // Pegue o primeiro nome, se necessário
        family_name: decoded.name.split(' ')[1] || '',
        picture: decoded.picture,
      })

      console.log('decoded: ', decoded)

      navigate('/')
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
