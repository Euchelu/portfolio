import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(2, 11, 24, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(59,130,246,0.1)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span
            className="font-mono text-sm"
            style={{ color: '#3b82f6' }}
          >
            &lt;
          </span>
          <span className="font-semibold text-white tracking-wide">
            José Ángel
          </span>
          <span
            className="font-mono text-sm"
            style={{ color: '#3b82f6' }}
          >
            /&gt;
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: '#94a3b8' }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = '#e2e8f0')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = '#94a3b8')
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
          style={{
            background: 'rgba(59,130,246,0.1)',
            border: '1px solid rgba(59,130,246,0.3)',
            color: '#60a5fa',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget
            el.style.background = 'rgba(59,130,246,0.2)'
            el.style.borderColor = 'rgba(59,130,246,0.6)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget
            el.style.background = 'rgba(59,130,246,0.1)'
            el.style.borderColor = 'rgba(59,130,246,0.3)'
          }}
        >
          Descargar CV
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2"
          style={{ color: '#94a3b8' }}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-6 pb-4"
            style={{ borderTop: '1px solid rgba(59,130,246,0.1)' }}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-sm"
                style={{ color: '#94a3b8' }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
