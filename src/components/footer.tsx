import Container from '@/components/container'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 py-10 text-sm text-gray-300">
      <Container>
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <p>© {new Date().getFullYear()} INDICARA. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="mailto:hello@indicara.dev" className="hover:text-brand-red">
              hello@indicara.dev
            </a>
            <span className="text-gray-500">•</span>
            <span className="text-gray-400">Built with Next.js & Tailwind</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
