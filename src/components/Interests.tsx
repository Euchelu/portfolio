import { motion } from 'framer-motion'
import { ShieldCheck, Nfc, Drone, Printer, Gamepad2, Cpu } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const icons = [ShieldCheck, Nfc, Drone, Printer, Gamepad2, Cpu]

export default function Interests() {
  const { tr } = useLanguage()

  return (
    <section id="interests" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <span className="text-xs font-mono tracking-widest uppercase mb-3 block" style={{ color: '#3b82f6' }}>{tr.interests.tag}</span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#e2e8f0' }}>{tr.interests.title}</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {tr.interests.items.map(({ label, desc }, i) => {
            const Icon = icons[i]
            return (
              <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="p-5 rounded-2xl text-center transition-all duration-300 cursor-default"
                style={{ background: 'rgba(10,22,40,0.5)', border: '1px solid rgba(59,130,246,0.1)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'; e.currentTarget.style.background = 'rgba(10,22,40,0.8)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.1)'; e.currentTarget.style.background = 'rgba(10,22,40,0.5)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: 'rgba(59,130,246,0.1)' }}>
                  <Icon size={18} style={{ color: '#3b82f6' }} />
                </div>
                <p className="text-sm font-medium mb-1" style={{ color: '#e2e8f0' }}>{label}</p>
                <p className="text-xs" style={{ color: '#475569' }}>{desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
