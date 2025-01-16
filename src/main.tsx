import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import { Login } from './pages/login'
import { Home } from './pages/home'
import { Registros } from './pages/registros/registros'
import { Usuarios } from './pages/usuarios/usuarios'
import { Admins } from './pages/admins/admins'
import { AdicionarUsuario } from './pages/adicionar-usuario'
import { EditarUsuario } from './pages/editar-usuario'
import { Observacoes } from './pages/observacoes'
import './index.css'
import type { RouteObject } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GoogleOAuthProvider } from '@react-oauth/google'

// Cria um cliente
const queryClient = new QueryClient()

// ClientId do GoogleOAuth
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

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
    path: 'usuarios/editar',
    element: <EditarUsuario />,
    breadcrumb: null,
  },
  {
    path: 'usuarios/observacoes',
    element: <Observacoes />,
  },
  {
    path: 'admin',
    element: <Admins />,
  },
]

const router = createBrowserRouter(routes)

const element = document.getElementById('root')

createRoot(element!).render(
  <GoogleOAuthProvider clientId={clientId}>
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
  </GoogleOAuthProvider>
)
