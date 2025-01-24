import type { TokenResponse } from '@react-oauth/google'
import { useAuth } from '../hooks/AuthContext'

type usersResponse = {
  id_usuario: string
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
  status_acesso: string,
  access_token: string | undefined,
  handleLogout: () => void
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

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'X-API-Key': apiKey,
        'ngrok-skip-browser-warning': 'any value',
      },
    })

    if (response.status === 401) {
      handleLogout()
      throw new Error('Sessão expirada. Por favor, faça login novamente.')
    }

    if (!response.ok) {
      throw new Error('Erro ao buscar usuários')
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}
