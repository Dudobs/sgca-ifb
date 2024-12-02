type observacoesResponse = {
  id_observacao: number
  observacao: string
  alteracao: string
  admin: string
  created_at: string
}

const apiURL = import.meta.env.VITE_API_URL
const apiKey = import.meta.env.VITE_API_KEY

export async function getObservacoes({
  id_usuario,
}: { id_usuario: number }): Promise<observacoesResponse[]> {
  const response = await fetch(`${apiURL}/usuarios/${id_usuario}/observacoes`, {
    method: 'GET',
    headers: {
      'X-API-Key': apiKey,
      'ngrok-skip-browser-warning': 'any value',
    },
  })
  const data = await response.json()

  return data
}
