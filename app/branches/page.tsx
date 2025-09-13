"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { branches } from "@/lib/data/branches"
import { globalHubs } from "@/lib/data/global-hubs"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedText } from "@/components/ui/animated-text"

export default function BranchesPage() {
  return (
    <div>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 to-white" padding="xl">
        <Container>
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <AnimatedText
                text="Our Locations"
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
                With strategically located branches across the nation, we're always close to your business. Find the
                location nearest you and get in touch with our local team.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Contact Us Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Branches Grid */}
      <Section>
        <Container>
          <motion.div
            className="grid md:grid-cols-2 gap-8"
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
            {branches.map((branch, index) => (
              <motion.div
                key={branch.id}
                variants={{
                  hidden: { opacity: 0, y: 50, rotateY: index % 2 === 0 ? -15 : 15 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateY: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 group border-0 shadow-lg hover:shadow-primary-500/20">
                  <CardHeader>
                    <div className="flex  justify-between">
                      <div className="flex items-center space-x-3">
                        <CardTitle className="text-xl mb-2 group-hover:text-primary-600 transition-colors duration-300">
                          {branch.name}
                        </CardTitle>
                        {branch.isHeadquarters && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.2 + 0.5, duration: 0.3 }}
                          >
                            <Badge variant="default" className="mb-2 ">
                              Headquarters
                            </Badge>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <motion.div
                      className="flex items-start space-x-3"
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <MapPin className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{branch.address}</span>
                    </motion.div>

                    <motion.div
                      className="flex items-center space-x-3"
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <Phone className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <a
                        href={`tel:${branch.phone}`}
                        className="text-gray-700 hover:text-primary-600 transition-colors"
                      >
                        {branch.phone}
                      </a>
                    </motion.div>

                    <motion.div
                      className="flex items-center space-x-3"
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <Mail className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <a
                        href={`mailto:${branch.email}`}
                        className="text-gray-700 hover:text-primary-600 transition-colors"
                      >
                        {branch.email}
                      </a>
                    </motion.div>

                    <motion.div
                      className="flex items-start space-x-3"
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <Clock className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{branch.hours}</span>
                    </motion.div>

                    <div className="pt-4 min-h-[120px] border-t border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-2">Services Available:</h4>
                      <motion.div
                      className="flex flex-wrap gap-2"
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
                      {branch.services.map((service, serviceIndex) => (
                        <motion.div
                        key={serviceIndex}
                        variants={{
                          hidden: { opacity: 0, scale: 0 },
                          visible: { opacity: 1, scale: 1 },
                        }}
                        whileHover={{ scale: 1.1 }}
                        >
                        <Badge variant="outline" className="text-xs">
                          {service}
                        </Badge>
                        </motion.div>
                      ))}
                      </motion.div>
                    </div>

                    <div className="pt-4">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          variant="outline"
                          className="w-full bg-transparent group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300"
                          asChild
                        >
                          <a
                            href={`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View on Map
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Global Strategic Hubs */}
      <Section>
        <Container>
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Global Strategic Hubs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Worldwide network of strategic locations ensuring seamless international logistics connectivity
              </p>
            </div>
          </AnimatedSection>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
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
            {globalHubs.map((hub, index) => (
              <motion.div
                key={hub.id}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group border bg-accent-200 border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{hub.flag}</span>
                        <div>
                          <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
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
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Coverage Map Section */}
      {/* <Section background="gray">
        <Container>
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nationwide Coverage</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our strategic network of locations ensures efficient service delivery across the entire United States.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="scaleIn" delay={0.4}>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <MapPin className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  </motion.div>
                  <p className="text-gray-600">Interactive coverage map coming soon</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </Section> */}

      {/* CTA Section */}
      <Section className="bg-primary-600 text-white">
        <Container>
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Need Service in Your Area?</h2>
              <p className="text-xl text-primary-100 mb-8">
                Contact your nearest branch or reach out to our headquarters for personalized assistance with your
                logistics needs.
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
