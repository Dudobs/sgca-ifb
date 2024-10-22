type usersResponse = {
  id_usuario: number
  cpf: string
  email: string
  matricula: string
  tipo_usuario: string
  nome: string
  status_acesso: number
}[]

export async function getUSers(): Promise<usersResponse> {
  const response = await fetch('http://10.18.20.100/usuarios', {
    method: 'GET',
    headers: {
      'X-API-Key': '12345',
    },
  })
  const data = await response.json()
  console.log(data)

  return data
}
