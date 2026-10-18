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

describe('translations content', () => {
  const placeholders = ['Empresa / Proyecto', 'Nombre del Bootcamp', 'Descripción de tu', 'Company / Project', 'Bootcamp Name', 'Description of your']

  it.each(['es', 'en'] as const)('contains no template placeholder text (%s)', (lang) => {
    const text = JSON.stringify(t[lang])
    for (const placeholder of placeholders) {
      expect(text).not.toContain(placeholder)
    }
  })

  it('has the same number of experience events, projects and interests in both languages', () => {
    expect(t.en.experience.events.length).toBe(t.es.experience.events.length)
    expect(t.en.projects.items.length).toBe(t.es.projects.items.length)
    expect(t.en.interests.items.length).toBe(t.es.interests.items.length)
  })
})
