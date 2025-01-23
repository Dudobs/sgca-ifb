type adminResponse = {
  admin_id: string
  name: string
  email: string
}

const apiURL = import.meta.env.VITE_API_URL
const apiKey = import.meta.env.VITE_API_KEY

export async function checkUserIsAdmin(email: string): Promise<adminResponse> {
  const url = new URL(`${apiURL}/login`)

  if (email) {
    url.searchParams.set('email', email)
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'X-API-Key': apiKey,
      'ngrok-skip-browser-warning': 'any value',
    },
  }).then(response => {
    if (!response.ok) {
      alert('Usuário não encontrado ou sem as devidas permissões')
      throw Error(response.statusText)
    }
    return response
  })

  const data = await response.json()

  const adminData: adminResponse = {
    admin_id: data[0],
    name: data[1],
    email: data[2],
  }

  return adminData
}
