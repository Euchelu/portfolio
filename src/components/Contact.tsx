import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { useLanguage } from '../hooks/useLanguage'

const EMAIL = 'euchelu@gmail.com'

export default function Contact() {
  const { tr } = useLanguage()

  return (
    <section id="contact" className="py-24 px-6" style={{ background: 'rgba(5,15,31,0.5)' }}>
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-widest uppercase mb-3 block" style={{ color: '#3b82f6' }}>{tr.contact.tag}</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#e2e8f0' }}>{tr.contact.title}</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#64748b' }}>{tr.contact.desc}</p>
          </div>

          <div className="text-center mb-10">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-medium text-base transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                color: '#fff',
                boxShadow: '0 0 30px rgba(59,130,246,0.25)',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 45px rgba(59,130,246,0.45)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 30px rgba(59,130,246,0.25)' }}
            >
              <Mail size={18} /> {tr.contact.send}
            </a>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px" style={{ background: 'rgba(59,130,246,0.1)' }} />
            <span className="text-xs font-mono" style={{ color: '#334155' }}>{tr.contact.or}</span>
            <div className="flex-1 h-px" style={{ background: 'rgba(59,130,246,0.1)' }} />
          </div>

          <div className="flex items-center justify-center gap-4">
            {[
              { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/Euchelu' },
              { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/josé-ángel-ceballos-rodríguez-a44996346/' },
              { icon: Mail, label: 'Email', href: `mailto:${EMAIL}` },
            ].map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm transition-all duration-200"
                style={{ background: 'rgba(10,22,40,0.6)', border: '1px solid rgba(59,130,246,0.1)', color: '#94a3b8' }}
                onMouseEnter={(e) => { const el = e.currentTarget; el.style.color = '#60a5fa'; el.style.borderColor = 'rgba(59,130,246,0.35)'; el.style.background = 'rgba(59,130,246,0.08)' }}
                onMouseLeave={(e) => { const el = e.currentTarget; el.style.color = '#94a3b8'; el.style.borderColor = 'rgba(59,130,246,0.1)'; el.style.background = 'rgba(10,22,40,0.6)' }}>
                <Icon size={16} /> {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
