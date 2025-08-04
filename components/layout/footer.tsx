"use client"

import Link from "next/link"
import { Truck, Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"
import { Container } from "@/components/ui/container"
import { companyInfo } from "@/lib/data/company-info"
import { services } from "@/lib/data/services"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <motion.div
          ref={ref}
          className="py-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="bg-primary-600 p-2 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Truck className="h-6 w-6 text-white" />
                </motion.div>
                <span className="text-xl font-bold">{companyInfo.name}</span>
              </motion.div>
              <motion.p
                className="text-gray-300"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {companyInfo.description}
              </motion.p>
              <motion.div
                className="flex space-x-4"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {[
                  { href: companyInfo.social.linkedin, icon: Linkedin },
                  { href: companyInfo.social.twitter, icon: Twitter },
                  { href: companyInfo.social.facebook, icon: Facebook },
                ].map((social, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, scale: 0 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link href={social.href} className="text-gray-400 hover:text-white transition-colors">
                      <social.icon className="h-5 w-5" />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
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
                animate={isInView ? "visible" : "hidden"}
              >
                {services.main.map((service, index) => (
                  <motion.li
                    key={service.id}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <Link href={`/services/${service.id}`} className="text-gray-300 hover:text-white transition-colors">
                      {service.title}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
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
                animate={isInView ? "visible" : "hidden"}
              >
                {[
                  { href: "/about", label: "About Us" },
                  { href: "/branches", label: "Branches" },
                  { href: "/success-stories", label: "Success Stories" },
                  { href: "/fleet", label: "Our Fleet" },
                  { href: "/certifications", label: "Certifications" },
                  { href: "/contact", label: "Contact" },
                ].map((link, index) => (
                  <motion.li
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
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
                animate={isInView ? "visible" : "hidden"}
              >
                {[
                  { icon: MapPin, content: companyInfo.contact.address },
                  { icon: Phone, content: companyInfo.contact.phone, href: `tel:${companyInfo.contact.phone}` },
                  { icon: Mail, content: companyInfo.contact.email, href: `mailto:${companyInfo.contact.email}` },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                      <contact.icon className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                    </motion.div>
                    {contact.href ? (
                      <a href={contact.href} className="text-gray-300 hover:text-white transition-colors">
                        {contact.content}
                      </a>
                    ) : (
                      <span className="text-gray-300">{contact.content}</span>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 py-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              className="text-gray-400 text-sm"
              whileHover={{ color: "#ffffff" }}
              transition={{ duration: 0.2 }}
            >
              © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
            </motion.p>
            <motion.div
              className="flex space-x-6 mt-4 md:mt-0"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
              ].map((link, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                >
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </footer>
  )
}
