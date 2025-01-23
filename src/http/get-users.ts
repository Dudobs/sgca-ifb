type usersResponse = {
  id_usuario: number
  cpf: string
  email: string
  matricula: string
  tipo_usuario: string
  id_tipo_usuario: number
  nome: string
  status_acesso: number
}[]

const apiURL = import.meta.env.VITE_API_URL
const apiKey = import.meta.env.VITE_API_KEY

export async function getUSers(
  nome: string,
  tipo_usuario: string,
  status_acesso: string
): Promise<usersResponse> {
  const url = new URL(`${apiURL}/usuarios`)

  if (nome.length > 0) {
    url.searchParams.set('nome', nome)
  }

  if (tipo_usuario) {
    url.searchParams.set('tipo-usuario', tipo_usuario)
  }

  if (status_acesso) {
    url.searchParams.set('status-acesso', status_acesso)
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'X-API-Key': apiKey,
      'ngrok-skip-browser-warning': 'any value',
    },
  })
  const data = await response.json()
  console.log(data)

  return data
}
