const apiURL = import.meta.env.VITE_API_URL
const apiKey = import.meta.env.VITE_API_KEY

export async function updateAccessStatus({
  id_usuario,
  id_admin,
  status_acesso,
  justificativa,
}: {
  id_usuario: string
  id_admin: string
  status_acesso: boolean
  justificativa: string
}) {
  await fetch(`${apiURL}/usuarios/${id_usuario}/alterar_status_acesso`, {
    method: 'PUT',
    headers: {
      'X-API-Key': apiKey,
      'ngrok-skip-browser-warning': 'any value',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id_admin, status_acesso, justificativa }),
  })
}
