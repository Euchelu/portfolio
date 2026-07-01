import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useTypingEffect } from './useTypingEffect'

beforeEach(() => {
  vi.useFakeTimers()
})

afterEach(() => {
  vi.useRealTimers()
})

describe('useTypingEffect', () => {
  it('starts with an empty string', () => {
    const { result } = renderHook(() => useTypingEffect(['Hello'], 80, 2000))
    expect(result.current).toBe('')
  })

  it('types the first character after one tick', async () => {
    const { result } = renderHook(() => useTypingEffect(['Hi'], 80, 2000))
    await act(async () => {
      vi.advanceTimersByTime(80)
    })
    expect(result.current).toBe('H')
  })

  it('types the full word after enough ticks', async () => {
    const word = 'Dev'
    const { result } = renderHook(() => useTypingEffect([word], 80, 2000))
    for (let i = 0; i < word.length; i++) {
      await act(async () => {
        vi.advanceTimersByTime(80)
      })
    }
    expect(result.current).toBe(word)
  })
})
