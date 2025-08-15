"use client"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { ValueCard } from "@/components/common/value-card"
import { Timeline } from "@/components/common/timeline"
import { StatsSection } from "@/components/common/stats-section"
import { aboutData } from "@/lib/data/about"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedImage } from "@/components/ui/animated-image"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 to-white" padding="xl">
        <Container>
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <AnimatedText
                text={aboutData.hero.title}
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
                {aboutData.hero.subtitle}
              </motion.p>
              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                {aboutData.hero.description}
              </motion.p>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Stats Section */}
      <StatsSection />

      {/* Our Story */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeInLeft">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{aboutData.story.title}</h2>
                <div className="space-y-4">
                  {aboutData.story.content.map((paragraph, index) => (
                    <motion.p
                      key={index}
                      className="text-gray-600 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeInRight" delay={0.3}>
              <div className="relative">
                <AnimatedImage
                  src="/placeholder.svg?height=500&width=600"
                  alt="DpNEx Logistics company history"
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

      {/* Mission & Vision */}
      <Section background="gray">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{aboutData.mission.title}</h3>
                <p className="text-gray-600 leading-relaxed">{aboutData.mission.content}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={0.4}>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{aboutData.vision.title}</h3>
                <p className="text-gray-600 leading-relaxed">{aboutData.vision.content}</p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section>
        <Container>
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
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
            {aboutData.values.map((value, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <ValueCard {...value} />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section background="gray">
        <Container>
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-xl text-gray-600">Key milestones in our company's growth</p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={0.4}>
            <Timeline items={aboutData.timeline} />
          </AnimatedSection>
        </Container>
      </Section>

      {/* Leadership Team */}
      <Section>
        <Container>
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{aboutData.team.title}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{aboutData.team.description}</p>
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
            {aboutData.team.members.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <AnimatedImage
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="rounded-2xl mx-auto mb-6 shadow-lg"
                  animation="scaleIn"
                  delay={index * 0.2}
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>
    </div>
  )
}
