interface createUserRequst {
  cpf: string
  email: string
  matricula: string
  id_tipo_usuario: string
  nome: string
}

const apiURL = import.meta.env.VITE_API_URL
const apiKey = import.meta.env.VITE_API_KEY

export async function createUser({
  cpf,
  email,
  matricula,
  id_tipo_usuario,
  nome,
}: createUserRequst) {
  await fetch(`${apiURL}/usuarios`, {
    method: 'POST',
    headers: {
      'X-API-Key': apiKey,
      'ngrok-skip-browser-warning': 'any value',
      // Define o cabeçalho da requisição, indicando que o corpo será no formato JSON
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // Converte o objeto com os dados para uma string JSON e o envia no corpo da requisição
      cpf,
      email,
      matricula,
      id_tipo_usuario,
      nome,
    }),
  })
}
