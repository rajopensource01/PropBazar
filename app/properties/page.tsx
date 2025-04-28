"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { Building, MapPin, Ruler, Bed, Bath, Tag, Shield, Filter, Search, Check, X } from "lucide-react"
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
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-t95d3scQJIW1DwIe6a2mXEpIvwqGZG.png",
    verified: true,
    type: "Villa",
    documentStatus: "verified",
  },
  {
    id: 2,
    title: "Modern Apartment in Noida",
    location: "Sector 93, Noida",
    price: "₹1.2 Cr",
    area: "1800 sq.ft",
    bedrooms: 3,
    bathrooms: 2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xeJZ6wxr9jnkMDNWJ57TIeYMg8pvmb.png",
    verified: true,
    type: "Apartment",
    documentStatus: "verified",
  },
  {
    id: 3,
    title: "Penthouse in South Mumbai",
    location: "Worli, Mumbai",
    price: "₹8.5 Cr",
    area: "4200 sq.ft",
    bedrooms: 5,
    bathrooms: 5,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8vMgvkpx50BSdi8WNYvBKoLtwouJnC.png",
    verified: true,
    type: "Penthouse",
    documentStatus: "verified",
  },
  {
    id: 4,
    title: "Garden Apartment in Bangalore",
    location: "Whitefield, Bangalore",
    price: "₹1.8 Cr",
    area: "2200 sq.ft",
    bedrooms: 3,
    bathrooms: 3,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YuwAsuFwl6p67FEXJOIdJ930n99YMf.png",
    verified: true,
    type: "Apartment",
    documentStatus: "verified",
  },
  {
    id: 5,
    title: "Residential Plot in Chennai",
    location: "OMR, Chennai",
    price: "₹95 L",
    area: "1200 sq.ft",
    bedrooms: 0,
    bathrooms: 0,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sDHSISBkIoxzNxzJE27ZWbFDg7i0xP.png",
    verified: false,
    type: "Plot",
    documentStatus: "forged",
  },
  {
    id: 6,
    title: "Commercial Space in Delhi",
    location: "Connaught Place, Delhi",
    price: "₹3.2 Cr",
    area: "2800 sq.ft",
    bedrooms: 0,
    bathrooms: 2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hgBwmLfLYXsv4OFK1q4lUHue2ZhkvV.png",
    verified: true,
    type: "Commercial",
    documentStatus: "verified",
  },
  {
    id: 7,
    title: "Farmhouse in Lonavala",
    location: "Lonavala, Maharashtra",
    price: "₹4.5 Cr",
    area: "5000 sq.ft",
    bedrooms: 6,
    bathrooms: 6,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IVjCiOw0p8Cb7o5HdgJiVCU3r0UIsK.png",
    verified: false,
    type: "Farmhouse",
    documentStatus: "pending",
  },
  {
    id: 8,
    title: "Duplex in Hyderabad",
    location: "Gachibowli, Hyderabad",
    price: "₹1.9 Cr",
    area: "2600 sq.ft",
    bedrooms: 4,
    bathrooms: 4,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wJOlDU4hqw4RsuwL8Zrzl0Uo9LxBD3.png",
    verified: true,
    type: "Duplex",
    documentStatus: "verified",
  },
]

export default function PropertiesPage() {
  const [showFilters, setShowFilters] = useState(false)
  const [documentFilter, setDocumentFilter] = useState<"all" | "verified" | "forged" | "pending">("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [priceRange, setPriceRange] = useState([0, 10])
  const [propertyTypes, setPropertyTypes] = useState<string[]>([])
  const [verifiedOnly, setVerifiedOnly] = useState(false)

  const togglePropertyType = (type: string) => {
    if (propertyTypes.includes(type)) {
      setPropertyTypes(propertyTypes.filter((t) => t !== type))
    } else {
      setPropertyTypes([...propertyTypes, type])
    }
  }

  const filteredProperties = properties.filter((property) => {
    // Filter by search term
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase())

    // Filter by document status
    const matchesDocumentStatus = documentFilter === "all" || property.documentStatus === documentFilter

    // Filter by verified status
    const matchesVerified = !verifiedOnly || property.verified

    // Filter by property type
    const matchesType = propertyTypes.length === 0 || propertyTypes.includes(property.type)

    // Filter by price range (simplified for demo)
    const propertyPrice = Number.parseInt(property.price.replace(/[^\d]/g, "")) / 100000
    const matchesPrice = propertyPrice >= priceRange[0] && propertyPrice <= priceRange[1] * 100

    return matchesSearch && matchesDocumentStatus && matchesVerified && matchesType && matchesPrice
  })

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Properties</h1>
          <p className="text-zinc-400">Browse our blockchain-verified properties across India</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Section */}
          <div className={`lg:w-1/4 ${showFilters ? "block" : "hidden lg:block"}`}>
            <div className="sticky top-24 bg-zinc-900 rounded-xl border border-zinc-800 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Filters</h2>
                <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setShowFilters(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-6">
                {/* Document Verification Filter */}
                <div>
                  <h3 className="text-sm font-medium mb-3">Document Status</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant={documentFilter === "all" ? "default" : "outline"}
                      size="sm"
                      className={documentFilter === "all" ? "bg-purple-600 hover:bg-purple-700" : "border-zinc-700"}
                      onClick={() => setDocumentFilter("all")}
                    >
                      All
                    </Button>
                    <Button
                      variant={documentFilter === "verified" ? "default" : "outline"}
                      size="sm"
                      className={documentFilter === "verified" ? "bg-blue-600 hover:bg-blue-700" : "border-zinc-700"}
                      onClick={() => setDocumentFilter("verified")}
                    >
                      <Check className="h-3 w-3 mr-1" /> Verified
                    </Button>
                    <Button
                      variant={documentFilter === "forged" ? "default" : "outline"}
                      size="sm"
                      className={documentFilter === "forged" ? "bg-red-600 hover:bg-red-700" : "border-zinc-700"}
                      onClick={() => setDocumentFilter("forged")}
                    >
                      <X className="h-3 w-3 mr-1" /> Forged
                    </Button>
                    <Button
                      variant={documentFilter === "pending" ? "default" : "outline"}
                      size="sm"
                      className={documentFilter === "pending" ? "bg-yellow-600 hover:bg-yellow-700" : "border-zinc-700"}
                      onClick={() => setDocumentFilter("pending")}
                    >
                      Pending
                    </Button>
                  </div>
                </div>

                {/* Blockchain Verification Toggle */}
                <div className="flex items-center justify-between">
                  <Label htmlFor="verified-only" className="text-sm font-medium">
                    Blockchain Verified Only
                  </Label>
                  <Switch id="verified-only" checked={verifiedOnly} onCheckedChange={setVerifiedOnly} />
                </div>

                {/* Price Range */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium">Price Range (in Lakhs)</h3>
                    <span className="text-xs text-zinc-400">
                      ₹{priceRange[0]}L - ₹{priceRange[1] === 10 ? "10Cr+" : priceRange[1] + "0L"}
                    </span>
                  </div>
                  <Slider
                    defaultValue={[0, 10]}
                    max={10}
                    step={1}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="my-4"
                  />
                </div>

                {/* Property Type */}
                <div>
                  <h3 className="text-sm font-medium mb-3">Property Type</h3>
                  <div className="space-y-2">
                    {["Apartment", "Villa", "Penthouse", "Duplex", "Commercial", "Plot", "Farmhouse"].map((type) => (
                      <div key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`type-${type}`}
                          checked={propertyTypes.includes(type)}
                          onChange={() => togglePropertyType(type)}
                          className="h-4 w-4 rounded border-zinc-700 bg-zinc-900 text-purple-600"
                        />
                        <label htmlFor={`type-${type}`} className="ml-2 text-sm text-zinc-400">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700">Apply Filters</Button>
              </div>
            </div>
          </div>

          {/* Properties List */}
          <div className="lg:w-3/4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="relative w-full sm:w-auto">
                <Input
                  type="search"
                  placeholder="Search properties..."
                  className="border-zinc-800 bg-zinc-900 pr-10 w-full sm:w-80"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-zinc-500" />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-zinc-700 lg:hidden flex-1"
                  onClick={() => setShowFilters(true)}
                >
                  <Filter className="h-4 w-4 mr-2" /> Filters
                </Button>
                <select className="h-10 rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-white w-full sm:w-auto">
                  <option>Sort: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-zinc-400 text-sm">
                Showing {filteredProperties.length} properties
                {documentFilter !== "all" && ` with ${documentFilter} documents`}
                {verifiedOnly && ", blockchain verified only"}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <BackgroundGradient key={property.id} className="rounded-xl bg-zinc-900 p-1">
                  <div className="overflow-hidden rounded-lg">
                    <div className="relative h-48 w-full">
                      <Image
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-purple-600 px-2 py-1 text-xs font-medium text-white">
                        <Shield className="h-3 w-3" />
                        Blockchain Verified
                      </div>

                      {/* Document Status Badge */}
                      <div
                        className={`absolute top-2 left-2 flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium text-white ${
                          property.documentStatus === "verified"
                            ? "bg-blue-600"
                            : property.documentStatus === "forged"
                              ? "bg-red-600"
                              : "bg-yellow-600"
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
                          <>Pending Verification</>
                        )}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="mb-2 flex items-center gap-1 text-xs text-purple-400">
                        <Building className="h-3 w-3" />
                        <span>{property.type}</span>
                      </div>
                      <h3 className="mb-1 text-lg font-semibold">{property.title}</h3>
                      <div className="mb-3 flex items-center gap-1 text-sm text-zinc-400">
                        <MapPin className="h-3 w-3" />
                        <span>{property.location}</span>
                      </div>

                      <div className="mb-4 grid grid-cols-3 gap-2 border-b border-zinc-800 pb-4">
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

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Tag className="h-4 w-4 text-purple-400" />
                          <span className="font-semibold text-white">{property.price}</span>
                        </div>
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </BackgroundGradient>
              ))}
            </div>

            {filteredProperties.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="h-20 w-20 rounded-full bg-zinc-800 flex items-center justify-center mb-4">
                  <Search className="h-10 w-10 text-zinc-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No properties found</h3>
                <p className="text-zinc-400 max-w-md">
                  We couldn't find any properties matching your current filters. Try adjusting your search criteria.
                </p>
              </div>
            )}

            {filteredProperties.length > 0 && (
              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="border-zinc-700 mx-auto">
                  Load More Properties
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
