export interface NewsNotice {
  id: string
  title: string
  content: string
  summary: string
  type: 'news' | 'notice' | 'alert' | 'update' | 'announcement'
  priority: 'low' | 'medium' | 'high' | 'urgent'
  publishDate: string
  expiryDate?: string
  isActive: boolean
  showOnHomepage: boolean
  author: string
  tags: string[]
  image?: string
}

export const newsNotices: NewsNotice[] = [
  {
    id: "notice-001",
    title: "New Service Routes to Australia and UK",
    content: "We are excited to announce the launch of our new express shipping routes to Australia and United Kingdom. These routes will provide faster delivery times and more competitive pricing for our valued customers. The service will be available starting from October 1st, 2025.",
    summary: "New express shipping routes to Australia and UK launching October 1st with faster delivery and competitive pricing.",
    type: "announcement",
    priority: "high",
    publishDate: "2025-09-20",
    expiryDate: "2025-10-15",
    isActive: true,
    showOnHomepage: true,
    author: "DPNEX Operations Team",
    tags: ["shipping", "routes", "australia", "uk", "express"],
    image: "/placeholder.svg?height=300&width=500"
  },
  {
    id: "notice-002", 
    title: "Temporary Service Disruption - Kathmandu Hub",
    content: "Due to infrastructure maintenance at our Kathmandu distribution hub, there may be slight delays in processing shipments on September 25th, 2025. We expect normal operations to resume by September 26th morning. We apologize for any inconvenience caused.",
    summary: "Temporary service delays expected on Sept 25th due to Kathmandu hub maintenance.",
    type: "alert",
    priority: "urgent",
    publishDate: "2025-09-23",
    expiryDate: "2025-09-26",
    isActive: true,
    showOnHomepage: true,
    author: "DPNEX Operations Team",
    tags: ["maintenance", "kathmandu", "delays", "alert"]
  },
  {
    id: "news-001",
    title: "DPNEX Achieves ISO 9001:2015 Certification",
    content: "We are proud to announce that DPNEX has successfully achieved ISO 9001:2015 certification for Quality Management Systems. This certification demonstrates our commitment to providing consistent, high-quality logistics services to our customers worldwide.",
    summary: "DPNEX receives ISO 9001:2015 certification for quality management systems.",
    type: "news",
    priority: "medium",
    publishDate: "2025-09-15",
    isActive: true,
    showOnHomepage: true,
    author: "DPNEX Management",
    tags: ["certification", "iso", "quality", "achievement"]
  },
  {
    id: "notice-003",
    title: "Updated Customs Documentation Requirements",
    content: "Effective October 1st, 2025, new customs documentation requirements will be implemented for international shipments. All customers are advised to ensure their shipment documentation includes detailed item descriptions and accurate values to avoid customs delays.",
    summary: "New customs documentation requirements effective October 1st - detailed descriptions and accurate values required.",
    type: "notice",
    priority: "high",
    publishDate: "2025-09-18",
    expiryDate: "2025-11-01",
    isActive: true,
    showOnHomepage: true,
    author: "DPNEX Compliance Team",
    tags: ["customs", "documentation", "international", "requirements"]
  },
  {
    id: "news-002",
    title: "Partnership with Global Logistics Leader",
    content: "DPNEX has entered into a strategic partnership with a leading global logistics company to expand our service network and enhance delivery capabilities across Asia-Pacific region. This partnership will bring improved tracking technology and faster delivery options.",
    summary: "Strategic partnership announced to expand service network and improve delivery capabilities in Asia-Pacific.",
    type: "news",
    priority: "medium",
    publishDate: "2025-09-10",
    isActive: true,
    showOnHomepage: false,
    author: "DPNEX Business Development",
    tags: ["partnership", "expansion", "asia-pacific", "technology"]
  }
]

export const getActiveNotices = () => {
  const now = new Date()
  return newsNotices.filter(notice => {
    if (!notice.isActive) return false
    if (notice.expiryDate && new Date(notice.expiryDate) < now) return false
    return true
  })
}

export const getHomepageFlashNotices = () => {
  return getActiveNotices()
    .filter(notice => notice.showOnHomepage)
    .sort((a, b) => {
      // Sort by priority first, then by publish date
      const priorityOrder = { urgent: 4, high: 3, medium: 2, low: 1 }
      const priorityDiff = priorityOrder[b.priority] - priorityOrder[a.priority]
      if (priorityDiff !== 0) return priorityDiff
      return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    })
}

export const getNoticesByType = (type: NewsNotice['type']) => {
  return getActiveNotices().filter(notice => notice.type === type)
}