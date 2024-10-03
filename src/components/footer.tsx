import dayjs from 'dayjs'

export function Footer() {
  const currentYear = dayjs().year()

  return (
    <footer>
      <div className="w-full border border-zinc-200" />
      <p className="text-sm font-medium text-zinc-400">
        © {currentYear} Instituto Federal de Brasília - Footer text
      </p>
    </footer>
  )
}
