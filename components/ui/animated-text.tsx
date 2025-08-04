"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
  animation?: "typewriter" | "fadeInWords" | "slideInWords"
  delay?: number
}

export function AnimatedText({
  text,
  className,
  as: Component = "p",
  animation = "fadeInWords",
  delay = 0,
}: AnimatedTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const words = text.split(" ")

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  }

  const wordVariants = {
    fadeInWords: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      },
    },
    slideInWords: {
      hidden: { opacity: 0, x: -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      },
    },
    typewriter: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.1 },
      },
    },
  }

  return (
    <Component ref={ref} className={cn(className)}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="inline-block"
      >
        {words.map((word, index) => (
          <motion.span key={index} variants={wordVariants[animation]} className="inline-block mr-2">
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  )
}
