import LogoIFBAccess from '../assets/images/Logo-ifb-access.svg'
import CloseNavbar from '../assets/images/close-navbar.svg'
export function Home() {
  return (
    <div className="h-screen w-80 fixed top-0 left-0 py-8 px-5 bg-green-600">
      <button
        className="size-5 absolute top-8 right-2.5 hover:bg-green-700"
        type="button"
      >
        <img src={CloseNavbar} alt="Fechar barra de navegação" />
      </button>
      <div className="flex items-end gap-2">
        <img className="size-16" src={LogoIFBAccess} alt="" />
        <span className="text-zinc-50 font-bold text-lg uppercase">
          Sistema de Gerenciamento
        </span>
      </div>
    </div>
  )
}
