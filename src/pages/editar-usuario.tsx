import { useLocation, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '../components/button'
import { Footer } from '../components/footer'
import { Field } from '../components/form/field'
import { Form } from '../components/form/form'
import { Input } from '../components/form/input'
import { Label } from '../components/form/label'
import { Select } from '../components/form/select'
import { Textarea } from '../components/form/textarea'
import { Navbar } from '../components/navbar/navbar'
import { getUSersType } from '../http/get_tipos_usuarios'
import { updateUser } from '../http/update_user'
import { useAuth } from '../hooks/AuthContext'
import { useEffect, useRef } from 'react'
import IMask from 'imask'

const updateUserForm = z.object({
  id_usuario: z.string(),
  nome: z.string().min(3, 'O nome deve conter no mínimo 3 letras').max(100),
  cpf: z.string().min(11),
  email: z.string().email(),
  id_tipo_usuario: z.string().min(1),
  justificativa: z.string().max(400),
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

type updateUserForm = z.infer<typeof updateUserForm>

export function EditarUsuario() {
  const location = useLocation()
  const user = location.state?.userData

  const navigate = useNavigate()

  const { data = [] } = useQuery({
    queryKey: ['usersType'],
    queryFn: getUSersType,
  })

  const { handleSubmit, reset, register, formState, setValue } =
    useForm<updateUserForm>({
      resolver: zodResolver(updateUserForm),
    })

  setValue('id_usuario', user.userId)

  const { adminProfile } = useAuth()
  const id_admin = adminProfile?.admin_id

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

  async function handleUpdateUser({
    id_usuario,
    nome,
    cpf,
    email,
    id_tipo_usuario,
    credencial_nfc,
    justificativa,
  }: updateUserForm) {
    console.log('Formulário enviado', {
      nome,
      email,
      cpf,
      id_tipo_usuario,
      credencial_nfc,
      id_admin,
    })
    try {
      await updateUser({
        id_usuario,
        nome,
        cpf,
        email,
        id_tipo_usuario,
        credencial_nfc,
        justificativa,
        id_admin,
      })
    } catch (error) {
      console.log('Erro ao realizar alterações')
    }
    alert(`Dados do usuário ${nome} alterados com sucesso!`)

    reset()
    navigate('/usuarios')
  }

  return (
    <div className="flex gap-10">
      <Navbar />

      <div className="pt-8 pr-10 flex flex-col justify-between gap-8">
        <main className="flex flex-col gap-4">
          <h1 className="p-3 font-bold text-3xl">{user.name}</h1>

          <div className="flex gap-8">
            <Form
              onSubmit={handleSubmit(handleUpdateUser)}
              className="flex flex-col gap-4 rounded-lg"
            >
              <span className="absolute top-[-0.75rem] left-3 text-lg">
                INFORMAÇÕES PESSOAIS
              </span>

              <div className="grid grid-cols-2 items-start gap-4">
                <Field className="w-full">
                  <Label htmlFor="name" label={'Nome:'} />
                  <Input
                    type="text"
                    id="name"
                    {...register('nome')}
                    autoComplete="on"
                    defaultValue={user.name}
                    className="w-full h-9"
                  />
                </Field>

                <Field className="w-full">
                  <Label htmlFor="cpf" label={'CPF:'} />
                  <Input
                    id="cpf"
                    {...register('cpf')}
                    defaultValue={user.cpf}
                    className="w-full h-9"
                  />
                </Field>

                <Field className="w-full">
                  <Label htmlFor="email" label={'Email:'} />
                  <Input
                    id="email"
                    {...register('email')}
                    autoComplete="on"
                    defaultValue={user.email}
                    className="w-full h-9"
                  />
                </Field>

                <Field className="w-full">
                  <Label htmlFor="user-type" label={'Tipo de usuário:'} />
                  <Select
                    id="user-type"
                    {...register('id_tipo_usuario')}
                    defaultValue={user.id_tipo_usuario}
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

                {user.credential_nfc && (
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
                      defaultValue={user.credencial_nfc}
                      ref={nfcInputRef}
                      className="w-full h-9"
                    />
                    {formState.errors.credencial_nfc && (
                      <p className="text-red-400 text-xs mt-1 truncate">
                        {formState.errors.credencial_nfc.message}
                      </p>
                    )}
                  </Field>
                )}

                <Field className="w-full opacity-25">
                  <Label htmlFor="matricula" label={'Matrícula:'} />
                  <Input
                    id="matricula"
                    name="matricula"
                    defaultValue={user.matricula}
                    disabled
                    className="w-full h-9"
                  />
                </Field>

                <Field>
                  <Label htmlFor="observacao" label={'Observação:'} />
                  <Textarea
                    id="observacao"
                    {...register('justificativa')}
                    placeholder="Opcional"
                    maxLength={400}
                  />
                </Field>
              </div>

              <div className="w-full flex items-center justify-between gap-4">
                <Button
                  type="submit"
                  size="md"
                  className="flex-1 uppercase tracking-wide"
                >
                  Salvar
                </Button>
                <Button
                  type="reset"
                  variant="secondary"
                  size="md"
                  className="flex-1 uppercase tracking-wide"
                >
                  Redefinir
                </Button>
              </div>
            </Form>

            <Form action="/usuarios" className="flex flex-col gap-4 rounded-lg">
              <span className="absolute top-[-0.75rem] left-3 text-lg">
                STATUS DE ACESSO
              </span>

              <div className="grid grid-cols-2 items-start gap-2">
                <Field className="w-full">
                  <Label
                    htmlFor="justificativa"
                    label={'Justificativa:'}
                    isRequired
                  />
                  <Select
                    id="justificativa"
                    name="justificativa"
                    required
                    className="h-9 pr-8"
                  >
                    <option value={''} />
                    <option>Trancamento de matrícula</option>
                    <option>Curso finalizado</option>
                    <option>Suspensão</option>
                    <option>Expulsão</option>
                  </Select>
                </Field>

                <Field className="w-full">
                  <Label htmlFor="access-status" label={'Status de acesso:'} />
                  <Select
                    id="access-status"
                    name="access-status"
                    defaultValue={user.status_acesso}
                    className="h-9"
                  >
                    <option value={1}>Ativo</option>
                    <option value={0}>Inativo</option>
                  </Select>
                </Field>

                <Field>
                  <Label htmlFor="outra-justificativa" label={'Outra:'} />
                  <Textarea
                    id="outra-justificativa"
                    name="outra-justificativa"
                    placeholder="Obrigatório"
                    maxLength={400}
                    required
                  />
                </Field>
              </div>

              <div className="w-full flex items-center justify-between gap-4">
                <Button
                  type="submit"
                  size="md"
                  className="flex-1 uppercase tracking-wide"
                >
                  Salvar
                </Button>
                <Button
                  type="reset"
                  variant="secondary"
                  size="md"
                  className="flex-1 uppercase tracking-wide"
                >
                  Redefinir
                </Button>
              </div>
            </Form>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
