import { HeroSection } from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { PropertyCarousel } from "@/components/property-carousel"
import { FeaturedProperties } from "@/components/featured-properties"
import { HowItWorks } from "@/components/how-it-works"
import { BlockchainAdvantages } from "@/components/blockchain-advantages"
import { DocumentVerification } from "@/components/document-verification"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <PropertyCarousel />
      <FeaturedProperties />
      <HowItWorks />
      <BlockchainAdvantages />
      <DocumentVerification />
      <Footer />
    </main>
  )
}
