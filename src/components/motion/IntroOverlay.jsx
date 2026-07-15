import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { site } from '../../data/site'

export default function IntroOverlay() {
  const reduceMotion = useReducedMotion()
  const [show, setShow] = useState(!reduceMotion)

  useEffect(() => {
    if (reduceMotion) {
      setShow(false)
      return undefined
    }
    const timer = setTimeout(() => setShow(false), 1400)
    return () => clearTimeout(timer)
  }, [reduceMotion])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0c]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, letterSpacing: '0.4em' }}
            animate={{ opacity: 1, scale: 1, letterSpacing: '0.12em' }}
            exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-3xl font-bold text-[#d4a017] md:text-5xl"
          >
            {site.brand}
            <span className="text-[#f4f1ea]">.</span>
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-[#d4a017]"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
