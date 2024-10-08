import { faker } from '@faker-js/faker'

export function generateUsers() {
  return Array.from({ length: 69 }).map((_, i) => {
    return {
      index: i + 1,
      name: faker.person.fullName(),
      email: faker.internet.email().toLocaleLowerCase(),
      cpf: Number(
        faker.number.bigInt({ min: 10000000000n, max: 99999999999n })
      ),
      matricula: Number(
        faker.number.bigInt({ min: 1000000n, max: 999999999999n })
      ),
      accessStatus: faker.helpers.arrayElement(['Ativo', 'Inativo', 'Ativo']),
      userType: faker.helpers.arrayElement([
        'Médio integrado',
        'Médio subsequente',
        'Ensino Superior',
        'Servidor',
      ]),
    }
  })
}
