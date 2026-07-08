import { motion } from 'framer-motion'
import { Code2, Layers, TestTube2, CloudCog } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const traitIcons = [Code2, Layers, CloudCog, TestTube2]

export default function About() {
  const { tr } = useLanguage()

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <span className="text-xs font-mono tracking-widest uppercase mb-3 block" style={{ color: '#3b82f6' }}>{tr.about.tag}</span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#e2e8f0' }}>{tr.about.title}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#64748b' }}
              dangerouslySetInnerHTML={{ __html: tr.about.p1.replace('<strong>', '<strong style="color:#94a3b8">') }} />
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#64748b' }}>{tr.about.p2}</p>

            <div className="grid grid-cols-2 gap-3">
              {tr.about.traits.map(({ label, desc }, i) => {
                const Icon = traitIcons[i]
                return (
                  <div key={label} className="p-4 rounded-xl" style={{ background: 'rgba(10,22,40,0.6)', border: '1px solid rgba(59,130,246,0.1)' }}>
                    <Icon size={18} style={{ color: '#3b82f6' }} className="mb-2" />
                    <p className="text-sm font-medium mb-0.5" style={{ color: '#e2e8f0' }}>{label}</p>
                    <p className="text-xs" style={{ color: '#475569' }}>{desc}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 gap-4">
            {tr.about.stats.map(({ value, label }) => (
              <div key={label} className="p-6 rounded-2xl flex flex-col justify-center"
                style={{ background: 'rgba(10,22,40,0.6)', border: '1px solid rgba(59,130,246,0.12)', backdropFilter: 'blur(12px)' }}>
                <span className="text-4xl font-bold mb-1"
                  style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #06b6d4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {value}
                </span>
                <span className="text-sm" style={{ color: '#64748b' }}>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
