import { type CredentialResponse, GoogleLogin } from '@react-oauth/google'

export function GoogleSignIn() {
  const responseMessage = (response: CredentialResponse) => {
    console.log(response)
  }
  const errorMessage = (error?: () => void) => {
    console.log('Erro no login: ', error)
  }
  return (
    <div>
      <h2>React Google Login</h2>
      <br />
      <br />
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  )
}
