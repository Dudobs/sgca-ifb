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

export async function getRegistries(
  searchParams?: Record<string, string>
): Promise<registriesResponse[]> {
  const url = new URL(`${apiURL}/registros`)

  // Adiciona os filtros na URL
  if (searchParams) {
    for (const [key, value] of Object.entries(searchParams)) {
      if (value) {
        url.searchParams.set(key, value);
      }
    }    
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'X-API-Key': apiKey,
      'ngrok-skip-browser-warning': 'any value',
    },
  })
  const data = await response.json()

  return data
}
