"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { successStories } from "@/lib/data/success-stories"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedImage } from "@/components/ui/animated-image"

export default function SuccessStoriesPage() {
  return (
    <div>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 to-white" padding="xl">
        <Container>
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <AnimatedText
                text="Success Stories"
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
                Discover how we've helped businesses across various industries overcome their logistics challenges and
                achieve remarkable results.
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
                    Start Your Success Story
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Success Stories */}
      <Section>
        <Container>
          <div className="space-y-16">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <AnimatedSection
                  animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
                  delay={index * 0.1}
                  className={index % 2 === 1 ? "lg:col-start-2" : ""}
                >
                  <div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.3, duration: 0.3 }}
                    >
                      <Badge variant="secondary" className="mb-4">
                        {story.industry}
                      </Badge>
                    </motion.div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{story.title}</h2>

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
                        { title: "The Challenge", content: story.challenge },
                        { title: "Our Solution", content: story.solution },
                        { title: "The Results", content: story.outcome },
                      ].map((section, sectionIndex) => (
                        <motion.div
                          key={sectionIndex}
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 },
                          }}
                        >
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{section.title}</h3>
                          <p className="text-gray-600">{section.content}</p>
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.8, duration: 0.6 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="mt-6 bg-primary-50 border-primary-200 hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6">
                          <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                          >
                            <Quote className="h-8 w-8 text-primary-600 mb-4" />
                          </motion.div>
                          <p className="text-gray-700 italic mb-4">"{story.testimonial}"</p>
                          <div className="flex items-center space-x-3">
                            <Image
                              src={story.clientLogo || "/placeholder.svg"}
                              alt={story.client}
                              width={120}
                              height={40}
                              className="opacity-70"
                            />
                            <div className="text-sm text-gray-600">
                              <div className="font-medium">{story.client}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </AnimatedSection>

                <AnimatedSection
                  animation={index % 2 === 0 ? "fadeInRight" : "fadeInLeft"}
                  delay={index * 0.1 + 0.2}
                  className={index % 2 === 1 ? "lg:col-start-1" : ""}
                >
                  <AnimatedImage
                    src="/placeholder.svg?height=500&width=600"
                    alt={story.title}
                    width={600}
                    height={500}
                    className="rounded-2xl shadow-lg"
                    animation="scaleIn"
                    delay={index * 0.2 + 0.4}
                  />
                </AnimatedSection>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Results Summary */}
      <Section background="gray">
        <Container>
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Proven Results</h2>
              <p className="text-xl text-gray-600">The impact we've made across our client partnerships</p>
            </div>
          </AnimatedSection>
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
              { value: "95%", label: "Average Cost Reduction" },
              { value: "60%", label: "Faster Delivery Times" },
              { value: "99.8%", label: "On-Time Delivery Rate" },
              { value: "100%", label: "Client Satisfaction" },
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

      {/* CTA Section */}
      <Section className="bg-primary-600 text-white">
        <Container>
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
              <p className="text-xl text-primary-100 mb-8">
                Join hundreds of satisfied clients who have transformed their logistics operations with our help.
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
                      Get Started Today
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
                    <Link href="/contact">Schedule Consultation</Link>
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
