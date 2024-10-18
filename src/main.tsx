import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import { Login } from './pages/login'
import { Home } from './pages/home'
import { Registros } from './pages/registros'
import { Usuarios } from './pages/usuarios'
import { Admins } from './pages/admins'
import { AdicionarUsuario } from './pages/adicionar-usuario'
import { EditarUsuario } from './pages/editar-usuario'
import { Observacoes } from './pages/observacoes'
import './index.css'
import type { RouteObject } from 'react-router-dom'

// Definindo uma interface que estende RouteObject
type BreadcrumbRouteObject = RouteObject & {
  breadcrumb?: string | null // Adiciona a propriedade breadcrumb
}

const routes: BreadcrumbRouteObject[] = [
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Home />,
    breadcrumb: 'Home',
  },
  {
    path: 'registros',
    element: <Registros />,
    breadcrumb: 'Registros',
  },
  {
    path: 'usuarios',
    element: <Usuarios />,
    breadcrumb: 'Usuários',
  },
  {
    path: 'usuarios/adicionar',
    element: <AdicionarUsuario />,
    breadcrumb: null,
  },
  {
    path: 'usuarios/:userId/editar',
    element: <EditarUsuario />,
    breadcrumb: null,
  },
  {
    path: 'usuarios/:userId/observacoes',
    element: <Observacoes />,
  },
  {
    path: 'admin',
    element: <Admins />,
  },
]

const router = createBrowserRouter(routes)

const element = document.getElementById('root')

createRoot(element!).render(<RouterProvider router={router} />)
