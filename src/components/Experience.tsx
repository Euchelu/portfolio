import { motion } from 'framer-motion'

const events = [
  {
    year: '2024',
    title: 'Desarrollador Full Stack',
    company: 'Empresa / Proyecto',
    type: 'trabajo',
    desc: 'Descripción de tu responsabilidad principal y los logros más destacados en este rol.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    year: '2023',
    title: 'Bootcamp de Desarrollo Web',
    company: 'Nombre del Bootcamp',
    type: 'formación',
    desc: 'Formación intensiva en desarrollo web full stack, cubriendo frontend, backend y bases de datos.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    year: '2022',
    title: 'Primer proyecto freelance',
    company: 'Proyecto independiente',
    type: 'proyecto',
    desc: 'Desarrollo de aplicación web para cliente, desde el diseño hasta el despliegue en producción.',
    tags: ['WordPress', 'PHP', 'MySQL'],
  },
  {
    year: '2021',
    title: 'Inicio en programación',
    company: 'Autoaprendizaje',
    type: 'hito',
    desc: 'Primeros pasos con Python y desarrollo web. Cursos online y proyectos personales.',
    tags: ['Python', 'HTML', 'CSS'],
  },
]

const typeColors: Record<string, string> = {
  trabajo: '#3b82f6',
  formación: '#06b6d4',
  proyecto: '#8b5cf6',
  hito: '#10b981',
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
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
            03. trayectoria
          </span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#e2e8f0' }}>
            Experiencia & Formación
          </h2>
        </motion.div>

        <div className="relative">
          {/* Línea vertical */}
          <div
            className="absolute left-4 top-0 bottom-0 w-px"
            style={{ background: 'rgba(59,130,246,0.15)' }}
          />

          <div className="space-y-10">
            {events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12"
              >
                {/* Dot */}
                <div
                  className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full -translate-x-1/2 border-2"
                  style={{
                    background: typeColors[event.type],
                    borderColor: '#020b18',
                    boxShadow: `0 0 8px ${typeColors[event.type]}60`,
                  }}
                />

                <div
                  className="p-5 rounded-xl"
                  style={{
                    background: 'rgba(10,22,40,0.5)',
                    border: '1px solid rgba(59,130,246,0.1)',
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-semibold" style={{ color: '#e2e8f0' }}>
                        {event.title}
                      </h3>
                      <p className="text-sm" style={{ color: '#475569' }}>
                        {event.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-mono"
                        style={{
                          background: `${typeColors[event.type]}15`,
                          color: typeColors[event.type],
                          border: `1px solid ${typeColors[event.type]}30`,
                        }}
                      >
                        {event.type}
                      </span>
                      <span
                        className="text-xs font-mono font-medium"
                        style={{ color: '#3b82f6' }}
                      >
                        {event.year}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm mb-3" style={{ color: '#64748b' }}>
                    {event.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded font-mono"
                        style={{
                          background: 'rgba(59,130,246,0.08)',
                          color: '#60a5fa',
                          border: '1px solid rgba(59,130,246,0.15)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
