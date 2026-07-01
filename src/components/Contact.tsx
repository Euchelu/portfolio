import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { useLanguage } from '../context/LanguageContext'

// Crea tu formulario gratuito en https://formspree.io y pega el ID aquí
const FORMSPREE_ID = 'xpwraqkz'

export default function Contact() {
  const { tr } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    background: 'rgba(10,22,40,0.6)',
    border: '1px solid rgba(59,130,246,0.15)',
    color: '#e2e8f0',
    borderRadius: '0.5rem',
    padding: '0.75rem 1rem',
    width: '100%',
    outline: 'none',
    fontSize: '0.875rem',
  }

  return (
    <section id="contact" className="py-24 px-6" style={{ background: 'rgba(5,15,31,0.5)' }}>
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-widest uppercase mb-3 block" style={{ color: '#3b82f6' }}>{tr.contact.tag}</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#e2e8f0' }}>{tr.contact.title}</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#64748b' }}>{tr.contact.desc}</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 mb-10">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder={tr.contact.namePlaceholder}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(59,130,246,0.5)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(59,130,246,0.15)')}
              />
              <input
                type="email"
                required
                placeholder={tr.contact.emailPlaceholder}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(59,130,246,0.5)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(59,130,246,0.15)')}
              />
            </div>
            <textarea
              required
              rows={5}
              placeholder={tr.contact.messagePlaceholder}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={(e) => (e.target.style.borderColor = 'rgba(59,130,246,0.5)')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(59,130,246,0.15)')}
            />

            <button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-medium text-base transition-all duration-200"
              style={{
                background: status === 'success' ? 'rgba(16,185,129,0.2)' : 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                color: '#fff',
                boxShadow: status === 'success' ? 'none' : '0 0 30px rgba(59,130,246,0.25)',
                opacity: status === 'sending' ? 0.7 : 1,
                cursor: status === 'sending' || status === 'success' ? 'not-allowed' : 'pointer',
              }}
            >
              {status === 'success' ? (
                <><CheckCircle size={18} /> {tr.contact.successMsg}</>
              ) : status === 'error' ? (
                <><AlertCircle size={18} /> {tr.contact.errorMsg}</>
              ) : (
                <><Send size={18} /> {status === 'sending' ? tr.contact.sending : tr.contact.send}</>
              )}
            </button>
          </form>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px" style={{ background: 'rgba(59,130,246,0.1)' }} />
            <span className="text-xs font-mono" style={{ color: '#334155' }}>{tr.contact.or}</span>
            <div className="flex-1 h-px" style={{ background: 'rgba(59,130,246,0.1)' }} />
          </div>

          <div className="flex items-center justify-center gap-4">
            {[
              { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/Euchelu' },
              { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/josé-ángel-ceballos-rodríguez-a44996346/' },
              { icon: Mail, label: 'Email', href: 'mailto:euchelu@gmail.com' },
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
