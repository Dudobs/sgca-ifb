interface addRegisterRequest {
  id_usuario: string
  tipo_acesso: boolean
  id_admin?: string
}

const apiURL = import.meta.env.VITE_API_URL
const apiKey = import.meta.env.VITE_API_KEY

export async function addRegister({
  id_usuario,
  tipo_acesso,
  id_admin,
}: addRegisterRequest) {
  await fetch(`${apiURL}/registrar_acesso_manual`, {
    method: 'POST',
    headers: {
      'X-API-Key': apiKey,
      'ngrok-skip-browser-warning': 'any value',
      // Define o cabeçalho da requisição, indicando que o corpo será no formato JSON
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id_usuario,
      tipo_acesso,
      id_admin,
    }),
  })
}
