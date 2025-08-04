"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { ServiceCard } from "@/components/common/service-card"
import { services } from "@/lib/data/services"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedImage } from "@/components/ui/animated-image"

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 to-white" padding="xl">
        <Container>
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <AnimatedText
                text="Our Services"
                as="h1"
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                animation="fadeInWords"
              />
              <motion.p
                className="text-xl text-gray-600 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Comprehensive logistics solutions designed to meet your unique business needs. From cargo transportation
                to specialized handling, we've got you covered.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" asChild>
                  <Link href="/quote">
                    Get Started Today
                    <motion.div className="ml-2" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section>
        <Container>
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
                  hidden: { opacity: 0, y: 50, rotateX: -15 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                <ServiceCard {...service} showCTA={true} />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Why Choose Our Services */}
      <Section background="gray">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeInLeft">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Why Choose Our Services?</h2>
                <motion.div
                  className="space-y-6"
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
                  {[
                    {
                      title: "Integrated Solutions",
                      description: "Our services work together seamlessly to provide end-to-end logistics solutions.",
                    },
                    {
                      title: "Scalable & Flexible",
                      description:
                        "Whether you're a startup or enterprise, our services scale with your business needs.",
                    },
                    {
                      title: "Technology-Driven",
                      description:
                        "Advanced tracking, automation, and analytics give you complete visibility and control.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4"
                      variants={{
                        hidden: { opacity: 0, x: -30 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      whileHover={{ x: 10, transition: { duration: 0.2 } }}
                    >
                      <motion.div
                        className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                        whileHover={{ scale: 1.2, backgroundColor: "#2563eb" }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className="w-3 h-3 bg-primary-600 rounded-full"
                          whileHover={{ backgroundColor: "#ffffff" }}
                        />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeInRight" delay={0.3}>
              <div className="relative">
                <AnimatedImage
                  src="/placeholder.svg?height=500&width=600"
                  alt="LogiFlow Solutions service capabilities"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-lg"
                  animation="scaleIn"
                />
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600 text-white">
        <Container>
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-primary-100 mb-8">
                Let us create a customized logistics solution that fits your specific requirements and budget.
              </p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
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
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/quote">
                      Request a Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-primary-600 bg-transparent"
                    asChild
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </AnimatedSection>
        </Container>
      </Section>
    </div>
  )
}
