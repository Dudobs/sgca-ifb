import { Eye, FilterX, Search } from 'lucide-react'

import { Form } from '../../components/form/form'
import { Field } from '../../components/form/field'
import { Label } from '../../components/form/label'
import { Input } from '../../components/form/input'
import { Select } from '../../components/form/select'
import { Button } from '../../components/button'
import { getUSersType } from '../../http/get_tipos_usuarios'
import { useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, type ChangeEvent } from 'react'
import { EyeClosed } from '../../assets/eye-closed'

interface RegistriesFilterProps {
  onSearch: (filters: filtersForm) => void
  handleHideInfo: React.Dispatch<React.SetStateAction<boolean>>
  infoIsHided: boolean
}

const filtersForm = z.object({
  nome: z.string(),
  cpf: z.string(),
  matricula: z.string(),
  tipo_usuario: z.string().max(1),
  tipo_acesso: z.string().max(1),
  data_inicio: z.string(),
  data_fim: z.string(),
})

export type filtersForm = z.infer<typeof filtersForm>

export function RegistriesFilter({
  onSearch,
  handleHideInfo,
  infoIsHided,
}: RegistriesFilterProps) {
  const [startDate, setStartDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endDate, setendDate] = useState('')
  const [endTime, setEndTime] = useState('')

  const { handleSubmit, register, setValue, reset } = useForm<filtersForm>({
    resolver: zodResolver(filtersForm),
  })

  const handleFormSubmit = (data: filtersForm) => {
    onSearch(data) // Envia os parâmetros para o componente pai
  }

  const handleReset: React.MouseEventHandler<HTMLButtonElement> = event => {
    event.preventDefault() // Evita o comportamento padrão do botão
    reset() // Reseta os campos do formulário
  }

  const { data = [] } = useQuery({
    queryKey: ['usersType'],
    queryFn: getUSersType,
  })

  // Definindo dataInicio - startDate + startTime
  function onStartDateInputChange(event: ChangeEvent<HTMLInputElement>) {
    setStartDate(event.target.value)
  }

  function onStartTimeInputChange(event: ChangeEvent<HTMLInputElement>) {
    setStartTime(event.target.value)
  }

  const dataInicio = startDate.concat(` ${startTime}`)

  setValue('data_inicio', dataInicio.length > 1 ? dataInicio : '')

  // Definindo dataFim - endDate + endTime
  function onEndDateInputChange(event: ChangeEvent<HTMLInputElement>) {
    setendDate(event.target.value)
  }

  function onEndTimeInputChange(event: ChangeEvent<HTMLInputElement>) {
    setEndTime(event.target.value)
  }

  const dataFim = endDate.concat(` ${endTime}`)

  setValue('data_fim', dataFim.length > 1 ? dataFim : '')

  return (
    <Form action="" onSubmit={handleSubmit(handleFormSubmit)} className="gap-2">
      <span className="absolute top-[-0.75rem]">FILTROS:</span>

      <div className="w-3/5 flex flex-wrap gap-4">
        <Field>
          <Label htmlFor="name" label={'Nome:'} />
          <Input
            type="text"
            id="name"
            {...register('nome')}
            autoComplete="off"
          />
        </Field>

        <Field>
          <Label htmlFor="cpf" label={'CPF:'} />
          <Input id="cpf" {...register('cpf')} />
        </Field>

        <Field>
          <Label htmlFor="matricula" label={'Matrícula:'} />
          <Input id="matricula" {...register('matricula')} />
        </Field>

        <Field>
          <Label htmlFor="tipo-usuario" label={'Tipo de usuário'} />
          <Select id="tipo-usuario" {...register('tipo_usuario')}>
            <option value={''} className="text-zinc-300">
              Todos
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
          <Label htmlFor="tipo-acesso" label={'Tipo de acesso:'} />
          <Select id="tipo-acesso" {...register('tipo_acesso')}>
            <option value={''} className="text-zinc-300">
              Todos
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
              <Input
                type="date"
                onChange={onStartDateInputChange}
                id="startDate"
                name="startDate"
              />

              <Label htmlFor="endDate" label={'Até:'} />
              <Input
                type="date"
                onChange={onEndDateInputChange}
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
              <Input
                type="time"
                onChange={onStartTimeInputChange}
                id="startTime"
                name="startTime"
              />

              <Label htmlFor="endTime" label={'Até:'} />
              <Input
                type="time"
                onChange={onEndTimeInputChange}
                id="endTime"
                name="endTime"
                placeholder="até"
              />
            </div>
          </div>
        </Field>
      </div>

      <div className="h-full flex flex-col items-end justify-between">
        <div>
          {infoIsHided ? (
            <button
              onClick={() => handleHideInfo(false)}
              type="button"
              title="Exibir informações sensíveis"
            >
              <EyeClosed color="#3f3f46" />
            </button>
          ) : (
            <button
              onClick={() => handleHideInfo(true)}
              type="button"
              title="Esconder informações sensíveis"
            >
              <Eye color="#3f3f46" />
            </button>
          )}
        </div>

        <div className="flex gap-2">
          <Button
            type="button"
            onClick={handleReset}
            variant="reset"
            className="normal-case"
          >
            <FilterX className="size-5" />
            <span>Limpar filtros</span>
          </Button>

          <Button type="submit" className="normal-case">
            <Search className="size-5 rotate-90" />
            <span>Pesquisar</span>
          </Button>
        </div>
      </div>
    </Form>
  )
}
