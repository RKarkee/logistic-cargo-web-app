"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, AlertCircle, Info, Megaphone, Bell, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getHomepageFlashNotices, type NewsNotice } from "@/lib/data/news-notices"
import { cn } from "@/lib/utils"
import Link from "next/link"

const typeIcons = {
  news: Info,
  notice: Bell,
  alert: AlertCircle,
  update: Megaphone,
  announcement: Megaphone
}

const priorityStyles = {
  urgent: "bg-red-600 text-white border-red-700",
  high: "bg-orange-500 text-white border-orange-600",
  medium: "bg-blue-500 text-white border-blue-600", 
  low: "bg-gray-500 text-white border-gray-600"
}

export function FlashNotices() {
  const [notices, setNotices] = useState<NewsNotice[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const flashNotices = getHomepageFlashNotices()
    setNotices(flashNotices)
  }, [])

  useEffect(() => {
    if (notices.length <= 1 || isPaused) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % notices.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(timer)
  }, [notices.length, isPaused])

  if (!isVisible || notices.length === 0) return null

  const currentNotice = notices[currentIndex]
  const IconComponent = typeIcons[currentNotice.type]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "relative border-b-2 p-3",
          priorityStyles[currentNotice.priority]
        )}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="container mx-auto flex items-center justify-between gap-4">
          {/* Navigation for multiple notices */}
          {notices.length > 1 && (
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 p-1 h-8 w-8"
              onClick={() => setCurrentIndex((prev) => (prev - 1 + notices.length) % notices.length)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          )}

          {/* Notice Content */}
          <div className="flex-1 flex items-center gap-3 min-w-0">
            <div className="flex items-center gap-2 flex-shrink-0">
              <IconComponent className="h-5 w-5" />
              <Badge
                variant="secondary"
                className="bg-white/20 text-white border-white/30 text-xs uppercase tracking-wide"
              >
                {currentNotice.type}
              </Badge>
            </div>
            
            <motion.div
              key={currentNotice.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="min-w-0 flex-1"
            >
              <Link
                href="/news-notice"
                className="block hover:underline"
              >
                <p className="font-medium truncate pr-2">
                  {currentNotice.title}
                </p>
                <p className="text-sm opacity-90 truncate pr-2">
                  {currentNotice.summary}
                </p>
              </Link>
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Dots indicator for multiple notices */}
            {notices.length > 1 && (
              <div className="flex gap-1">
                {notices.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-200",
                      index === currentIndex
                        ? "bg-white"
                        : "bg-white/40 hover:bg-white/60"
                    )}
                  />
                ))}
              </div>
            )}

            {/* Navigation for multiple notices */}
            {notices.length > 1 && (
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20 p-1 h-8 w-8"
                onClick={() => setCurrentIndex((prev) => (prev + 1) % notices.length)}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            )}

            {/* Close button */}
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 p-1 h-8 w-8"
              onClick={() => setIsVisible(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Progress bar for auto-rotation */}
        {notices.length > 1 && !isPaused && (
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-white/60"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
            key={currentIndex}
          />
        )}
      </motion.div>
    </AnimatePresence>
  )
}