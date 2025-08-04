"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface FloatingElementProps {
  children: React.ReactNode
  duration?: number
  delay?: number
  amplitude?: number
}

export function FloatingElement({ children, duration = 3, delay = 0, amplitude = 10 }: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [-amplitude, amplitude, -amplitude],
      }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}

export function ParallaxElement({
  children,
  speed = 0.5,
}: {
  children: React.ReactNode
  speed?: number
}) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      style={{
        y: scrollY * speed,
      }}
    >
      {children}
    </motion.div>
  )
}
