import { faker } from '@faker-js/faker'
import dayjs from 'dayjs'

export function generateRegistries() {
  return Array.from({ length: 128 }).map((_, i) => {
    const FakerDatetime = faker.date.recent({ days: 30 })
    const date = dayjs(FakerDatetime).format('DD/MM/YYYY')
    const time = dayjs(FakerDatetime).format('HH:mm')

    return {
      index: i + 1,
      name: faker.person.fullName(),
      cpf: Number(
        faker.number.bigInt({ min: 10000000000n, max: 99999999999n })
      ),
      matricula: Number(
        faker.number.bigInt({ min: 1000000n, max: 999999999999n })
      ),
      date: date,
      time: time,
      accessType: faker.helpers.arrayElement(['Entrada', 'Saída']),
      userType: faker.helpers.arrayElement([
        'Médio integrado',
        'Médio subsequente',
        'Ensino Superior',
        'Servidor',
      ]),
    }
  })
}
