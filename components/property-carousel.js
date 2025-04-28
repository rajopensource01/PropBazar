"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const propertyImages = [
  {
    url: "/images/property-1.png",
    alt: "Modern residential apartment complex in Mumbai",
    title: "Luxury Apartments in Mumbai",
    location: "Andheri West, Mumbai",
    price: "₹1.2 Cr onwards",
  },
  {
    url: "/images/property-2.png",
    alt: "Urban skyline with high-rise buildings under construction",
    title: "Premium Towers in Gurgaon",
    location: "Sector 48, Gurgaon",
    price: "₹1.8 Cr onwards",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BPDpzMA5Z7zauU0smpq8UnXfHDy9OV.png",
    alt: "Modern residential villa with elegant design and wooden accents",
    title: "Luxury Villas in Noida",
    location: "Sector 128, Noida",
    price: "₹4.2 Cr onwards",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oU5ZTzewpcCiadZAiQ9hGZbrj97iNc.png",
    alt: "Aerial view of dense urban residential development",
    title: "Integrated Township in Pune",
    location: "Hinjewadi, Pune",
    price: "₹85 L onwards",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AQdPQypr4yA4ps56bamT4u1ANtanyd.png",
    alt: "Luxury modern villa with infinity pool at twilight",
    title: "Waterfront Villas in Goa",
    location: "Candolim, Goa",
    price: "₹3.5 Cr onwards",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O5dqVHQFec3rGeLo9HEyIgA1bAjDZx.png",
    alt: "Looking up at modern skyscrapers in financial district",
    title: "Commercial Spaces in Bangalore",
    location: "Whitefield, Bangalore",
    price: "₹25,000/sqft",
  },
]

export function PropertyCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % propertyImages.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + propertyImages.length) % propertyImages.length)
  }, [])

  useEffect(() => {
    let interval

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying, nextSlide])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  const handleViewProperty = () => {
    alert(`Viewing details for: ${propertyImages[currentIndex].title}`)
  }

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">Premium Indian Properties</h2>

        <div
          className="relative mx-auto h-[500px] max-w-6xl overflow-hidden rounded-xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-transparent"></div>

          {propertyImages.map((image, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 h-full w-full transition-opacity duration-1000",
                index === currentIndex ? "opacity-100" : "opacity-0",
              )}
            >
              <Image
                src={image.url || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 text-white hover:bg-black/70"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 text-white hover:bg-black/70"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
            {propertyImages.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  index === currentIndex ? "w-8 bg-blue-500" : "bg-white/50",
                )}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
            <h3 className="text-2xl font-bold text-white">{propertyImages[currentIndex].title}</h3>
            <div className="flex flex-wrap items-center justify-between mt-2">
              <p className="text-zinc-300">
                <span className="text-blue-400 mr-2">Location:</span>
                {propertyImages[currentIndex].location}
              </p>
              <p className="text-zinc-300">
                <span className="text-blue-400 mr-2">Price:</span>
                {propertyImages[currentIndex].price}
              </p>
            </div>
            <Button onClick={handleViewProperty} className="mt-4 bg-blue-600 hover:bg-blue-700">
              View Property
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
