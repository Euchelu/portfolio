import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import type { ReactNode } from 'react'
import { LanguageProvider } from '../context/LanguageContext'
import { useLanguage } from './useLanguage'

const wrapper = ({ children }: { children: ReactNode }) => (
  <LanguageProvider>{children}</LanguageProvider>
)

describe('useLanguage', () => {
  it('throws when used outside of a LanguageProvider', () => {
    expect(() => renderHook(() => useLanguage())).toThrow(
      /must be used inside LanguageProvider/,
    )
  })

  it('defaults to Spanish', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper })
    expect(result.current.lang).toBe('es')
    expect(result.current.tr.nav.about).toBe('Sobre mí')
  })

  it('toggles between Spanish and English', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper })

    act(() => result.current.toggleLang())
    expect(result.current.lang).toBe('en')
    expect(result.current.tr.nav.about).toBe('About')

    act(() => result.current.toggleLang())
    expect(result.current.lang).toBe('es')
  })
})
