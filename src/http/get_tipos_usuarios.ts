type usersTypeResponse = {
  id_tipo_usuario: number
  tipo_usuario: string
}[]

const apiURL = import.meta.env.VITE_API_URL
const apiKey = import.meta.env.VITE_API_KEY

export async function getUSersType(): Promise<usersTypeResponse> {
  const response = await fetch(`${apiURL}/tipos_usuarios`, {
    method: 'GET',
    headers: {
      'X-API-Key': apiKey,
      'ngrok-skip-browser-warning': 'any value',
    },
  })

  const usersTypeData = await response.json()
  console.log(usersTypeData)

  return usersTypeData
}
