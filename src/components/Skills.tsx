import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Lenguajes',
    color: '#3b82f6',
    skills: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript', 'Bash'],
  },
  {
    title: 'Frontend',
    color: '#06b6d4',
    skills: ['React', 'Vue', 'Angular', 'HTML/CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend & BBDDs',
    color: '#8b5cf6',
    skills: ['Django', 'Spring Boot', 'Express.js', 'PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    title: 'DevOps & Cloud',
    color: '#10b981',
    skills: ['Docker', 'Docker Compose', 'Linux', 'Git / GitHub / GitLab', 'AWS', 'Google Cloud', 'Azure'],
  },
  {
    title: 'QA & Testing',
    color: '#f59e0b',
    skills: ['Pytest', 'JUnit', 'Jest', 'REST API testing', 'SQL optimization'],
  },
  {
    title: 'Metodologías',
    color: '#ec4899',
    skills: ['Scrum / Agile', 'Clean Code', 'REST API design', 'Documentación clara', 'Trabajo en equipo'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6" style={{ background: 'rgba(5,15,31,0.5)' }}>
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
            02. habilidades
          </span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#e2e8f0' }}>
            Stack tecnológico
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl"
              style={{
                background: 'rgba(10,22,40,0.6)',
                border: '1px solid rgba(59,130,246,0.1)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="flex items-center gap-2 mb-5">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: cat.color }}
                />
                <h3 className="font-semibold text-sm tracking-wide" style={{ color: '#e2e8f0' }}>
                  {cat.title}
                </h3>
              </div>

              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="font-mono text-xs" style={{ color: cat.color }}>›</span>
                    <span className="text-sm" style={{ color: '#94a3b8' }}>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
