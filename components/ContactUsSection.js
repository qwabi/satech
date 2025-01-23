import { Phone, Mail, Clock, MapPin } from "lucide-react"

export default function ContactUsSection() {
  return (
    <section id="contact-us" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="text-primary w-6 h-6" />
                <span className="text-gray-700">0635168461</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-primary w-6 h-6" />
                <span className="text-gray-700">asaphiwamgolodela02@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="text-primary w-6 h-6" />
                <span className="text-gray-700">Operating Hours: 7 am to 7 pm</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-primary w-6 h-6" />
                <span className="text-gray-700">Queenstown and surrounding areas</span>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="https://wa.me/27635168461"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-200"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Find Us</h3>
            <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54863.80338442935!2d26.847977667968745!3d-31.897275199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e5fd8b38d8f9f3d%3A0x3c06b7a3f1a3e6f2!2sQueenstown%2C%205320%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1653416095970!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

