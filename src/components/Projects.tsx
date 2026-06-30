import { motion } from 'framer-motion'
import { ExternalLink, Hammer } from 'lucide-react'
import { GithubIcon } from './SocialIcons'

const projects = [
  {
    title: 'Task Manager API',
    desc: 'REST API de gestión de tareas con FastAPI, PostgreSQL y Docker. 11 tests de integración, documentación interactiva automática y CI con GitHub Actions.',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Pytest'],
    status: 'Completado',
    statusColor: '#10b981',
    github: 'https://github.com/Euchelu/-task-manager-api',
    demo: null,
    featured: true,
  },
  {
    title: 'Weather ETL Pipeline',
    desc: 'Pipeline ETL que extrae datos meteorológicos reales de Open-Meteo, transforma con pandas y carga en PostgreSQL con deduplicación. 25 tests y CI en GitHub Actions.',
    tags: ['Python', 'pandas', 'PostgreSQL', 'Docker', 'Pytest'],
    status: 'Completado',
    statusColor: '#10b981',
    github: 'https://github.com/Euchelu/data-pipeline',
    demo: null,
    featured: true,
  },
  {
    title: 'DevOps Toolkit',
    desc: 'Monitor de salud del sistema con pipeline CI/CD de 4 etapas: lint → test → Docker build → deploy. Automatizado con GitHub Actions en cada push.',
    tags: ['Python', 'GitHub Actions', 'Docker', 'ruff', 'pytest-cov'],
    status: 'Completado',
    statusColor: '#10b981',
    github: 'https://github.com/Euchelu/devops-toolkit-',
    demo: null,
    featured: true,
  },
  {
    title: 'Testing Showcase',
    desc: 'Suite de tests multi-lenguaje con JUnit 5 (Java) y Jest (JavaScript). 52 tests en total con 97% de cobertura en JS. Ambos suites corren en paralelo en GitHub Actions.',
    tags: ['Java', 'JUnit 5', 'JavaScript', 'Jest', 'GitHub Actions'],
    status: 'Completado',
    statusColor: '#10b981',
    github: 'https://github.com/Euchelu/testing-showcase',
    demo: null,
    featured: false,
  },
  {
    title: 'Auth API — JWT',
    desc: 'API de autenticación completa con registro, login, refresh y logout. Tokens de acceso (30min) y refresh (7 días) con sesión única por usuario. 18 tests de integración.',
    tags: ['Python', 'FastAPI', 'JWT', 'bcrypt', 'SQLAlchemy', 'Docker'],
    status: 'Completado',
    statusColor: '#10b981',
    github: 'https://github.com/Euchelu/auth-api',
    demo: null,
    featured: false,
  },
]

const coming = [
  { title: 'Frontend React completo', tags: ['React', 'TypeScript', 'Tailwind'] },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6"
      style={{ background: 'rgba(5,15,31,0.5)' }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span
            className="text-xs font-mono tracking-widest uppercase mb-3 block"
            style={{ color: '#3b82f6' }}
          >
            04. proyectos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#e2e8f0' }}>
            Trabajo destacado
          </h2>
        </motion.div>

        {/* Proyectos reales */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl transition-all duration-300"
              style={{
                background: 'rgba(10,22,40,0.6)',
                border: '1px solid rgba(59,130,246,0.15)',
                backdropFilter: 'blur(12px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59,130,246,0.35)'
                e.currentTarget.style.boxShadow = '0 0 30px rgba(59,130,246,0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59,130,246,0.15)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <span
                  className="text-xs px-2 py-0.5 rounded font-mono"
                  style={{
                    background: 'rgba(59,130,246,0.1)',
                    color: '#60a5fa',
                    border: '1px solid rgba(59,130,246,0.2)',
                  }}
                >
                  destacado
                </span>
                <span
                  className="flex items-center gap-1.5 text-xs font-mono"
                  style={{ color: project.statusColor }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: project.statusColor }} />
                  {project.status}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-2" style={{ color: '#e2e8f0' }}>
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748b' }}>
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded font-mono"
                    style={{
                      background: 'rgba(15,32,64,0.8)',
                      color: '#475569',
                      border: '1px solid rgba(71,85,105,0.2)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs transition-colors duration-200"
                  style={{ color: '#475569' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#60a5fa')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#475569')}
                >
                  <GithubIcon size={14} />
                  Código
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs transition-colors duration-200"
                    style={{ color: '#475569' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#60a5fa')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#475569')}
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}

          {/* Próximamente */}
          {coming.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + projects.length) * 0.1 }}
              className="p-6 rounded-2xl"
              style={{
                background: 'rgba(10,22,40,0.3)',
                border: '1px dashed rgba(59,130,246,0.15)',
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Hammer size={14} style={{ color: '#334155' }} />
                <span className="text-xs font-mono" style={{ color: '#334155' }}>
                  en construcción
                </span>
              </div>
              <h3 className="text-base font-medium mb-3" style={{ color: '#475569' }}>
                {item.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded font-mono"
                    style={{
                      background: 'rgba(15,32,64,0.5)',
                      color: '#334155',
                      border: '1px solid rgba(71,85,105,0.1)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://github.com/Euchelu"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
            style={{ color: '#475569' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#60a5fa')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#475569')}
          >
            <GithubIcon size={15} />
            Ver todos los repositorios en GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
