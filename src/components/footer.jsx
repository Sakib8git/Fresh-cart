import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold mb-4">About FreshCart</h3>
            <p className="text-sm text-gray-400">
              Delivering fresh, organic groceries directly to your doorstep with quality and care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-green-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/items" className="text-gray-400 hover:text-green-400">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-green-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-green-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-green-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-green-400">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-green-400">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-green-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-green-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-green-400" />
                <span className="text-gray-400">support@freshcart.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-green-400" />
                <span className="text-gray-400">123 Market St, City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2026 FreshCart. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/" className="text-gray-400 hover:text-green-400">
                Facebook
              </Link>
              <Link href="/" className="text-gray-400 hover:text-green-400">
                Instagram
              </Link>
              <Link href="/" className="text-gray-400 hover:text-green-400">
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
