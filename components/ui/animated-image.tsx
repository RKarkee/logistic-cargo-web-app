"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface AnimatedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  animation?: "scaleIn" | "slideIn" | "fadeIn" | "parallax"
  delay?: number
  priority?: boolean
}

export function AnimatedImage({
  src,
  alt,
  width,
  height,
  className,
  animation = "scaleIn",
  delay = 0,
  priority = false,
}: AnimatedImageProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const variants = {
    scaleIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut", delay },
      },
    },
    slideIn: {
      hidden: { opacity: 0, x: 50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut", delay },
      },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut", delay },
      },
    },
    parallax: {
      hidden: { opacity: 0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut", delay },
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants[animation]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn("overflow-hidden", className)}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        priority={priority}
      />
    </motion.div>
  )
}
