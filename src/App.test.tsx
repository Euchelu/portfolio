import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App (smoke test)', () => {
  it('renders the full page without crashing', () => {
    render(<App />)
    // "José Ángel" aparece al menos en el logo de la navbar (y en el hero).
    expect(screen.getAllByText(/José Ángel/).length).toBeGreaterThan(0)
  })

  it('renders the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })
})
