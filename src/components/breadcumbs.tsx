import { Link, useLocation } from 'react-router-dom'

export function Breadcrumbs() {
  const breadcrumbs = [
    { label: 'Home', path: '/', linkTo: '/' },
    { label: 'Registros', path: 'registros/', linkTo: '/registros' },
    { label: 'Usuários', path: 'usuarios/', linkTo: '/usuarios' },
    { label: 'observacoes', path: ':userId/observacoes', linkTo: '/usuarios' },
    { label: 'Editar', path: ':userId/editar', linkTo: 'usuarios' },
  ]

  const location = useLocation()

  return (
    <div className="flex gap-1">
      {breadcrumbs.map(
        crumb =>
          location.pathname.includes(crumb.path) && (
            <Link to={crumb.linkTo}>{crumb.label}</Link>
          )
      )}
    </div>
  )
}
