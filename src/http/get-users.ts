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

export async function getUSers(): Promise<usersResponse> {
  const response = await fetch(`${apiURL}/usuarios`, {
    method: 'GET',
    headers: {
      'X-API-Key': apiKey,
      'ngrok-skip-browser-warning': 'any value',
    },
  })
  const data = await response.json()

  return data
}
