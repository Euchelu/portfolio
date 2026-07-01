import { useEffect, useState } from 'react'

export function useTypingEffect(words: string[], speed = 80, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    const delay = deleting
      ? speed / 2
      : charIdx === current.length
      ? pause
      : speed

    const timer = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setDisplay(current.slice(0, charIdx + 1))
        setCharIdx((c) => c + 1)
      } else if (!deleting && charIdx === current.length) {
        setDeleting(true)
      } else if (deleting && charIdx > 0) {
        setDisplay(current.slice(0, charIdx - 1))
        setCharIdx((c) => c - 1)
      } else {
        setDeleting(false)
        setWordIdx((w) => (w + 1) % words.length)
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}
