import { HeroSection } from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { PropertyCarousel } from "@/components/property-carousel"
import { FeaturedProperties } from "@/components/featured-properties"
import { HowItWorks } from "@/components/how-it-works"
import { BlockchainAdvantages } from "@/components/blockchain-advantages"
import { DocumentVerification } from "@/components/document-verification"
import { Footer } from "@/components/footer"
import PropertyGallery from "@/components/property-gallery"
import TypewriterEffectDemo from "@/components/typewriter-effect-demo"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <Navbar />
      <HeroSection />
      <PropertyCarousel />
      <FeaturedProperties />
      <PropertyGallery />
      <TypewriterEffectDemo />
      <DocumentVerification />
      <HowItWorks />
      <BlockchainAdvantages />
      <Footer />
    </main>
  )
}
