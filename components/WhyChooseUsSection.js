import { CheckCircle } from "lucide-react"

const reasons = [
  "Certified DStv Installers",
  "Fast and Reliable Service",
  "Affordable Rates",
  "Regional Expertise",
  "Customer Satisfaction Guaranteed",
]

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-center space-x-4">
              <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
              <p className="text-lg text-gray-700">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

