import { useReducedMotion } from 'framer-motion'
import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { useTypingEffect } from '../hooks/useTypingEffect'

const roles = [
  'Backend Developer',
  'DevOps & Cloud Engineer',
  'Data Engineer',
  'QA / Testing Specialist',
]

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const typed = useTypingEffect(roles)

  const fadeUp = shouldReduceMotion
    ? {}
    : { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } }

  const fadeIn = shouldReduceMotion
    ? {}
    : { initial: { opacity: 0 }, animate: { opacity: 1 } }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(rgba(59,130,246,0.12) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }}
    >
      {/* Glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge estado */}
        <motion.div
          {...fadeIn}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono mb-8"
          style={{
            background: 'rgba(6,182,212,0.08)',
            border: '1px solid rgba(6,182,212,0.2)',
            color: '#06b6d4',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: '#06b6d4' }}
          />
          Disponible para nuevas oportunidades
        </motion.div>

        {/* Nombre */}
        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
          style={{ color: '#e2e8f0' }}
        >
          Hola, soy{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #60a5fa 0%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            José Ángel
          </span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          {...fadeIn}
          transition={{ delay: 0.3 }}
          className="h-10 flex items-center justify-center mb-6"
        >
          <span className="text-xl md:text-2xl font-mono" style={{ color: '#94a3b8' }}>
            {typed}
            <span className="animate-pulse ml-0.5" style={{ color: '#3b82f6' }}>
              |
            </span>
          </span>
        </motion.div>

        {/* Descripción */}
        <motion.p
          {...fadeUp}
          transition={{ delay: 0.4 }}
          className="text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: '#64748b' }}
        >
          Ingeniero de software enfocado en backend, infraestructura cloud y calidad
          del código. Construyo sistemas robustos, escalables y bien testeados con
          Python, Java, Docker y más.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
              color: '#fff',
              boxShadow: '0 0 20px rgba(59,130,246,0.3)',
            }}
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200"
            style={{
              background: 'rgba(59,130,246,0.08)',
              border: '1px solid rgba(59,130,246,0.25)',
              color: '#60a5fa',
            }}
          >
            Contactar
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          {...fadeIn}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-5"
        >
          {[
            { icon: GithubIcon, href: 'https://github.com/Euchelu', label: 'GitHub' },
            { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/josé-ángel-ceballos-rodríguez-a44996346/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:euchelu@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg transition-all duration-200"
              style={{
                color: '#475569',
                border: '1px solid rgba(71,85,105,0.3)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.color = '#60a5fa'
                el.style.borderColor = 'rgba(59,130,246,0.4)'
                el.style.background = 'rgba(59,130,246,0.08)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.color = '#475569'
                el.style.borderColor = 'rgba(71,85,105,0.3)'
                el.style.background = 'transparent'
              }}
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        {...fadeIn}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: '#334155' }}
      >
        <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
