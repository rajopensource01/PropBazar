import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black text-white">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Image src="/images/propbazar-logo.png" alt="PropBazar" width={40} height={40} />
              <span className="text-xl font-bold text-blue-500">PROPBAZAR</span>
            </Link>
            <p className="mb-4 text-zinc-400">
              India's first blockchain-powered real estate marketplace, providing secure and transparent property
              transactions with verified documentation across major Indian cities.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-zinc-400 hover:text-blue-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-blue-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.instagram.com/iamnothimanshu_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="text-zinc-400 hover:text-blue-400"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-blue-400">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/properties" className="text-zinc-400 hover:text-blue-400">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/verification" className="text-zinc-400 hover:text-blue-400">
                  Verification
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-zinc-400 hover:text-blue-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Property Types</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/properties?type=apartment" className="text-zinc-400 hover:text-blue-400">
                  Apartments
                </Link>
              </li>
              <li>
                <Link href="/properties?type=villa" className="text-zinc-400 hover:text-blue-400">
                  Villas
                </Link>
              </li>
              <li>
                <Link href="/properties?type=plot" className="text-zinc-400 hover:text-blue-400">
                  Plots
                </Link>
              </li>
              <li>
                <Link href="/properties?type=commercial" className="text-zinc-400 hover:text-blue-400">
                  Commercial
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-zinc-400">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>USAR, India</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-400">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+91 8851958484</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-400">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>info@propbazar.in</span>
              </li>
              <li className="flex items-center gap-2 text-zinc-400">
                <Instagram className="h-4 w-4 text-blue-400" />
                <Link
                  href="https://www.instagram.com/iamnothimanshu_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  className="hover:text-blue-400"
                >
                  @iamnothimanshu_
                </Link>
              </li>
            </ul>

            <div className="mt-4">
              <h4 className="mb-2 text-sm font-medium">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <Input type="email" placeholder="Your email" className="border-zinc-800 bg-zinc-900 text-white" />
                <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-800 pt-6 text-center text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} PropBazar. All rights reserved.</p>
          <p className="mt-1">A startup by Himanshu and team</p>
        </div>
      </div>
    </footer>
  )
}
