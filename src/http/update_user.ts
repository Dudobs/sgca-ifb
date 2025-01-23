const apiURL = import.meta.env.VITE_API_URL
const apiKey = import.meta.env.VITE_API_KEY

interface updateUserRequest {
  id_usuario: string
  nome: string
  cpf: string
  email: string
  id_tipo_usuario: string
  justificativa: string
  id_admin?: string
}

export async function updateUser({
  id_usuario,
  nome,
  cpf,
  email,
  id_tipo_usuario,
  justificativa,
  id_admin,
}: updateUserRequest) {
  await fetch(`${apiURL}/usuarios/${id_usuario}`, {
    method: 'PUT',
    headers: {
      'X-API-Key': apiKey,
      'ngrok-skip-browser-warning': 'any value',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nome,
      cpf,
      email,
      id_tipo_usuario,
      justificativa,
      id_admin,
    }),
  })
}
