import { faker } from '@faker-js/faker'

export function generateAdmins() {
  return Array.from({ length: 4 }).map((_, i) => {
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
      accessStatus: faker.helpers.arrayElement(['Ativo']),
      userType: faker.helpers.arrayElement(['Servidor']),
    }
  })
}
