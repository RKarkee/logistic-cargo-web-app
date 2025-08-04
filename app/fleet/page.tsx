"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle, Activity, BookOpen, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { fleetData } from "@/lib/data/fleet"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedImage } from "@/components/ui/animated-image"

const iconMap = {
  CheckCircle,
  BookOpen,
  Activity,
  Phone,
}

export default function FleetPage() {
  return (
    <div>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 to-white" padding="xl">
        <Container>
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <AnimatedText
                text={fleetData.hero.title}
                as="h1"
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                animation="fadeInWords"
              />
              <motion.p
                className="text-xl text-primary-600 font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {fleetData.hero.subtitle}
              </motion.p>
              <motion.p
                className="text-lg text-gray-600 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                {fleetData.hero.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" asChild>
                  <Link href="/quote">
                    Request Service
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Fleet Overview Stats */}
      <Section>
        <Container>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
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
              { value: fleetData.overview.totalVehicles, label: "Total Vehicles" },
              { value: fleetData.overview.averageAge, label: "Average Fleet Age" },
              { value: fleetData.overview.maintenanceUptime, label: "Maintenance Uptime" },
              { value: fleetData.overview.safetyRating, label: "Safety Rating" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className="text-4xl font-bold text-primary-600 mb-2"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(37, 99, 235, 0)",
                      "0 0 10px rgba(37, 99, 235, 0.5)",
                      "0 0 0px rgba(37, 99, 235, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Fleet Categories */}
      <Section background="gray">
        <Container>
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Fleet Categories</h2>
              <p className="text-xl text-gray-600">Diverse vehicles to meet every transportation need</p>
            </div>
          </AnimatedSection>
          <motion.div
            className="grid lg:grid-cols-2 gap-8"
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
            {fleetData.categories.map((category, index) => (
              <motion.div
                key={category.id}
                variants={{
                  hidden: { opacity: 0, y: 50, rotateX: -15 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group">
                  <div className="aspect-video relative overflow-hidden">
                    <AnimatedImage
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      animation="scaleIn"
                      delay={index * 0.2}
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl group-hover:text-primary-600 transition-colors duration-300">
                        {category.name}
                      </CardTitle>
                      <motion.div
                        className="text-2xl font-bold text-primary-600"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {category.count}
                      </motion.div>
                    </div>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {category.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Specifications:</h4>
                    <motion.ul
                      className="space-y-2"
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
                      {category.specs.map((spec, specIndex) => (
                        <motion.li
                          key={specIndex}
                          className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                          variants={{
                            hidden: { opacity: 0, x: -10 },
                            visible: { opacity: 1, x: 0 },
                          }}
                          whileHover={{ x: 5, transition: { duration: 0.2 } }}
                        >
                          <motion.div
                            className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3 flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.2 }}
                          />
                          {spec}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Safety & Maintenance */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeInLeft">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{fleetData.safety.title}</h2>
                <p className="text-lg text-gray-600 mb-8">{fleetData.safety.description}</p>
                <motion.div
                  className="grid sm:grid-cols-2 gap-6"
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
                  {fleetData.safety.features.map((feature, index) => {
                    const IconComponent = iconMap[feature.icon as keyof typeof iconMap]
                    return (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3"
                        variants={{
                          hidden: { opacity: 0, x: -30 },
                          visible: { opacity: 1, x: 0 },
                        }}
                        whileHover={{ x: 10, transition: { duration: 0.2 } }}
                      >
                        <motion.div
                          className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0"
                          whileHover={{
                            backgroundColor: "#2563eb",
                            scale: 1.1,
                            rotate: 360,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <IconComponent className="h-5 w-5 text-primary-600" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeInRight" delay={0.3}>
              <div className="relative">
                <AnimatedImage
                  src="/placeholder.svg?height=500&width=600"
                  alt="Fleet safety and maintenance"
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

      {/* Technology */}
      <Section background="gray">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeInLeft">
              <div className="relative">
                <AnimatedImage
                  src="/placeholder.svg?height=500&width=600"
                  alt="Fleet technology systems"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-lg"
                  animation="scaleIn"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeInRight" delay={0.3}>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{fleetData.technology.title}</h2>
                <p className="text-lg text-gray-600 mb-8">{fleetData.technology.description}</p>
                <motion.div
                  className="space-y-3"
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
                  {fleetData.technology.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      whileHover={{ x: 10, transition: { duration: 0.2 } }}
                    >
                      <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                        <CheckCircle className="h-5 w-5 text-success-600 flex-shrink-0" />
                      </motion.div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Experience Our Fleet Excellence</h2>
              <p className="text-xl text-primary-100 mb-8">
                Ready to see how our modern, well-maintained fleet can serve your transportation needs?
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
                      Get Fleet Quote
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
                    <Link href="/contact">Schedule Fleet Tour</Link>
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
