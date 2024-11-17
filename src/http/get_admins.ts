type adminsResponse = {
    id_usuario: number
    cpf: string
    email: string
    matricula: string
    tipo_usuario: string
    nome: string
    status_acesso: number
  }

const apiURL = import.meta.env.VITE_API_URL
const apiKey = import.meta.env.VITE_API_KEY

export async function getAdmins(): Promise<adminsResponse[]> {
    const response = await fetch(`${apiURL}/admins`, {
        method: 'GET',
        headers: {
            'X-API-Key': apiKey,
            'ngrok-skip-browser-warning': 'any value',
        }
    })
    const data = await response.json()

    return data
}