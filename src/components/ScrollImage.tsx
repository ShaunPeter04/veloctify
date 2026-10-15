import { useRef } from 'react'
import type { ComponentProps } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

// Transform only the image; its fixed-size frame keeps the page layout steady.
export function ScrollImage(props: Pick<ComponentProps<'img'>, 'src' | 'alt' | 'loading' | 'fetchPriority'>) {
  const image = useRef<HTMLImageElement>(null)
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: image, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1.16, 1.08])
  return <motion.img {...props} ref={image} className="scroll-image" style={reducedMotion ? undefined : { y, scale }} />
}
