import { useLanguage } from '../hooks/useLanguage'

export default function Footer() {
  const { tr } = useLanguage()
  return (
    <footer className="py-8 px-6 text-center" style={{ borderTop: '1px solid rgba(59,130,246,0.08)' }}>
      <p className="text-xs font-mono" style={{ color: '#8593a9' }}>
        {tr.footer.built}{' '}
        <span style={{ color: '#3b82f6' }}>José Ángel Ceballos</span>
        {' '}·{' '}
        <span>{new Date().getFullYear()}</span>
      </p>
    </footer>
  )
}
