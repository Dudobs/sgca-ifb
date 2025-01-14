import { FilterX, Search } from 'lucide-react'

import { Form } from '../../components/form/form'
import { Field } from '../../components/form/field'
import { Label } from '../../components/form/label'
import { Input } from '../../components/form/input'
import { Select } from '../../components/form/select'
import { Button } from '../../components/button'
import { getUSersType } from '../../http/get_tipos_usuarios'
import { useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

interface RegistriesFilterProps {
  onSearch: (e: React.FormEvent<HTMLFormElement>) => void
}

export function RegistriesFilter({ onSearch }: RegistriesFilterProps) {
  const [searchParams, setSearchParams] = useState({
    nome: '',
    cpf: '',
    matricula: '',
    tipo_usuario: '',
    tipo_acesso: '',
  })

  const { data = [] } = useQuery({
    queryKey: ['usersType'],
    queryFn: getUSersType,
  })

  const { handleSubmit, register } = useForm()

  return (
    <Form action="" onSubmit={handleSubmit(() => {})}>
      <span className="absolute top-[-0.75rem]">FILTROS:</span>

      <div className="w-3/5 flex flex-wrap gap-4">
        <Field>
          <Label htmlFor="name" label={'Nome:'} />
          <Input type="text" id="name" name="name" autoComplete="off" />
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
            <option value={''} className="text-zinc-300">
              Tipo de usuário
            </option>
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

        <Field className="w-36">
          <Label htmlFor="access-type" label={'Tipo de acesso:'} />
          <Select id="access-type" name="access-type">
            <option value={''} className="text-zinc-300">
              Tipo de acesso
            </option>
            <option value={1}>Entrada</option>
            <option value={0}>Saída</option>
          </Select>
        </Field>

        <Field>
          <div className="flex flex-col">
            <span className="text-sm text-zinc-950 tracking-tight leading-normal">
              Data:
            </span>
            <div id="date" className="flex items-end gap-1">
              <Label htmlFor="startDate" label={'De:'} />
              <Input type="date" id="startDate" name="startDate" />

              <Label htmlFor="endDate" label={'Até:'} />
              <Input
                type="date"
                id="endDate"
                name="endDate"
                placeholder="até"
              />
            </div>
          </div>
        </Field>

        <Field>
          <div className="flex flex-col">
            <span className="text-sm text-zinc-950 tracking-tight leading-normal">
              Hora:
            </span>
            <div id="time" className="flex items-end gap-1">
              <Label htmlFor="startTime" label={'De:'} />
              <Input type="time" id="startTime" name="startTime" />

              <Label htmlFor="endTime" label={'Até:'} />
              <Input
                type="time"
                id="endTime"
                name="endTime"
                placeholder="até"
              />
            </div>
          </div>
        </Field>
      </div>

      <div className="flex gap-2">
        <Button type="reset" variant="reset" className="normal-case">
          <FilterX className="size-5" />
          <span>Limpar filtros</span>
        </Button>

        <Button type="submit" className="normal-case">
          <Search className="size-5 rotate-90" />
          <span>Pesquisar</span>
        </Button>
      </div>
    </Form>
  )
}
