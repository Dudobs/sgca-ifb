import { Button } from '../components/button'
import { Footer } from '../components/footer'
import { Field } from '../components/form/field'
import { Form } from '../components/form/form'
import { Input } from '../components/form/input'
import { Label } from '../components/form/label'
import { Select } from '../components/form/select'
import { Navbar } from '../components/navbar/navbar'

export function AdicionarUsuario() {
  return (
    <div className="flex gap-10">
      <Navbar />

      <div className="pt-16 pr-10 flex flex-col justify-between gap-8">
        <main className="flex flex-col gap-8">
          <h1 className="px-3 font-bold text-3xl">Adicionar Usuário</h1>

          <Form action="" className="flex flex-col gap-4 rounded-lg shadow-md">
            <span className="absolute top-[-0.75rem] left-3 text-lg">
              INFORMAÇÕES PESSOAIS
            </span>

            <Field className="w-full">
              <Label htmlFor="name" label={'Nome:'} isRequired />
              <Input type="text" id="name" name="name" className="w-full h-9" />
            </Field>

            <Field className="w-full">
              <Label htmlFor="cpf" label={'CPF:'} isRequired />
              <Input id="cpf" name="cpf" className="w-full h-9" />
            </Field>

            <Field className="w-full">
              <Label htmlFor="matricula" label={'Matrícula:'} />
              <Input id="matricula" name="matricula" className="w-full h-9" />
            </Field>

            <Field className="w-full">
              <Label
                htmlFor="user-type"
                label={'Tipo de usuário:'}
                isRequired
              />
              <Select id="user-type" name="user-type" className="h-9">
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>Médio subsequente</option>
                <option>05</option>
              </Select>
            </Field>

            <Field className="w-full">
              <Label
                htmlFor="access-status"
                label={'Status de acesso:'}
                isRequired
              />
              <Select id="access-status" name="access-status" className="h-9">
                <option>Ativo</option>
                <option>Inativo</option>
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
