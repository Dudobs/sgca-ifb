import { Button } from '../components/button'
import { Footer } from '../components/footer'
import { Field } from '../components/form/field'
import { Form } from '../components/form/form'
import { Input } from '../components/form/input'
import { Label } from '../components/form/label'
import { Select } from '../components/form/select'
import { Navbar } from '../components/navbar/navbar'
import { createUser } from '../http/add-user'
import { getUSersType } from '../http/get_tipos_usuarios'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'

const createUserForm = z.object({
  nome: z.string().min(1),
  email: z.string().min(1), // Utiliza o método `coerce.number()` para converter o valor recebido dos inputs do tipo rádio (que são strings) para um número.
  cpf: z.string().min(1, 'Informe a atividade que deseja realizar'),
  matricula: z.string().min(1),
  id_tipo_usuario: z.string().min(1),
})

type createUserForm = z.infer<typeof createUserForm> // O tipo `createUserForm` é inferido a partir do esquema definido com o Zod. Utilizando `z.infer`, o TypeScript gera um tipo correspondente à estrutura dos dados descrita no esquema `createUserForm` do Zod, garantindo que o tipo esteja sempre sincronizado com a definição de validação.

export function AdicionarUsuario() {
  const { data = [] } = useQuery({
    queryKey: ['usersType'],
    queryFn: getUSersType,
  })

  const { register, handleSubmit, reset } = useForm<createUserForm>({
    resolver: zodResolver(createUserForm),
  })

  const navigate = useNavigate()

  async function handleCreateUser({
    nome,
    email,
    cpf,
    matricula,
    id_tipo_usuario,
  }: createUserForm) {
    console.log('Formulário enviado', {
      nome,
      email,
      cpf,
      matricula,
      id_tipo_usuario,
    })
    try {
      await createUser({
        nome,
        email,
        cpf,
        matricula,
        id_tipo_usuario,
      })
      alert('Usuário criado com sucesso!')
    } catch (error) {
      console.error('Erro ao criar usuário:', error)
    }

    reset()
    navigate('/usuarios')
  }

  return (
    <div className="flex gap-10">
      <Navbar />

      <div className="pt-8 pr-10 flex flex-col justify-between gap-8">
        <main className="flex flex-col gap-4">
          <h1 className="p-3 font-bold text-3xl">Adicionar Usuário</h1>

          <Form
            action="/usuarios"
            onSubmit={handleSubmit(handleCreateUser)}
            className="flex flex-col gap-4 rounded-lg"
          >
            <span className="absolute top-[-0.75rem] left-3 text-lg">
              INFORMAÇÕES PESSOAIS
            </span>

            <Field className="w-full">
              <Label htmlFor="nome" label={'Nome:'} isRequired />
              <Input
                type="text"
                id="nome"
                autoComplete="off"
                required
                className="w-full h-9"
                {...register('nome')}
              />
            </Field>

            <Field className="w-full">
              <Label htmlFor="email" label={'Email:'} isRequired />
              <Input
                type="text"
                id="email"
                autoComplete="off"
                required
                className="w-full h-9"
                {...register('email')}
              />
            </Field>

            <Field className="w-full">
              <Label htmlFor="cpf" label={'CPF:'} isRequired />
              <Input
                id="cpf"
                {...register('cpf')}
                autoComplete="off"
                required
                className="w-full h-9"
              />
            </Field>

            <Field className="w-full">
              <Label htmlFor="matricula" label={'Matrícula:'} />
              <Input
                id="matricula"
                {...register('matricula')}
                autoComplete="off"
                className="w-full h-9"
              />
            </Field>

            <Field className="w-full">
              <Label
                htmlFor="tipo_usuario"
                label={'Tipo de usuário:'}
                isRequired
              />
              <Select
                id="tipo_usuario"
                {...register('id_tipo_usuario')}
                required
                className="h-9"
              >
                {data.map(tipo_usuario => {
                  return (
                    <option
                      key={tipo_usuario.id_tipo_usuario}
                      value={tipo_usuario.id_tipo_usuario}
                    >
                      {tipo_usuario.tipo_usuario}
                    </option>
                  )
                })}
              </Select>
            </Field>

            <div className="w-full flex items-center justify-between gap-4">
              <Button type="submit" size="md" className="flex-1">
                Salvar
              </Button>
              <Button
                type="reset"
                variant="secondary"
                size="md"
                className="flex-1"
              >
                Redefinir
              </Button>
            </div>
          </Form>
        </main>

        <Footer />
      </div>
    </div>
  )
}
