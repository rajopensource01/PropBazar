"use client"

import { motion } from "motion/react"
import { Search, FileCheck, Wallet, Key } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Find Property",
    description: "Browse our extensive catalog of verified properties across India",
  },
  {
    icon: FileCheck,
    title: "Document Verification",
    description: "All property documents are verified and secured on blockchain",
  },
  {
    icon: Wallet,
    title: "Secure Payment",
    description: "Make secure payments using traditional or cryptocurrency options",
  },
  {
    icon: Key,
    title: "Transfer Ownership",
    description: "Smart contracts automatically transfer ownership upon completion",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-white">How It Works</h2>
          <p className="mx-auto max-w-2xl text-zinc-400">
            Our blockchain-powered platform simplifies property transactions with enhanced security and transparency
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center rounded-xl bg-zinc-900/30 p-6 text-center"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20">
                <step.icon className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">{step.title}</h3>
              <p className="text-zinc-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
