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

      <div className="w-4/5 flex flex-wrap gap-4">
        <Field>
          <Label htmlFor="name">Nome:</Label>
          <Input type="text" id="name" name="name" />
        </Field>

        <Field>
          <Label htmlFor="cpf">CPF:</Label>
          <Input id="cpf" name="cpf" />
        </Field>

        <Field>
          <Label htmlFor="matricula">Matrícula:</Label>
          <Input id="matricula" name="matricula" />
        </Field>

        <Field>
          <Label htmlFor="user-type">Tipo de usuário:</Label>
          <Select id="user-type" name="user-type">
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
            <option>05</option>
          </Select>
        </Field>

        <Field>
          <Label htmlFor="access-type">Tipo de acesso:</Label>
          <Select id="access-type" name="access-type">
            <option>Entrada</option>
            <option>Saída</option>
          </Select>
        </Field>

        <Field>
          <Label htmlFor="date">Data:</Label>
          <div id="date" className="flex items-end gap-1">
            <Label htmlFor="startDate">De:</Label>
            <Input type="date" id="startDate" name="startDate" />

            <Label htmlFor="endDate">Até:</Label>
            <Input type="date" id="endDate" name="endDate" placeholder="até" />
          </div>
        </Field>

        <Field>
          <Label htmlFor="time">Hora:</Label>
          <div id="time" className="flex items-end gap-1">
            <Label htmlFor="startTime">De:</Label>
            <Input type="time" id="startTime" name="startTime" />

            <Label htmlFor="endTime">Até:</Label>
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
