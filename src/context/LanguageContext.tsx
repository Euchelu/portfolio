import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import { t, type Lang } from '../i18n/translations'

interface LanguageContextType {
  lang: Lang
  toggleLang: () => void
  tr: typeof t['es']
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')

  const toggleLang = () => setLang((l) => (l === 'es' ? 'en' : 'es'))

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, tr: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
