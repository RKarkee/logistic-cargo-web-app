"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { certifications, partnerships } from "@/lib/data/certifications"

export function CertificationsCarousel() {
    const certScrollRef = useRef<HTMLDivElement>(null)
    const partnerScrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const createScrollEffect = (scrollContainer: HTMLDivElement, speed: number) => {
            let scrollSpeed = speed
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
        }

        const certContainer = certScrollRef.current
        const partnerContainer = partnerScrollRef.current

        let certCleanup: (() => void) | undefined
        let partnerCleanup: (() => void) | undefined

        if (certContainer) {
            certCleanup = createScrollEffect(certContainer, 0.8) // Slower for certifications
        }

        if (partnerContainer) {
            partnerCleanup = createScrollEffect(partnerContainer, 1.2) // Faster for partnerships
        }

        return () => {
            certCleanup?.()
            partnerCleanup?.()
        }
    }, [])

    // Duplicate items for seamless infinite scroll
    const duplicatedCertifications = [...certifications, ...certifications]
    const duplicatedPartnerships = [...partnerships, ...partnerships]

    return (
        <div className="w-full space-y-16">
            {/* Certifications Section */}
            <div>
                <h3 className="text-xl font-semibold text-center mb-8 text-gray-900">
                    Our Certifications & Memberships
                </h3>
                <div className="w-full overflow-hidden">
                    <div
                        ref={certScrollRef}
                        className="flex gap-6 overflow-x-hidden py-4 scrollbar-hide"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {duplicatedCertifications.map((cert, index) => (
                            <Card
                                key={`cert-${cert.id}-${index}`}
                                className="flex-shrink-0 w-64 hover:shadow-lg transition-shadow duration-300 bg-white border border-gray-200"
                            >
                                <CardContent className="p-6 h-52 flex flex-col items-center justify-center text-center">
                                    <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gray-100 rounded-lg">
                                        <Image
                                            src={cert.logo}
                                            alt={cert.name}
                                            width={48}
                                            height={48}
                                            className="object-contain"
                                        />
                                    </div>
                                    <h4 className="font-semibold text-gray-900 mb-2 text-sm leading-tight">
                                        {cert.name}
                                    </h4>
                                    <p className="text-xs text-gray-600 leading-relaxed">
                                        {cert.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Partnerships Section */}
            <div>
                <h3 className="text-xl font-semibold text-center mb-8 text-gray-900">
                    Our Global Partners
                </h3>
                <div className="w-full overflow-hidden">
                    <div
                        ref={partnerScrollRef}
                        className="flex gap-6 overflow-x-hidden py-4 scrollbar-hide"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {duplicatedPartnerships.map((partner, index) => (
                            <Card
                                key={`partner-${partner.id}-${index}`}
                                className="flex-shrink-0 w-48 hover:shadow-lg transition-shadow duration-300 bg-white border border-gray-200"
                            >
                                <CardContent className="p-4 h-44 flex flex-col items-center justify-center">
                                    <div className="w-full h-24 flex items-center justify-center bg-white rounded mb-2">
                                        <Image
                                            src={partner.logo}
                                            alt={partner.name}
                                            width={120}
                                            height={60}
                                            className="object-contain max-w-full max-h-full opacity-80 hover:opacity-100 transition-opacity duration-300"
                                        />
                                    </div>
                                    <div className="w-full text-center">
                                        <span className="font-bold text-gray-900 text-sm">{partner.name}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}