import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './SocialIcons'
import { useLanguage } from '../hooks/useLanguage'

const projectMeta = [
  { tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Pytest'], github: 'https://github.com/Euchelu/-task-manager-api', demo: null },
  { tags: ['Python', 'pandas', 'PostgreSQL', 'Docker', 'Pytest'], github: 'https://github.com/Euchelu/data-pipeline', demo: null },
  { tags: ['Python', 'GitHub Actions', 'Docker', 'ruff', 'pytest-cov'], github: 'https://github.com/Euchelu/devops-toolkit-', demo: null },
  { tags: ['Java', 'JUnit 5', 'JavaScript', 'Jest', 'GitHub Actions'], github: 'https://github.com/Euchelu/testing-showcase', demo: null },
  { tags: ['Python', 'FastAPI', 'JWT', 'bcrypt', 'SQLAlchemy', 'Docker'], github: 'https://github.com/Euchelu/auth-api', demo: null },
  { tags: ['React', 'TypeScript', 'Recharts', 'FastAPI', 'Tailwind'], github: 'https://github.com/Euchelu/system-monitor', demo: 'https://euchelu.github.io/system-monitor/' },
]

export default function Projects() {
  const { tr } = useLanguage()

  return (
    <section id="projects" className="py-24 px-6" style={{ background: 'rgba(5,15,31,0.5)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <span className="text-xs font-mono tracking-widest uppercase mb-3 block" style={{ color: '#3b82f6' }}>{tr.projects.tag}</span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#e2e8f0' }}>{tr.projects.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {tr.projects.items.map((item, i) => {
            const meta = projectMeta[i]
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl transition-all duration-300"
                style={{ background: 'rgba(10,22,40,0.6)', border: '1px solid rgba(59,130,246,0.15)', backdropFilter: 'blur(12px)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.35)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(59,130,246,0.08)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.15)'; e.currentTarget.style.boxShadow = 'none' }}>
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs px-2 py-0.5 rounded font-mono"
                    style={{ background: 'rgba(59,130,246,0.1)', color: '#60a5fa', border: '1px solid rgba(59,130,246,0.2)' }}>
                    {tr.projects.featured}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-mono" style={{ color: '#10b981' }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#10b981' }} />
                    {tr.projects.completed}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#e2e8f0' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748b' }}>{item.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {meta.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded font-mono"
                      style={{ background: 'rgba(15,32,64,0.8)', color: '#475569', border: '1px solid rgba(71,85,105,0.2)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a href={meta.github} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs transition-colors duration-200" style={{ color: '#475569' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#60a5fa')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#475569')}>
                    <GithubIcon size={14} /> {tr.projects.code}
                  </a>
                  {meta.demo && (
                    <a href={meta.demo} target="_blank" rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs transition-colors duration-200" style={{ color: '#475569' }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#60a5fa')}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#475569')}>
                      <ExternalLink size={14} /> {tr.projects.demo}
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}

        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center">
          <a href="https://github.com/Euchelu" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm transition-colors duration-200" style={{ color: '#475569' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#60a5fa')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#475569')}>
            <GithubIcon size={15} /> {tr.projects.viewAll}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
