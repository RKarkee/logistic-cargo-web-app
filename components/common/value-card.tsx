"use client"

import { motion } from "framer-motion"
import { Shield, Eye, Lightbulb, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const iconMap = {
  Shield,
  Eye,
  Lightbulb,
  Users,
}

interface ValueCardProps {
  title: string
  description: string
  icon: keyof typeof iconMap
}

export function ValueCard({ title, description, icon }: ValueCardProps) {
  const IconComponent = iconMap[icon]

  return (
    <motion.div
      whileHover={{
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className="text-center h-full hover:shadow-2xl transition-all duration-500 group border-0 shadow-lg hover:shadow-primary-500/20 hover:border-primary-200">
        <CardHeader>
          <motion.div
            className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-all duration-500"
            whileHover={{
              rotate: [0, -10, 10, -10, 0],
              scale: 1.1,
            }}
            transition={{ duration: 0.5 }}
          >
            <IconComponent className="h-8 w-8 text-primary-600 group-hover:text-white transition-colors duration-500" />
          </motion.div>
          <CardTitle className="text-xl group-hover:text-primary-600 transition-colors duration-300">
            <motion.span whileHover={{ scale: 1.05 }} className="inline-block">
              {title}
            </motion.span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <motion.p
            className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {description}
          </motion.p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
