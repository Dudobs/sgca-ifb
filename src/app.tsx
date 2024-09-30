import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/login'
import { Home } from './pages/home'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/home" Component={Home} />
      </Routes>
    </BrowserRouter>
  )
}
