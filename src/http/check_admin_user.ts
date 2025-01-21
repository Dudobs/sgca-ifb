const apiURL = import.meta.env.VITE_API_URL
const apiKey = import.meta.env.VITE_API_KEY

export async function checkAdminUser(email: string) {
  const url = new URL(`${apiURL}/usuarios`)

  if (email) {
    url.searchParams.set('email', email)
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'X-API-Key': apiKey,
      'ngrok-skip-browser-warning': 'any value',
    },
  })

  const data = await response.json()

  return data
}
