import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Shield, Users, Building, Globe } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const stats = [
    { value: "10,000+", label: "Properties Verified" },
    { value: "₹5,000+ Cr", label: "Transaction Value" },
    { value: "99.9%", label: "Verification Accuracy" },
    { value: "15+", label: "Cities Covered" },
  ]

  const team = [
    {
      name: "Rajiv Sharma",
      role: "Founder & CEO",
      bio: "Former real estate developer with 15+ years of experience. Blockchain enthusiast.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Priya Mehta",
      role: "CTO",
      bio: "Blockchain expert with experience at leading tech companies. MIT graduate.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Vikram Patel",
      role: "Head of Verification",
      bio: "Former government land registry official with deep expertise in property documentation.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Ananya Singh",
      role: "Legal Director",
      bio: "Real estate attorney with 12+ years of experience in property law and transactions.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wJOlDU4hqw4RsuwL8Zrzl0Uo9LxBD3.png"
          alt="Modern cityscape"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About BlockEstate</h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Revolutionizing real estate transactions in India with blockchain technology
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-zinc-400 mb-6">
              At BlockEstate, we're on a mission to transform the real estate industry in India by bringing
              transparency, security, and efficiency to property transactions through blockchain technology.
            </p>
            <p className="text-lg text-zinc-400 mb-6">
              We believe that every property buyer and seller deserves a seamless, fraud-free experience. Our blockchain
              verification system ensures that all property documents are authentic, creating trust in an industry that
              has historically been plagued by fraud and opacity.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Our Services
              </Button>
              <Button size="lg" variant="outline" className="border-zinc-700">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YuwAsuFwl6p67FEXJOIdJ930n99YMf.png"
              alt="Modern buildings"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{stat.value}</div>
              <div className="text-zinc-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="h-12 w-12 rounded-lg bg-purple-600/20 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trust & Security</h3>
              <p className="text-zinc-400">
                We build trust through blockchain verification, ensuring every property document is authentic and
                secure.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="h-12 w-12 rounded-lg bg-purple-600/20 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-zinc-400">
                We prioritize our customers' needs, providing exceptional service and support throughout the property
                transaction process.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="h-12 w-12 rounded-lg bg-purple-600/20 flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-zinc-400">
                We continuously innovate, leveraging blockchain technology to solve real-world problems in the real
                estate industry.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="h-12 w-12 rounded-lg bg-purple-600/20 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparency</h3>
              <p className="text-zinc-400">
                We believe in complete transparency in all our operations, from property listings to verification
                processes.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Leadership Team</h2>
          <p className="text-zinc-400 text-center max-w-3xl mx-auto mb-12">
            Meet the experts behind BlockEstate who are revolutionizing the real estate industry with blockchain
            technology
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-purple-400 text-sm mb-3">{member.role}</p>
                  <p className="text-zinc-400 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Real Estate Revolution</h2>
          <p className="text-zinc-400 max-w-3xl mx-auto mb-8">
            Whether you're buying, selling, or investing in property, BlockEstate provides the security and transparency
            you need for a successful transaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Explore Properties
            </Button>
            <Button size="lg" variant="outline" className="border-zinc-700">
              List Your Property
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
