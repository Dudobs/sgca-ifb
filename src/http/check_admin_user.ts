const apiURL = import.meta.env.VITE_API_URL
const apiKey = import.meta.env.VITE_API_KEY

export async function checkUserIsAdmin(email: string): Promise<boolean> {
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
      alert('Acesso restrito apenas a administradores')
      throw Error(response.statusText)
    }
    return response
  })

  const data = await response.json()

  return data && true
}
