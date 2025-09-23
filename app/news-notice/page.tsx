"use client"

import { useState } from "react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedText } from "@/components/ui/animated-text"
import { newsNotices, getActiveNotices, type NewsNotice } from "@/lib/data/news-notices"
import { Search, Calendar, User, Tag, AlertCircle, Info, Megaphone, Bell } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const typeIcons = {
  news: Info,
  notice: Bell,
  alert: AlertCircle,
  update: Megaphone,
  announcement: Megaphone
}

const priorityColors = {
  urgent: "bg-red-500 text-white",
  high: "bg-orange-500 text-white", 
  medium: "bg-blue-500 text-white",
  low: "bg-gray-500 text-white"
}

export default function NewsNoticePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState<string>("all")
  const [activeNotices] = useState(getActiveNotices())

  const filteredNotices = activeNotices.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notice.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notice.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesType = selectedType === "all" || notice.type === selectedType
    
    return matchesSearch && matchesType
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    })
  }

  return (
    <div>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 to-white" padding="xl">
        <Container>
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <AnimatedText
                text="News & Notices"
                as="h1"
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                animation="fadeInWords"
              />
              <motion.p
                className="text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Stay updated with the latest news, announcements, and important notices from DPNEX
              </motion.p>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Filters Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search news and notices..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              {/* Type Filter */}
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={selectedType === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType("all")}
                >
                  All
                </Button>
                {["news", "notice", "alert", "update", "announcement"].map((type) => (
                  <Button
                    key={type}
                    variant={selectedType === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType(type)}
                    className="capitalize"
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <p className="text-gray-600 mb-6">
              Showing {filteredNotices.length} of {activeNotices.length} items
            </p>
          </div>
        </Container>
      </Section>

      {/* News/Notice List */}
      <Section background="gray">
        <Container>
          <div className="max-w-4xl mx-auto">
            {filteredNotices.length === 0 ? (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600">Try adjusting your search terms or filters</p>
              </motion.div>
            ) : (
              <motion.div
                className="space-y-6"
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
                {filteredNotices.map((notice, index) => {
                  const IconComponent = typeIcons[notice.type]
                  return (
                    <motion.div
                      key={notice.id}
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card className="hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <IconComponent className="h-5 w-5 text-primary-600" />
                                <Badge
                                  className={cn("capitalize", priorityColors[notice.priority])}
                                >
                                  {notice.priority}
                                </Badge>
                                <Badge variant="outline" className="capitalize">
                                  {notice.type}
                                </Badge>
                              </div>
                              <CardTitle className="text-xl mb-2">{notice.title}</CardTitle>
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4" />
                                  {formatDate(notice.publishDate)}
                                </div>
                                <div className="flex items-center gap-1">
                                  <User className="h-4 w-4" />
                                  {notice.author}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {notice.summary}
                          </p>
                          
                          {notice.tags.length > 0 && (
                            <div className="flex items-center gap-2 mb-4">
                              <Tag className="h-4 w-4 text-gray-400" />
                              <div className="flex gap-1 flex-wrap">
                                {notice.tags.map((tag) => (
                                  <Badge key={tag} variant="default" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}

                          <details className="group">
                            <summary className="cursor-pointer text-primary-600 hover:text-primary-700 font-medium">
                              Read more
                            </summary>
                            <div className="mt-3 pt-3 border-t border-gray-200">
                              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                {notice.content}
                              </p>
                            </div>
                          </details>

                          {notice.expiryDate && (
                            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                              <p className="text-sm text-amber-800">
                                <strong>Valid until:</strong> {formatDate(notice.expiryDate)}
                              </p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </motion.div>
            )}
          </div>
        </Container>
      </Section>
    </div>
  )
}