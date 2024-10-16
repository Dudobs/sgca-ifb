import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function IconButton(props: ComponentProps<'button'>) {
  return (
    <button
      {...props}
      className={twMerge(
        // O twMerge faz com que além das classes setadas no aqruivo do componente, eu possa especificar mais algumas para componentes específicos na minha página. Para isso, ele recebe como primeiro parâmetro as classes que terão em todos os componentes, depois as classes que os componentes específicos podem ter. Além disso as {...props} devem vir antes das classes, já que as novas classes serão também propiedades, caso contrario a hierarquia impedirá que as novas classes sejam carregadas
        'bg-green-600 rounded-md p-1.5 hover:bg-green-700',
        props.disabled ? 'opacity-50 hover:bg-green-600' : null //Classe adicional caso o botão esteja desabilitado
      )}
    />
  )
}
