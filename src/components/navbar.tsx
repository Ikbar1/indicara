'use client'
import Link from 'next/link'
import Container from './container'

const members = [
  { name: 'Akhnaf', path: '/team/akhnaf' },
  { name: 'Edwar', path: '/team/edwar' },
  { name: 'Ikbar', path: '/team/ikbar' },
  { name: 'Lazuardi', path: '/team/lazuardi' },
  { name: 'Syena', path: '/team/syena' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <Container>
        <nav className="flex h-14 items-center justify-between gap-3">
          {/* Logo INDICARA */}
          <Link href="/" className="whitespace-nowrap font-semibold tracking-wide text-white">
            INDI<span className="text-brand-red">CARA</span>
          </Link>

          {/* Nama anggota: selalu tampil, bisa di-scroll kalau sempit */}
          <div className="flex min-w-0 flex-1 items-center justify-center">
            <div className="flex items-center gap-4 overflow-x-auto no-scrollbar px-2 py-1 text-sm">
              {members.map((m) => (
                <Link
                  key={m.name}
                  href={m.path}
                  className="shrink-0 text-gray-200 hover:text-brand-red transition-colors"
                >
                  {m.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Tombol contact */}
          <Link
            href="/#contact"
            className="whitespace-nowrap rounded-lg border border-brand-red/40 bg-brand-red px-3 py-1.5 text-sm font-medium hover:bg-brand-red/90"
          >
            Contact
          </Link>
        </nav>
      </Container>
    </header>
  )
}
