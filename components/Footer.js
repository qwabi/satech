import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SA Tech DStv Installers</h3>
            <p>Your trusted DStv installation and repair service in Queenstown and surrounding areas.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#services">Services</Link>
              </li>
              <li>
                <Link href="/#why-choose-us">Why Choose Us</Link>
              </li>
              <li>
                <Link href="/#testimonials">Testimonials</Link>
              </li>
              <li>
                <Link href="/#faq">FAQ</Link>
              </li>
              <li>
                <Link href="/#book-consultation">Book Consultation</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>Phone: 063 516 8461 / 073 288 0828</p>
            <p>Email: asaphiwamgolodela02@gmail.com</p>
            <p>Areas Served: Queenstown, Ezibeleni, Lesseyton, and surrounding areas</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} SA Tech DStv Installers. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Built for maximum impact by{" "}
            <a
              href="https://ayabonga.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-secondary"
            >
              ayabonga.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

