"use client"

import { motion } from "motion/react"
import { LinkButton } from "@/components/ui/link-button"
import Image from "next/image"

export function HeroSection() {
  return (
    <div className="relative mx-auto flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-black px-4 py-16">
      {/* Background image */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img src="/images/property-modern-1.jpeg" alt="Modern luxury property" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
      </div>

      <div className="container relative z-10 mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Image src="/images/propbazar-logo.png" alt="PropBazar" width={120} height={120} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-blue-600/20 px-4 py-1 rounded-full text-blue-400 font-medium text-sm mb-4"
        >
          Newly Launched
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
        >
          India's First <span className="text-blue-500">Blockchain-Powered</span> Real Estate Marketplace
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <LinkButton href="/properties" size="lg" className="bg-blue-600 px-8 hover:bg-blue-700">
            Explore Properties
          </LinkButton>
          <LinkButton
            href="/verification"
            size="lg"
            variant="outline"
            className="border-zinc-700 px-8 hover:bg-zinc-800"
          >
            Verify Documents
          </LinkButton>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-2xl text-center text-lg text-zinc-400"
        >
          Founded by Himanshu and team, PropBazar ensures secure, transparent, and fraud-free property transactions
          across Delhi, Mumbai, Bangalore, and other major Indian cities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 flex items-center gap-2 bg-zinc-900/80 px-4 py-2 rounded-full"
        >
          <span className="h-2 w-2 rounded-full bg-blue-500"></span>
          <span className="text-sm text-zinc-400">Launching in more cities soon</span>
        </motion.div>
      </div>
    </div>
  )
}
