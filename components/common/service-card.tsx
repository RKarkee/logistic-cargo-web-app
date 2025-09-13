"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Truck, Warehouse, Shield, ArrowRight, Plane, Package, Ship } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const iconMap = {
  Truck,
  Warehouse,
  Shield,
  Plane,
  Package,
  Ship,
}

interface ServiceCardProps {
  id: string
  title: string
  description: string
  icon: string // Made more flexible to accept any string
  features: string[]
  showCTA?: boolean
}

export function ServiceCard({ id, title, description, icon, features, showCTA = false }: ServiceCardProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap] || Truck // Fallback to Truck icon if icon not found

  return (
    <motion.div
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Card className="h-full min-h-[450px] flex flex-col hover:shadow-2xl transition-all duration-500 group border-0 shadow-lg hover:shadow-primary-500/20">
        <CardHeader className="relative overflow-hidden">
          <motion.div
            className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors duration-300"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            {IconComponent && (
              <IconComponent className="h-6 w-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
            )}
          </motion.div>
          <CardTitle className="text-xl group-hover:text-primary-600 transition-colors duration-300">{title}</CardTitle>
          <CardDescription className="group-hover:text-gray-700 transition-colors duration-300">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
          <motion.ul
            className="space-y-2 flex-1"
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
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <motion.div
                  className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3 flex-shrink-0"
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.2 }}
                />
                {feature}
              </motion.li>
            ))}
          </motion.ul>
          {showCTA && (
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-auto pt-4">
              <Button
                asChild
                variant="outline"
                className="w-full bg-transparent group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300"
              >
                <Link href={`/services/${id}`}>
                  Learn More
                  <motion.div className="ml-2" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
