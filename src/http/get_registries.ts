type registriesResponse = {
  id_registro: number
  nome: string
  cpf: string
  matricula: string
  hora_acesso: string
  tipo_acesso: boolean
  tipo_usuario: string
}

const apiURL = import.meta.env.VITE_API_URL
const apiKey = import.meta.env.VITE_API_KEY

export async function getRegistries(): Promise<registriesResponse[]> {
  const response = await fetch(`${apiURL}/registros`, {
    method: 'GET',
    headers: {
      'X-API-Key': apiKey,
      'ngrok-skip-browser-warning': 'any value',
    },
  })
  const data = await response.json()

  return data
}
