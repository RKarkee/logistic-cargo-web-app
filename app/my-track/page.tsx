"use client"

import { Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/ui/animated-section"
import { AnimatedText } from "@/components/ui/animated-text"
import { Search, Package, Truck, CheckCircle, Clock } from "lucide-react"
import { motion } from "framer-motion"

// Separate component that uses useSearchParams
function TrackingSearch() {
  const [trackId, setTrackId] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [searchResult, setSearchResult] = useState<any>(null)
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const initialTrackId = searchParams.get('trackId')
    if (initialTrackId) {
      setTrackId(initialTrackId)
      handleSearch(null, initialTrackId)
    }
  }, [searchParams])

  const handleSearch = async (e: React.FormEvent | null, initialId?: string) => {
    if (e) e.preventDefault()
    const searchId = initialId || trackId
    
    if (searchId.trim()) {
      setIsSearching(true)
      setSearchResult(null) // Clear previous results
      
      // Simulate API call
      setTimeout(() => {
        // Simulate some tracking numbers that return results
        const validTrackingNumbers = ['DP123456', 'NX789012', 'EX345678', 'TR999111']
        const isValidTracking = validTrackingNumbers.includes(searchId.toUpperCase()) || 
                               searchId.length >= 6 // Simple validation
        
        if (isValidTracking) {
          setSearchResult({
            trackingNumber: searchId,
            status: "In Transit",
            currentLocation: "Distribution Center - Kathmandu",
            estimatedDelivery: "Tomorrow, 2:00 PM",
            progress: [
              { status: "Package Received", completed: true, time: "2 days ago" },
              { status: "In Transit", completed: true, time: "1 day ago" },
              { status: "Out for Delivery", completed: false, time: "Tomorrow" },
              { status: "Delivered", completed: false, time: "" }
            ]
          })
        } else {
          setSearchResult({
            trackingNumber: searchId,
            notFound: true
          })
        }
        setIsSearching(false)
      }, 1500)
    }
  }

  return (
    <>
      {/* Search Section */}
      <Section>
        <Container>
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-center flex items-center justify-center gap-2">
                  <Package className="h-6 w-6 text-primary-600" />
                  My Courier Track
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="text"
                    placeholder="Enter your tracking number"
                    value={trackId}
                    onChange={e => setTrackId(e.target.value)}
                    className="flex-1"
                    required
                  />
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-primary-600 hover:bg-primary-900 text-white"
                    disabled={isSearching}
                  >
                    {isSearching ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Search className="h-5 w-5" />
                      </motion.div>
                    ) : (
                      <>
                        <Search className="h-5 w-5 mr-2" />
                        Search
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Results Section */}
      {(searchResult || isSearching) && (
        <Section background="gray">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {isSearching ? (
                /* Loading State */
                <Card className="max-w-4xl mx-auto shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <Truck className="h-6 w-6 text-primary-600" />
                      </motion.div>
                      Searching for tracking information...
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Loading Status Overview */}
                    <div className="grid md:grid-cols-3 gap-4">
                      {[1, 2, 3].map((index) => (
                        <div key={index} className="text-center p-4 bg-primary-50 rounded-lg">
                          <div className="h-4 bg-gray-300 rounded animate-pulse mb-2"></div>
                          <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                      ))}
                    </div>

                    {/* Loading Progress Timeline */}
                    <div>
                      <div className="h-6 bg-gray-300 rounded animate-pulse mb-4 w-1/3"></div>
                      <div className="space-y-4">
                        {[1, 2, 3, 4].map((index) => (
                          <motion.div
                            key={index}
                            className="flex items-center gap-4"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                          >
                            <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
                            <div className="flex-1">
                              <div className="h-4 bg-gray-300 rounded animate-pulse mb-1 w-2/3"></div>
                              <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2"></div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Loading progress bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-primary-600 h-2 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                    </div>
                  </CardContent>
                </Card>
              ) : searchResult?.notFound ? (
                /* No Data Found */
                <Card className="max-w-2xl mx-auto shadow-lg text-center">
                  <CardContent className="pt-8 pb-8">
                    <div className="flex flex-col items-center space-y-4">
                      <motion.div
                        className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.4, type: "spring" }}
                      >
                        <Package className="h-8 w-8 text-red-500" />
                      </motion.div>
                      <motion.h3
                        className="text-xl font-semibold text-gray-900"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                      >
                        No Track Details Found
                      </motion.h3>
                      <motion.p
                        className="text-gray-600 max-w-md"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.4 }}
                      >
                        We couldn't find any tracking information for "{searchResult.trackingNumber}". 
                        Please check your tracking number and try again.
                      </motion.p>
                      <motion.div
                        className="flex flex-col sm:flex-row gap-3 mt-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.4 }}
                      >
                        <Button variant="outline" onClick={() => setSearchResult(null)}>
                          Try Another Number
                        </Button>
                        <Button variant="outline" asChild>
                          <a href="/contact">Contact Support</a>
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                /* Tracking Results Found */
                <Card className="max-w-4xl mx-auto shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Truck className="h-6 w-6 text-primary-600" />
                      Tracking Results for: {searchResult.trackingNumber}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Status Overview */}
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-primary-50 rounded-lg">
                        <h3 className="font-semibold text-gray-900">Status</h3>
                        <p className="text-primary-600 font-medium">{searchResult.status}</p>
                      </div>
                      <div className="text-center p-4 bg-primary-50 rounded-lg">
                        <h3 className="font-semibold text-gray-900">Current Location</h3>
                        <p className="text-gray-600">{searchResult.currentLocation}</p>
                      </div>
                      <div className="text-center p-4 bg-primary-50 rounded-lg">
                        <h3 className="font-semibold text-gray-900">Estimated Delivery</h3>
                        <p className="text-green-600 font-medium">{searchResult.estimatedDelivery}</p>
                      </div>
                    </div>

                    {/* Progress Timeline */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">Tracking Progress</h3>
                      <div className="space-y-4">
                        {searchResult.progress.map((step: any, index: number) => (
                          <motion.div
                            key={index}
                            className="flex items-center gap-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                          >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              step.completed ? 'bg-green-500' : 'bg-gray-300'
                            }`}>
                              {step.completed ? (
                                <CheckCircle className="h-5 w-5 text-white" />
                              ) : (
                                <Clock className="h-5 w-5 text-gray-500" />
                              )}
                            </div>
                            <div className="flex-1">
                              <p className={`font-medium ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                                {step.status}
                              </p>
                              {step.time && (
                                <p className="text-sm text-gray-500">{step.time}</p>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          </Container>
        </Section>
      )}
    </>
  )
}

// Loading fallback component
function TrackingSearchFallback() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-center flex items-center justify-center gap-2">
                <Package className="h-6 w-6 text-primary-600" />
                My Courier Track
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 h-10 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-10 w-24 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  )
}

export default function MyTrackPage() {
  return (
    <div>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 to-white" padding="xl">
        <Container>
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <AnimatedText
                text="Track Your Package"
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
                Enter your tracking number to get real-time updates on your shipment
              </motion.p>
            </div>
          </AnimatedSection>
        </Container>
      </Section>

      {/* Search Section with Suspense */}
      <Suspense fallback={<TrackingSearchFallback />}>
        <TrackingSearch />
      </Suspense>

      {/* Help Section */}
      <Section>
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
            <p className="text-gray-600 mb-6">
              If you're having trouble tracking your package or need assistance, our customer service team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <a href="/contact">Contact Support</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:+977-1-4123456">Call: +977-1-4123456</a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}