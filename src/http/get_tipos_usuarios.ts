type usersTypeResponse = {
    id_tipo_usuario: number
    tipo_usuario: string
}[]
  
  export async function getUSersType(): Promise<usersTypeResponse> {
    const response = await fetch('http://localhost:5000/tipos_usuarios', {
      method: 'GET',
      headers: {
        'X-API-Key': '12345',
      },
    })
    const usersTypeData = await response.json()
    console.log(usersTypeData)
  
    return usersTypeData
  }
  