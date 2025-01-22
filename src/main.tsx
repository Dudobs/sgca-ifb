import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import type { RouteObject } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider, useAuth } from './hooks/AuthContext'

import { Login } from './pages/login'
import { Home } from './pages/home'
import { Registros } from './pages/registros/registros'
import { Usuarios } from './pages/usuarios/usuarios'
import { Admins } from './pages/admins/admins'
import { AdicionarUsuario } from './pages/adicionar-usuario'
import { EditarUsuario } from './pages/editar-usuario'
import { Observacoes } from './pages/observacoes'
import './index.css' // Import the AuthProvider and useAuth

// Cria um cliente
const queryClient = new QueryClient()

// ClientId do GoogleOAuth
const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

function ProtectedRoute({
  children,
}: { children: JSX.Element; redirectTo?: string }) {
  const { user } = useAuth()
  const storedUser = localStorage.getItem('user') // Verificando o localStorage

  // Verifica se o usuário está presente no estado ou no localStorage
  const isAuthenticated = !!(user || storedUser)

  return isAuthenticated ? children : <Navigate to="/login" replace />
}

function RedirectToHome({ children }: { children: JSX.Element }) {
  const { user } = useAuth()
  const storedUser = localStorage.getItem('user')

  // Se o usuário estiver autenticado, redireciona para a página principal
  const isAuthenticated = !!(user || storedUser)

  return isAuthenticated ? <Navigate to="/" replace /> : children
}

const routes: RouteObject[] = [
  {
    path: 'login',
    element: (
      <RedirectToHome>
        <Login />
      </RedirectToHome>
    ),
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: 'registros',
    element: (
      <ProtectedRoute>
        <Registros />
      </ProtectedRoute>
    ),
  },
  {
    path: 'usuarios',
    element: (
      <ProtectedRoute>
        <Usuarios />
      </ProtectedRoute>
    ),
  },
  {
    path: 'usuarios/adicionar',
    element: (
      <ProtectedRoute>
        <AdicionarUsuario />
      </ProtectedRoute>
    ),
  },
  {
    path: 'usuarios/editar',
    element: (
      <ProtectedRoute>
        <EditarUsuario />
      </ProtectedRoute>
    ),
  },
  {
    path: 'usuarios/observacoes',
    element: (
      <ProtectedRoute>
        <Observacoes />
      </ProtectedRoute>
    ),
  },
  {
    path: 'admin',
    element: (
      <ProtectedRoute>
        <Admins />
      </ProtectedRoute>
    ),
  },
]

const router = createBrowserRouter(routes)

const element = document.getElementById('root')

createRoot(element!).render(
  <GoogleOAuthProvider clientId={clientId}>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </GoogleOAuthProvider>
)
