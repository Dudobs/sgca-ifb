interface createUserRequst {
  cpf: string
  email: string
  matricula: string
  tipo_usuario: string
  nome: string
  credencial_nfc: string
}

export async function createUser({
  cpf,
  email,
  matricula,
  tipo_usuario,
  nome,
  credencial_nfc,
}: createUserRequst) {
  await fetch('http://10.18.20.100/usuarios', {
    method: 'POST',
    headers: {
      // Define o cabeçalho da requisição, indicando que o corpo será no formato JSON
      'X-API-Key': '12345',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // Converte o objeto com o 'goalId' para uma string JSON e o envia no corpo da requisição
      cpf,
      email,
      matricula,
      tipo_usuario,
      nome,
      credencial_nfc,
    }),
  })
}
