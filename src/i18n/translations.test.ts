import { describe, it, expect } from 'vitest'
import { t } from './translations'

describe('translations', () => {
  it('exposes both Spanish and English dictionaries', () => {
    expect(t.es).toBeDefined()
    expect(t.en).toBeDefined()
  })

  it('has the same top-level sections in both languages', () => {
    expect(Object.keys(t.en).sort()).toEqual(Object.keys(t.es).sort())
  })

  it('has matching navigation keys in both languages', () => {
    expect(Object.keys(t.en.nav).sort()).toEqual(Object.keys(t.es.nav).sort())
  })

  it('provides a non-empty list of hero roles in both languages', () => {
    expect(Array.isArray(t.es.hero.roles)).toBe(true)
    expect(t.es.hero.roles.length).toBeGreaterThan(0)
    expect(t.en.hero.roles.length).toBe(t.es.hero.roles.length)
  })

  it('translates the "about" nav label differently per language', () => {
    expect(t.es.nav.about).toBe('Sobre mí')
    expect(t.en.nav.about).toBe('About')
  })
})
