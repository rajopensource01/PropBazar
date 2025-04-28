import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"

export default function BackgroundBeamsDemo() {
  return (
    <BackgroundBeamsWithCollision className="dark:from-black dark:to-zinc-900">
      <div className="relative z-20 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-black dark:text-white font-sans tracking-tight mb-6">
          Blockchain Technology{" "}
          <div className="relative mx-auto inline-block w-max">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-green-500 via-emerald-500 to-green-600">
              <span className="">Revolutionizing Real Estate</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 py-4">
              <span className="">Revolutionizing Real Estate</span>
            </div>
          </div>
        </h2>
        <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto mb-8">
          Our blockchain technology ensures complete transparency, security, and efficiency in every property
          transaction, eliminating fraud and reducing costs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
            <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">Immutable Records</h3>
            <p className="text-zinc-700 dark:text-zinc-300">
              Once recorded on our blockchain, property records cannot be altered, ensuring complete data integrity.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
            <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">Smart Contracts</h3>
            <p className="text-zinc-700 dark:text-zinc-300">
              Automated contracts execute when conditions are met, eliminating intermediaries and reducing costs.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
            <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">Tokenization</h3>
            <p className="text-zinc-700 dark:text-zinc-300">
              Property assets can be divided into tokens, enabling fractional ownership and increased liquidity.
            </p>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  )
}
