"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { globalHubs } from "@/lib/data/global-hubs"
import { MapPin } from "lucide-react"

export function GlobalHubsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollSpeed = 1
    let isScrolling = true

    const scroll = () => {
      if (!isScrolling) return

      scrollContainer.scrollLeft += scrollSpeed

      // Reset to beginning when reaching the end (seamless loop)
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0
      }
    }

    const intervalId = setInterval(scroll, 30) // Smooth scrolling every 30ms

    // Pause on hover
    const handleMouseEnter = () => {
      isScrolling = false
    }

    const handleMouseLeave = () => {
      isScrolling = true
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      clearInterval(intervalId)
      scrollContainer?.removeEventListener("mouseenter", handleMouseEnter)
      scrollContainer?.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  // Duplicate items for seamless infinite scroll
  const duplicatedHubs = [...globalHubs, ...globalHubs]

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden py-4 scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {duplicatedHubs.map((hub, index) => (
          <Card
            key={`${hub.id}-${index}`}
            className="flex-shrink-0 w-80 hover:shadow-lg transition-shadow duration-300 bg-accent-100 border border-gray-200"
          >
            <CardContent className="p-6 h-44 flex flex-col justify-between">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{hub.flag}</span>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">
                      {hub.city} ({hub.hubCode})
                    </h3>
                    <p className="text-sm font-medium text-primary-600">{hub.country}</p>
                  </div>
                </div>
               
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 text-sm text-gray-600 leading-relaxed">
                    <MapPin className="h-5 w-5 align-start text-secondary-600 flex-shrink-0" />
                    <span>{hub.address}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}