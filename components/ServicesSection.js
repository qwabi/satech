import Image from "next/image"
import { useRouter } from "next/router"

const serviceCategories = [
  {
    title: "Installation Services",
    services: [
      {
        title: "Dish Installation",
        description: "Professional DStv dish installation services",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DStv-installer-Durban.jpg-wcBS3AQH8gPMOluCMIbMeddNhoVfym.jpeg",
        value: "Dish Installation",
      },
      {
        title: "Extra Views & TV Link",
        description: "Multiple viewing points setup throughout your home",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0000414_dstv-switch_550-fmjDTVzL38nkK7O77Dk2K9ed4TkDOK.png",
        value: "Extra Views",
      },
      {
        title: "TV Mounting",
        description: "Professional TV mounting and setup",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dstv-satellite-dish.jpg-bQr7dtZAqrRvY46a2VQZuFrlBax0AF.jpeg",
        value: "TV Mounting",
      },
      {
        title: "Satellite Systems",
        description: "Complete satellite dish systems available",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/473620121_122167924376301157_5739740799702364802_n.jpg-NyNkv0QANi4B47SSKXCmc3UkHcP6VB.jpeg",
        value: "Satellite Systems",
      },
    ],
  },
  {
    title: "Technical Services",
    services: [
      {
        title: "Signal Repairs",
        description: "Expert signal troubleshooting and repairs",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lgt4QePoQAyNiUgT2MjP_MC_Installers_landing_page_1-dqElSYvOjVQ13jC8NkUG0IgUHoUlGS.png",
        value: "Signal Issues",
      },
      {
        title: "Error Clearing",
        description: "Resolution for E16, E17, E48 and other errors",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0000395_dstv-explora-model-3b_550-NdVvXcXBjrYhFP6cFLdb3bksFriFG2.png",
        value: "Other Errors",
      },
      {
        title: "Signal Boosters",
        description: "Cellphone and TV signal enhancement solutions",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ZTE-MF286-R-Router-rai7uUVNagsVyiqrsXWXkNbmy016Aq.png",
        value: "Signal Booster",
      },
      {
        title: "Decoder Testing",
        description: "Comprehensive decoder testing and maintenance",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/071e71775d294a9194ca14eb49d589d2-nrh2omHU2joc6rH738T7FPFGsKRAka.webp",
        value: "Decoder Testing",
      },
    ],
  },
  {
    title: "Administrative Services",
    services: [
      {
        title: "Account Management",
        description: "Balance checking and subscription management",
        value: "Balance Check",
      },
      {
        title: "Package Services",
        description: "Package linking, reconnection, and changes",
        value: "Package Linking",
      },
      {
        title: "Ownership Transfer",
        description: "Assistance with DStv ownership transfers",
        value: "Ownership Transfer",
      },
      {
        title: "Support Services",
        description: "24/7 technical and administrative support",
        value: "Support Services",
      },
    ],
  },
]

export default function ServicesSection() {
  const router = useRouter()

  const handleBookService = (serviceValue) => {
    if (typeof window !== "undefined") {
      const bookConsultationElement = document.getElementById("book-consultation")
      if (bookConsultationElement) {
        bookConsultationElement.scrollIntoView({ behavior: "smooth" })
      }

      router.push(
        {
          pathname: "/",
          query: { service: serviceValue },
          hash: "book-consultation",
        },
        undefined,
        { shallow: true },
      )
    }
  }

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-700 text-center">{category.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    {service.image && (
                      <div className="relative h-48">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h4 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h4>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <button
                        onClick={() => handleBookService(service.value)}
                        className="w-full bg-secondary text-primary font-bold py-2 px-4 rounded hover:bg-opacity-90 transition-colors duration-200"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

