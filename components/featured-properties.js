"use client"

import { Button } from "@/components/ui/button"
import { LinkButton } from "@/components/ui/link-button"
import { Building, MapPin, Ruler, Bed, Bath, Tag, Shield, Check, X, Clock } from "lucide-react"
import Image from "next/image"

const properties = [
  {
    id: 1,
    title: "Luxury Villa in Gurgaon",
    location: "Sector 58, Gurgaon",
    price: "₹2.5 Cr",
    area: "3500 sq.ft",
    bedrooms: 4,
    bathrooms: 4,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BPDpzMA5Z7zauU0smpq8UnXfHDy9OV.png",
    verified: true,
    type: "Villa",
    documentStatus: "verified",
    blockchainKey: "BE-LTRW9P-XDVS4R-3F7A2B1C",
  },
  {
    id: 2,
    title: "Modern Apartment in Noida",
    location: "Sector 93, Noida",
    price: "₹1.2 Cr",
    area: "1800 sq.ft",
    bedrooms: 3,
    bathrooms: 2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oU5ZTzewpcCiadZAiQ9hGZbrj97iNc.png",
    verified: true,
    type: "Apartment",
    documentStatus: "verified",
    blockchainKey: "BE-KT7Y2M-P9QR3S-8D4C7F1E",
  },
  {
    id: 3,
    title: "Penthouse in South Mumbai",
    location: "Worli, Mumbai",
    price: "₹8.5 Cr",
    area: "4200 sq.ft",
    bedrooms: 5,
    bathrooms: 5,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AQdPQypr4yA4ps56bamT4u1ANtanyd.png",
    verified: true,
    type: "Penthouse",
    documentStatus: "verified",
    blockchainKey: "BE-QW3E4R-T5Y6U7-8I9O0P1A",
  },
  {
    id: 4,
    title: "Garden Apartment in Bangalore",
    location: "Whitefield, Bangalore",
    price: "₹1.8 Cr",
    area: "2200 sq.ft",
    bedrooms: 3,
    bathrooms: 3,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sWhWCMe3Eu6NRXaHXhQXbxtbYQYS1z.png",
    verified: false,
    type: "Apartment",
    documentStatus: "pending",
    blockchainKey: "",
  },
]

export function FeaturedProperties() {
  return (
    <section className="py-12 bg-zinc-950">
      <div className="container mx-auto">
        <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-2xl font-bold">Blockchain Verified Properties</h2>
            <p className="mt-2 text-zinc-400">
              All documents verified and secured on blockchain for transparent transactions
            </p>
          </div>
          <LinkButton href="/properties" className="bg-blue-600 hover:bg-blue-700">
            View All Properties
          </LinkButton>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {properties.map((property) => (
            <div
              key={property.id}
              className="property-card overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />

                {property.verified && (
                  <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-blue-600/90 px-2 py-1 text-xs font-medium text-white">
                    <Shield className="h-3 w-3" />
                    Blockchain Verified
                  </div>
                )}

                {/* Document Status Badge */}
                <div
                  className={`verification-badge ${
                    property.documentStatus === "verified"
                      ? "verified"
                      : property.documentStatus === "forged"
                        ? "forged"
                        : "pending"
                  }`}
                >
                  {property.documentStatus === "verified" ? (
                    <>
                      <Check className="h-3 w-3" /> Verified Docs
                    </>
                  ) : property.documentStatus === "forged" ? (
                    <>
                      <X className="h-3 w-3" /> Forged Docs
                    </>
                  ) : (
                    <>
                      <Clock className="h-3 w-3" /> Pending
                    </>
                  )}
                </div>
              </div>
              <div className="p-4">
                <div className="mb-2 flex items-center gap-1 text-xs text-blue-400">
                  <Building className="h-3 w-3" />
                  <span>{property.type}</span>
                </div>
                <h3 className="mb-1 text-lg font-semibold">{property.title}</h3>
                <div className="mb-3 flex items-center gap-1 text-sm text-zinc-400">
                  <MapPin className="h-3 w-3" />
                  <span>{property.location}</span>
                </div>

                <div className="mb-3 grid grid-cols-3 gap-2 border-b border-zinc-800 pb-3">
                  <div className="flex flex-col items-center">
                    <Ruler className="mb-1 h-4 w-4 text-zinc-500" />
                    <span className="text-xs text-zinc-400">{property.area}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Bed className="mb-1 h-4 w-4 text-zinc-500" />
                    <span className="text-xs text-zinc-400">{property.bedrooms} Beds</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Bath className="mb-1 h-4 w-4 text-zinc-500" />
                    <span className="text-xs text-zinc-400">{property.bathrooms} Baths</span>
                  </div>
                </div>

                {property.blockchainKey && (
                  <div className="mb-3 px-2 py-1 bg-zinc-950 rounded border border-zinc-800">
                    <p className="text-xs text-zinc-500 mb-1">Blockchain Key:</p>
                    <p className="text-xs font-mono text-blue-400 truncate">{property.blockchainKey}</p>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Tag className="h-4 w-4 text-blue-400" />
                    <span className="font-semibold text-white">{property.price}</span>
                  </div>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
