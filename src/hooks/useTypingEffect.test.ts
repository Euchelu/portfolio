import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useTypingEffect } from './useTypingEffect'

beforeEach(() => {
  vi.useFakeTimers()
})

afterEach(() => {
  vi.useRealTimers()
})

// Avanza el hook `count` ticks del temporizador dentro de act().
async function tick(count: number, ms: number) {
  for (let i = 0; i < count; i++) {
    await act(async () => {
      vi.advanceTimersByTime(ms)
    })
  }
}

describe('useTypingEffect', () => {
  it('starts with an empty string', () => {
    const { result } = renderHook(() => useTypingEffect(['Hello'], 80, 2000))
    expect(result.current).toBe('')
  })

  it('types the first character after one tick', async () => {
    const { result } = renderHook(() => useTypingEffect(['Hi'], 80, 2000))
    await tick(1, 80)
    expect(result.current).toBe('H')
  })

  it('types the full word after enough ticks', async () => {
    const word = 'Dev'
    const { result } = renderHook(() => useTypingEffect([word], 80, 2000))
    await tick(word.length, 80)
    expect(result.current).toBe(word)
  })

  it('cycles from the first word to the second after typing, pausing and deleting', async () => {
    const { result } = renderHook(() => useTypingEffect(['AB', 'XY'], 80, 200))

    // Escribe "AB"
    await tick(2, 80)
    expect(result.current).toBe('AB')

    // Pausa (200ms) -> pasa a modo borrado
    await tick(1, 200)

    // Borra "AB" (2 ticks a speed/2 = 40ms) -> queda vacío
    await tick(2, 40)
    expect(result.current).toBe('')

    // Un tick más avanza a la segunda palabra y empieza a escribirla
    await tick(2, 80)
    expect(result.current).toBe('X')
  })

  it('clears the pending timeout on unmount', async () => {
    const clearSpy = vi.spyOn(globalThis, 'clearTimeout')
    const { unmount } = renderHook(() => useTypingEffect(['Hello'], 80, 2000))
    unmount()
    expect(clearSpy).toHaveBeenCalled()
    clearSpy.mockRestore()
  })
})
