import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-container py-6 sticky">
      <nav className="space-x-8">
        <Link href="/">
          <a className="text-gray-600">Hakkımda</a>
        </Link>
        <Link href="/posts">
          <a className="text-gray-600">Yazılar</a>
        </Link>
      </nav>
    </header>
  )
}
