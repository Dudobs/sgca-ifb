import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Login } from './pages/login'
import { Home } from './pages/home'
import { Registros } from './pages/registros'
import { Usuarios } from './pages/usuarios'
import { Admin } from './pages/admin'
import { AdicionarUsuario } from './pages/adicionar-usuario'
import { EditarUsuario } from './pages/editar-usuario'
import { Observacoes } from './pages/observacoes'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/home" Component={Home} />
        <Route path="/registros" Component={Registros} />
        <Route path="/usuarios" Component={Usuarios} />
        <Route path="/usuarios/adicionar" Component={AdicionarUsuario} />
        <Route path="/usuarios/editar" Component={EditarUsuario} />
        <Route path="/usuarios/:userId/observacoes" Component={Observacoes} />
        <Route path="/admin" Component={Admin} />
      </Routes>
    </BrowserRouter>
  )
}
