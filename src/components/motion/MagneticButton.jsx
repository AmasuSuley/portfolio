import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { useMediaQuery } from '../../hooks/useMediaQuery'

export default function MagneticButton({
  children,
  className = '',
  href,
  onClick,
  type = 'button',
  strength = 0.28,
  disabled = false,
  download,
  target,
  rel,
}) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const isDesktop = useMediaQuery('(pointer: fine)')
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 280, damping: 22 })
  const springY = useSpring(y, { stiffness: 280, damping: 22 })

  const handleMove = (e) => {
    if (reduceMotion || !isDesktop || !ref.current || disabled) return
    const rect = ref.current.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    x.set(dx * strength)
    y.set(dy * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const shared = {
    ref,
    className,
    style: { x: springX, y: springY },
    onMouseMove: handleMove,
    onMouseLeave: reset,
  }

  if (href) {
    return (
      <motion.a href={href} download={download} target={target} rel={rel} {...shared}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type={type} onClick={onClick} disabled={disabled} {...shared}>
      {children}
    </motion.button>
  )
}
