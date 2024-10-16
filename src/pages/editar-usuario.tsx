import { Button } from '../components/button'
import { Footer } from '../components/footer'
import { Field } from '../components/form/field'
import { Form } from '../components/form/form'
import { Input } from '../components/form/input'
import { Label } from '../components/form/label'
import { Select } from '../components/form/select'
import { Textarea } from '../components/form/textarea'
import { Navbar } from '../components/navbar/navbar'

export function EditarUsuario() {
  return (
    <div className="flex gap-10">
      <Navbar />

      <div className="pt-8 pr-10 flex flex-col justify-between gap-8">
        <main className="flex flex-col gap-4">
          <h1 className="p-3 font-bold text-3xl">Eduardo Vieira</h1>

          <div className="flex gap-8">
            <Form
              action="/usuarios"
              className="flex flex-col gap-4 rounded-lg shadow-md"
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
                    name="name"
                    autoComplete="on"
                    defaultValue={'Eduardo Vieira Campos'}
                    className="w-full h-9"
                  />
                </Field>

                <Field className="w-full">
                  <Label htmlFor="cpf" label={'CPF:'} />
                  <Input
                    id="cpf"
                    name="cpf"
                    defaultValue={'085.000.000-00'}
                    className="w-full h-9"
                  />
                </Field>

                <Field className="w-full">
                  <Label htmlFor="email" label={'Email:'} />
                  <Input
                    id="email"
                    name="email"
                    autoComplete="on"
                    defaultValue={'dudobslol@gmail.com'}
                    className="w-full h-9"
                  />
                </Field>

                <Field className="w-full">
                  <Label htmlFor="user-type" label={'Tipo de usuário:'} />
                  <Select
                    id="user-type"
                    name="user-type"
                    defaultValue={1}
                    className="h-9"
                  >
                    <option>01</option>
                    <option>02</option>
                    <option value={1}>Médio subsequente</option>
                    <option>03</option>
                    <option>05</option>
                  </Select>
                </Field>

                <Field>
                  <Label htmlFor="observacao" label={'Observação:'} />
                  <Textarea
                    id="observacao"
                    name="observacao"
                    placeholder="Opcional"
                  />
                </Field>

                <Field className="w-full opacity-25">
                  <Label htmlFor="matricula" label={'Matrícula:'} />
                  <Input
                    id="matricula"
                    name="matricula"
                    defaultValue={'222000000057'}
                    disabled
                    className="w-full h-9"
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

            <Form
              action="/usuarios"
              className="flex flex-col gap-4 rounded-lg shadow-md"
            >
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
                    defaultValue={1}
                    className="h-9"
                  >
                    <option value={1}>Ativo</option>
                    <option>Inativo</option>
                  </Select>
                </Field>

                <Field>
                  <Label
                    htmlFor="outra-justificativa"
                    label={'Justificativa:'}
                  />
                  <Textarea
                    id="outra-justificativa"
                    name="outra-justificativa"
                    placeholder="Obrigatório"
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
