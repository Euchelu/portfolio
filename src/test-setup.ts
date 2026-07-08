import '@testing-library/jest-dom'
import { vi } from 'vitest'

// jsdom no implementa IntersectionObserver, que Framer Motion usa para
// las animaciones `whileInView`. Lo mockeamos para que los componentes
// se rendericen sin errores en los tests.
class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return []
  }
}
vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)

// matchMedia tampoco existe en jsdom; lo necesita `prefers-reduced-motion`.
vi.stubGlobal(
  'matchMedia',
  vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
)
