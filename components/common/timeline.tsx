"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface TimelineItem {
  year: string
  title: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="relative" ref={ref}>
      {/* Animated timeline line */}
      <motion.div
        className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-primary-200"
        initial={{ height: 0 }}
        animate={isInView ? { height: "100%" } : { height: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      <motion.div
        className="space-y-8"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="relative flex items-center"
            variants={{
              hidden: {
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                },
              },
            }}
          >
            {/* Animated timeline dot */}
            <motion.div
              className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center z-10"
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{
                delay: index * 0.3 + 0.5,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.2,
                boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)",
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className="w-3 h-3 bg-white rounded-full"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  delay: index * 0.3 + 0.8,
                  duration: 0.3,
                }}
              />
            </motion.div>

            {/* Content with alternating sides */}
            <motion.div
              className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:ml-auto"}`}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                initial={{
                  rotateY: index % 2 === 0 ? -15 : 15,
                  opacity: 0,
                }}
                animate={isInView ? { rotateY: 0, opacity: 1 } : { rotateY: index % 2 === 0 ? -15 : 15, opacity: 0 }}
                transition={{
                  delay: index * 0.3 + 0.2,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <motion.div
                  className="text-primary-600 font-bold text-lg mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    delay: index * 0.3 + 0.4,
                    duration: 0.4,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {item.year}
                </motion.div>
                <motion.h3
                  className="text-xl font-semibold text-gray-900 mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{
                    delay: index * 0.3 + 0.6,
                    duration: 0.4,
                  }}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{
                    delay: index * 0.3 + 0.8,
                    duration: 0.4,
                  }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
