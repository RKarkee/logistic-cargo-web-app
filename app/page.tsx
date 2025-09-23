"use client"

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ArrowRight, CheckCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/common/service-card"
import { StatsSection } from "@/components/common/stats-section"
import { companyInfo } from "@/lib/data/company-info"
import { services } from "@/lib/data/services"
import { testimonials } from "@/lib/data/testimonials"
import { certifications, partnerships } from "@/lib/data/certifications"
import { TestimonialsCarousel } from "@/components/common/testimonials-carousel"
import { CertificationsCarousel } from "@/components/common/certifications-carousel"
import { GlobalHubsCarousel } from "@/components/common/global-hubs-carousel"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedImage } from "@/components/ui/animated-image"
import { FloatingElement } from "@/components/ui/floating-elements"
import { FlashNotices } from "@/components/common/flash-notices"

const whyChooseUs = [
  "Scalable solutions for all businesses",
  "Real-time tracking & transparency",
  "Dedicated customer support",
  "Competitive pricing",
  "Claims processed as per carrier guidelines",
  "Global network coverage",
]

export default function HomePage() {
  const router = useRouter()
  const [trackingId, setTrackingId] = useState("")

  const handleTrackingSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (trackingId.trim()) {
      router.push(`/my-track?trackId=${encodeURIComponent(trackingId)}`)
    }
  }

  return (
    <div>
      {/* Flash Notices */}
      <FlashNotices />
      
      {/* Hero Section */}
      <Section className="relative overflow-hidden min-h-screen" padding="xl">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            backgroundImage: 'url(/banner-04.jpg)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10">
          {/* Floating background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <FloatingElement duration={4} delay={0} amplitude={20}>
              <div className="absolute top-20 left-10 w-32 h-32 bg-primary-200 rounded-full opacity-20" />
            </FloatingElement>
            <FloatingElement duration={6} delay={2} amplitude={15}>
              <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary-300 rounded-full opacity-30" />
            </FloatingElement>
          </div>

          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10 min-h-screen py-20">
              <AnimatedSection animation="fadeInLeft" delay={0.2}>
                <div className="space-y-6">
                  <AnimatedText
                    text="Your Trusted Logistics Partner"
                    as="h1"
                    className="text-4xl lg:text-6xl font-bold text-primary-900 leading-tight"
                    animation="fadeInWords"
                    delay={0.5}
                  />
                  <motion.p
                    className="text-xl text-white leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                  >
                    {companyInfo.description}
                  </motion.p>
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.6 }}
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" asChild className="bg-primary-600 hover:bg-primary-900 text-white">
                        <Link href="/contact/quote">
                          Request a Quote
                          <motion.div className="ml-2" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                            <ArrowRight className="h-5 w-5" />
                          </motion.div>
                        </Link>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="lg" variant="outline" asChild>
                        <Link href="/services">Learn More</Link>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fadeInRight" delay={0.4}>
                <div className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl p-8 flex flex-col items-center">
                  <h2 className="text-2xl font-bold text-white mb-4">My Courier Track</h2>
                  <form
                    className="flex flex-col sm:flex-row gap-4 w-full"
                    onSubmit={handleTrackingSearch}
                  >
                    <input
                      type="text"
                      name="trackId"
                      placeholder="Enter your tracking number"
                      value={trackingId}
                      onChange={(e) => setTrackingId(e.target.value)}
                      className="flex-1 px-4 py-2 rounded-lg border border-primary-200 focus:border-primary-500 outline-none"
                      required
                    />
                    <Button type="submit" size="lg" className="bg-accent-600 hover:bg-accent-700 text-white">
                      Search
                    </Button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </Container>
        </div>
      </Section>

      {/* Stats Section */}
      <StatsSection />

      {/* Services Section */}
      <Section background="gray">
        <Container>
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center mb-12">
              <AnimatedText
                text="Our Core Services"
                as="h2"
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                animation="fadeInWords"
              />
              <motion.p
                className="text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Comprehensive logistics solutions tailored to meet your business needs
              </motion.p>
            </div>
          </AnimatedSection>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {services.main.map((service, index) => (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <ServiceCard {...service} showCTA={true} />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Why Choose Us Section */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Choose DPNEX?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-success-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild className="bg-primary-600 hover:bg-primary-900 text-white">
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Professional logistics team"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
            {/* Testimonials */}
      <Section className="bg-gradient-to-br from-blue-50 to-indigo-50">
        <Container>
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-primary-600 max-w-2xl mx-auto">
                Hear from businesses that trust DpNex for their logistics needs
              </p>
            </div>
            <TestimonialsCarousel 
              testimonials={testimonials}
            />
          </AnimatedSection>
        </Container>
      </Section>

      {/* Certifications & Partners */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Certifications & Partners</h2>
            <p className="text-xl text-primary-600">Trusted certifications and strategic partnerships</p>
          </div>

          <CertificationsCarousel />
        </Container>
      </Section>

      {/* Global Strategic Hubs */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Global Strategic Hubs</h2>
            <p className="text-xl text-primary-600">Worldwide network ensuring seamless logistics connectivity</p>
          </div>
          <GlobalHubsCarousel />
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-900 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Optimize Your Logistics?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Get a personalized quote for your shipping needs and discover how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="bg-accent-500 hover:bg-accent-600 text-white">
                <Link href="/contact/quote">
                  Get Your Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-primary-600 bg-transparent"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
