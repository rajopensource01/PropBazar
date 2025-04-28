"use client"

import { useState } from "react"
import Masonry from "./masonry"
import { Button } from "@/components/ui/button"

export default function PropertyGallery() {
  const [filter, setFilter] = useState("all")

  const propertyData = [
    {
      id: 1,
      image: "/images/property-modern-1.jpeg",
      height: 400,
      category: "luxury",
      title: "Modern Luxury Villa",
      location: "Gurgaon",
      price: "₹3.5 Cr",
    },
    {
      id: 2,
      image: "/images/property-modern-2.jpeg",
      height: 350,
      category: "residential",
      title: "Contemporary House",
      location: "Noida",
      price: "₹1.8 Cr",
    },
    {
      id: 3,
      image: "/images/property-modern-3.jpeg",
      height: 450,
      category: "luxury",
      title: "Designer Home",
      location: "South Delhi",
      price: "₹4.2 Cr",
    },
    {
      id: 4,
      image: "/images/property-modern-4.jpeg",
      height: 380,
      category: "residential",
      title: "Family House",
      location: "USAR",
      price: "₹1.2 Cr",
    },
    {
      id: 5,
      image: "/images/property-modern-5.jpeg",
      height: 420,
      category: "residential",
      title: "Modern Residence",
      location: "Bangalore",
      price: "₹2.5 Cr",
    },
    {
      id: 6,
      image: "/images/property-modern-6.jpeg",
      height: 320,
      category: "affordable",
      title: "Compact Home",
      location: "Pune",
      price: "₹85 L",
    },
    {
      id: 7,
      image: "/images/property-modern-7.jpeg",
      height: 400,
      category: "residential",
      title: "Family Apartment",
      location: "Mumbai",
      price: "₹1.5 Cr",
    },
  ]

  const filteredData = filter === "all" ? propertyData : propertyData.filter((item) => item.category === filter)

  return (
    <div className="py-16 bg-zinc-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Our Properties</h2>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button
            onClick={() => setFilter("all")}
            variant={filter === "all" ? "default" : "outline"}
            className={filter === "all" ? "bg-blue-600 hover:bg-blue-700" : "border-zinc-700"}
          >
            All Properties
          </Button>
          <Button
            onClick={() => setFilter("luxury")}
            variant={filter === "luxury" ? "default" : "outline"}
            className={filter === "luxury" ? "bg-blue-600 hover:bg-blue-700" : "border-zinc-700"}
          >
            Luxury
          </Button>
          <Button
            onClick={() => setFilter("residential")}
            variant={filter === "residential" ? "default" : "outline"}
            className={filter === "residential" ? "bg-blue-600 hover:bg-blue-700" : "border-zinc-700"}
          >
            Residential
          </Button>
          <Button
            onClick={() => setFilter("affordable")}
            variant={filter === "affordable" ? "default" : "outline"}
            className={filter === "affordable" ? "bg-blue-600 hover:bg-blue-700" : "border-zinc-700"}
          >
            Affordable
          </Button>
        </div>

        <div className="h-[800px] relative">
          <Masonry data={filteredData} />
        </div>
      </div>
    </div>
  )
}
