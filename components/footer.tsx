import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-6 flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600"></div>
              <span className="text-xl font-bold">BlockEstate</span>
            </Link>
            <p className="mb-4 text-zinc-400">
              India's first blockchain-powered real estate marketplace, providing secure and transparent property
              transactions with verified documentation.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-zinc-400 hover:text-purple-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-purple-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-purple-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-purple-400">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/properties" className="text-zinc-400 hover:text-purple-400">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-zinc-400 hover:text-purple-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-purple-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-purple-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-zinc-400 hover:text-purple-400">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-zinc-400 hover:text-purple-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-zinc-400 hover:text-purple-400">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-zinc-400 hover:text-purple-400">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/verification" className="text-zinc-400 hover:text-purple-400">
                  Verification Process
                </Link>
              </li>
              <li>
                <Link href="/blockchain" className="text-zinc-400 hover:text-purple-400">
                  Blockchain Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-zinc-400">
                <MapPin className="h-4 w-4 text-purple-400" />
                <span>Cyber City, Gurgaon, India</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-400">
                <Phone className="h-4 w-4 text-purple-400" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-400">
                <Mail className="h-4 w-4 text-purple-400" />
                <span>info@blockestate.in</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="mb-2 text-sm font-medium">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <Input type="email" placeholder="Your email" className="border-zinc-800 bg-zinc-900 text-white" />
                <Button className="bg-purple-600 hover:bg-purple-700">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} BlockEstate. All rights reserved.</p>
          <p className="mt-2">Powered by Blockchain Technology for Secure Property Transactions</p>
        </div>
      </div>
    </footer>
  )
}
