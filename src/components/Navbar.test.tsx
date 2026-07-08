import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { LanguageProvider } from '../context/LanguageContext'
import Navbar from './Navbar'

function renderNavbar() {
  return render(
    <LanguageProvider>
      <Navbar />
    </LanguageProvider>,
  )
}

afterEach(() => {
  cleanup()
  Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
})

describe('Navbar', () => {
  it('renders the navigation with the brand and links', () => {
    renderNavbar()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByText('José Ángel')).toBeInTheDocument()
  })

  it('is transparent at the top of the page', () => {
    renderNavbar()
    const nav = screen.getByRole('navigation')
    expect(nav.style.background).toBe('transparent')
  })

  it('becomes solid after scrolling past the threshold', () => {
    renderNavbar()
    const nav = screen.getByRole('navigation')

    Object.defineProperty(window, 'scrollY', { value: 100, configurable: true })
    fireEvent.scroll(window)

    expect(nav.style.background).toContain('rgba(2, 11, 24')
    expect(nav.style.backdropFilter).toContain('blur')
  })

  it('toggles the language label between EN and ES', () => {
    renderNavbar()
    // Empieza en español, así que el botón ofrece cambiar a EN
    const toggle = screen.getAllByRole('button', { name: /toggle language/i })[0]
    expect(toggle).toHaveTextContent('EN')
    fireEvent.click(toggle)
    expect(toggle).toHaveTextContent('ES')
  })
})
