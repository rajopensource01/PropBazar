"use client"
import { twMerge } from "tailwind-merge"
import { TracingBeam } from "@/components/ui/tracing-beam"

export default function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {blockchainContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-blue-600 text-white rounded-full text-sm w-fit px-4 py-1 mb-4">{item.badge}</h2>

            <p className={twMerge("text-xl mb-4 font-bold")}>{item.title}</p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <img
                  src={item.image || "/placeholder.svg"}
                  alt="blockchain real estate"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  )
}

const blockchainContent = [
  {
    title: "How Blockchain Transforms Real Estate",
    description: (
      <>
        <p>
          Blockchain technology is revolutionizing the real estate industry in India by creating an immutable ledger of
          property transactions. This technology eliminates the possibility of document forgery, reduces the need for
          intermediaries, and creates a transparent ecosystem where buyers and sellers can transact with confidence.
        </p>
        <p>
          At PropBazar, we've developed a proprietary blockchain solution specifically designed for the Indian real
          estate market. Our platform verifies and secures all property documents, creating a tamper-proof record that
          can be easily accessed and verified by all parties involved in a transaction.
        </p>
        <p>
          The traditional real estate process in India is plagued with issues like document forgery, title disputes, and
          lengthy verification processes. Our blockchain solution addresses these challenges by creating a single source
          of truth for property ownership and transaction history.
        </p>
      </>
    ),
    badge: "Blockchain Technology",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AeCPITNhne5XTR9kYY3jDDzIX8ken1.png",
  },
  {
    title: "Smart Contracts for Automated Transactions",
    description: (
      <>
        <p>
          Smart contracts are self-executing contracts with the terms directly written into code. In real estate, smart
          contracts can automate processes like escrow, payment release, and property transfer, eliminating the need for
          intermediaries and reducing transaction costs.
        </p>
        <p>
          Our platform uses Ethereum-based smart contracts to automate key aspects of property transactions. When
          predefined conditions are met, such as payment confirmation and document verification, the smart contract
          automatically executes the next steps in the transaction process.
        </p>
        <p>
          This automation not only reduces costs but also significantly speeds up the transaction process. What
          traditionally takes weeks or months can now be completed in days, providing a seamless experience for both
          buyers and sellers.
        </p>
      </>
    ),
    badge: "Smart Contracts",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O5dqVHQFec3rGeLo9HEyIgA1bAjDZx.png",
  },
  {
    title: "Document Verification and Fraud Prevention",
    description: (
      <>
        <p>
          Document forgery is a significant issue in the Indian real estate market. Our blockchain platform creates a
          cryptographic hash of each document, which is then stored on the blockchain. Any alteration to the document,
          however minor, will change the hash, making it immediately evident that the document has been tampered with.
        </p>
        <p>
          Each property on our platform undergoes a rigorous verification process. Our team of experts verifies all
          property documents, including sale deeds, property tax receipts, and encumbrance certificates. Once verified,
          these documents are digitized and secured on our blockchain.
        </p>
        <p>
          This creates a transparent and trustworthy ecosystem where buyers can confidently make purchasing decisions,
          knowing that the property they're interested in has been thoroughly verified and is free from legal
          complications.
        </p>
      </>
    ),
    badge: "Fraud Prevention",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BPDpzMA5Z7zauU0smpq8UnXfHDy9OV.png",
  },
]
