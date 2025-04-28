import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LinkButton } from "@/components/ui/link-button"
import { Shield, Users, Building, Globe } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const team = [
    {
      name: "Himanshu",
      role: "Founder & CEO",
      bio: "Visionary entrepreneur with extensive experience in real estate and technology. Founded PropBazar to revolutionize property transactions in India.",
      image: "/images/propbazar-logo.png",
    },
    {
      name: "Rahul Sharma",
      role: "CTO",
      bio: "Blockchain expert with experience at leading tech companies. IIT graduate with passion for innovative technology solutions.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Priya Patel",
      role: "Head of Operations",
      bio: "Former real estate professional with deep expertise in property documentation and verification processes.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Amit Kumar",
      role: "Marketing Director",
      bio: "Digital marketing specialist with experience in growing startups from ground up to nationwide recognition.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About PropBazar</h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            A revolutionary startup transforming real estate transactions in India with blockchain technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-block bg-blue-600/20 px-4 py-1 rounded-full text-blue-400 font-medium text-sm mb-4">
              Our Story
            </div>
            <h2 className="text-3xl font-bold mb-6">The PropBazar Journey</h2>
            <p className="text-lg text-zinc-400 mb-6">
              Founded in 2025 by Himanshu, PropBazar was born from a vision to transform the real estate industry in
              India by bringing transparency, security, and efficiency to property transactions through blockchain
              technology.
            </p>
            <p className="text-lg text-zinc-400 mb-6">
              After experiencing firsthand the challenges and inefficiencies in traditional property transactions,
              Himanshu assembled a team of technology and real estate experts to create a platform that would eliminate
              fraud, reduce paperwork, and make property buying and selling a seamless experience.
            </p>
            <p className="text-lg text-zinc-400 mb-6">
              Today, PropBazar is a rapidly growing startup based in USAR, with a mission to become India's most trusted
              real estate marketplace by leveraging the power of blockchain technology.
            </p>
            <div className="flex gap-4">
              <LinkButton href="/services" size="lg" className="bg-blue-600 hover:bg-blue-700">
                Our Services
              </LinkButton>
              <LinkButton href="/contact" size="lg" variant="outline" className="border-zinc-700">
                Contact Us
              </LinkButton>
            </div>
          </div>
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image src="/images/property-modern-2.jpeg" alt="Modern property" fill className="object-cover" />
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-600/20 px-4 py-1 rounded-full text-blue-400 font-medium text-sm mb-4">
              Our Team
            </div>
            <h2 className="text-3xl font-bold mb-4">Meet the Founders</h2>
            <p className="text-zinc-400 max-w-3xl mx-auto">
              The visionary team behind PropBazar who are revolutionizing the real estate industry with blockchain
              technology
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                  <p className="text-zinc-400 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-600/20 px-4 py-1 rounded-full text-blue-400 font-medium text-sm mb-4">
              Our Mission
            </div>
            <h2 className="text-3xl font-bold mb-4">Why We Started PropBazar</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="h-12 w-12 rounded-lg bg-blue-600/20 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trust & Security</h3>
              <p className="text-zinc-400">
                We build trust through blockchain verification, ensuring every property document is authentic and
                secure.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="h-12 w-12 rounded-lg bg-blue-600/20 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-zinc-400">
                We prioritize our customers' needs, providing exceptional service and support throughout the property
                transaction process.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="h-12 w-12 rounded-lg bg-blue-600/20 flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-zinc-400">
                We continuously innovate, leveraging blockchain technology to solve real-world problems in the real
                estate industry.
              </p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="h-12 w-12 rounded-lg bg-blue-600/20 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparency</h3>
              <p className="text-zinc-400">
                We believe in complete transparency in all our operations, from property listings to verification
                processes.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Real Estate Revolution</h2>
          <p className="text-zinc-400 max-w-3xl mx-auto mb-8">
            Whether you're buying, selling, or investing in property, PropBazar provides the security and transparency
            you need for a successful transaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton href="/properties" size="lg" className="bg-blue-600 hover:bg-blue-700">
              Explore Properties
            </LinkButton>
            <LinkButton href="/list-property" size="lg" variant="outline" className="border-zinc-700">
              List Your Property
            </LinkButton>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
