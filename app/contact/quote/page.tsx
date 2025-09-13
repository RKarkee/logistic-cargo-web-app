import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { QuoteForm } from "@/components/common/quote-form"

export default function QuotePage() {
  return (
    <div>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 to-white" padding="xl">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Request a Quote</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Get a personalized quote for your logistics needs. Our team will review your requirements and provide you
              with a detailed proposal within 1 business day.
            </p>
          </div>
          <QuoteForm />
        </Container>
      </Section>

      {/* Why Choose Us */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Request a Quote?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Solutions</h3>
              <p className="text-gray-600">Every quote is tailored to your specific requirements and business needs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">We provide transparent, competitive pricing with no hidden fees.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Response</h3>
              <p className="text-gray-600">Receive your detailed quote within 1 business day of submission.</p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
