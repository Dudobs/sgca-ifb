import { Search } from 'lucide-react'

import { Form } from '../form/form'
import { Field } from '../form/field'
import { Label } from '../form/label'
import { Input } from '../form/input'
import { Select } from '../form/select'
import { Button } from '../button'

export function RegistriesFilter() {
  return (
    <Form action="">
      <span className="absolute top-[-0.75rem]">FILTROS:</span>

      <div className="w-2/3 flex flex-wrap gap-4">
        <Field>
          <Label htmlFor="name" label={'Nome:'} />
          <Input type="text" id="name" name="name" />
        </Field>

        <Field>
          <Label htmlFor="cpf" label={'CPF:'} />
          <Input id="cpf" name="cpf" />
        </Field>

        <Field>
          <Label htmlFor="matricula" label={'Matrícula:'} />
          <Input id="matricula" name="matricula" />
        </Field>

        <Field>
          <Label htmlFor="user-type" label={'Tipo de usuário'} />
          <Select id="user-type" name="user-type">
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>Médio subsequente</option>
            <option>05</option>
          </Select>
        </Field>

        <Field className="w-36">
          <Label htmlFor="access-type" label={'Tipo de acesso:'} />
          <Select id="access-type" name="access-type">
            <option>Entrada</option>
            <option>Saída</option>
          </Select>
        </Field>

        <Field>
          <Label htmlFor="date">Data:</Label>
          <div id="date" className="flex items-end gap-1">
            <Label htmlFor="startDate" label={'De:'} />
            <Input type="date" id="startDate" name="startDate" />

            <Label htmlFor="endDate" label={'Até:'} />
            <Input type="date" id="endDate" name="endDate" placeholder="até" />
          </div>
        </Field>

        <Field>
          <Label htmlFor="time">Hora:</Label>
          <div id="time" className="flex items-end gap-1">
            <Label htmlFor="startTime" label={'De:'} />
            <Input type="time" id="startTime" name="startTime" />

            <Label htmlFor="endTime" label={'Até:'} />
            <Input type="time" id="endTime" name="endTime" placeholder="até" />
          </div>
        </Field>
      </div>

      <Button>
        <Search className="size-5 rotate-90" />
        <span>Pesquisar</span>
      </Button>
    </Form>
  )
}
