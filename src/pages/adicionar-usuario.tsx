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
import { useEffect, useRef } from 'react'
import IMask from 'imask'

const validarCPF = (): boolean => {
  // Fazer validação de CPF

  return true
}

const createUserForm = z.object({
  nome: z.string().min(3, 'O nome deve conter pelo menos 3 caractéres'),
  email: z.string().email('Endereço de email no formato inválido').min(5),
  cpf: z
    .string()
    .min(11, { message: 'CPF deve ter 11 caracteres' })
    .max(11, { message: 'CPF deve ter 11 caracteres' })
    .refine(() => validarCPF(), { message: 'CPF inválido' }),
  matricula: z.coerce
    .string()
    .max(12, 'A matrícula deve ter no máximo 12 caractéres')
    .optional(),
  id_tipo_usuario: z.string().min(1),
  credencial_nfc: z
    .string()
    .optional()
    .refine(
      value => {
        if (!value) return true
        return /^[0-9A-Fa-f]{2}(:[0-9A-Fa-f]{2}){7}$/.test(value)
      },
      {
        message: 'Formato esperado: XX:XX:XX:XX:XX:XX:XX:XX',
      }
    ),
})

type createUserForm = z.infer<typeof createUserForm> // O tipo `createUserForm` é inferido a partir do esquema definido com o Zod. Utilizando `z.infer`, o TypeScript gera um tipo correspondente à estrutura dos dados descrita no esquema `createUserForm` do Zod, garantindo que o tipo esteja sempre sincronizado com a definição de validação.

export function AdicionarUsuario() {
  const { data = [] } = useQuery({
    queryKey: ['usersType'],
    queryFn: getUSersType,
  })

  const { register, handleSubmit, formState, reset, setValue } =
    useForm<createUserForm>({
      resolver: zodResolver(createUserForm),
    })

  const navigate = useNavigate()
  const nfcInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (nfcInputRef.current) {
      const mask = IMask(nfcInputRef.current, {
        mask: 'HH:HH:HH:HH:HH:HH:HH:HH',
        blocks: {
          HH: {
            mask: /^[0-9A-Fa-f]{0,2}$/,
            prepareChar: str => str.toUpperCase(),
          },
        },
      })

      // Sincronizar o valor mascarado com o React Hook Form
      mask.on('accept', () => {
        setValue('credencial_nfc', mask.value || '', { shouldValidate: true })
      })

      return () => mask.destroy()
    }
  }, [setValue])

  async function handleCreateUser({
    nome,
    email,
    cpf,
    matricula,
    id_tipo_usuario,
    credencial_nfc,
  }: createUserForm) {
    console.log('Formulário enviado', {
      nome,
      email,
      cpf,
      matricula,
      id_tipo_usuario,
      credencial_nfc,
    })
    try {
      await createUser({
        nome,
        email,
        cpf,
        matricula,
        id_tipo_usuario,
        credencial_nfc,
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
              {formState.errors.nome && (
                <p className="text-red-400 text-xs mt-1">
                  {formState.errors.nome.message}
                </p>
              )}
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
              {formState.errors.email && (
                <p className="text-red-400 text-xs mt-1">
                  {formState.errors.email.message}
                </p>
              )}
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
              {formState.errors.cpf && (
                <p className="text-red-400 text-xs mt-1">
                  {formState.errors.cpf.message}
                </p>
              )}
            </Field>

            <Field className="w-full">
              <Label htmlFor="matricula" label={'Matrícula:'} />
              <Input
                type="number"
                id="matricula"
                {...register('matricula')}
                autoComplete="off"
                defaultValue={''}
                className="w-full h-9"
              />
              {formState.errors.matricula && (
                <p className="text-red-400 text-xs mt-1">
                  {formState.errors.matricula.message}
                </p>
              )}
            </Field>

            <Field className="w-full">
              <Label
                htmlFor="credencial_nfc"
                label={'Credencial NFC:'}
                isRequired={false}
              />
              <Input
                id="credencial_nfc"
                {...register('credencial_nfc')}
                autoComplete="off"
                className="w-full h-9"
                placeholder="Apenas letras e números"
                ref={nfcInputRef}
              />
              {formState.errors.credencial_nfc && (
                <p className="text-red-400 text-xs mt-1 truncate">
                  {formState.errors.credencial_nfc.message}
                </p>
              )}
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
