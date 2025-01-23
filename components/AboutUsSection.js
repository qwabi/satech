import { MapPin } from "lucide-react"

const serviceAreas = ["Queenstown", "Lessyton", "Ezibeleni", "Surrounding areas"]

export default function AboutUsSection() {
  return (
    <section id="about-us" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">About Us</h2>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
          <p className="text-gray-700 mb-8">
            SA Tech DStv Installers is a team of trusted, certified, and accredited technicians specializing in DStv
            installation and repair services. With years of experience and deep local expertise, we pride ourselves on
            delivering top-notch service and ensuring customer satisfaction in every job we undertake.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Service Areas</h3>
          <div className="grid grid-cols-2 gap-4">
            {serviceAreas.map((area, index) => (
              <div key={index} className="flex items-center space-x-2">
                <MapPin className="text-primary w-5 h-5" />
                <span className="text-gray-700">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

