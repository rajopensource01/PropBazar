"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import { Shield, FileCheck, Clock, Coins, Lock, Users } from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "Immutable blockchain records prevent fraud and tampering",
  },
  {
    icon: FileCheck,
    title: "Document Verification",
    description: "All property documents verified and stored securely on blockchain",
  },
  {
    icon: Clock,
    title: "Faster Transactions",
    description: "Smart contracts automate processes, reducing closing time",
  },
  {
    icon: Coins,
    title: "Reduced Costs",
    description: "Elimination of intermediaries lowers transaction costs",
  },
  {
    icon: Lock,
    title: "Data Privacy",
    description: "Cryptographic security ensures your data remains private",
  },
  {
    icon: Users,
    title: "Transparent Marketplace",
    description: "Full visibility into property history and ownership records",
  },
];

export function BlockchainAdvantages() {
  useEffect(() => {
    // Only runs on client
    // You can check for MetaMask or other browser-only features here if needed
    // Example: console.log(window.ethereum);
  }, []);

  return (
    <section className="py-16 bg-zinc-950">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0.5, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="mb-10 bg-gradient-to-br from-blue-300 to-blue-500 bg-clip-text text-center text-3xl font-bold tracking-tight text-transparent"
        >
          Blockchain Advantages
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20">
                <advantage.icon className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">{advantage.title}</h3>
              <p className="text-zinc-400">{advantage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}