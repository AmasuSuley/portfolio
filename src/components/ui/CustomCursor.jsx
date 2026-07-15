import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setEnabled(fine && !reduce)
  }, [])

  useEffect(() => {
    if (!enabled) return undefined

    document.documentElement.classList.add('has-custom-cursor')

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const onLeave = () => setVisible(false)
    const onOver = (e) => {
      const target = e.target.closest('a, button, [data-cursor="hover"]')
      setHovering(Boolean(target))
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    document.documentElement.addEventListener('mouseleave', onLeave)

    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-[80] mix-blend-difference"
          animate={{
            x: pos.x - (hovering ? 22 : 6),
            y: pos.y - (hovering ? 22 : 6),
            width: hovering ? 44 : 12,
            height: hovering ? 44 : 12,
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.4 }}
        >
          <div className="h-full w-full rounded-full bg-white" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
