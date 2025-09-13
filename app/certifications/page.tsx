"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award, Shield, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { certifications, partnerships } from "@/lib/data/certifications"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedImage } from "@/components/ui/animated-image"

const trustFactors = [
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Full compliance with all federal and state transportation regulations",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Recognized by leading industry organizations for excellence",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Rigorous quality management systems ensure consistent service",
  },
]

export default function CertificationsPage() {
  return (
    <div>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 to-white" padding="xl">
        <Container>
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <AnimatedText
                text="Certifications & Partnerships"
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
                Our commitment to excellence is validated through industry-leading certifications and strategic
                partnerships that ensure the highest standards of service and compliance.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" asChild>
                  <Link href="/contact/quote">
                    Work With Certified Experts
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Trust Factors */}
      <Section>
        <Container>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
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
            {trustFactors.map((factor, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{
                    backgroundColor: "#2563eb",
                    scale: 1.1,
                    rotate: 360,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <factor.icon className="h-8 w-8 text-primary-600" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{factor.title}</h3>
                <p className="text-gray-600">{factor.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Certifications */}
      <Section background="gray">
        <Container>
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Certifications</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These certifications demonstrate our commitment to safety, quality, and regulatory compliance in all
                aspects of our operations.
              </p>
            </div>
          </AnimatedSection>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, rotateY: -90 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    rotateY: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="text-center h-full hover:shadow-2xl transition-all duration-500 group border-0 shadow-lg hover:shadow-primary-500/20">
                  <CardHeader>
                    <motion.div
                      className="w-24 h-16 mx-auto mb-4 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src={cert.logo || "/placeholder.svg"}
                        alt={cert.name}
                        width={120}
                        height={60}
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </motion.div>
                    <CardTitle className="text-lg group-hover:text-primary-600 transition-colors duration-300">
                      {cert.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Partnerships */}
      <Section>
        <Container>
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Strategic Partnerships</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our partnerships with industry leaders enable us to provide comprehensive solutions and extend our
                service capabilities nationwide.
              </p>
            </div>
          </AnimatedSection>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {partnerships.map((partner, index) => (
              <motion.div
                key={partner.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8">
                    <motion.div
                      className="w-32 h-12 mx-auto flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        width={140}
                        height={50}
                        className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section background="gray">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeInLeft">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">What This Means for You</h2>
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
                      title: "Peace of Mind",
                      description:
                        "Our certifications ensure your cargo is handled according to the highest industry standards.",
                    },
                    {
                      title: "Regulatory Compliance",
                      description:
                        "We stay current with all regulations, protecting your business from compliance issues.",
                    },
                    {
                      title: "Extended Network",
                      description: "Our partnerships provide access to a broader network of services and capabilities.",
                    },
                    {
                      title: "Quality Assurance",
                      description: "Continuous improvement and quality management ensure consistent, reliable service.",
                    },
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4"
                      variants={{
                        hidden: { opacity: 0, x: -30 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      whileHover={{ x: 10, transition: { duration: 0.2 } }}
                    >
                      <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                        <CheckCircle className="h-6 w-6 text-success-600 mt-1 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
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
                  alt="Quality assurance and certifications"
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Trust the Certified Experts</h2>
              <p className="text-xl text-primary-100 mb-8">
                When you choose DpNEx Logistics, you're partnering with a certified, compliant, and trusted logistics
                provider.
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
                    <Link href="/contact/quote">
                      Get Certified Service
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
                    <Link href="/contact">Learn More</Link>
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
