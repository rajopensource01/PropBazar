import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, FileCheck, Wallet, Search, Building, Scale, Gavel, FileText, Users } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Shield,
      title: "Blockchain Verification",
      description:
        "Our proprietary blockchain technology verifies all property documents for authenticity and prevents fraud.",
      features: [
        "Document hash verification",
        "Tamper-proof records",
        "Immutable transaction history",
        "Digital signatures",
      ],
    },
    {
      icon: FileCheck,
      title: "Document Verification",
      description:
        "Comprehensive verification of all property documents required for real estate transactions in India.",
      features: [
        "Sale deed verification",
        "Property tax receipt validation",
        "Land registry certificate check",
        "Encumbrance certificate verification",
      ],
    },
    {
      icon: Search,
      title: "Property Inspection",
      description: "Physical inspection of properties by our experts to ensure they match the documentation.",
      features: [
        "On-site verification",
        "Property measurement",
        "Construction quality assessment",
        "Amenities verification",
      ],
    },
    {
      icon: Building,
      title: "Property Listing",
      description: "List your property on our blockchain-verified marketplace for maximum visibility and trust.",
      features: [
        "Verified property badge",
        "Professional photography",
        "Virtual tours",
        "Detailed property description",
      ],
    },
    {
      icon: Scale,
      title: "Legal Services",
      description: "Expert legal assistance for all aspects of property transactions and documentation.",
      features: ["Title clearance", "Legal document review", "Contract drafting", "Dispute resolution"],
    },
    {
      icon: Wallet,
      title: "Secure Transactions",
      description: "Secure payment processing and escrow services for property transactions.",
      features: [
        "Escrow services",
        "Cryptocurrency payments",
        "Traditional banking integration",
        "Transaction monitoring",
      ],
    },
    {
      icon: Gavel,
      title: "Smart Contracts",
      description: "Automated smart contracts that execute when all conditions of the property transaction are met.",
      features: [
        "Automated ownership transfer",
        "Conditional payment release",
        "Multi-signature authorization",
        "Transparent execution",
      ],
    },
    {
      icon: FileText,
      title: "Documentation Services",
      description: "Assistance with preparing and processing all required documentation for property transactions.",
      features: ["Document preparation", "Digital signatures", "Government filings", "Record maintenance"],
    },
    {
      icon: Users,
      title: "Buyer-Seller Matching",
      description:
        "Advanced matching algorithm to connect buyers with verified properties that meet their requirements.",
      features: [
        "Preference-based matching",
        "Verified buyer profiles",
        "Direct communication channel",
        "Negotiation assistance",
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Comprehensive blockchain-powered solutions for secure and transparent real estate transactions in India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <div className="mb-4 h-12 w-12 rounded-lg bg-purple-600/20 flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-purple-400" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-zinc-400">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="mr-2 mt-1 h-4 w-4 rounded-full bg-purple-600/20 flex items-center justify-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                      </div>
                      <span className="text-sm text-zinc-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-20 bg-zinc-900 border border-zinc-800 rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Need Custom Blockchain Solutions?</h2>
              <p className="text-zinc-400 mb-6">
                Our team of blockchain experts can develop custom solutions tailored to your specific real estate needs.
                From private blockchains to custom smart contracts, we've got you covered.
              </p>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Contact Our Experts
              </Button>
            </div>
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Our Blockchain Technology Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-950 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Smart Contracts</h4>
                  <p className="text-sm text-zinc-400">
                    Automated execution of property transactions with Ethereum-based smart contracts
                  </p>
                </div>
                <div className="bg-zinc-950 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Document Hashing</h4>
                  <p className="text-sm text-zinc-400">
                    Secure SHA-256 hashing of all property documents for immutable verification
                  </p>
                </div>
                <div className="bg-zinc-950 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Digital Signatures</h4>
                  <p className="text-sm text-zinc-400">
                    Cryptographic signatures to ensure document authenticity and non-repudiation
                  </p>
                </div>
                <div className="bg-zinc-950 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Private Ledger</h4>
                  <p className="text-sm text-zinc-400">
                    Permissioned blockchain for sensitive property transaction data
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
