import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ background: 'rgba(5,15,31,0.5)' }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="text-xs font-mono tracking-widest uppercase mb-3 block"
            style={{ color: '#3b82f6' }}
          >
            06. contacto
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: '#e2e8f0' }}
          >
            Hablemos
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: '#64748b' }}>
            ¿Tienes un proyecto en mente o una oportunidad interesante?
            Me encantaría escucharte.
          </p>

          <a
            href="mailto:euchelu@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-medium text-base transition-all duration-200 mb-10"
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
              color: '#fff',
              boxShadow: '0 0 30px rgba(59,130,246,0.25)',
            }}
          >
            <Send size={18} />
            Enviar mensaje
          </a>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px" style={{ background: 'rgba(59,130,246,0.1)' }} />
            <span className="text-xs font-mono" style={{ color: '#334155' }}>
              o encuéntrame en
            </span>
            <div className="flex-1 h-px" style={{ background: 'rgba(59,130,246,0.1)' }} />
          </div>

          <div className="flex items-center justify-center gap-4">
            {[
              { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/Euchelu' },
              { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/josé-ángel-ceballos-rodríguez-a44996346/' },
              { icon: Mail, label: 'Email', href: 'mailto:euchelu@gmail.com' },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm transition-all duration-200"
                style={{
                  background: 'rgba(10,22,40,0.6)',
                  border: '1px solid rgba(59,130,246,0.1)',
                  color: '#94a3b8',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.color = '#60a5fa'
                  el.style.borderColor = 'rgba(59,130,246,0.35)'
                  el.style.background = 'rgba(59,130,246,0.08)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.color = '#94a3b8'
                  el.style.borderColor = 'rgba(59,130,246,0.1)'
                  el.style.background = 'rgba(10,22,40,0.6)'
                }}
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
