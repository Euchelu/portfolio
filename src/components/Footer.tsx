export default function Footer() {
  return (
    <footer
      className="py-8 px-6 text-center"
      style={{ borderTop: '1px solid rgba(59,130,246,0.08)' }}
    >
      <p className="text-xs font-mono" style={{ color: '#334155' }}>
        Diseñado y construido por{' '}
        <span style={{ color: '#3b82f6' }}>José Ángel Ceballos</span>
        {' '}·{' '}
        <span>{new Date().getFullYear()}</span>
      </p>
    </footer>
  )
}
