"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle } from "lucide-react"

export function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-success-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Quote Request Received!</h3>
          <p className="text-gray-600 mb-4">
            Thank you for your interest in our services. We'll review your requirements and get back to you within 1
            business day with a detailed quote.
          </p>
          <p className="text-sm text-gray-500">
            Reference ID: #QR{Math.random().toString(36).substr(2, 9).toUpperCase()}
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Request a Quote</CardTitle>
        <CardDescription>
          Fill out the form below and we'll provide you with a customized quote within 1 business day.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input id="firstName" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input id="lastName" required />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" type="tel" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input id="company" />
          </div>

          {/* Shipment Details */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Shipment Details</h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="serviceType">Service Type *</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cargo-transportation">Cargo Transportation</SelectItem>
                    <SelectItem value="warehousing">Warehousing & Distribution</SelectItem>
                    <SelectItem value="specialized-logistics">Specialized Logistics</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="pickup">Pickup Location *</Label>
                  <Input id="pickup" placeholder="City, State or ZIP" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="destination">Destination *</Label>
                  <Input id="destination" placeholder="City, State or ZIP" required />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (lbs)</Label>
                  <Input id="weight" type="number" placeholder="0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dimensions">Dimensions (L×W×H)</Label>
                  <Input id="dimensions" placeholder="e.g., 48×40×48" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pieces">Number of Pieces</Label>
                  <Input id="pieces" type="number" placeholder="1" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline">Preferred Timeline</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">ASAP</SelectItem>
                    <SelectItem value="1-3-days">1-3 Days</SelectItem>
                    <SelectItem value="1-week">Within 1 Week</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialRequirements">Special Requirements</Label>
                <Textarea
                  id="specialRequirements"
                  placeholder="Please describe any special handling requirements, fragile items, temperature control needs, etc."
                  rows={4}
                />
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Additional Services</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="insurance" />
                <Label htmlFor="insurance">Additional Insurance Coverage</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="tracking" />
                <Label htmlFor="tracking">Real-time Tracking</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="whiteGlove" />
                <Label htmlFor="whiteGlove">White Glove Service</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="storage" />
                <Label htmlFor="storage">Temporary Storage</Label>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Request Quote"}
          </Button>

          <p className="text-sm text-gray-500 text-center">
            By submitting this form, you agree to our Terms of Service and Privacy Policy.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
