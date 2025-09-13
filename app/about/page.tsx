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

      {/* Management Team */}
      <Section background="gray">
        <Container>
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{aboutData.managementTeam.title}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{aboutData.managementTeam.description}</p>
            </div>
          </AnimatedSection>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
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
            {aboutData.managementTeam.members.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="w-44 h-44 relative mb-4 flex justify-center items-center">
                  <AnimatedImage
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="!w-44 !h-44 rounded-full shadow-lg border-4 border-white object-cover"
                    animation="scaleIn"
                    delay={index * 0.2}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">{member.name}</h3>
                <p className="text-primary-600 font-medium text-sm text-center">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>
     {/* Leadership Team */}
      <Section>
       <Container>
         
          <motion.div
            className="space-y-8"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {aboutData.team.members.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Left side - Image and Info */}
                  <div className="lg:w-1/3 p-8 bg-gradient-to-br from-primary-50 to-primary-100 flex flex-col items-center justify-center text-center">
                    <div className="w-44 h-44 relative mb-6">
                      <AnimatedImage
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="!w-44 !h-44 rounded-full shadow-lg border-4 border-white object-cover"
                        animation="scaleIn"
                        delay={index * 0.2}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-primary-600 font-semibold text-lg mb-3">{member.role}</p>
                    {/* <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p> */}
                  </div>
                  
                  {/* Right side - Message */}
                  <div className="lg:w-2/3 p-8 flex flex-col justify-center">
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Message from {member.role}</h4>
                      <div className="w-16 h-1 bg-primary-500 rounded"></div>
                    </div>
                    <blockquote className="text-gray-700 leading-relaxed text-lg italic">
                      "{member.bio}"
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>
    </div>
  )
}
