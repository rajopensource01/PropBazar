"use client"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import { LinkButton } from "@/components/ui/link-button"

export default function TypewriterEffectDemo() {
  const words = [
    {
      text: "Buy",
    },
    {
      text: "Sell",
    },
    {
      text: "Verify",
    },
    {
      text: "Properties",
    },
    {
      text: "with",
    },
    {
      text: "PropBazar.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ]
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-zinc-950">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">A startup by Himanshu and team</p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <LinkButton
          href="/properties"
          className="w-40 h-10 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm"
        >
          Explore Properties
        </LinkButton>
        <LinkButton
          href="/verification"
          className="w-40 h-10 rounded-xl bg-black text-white border border-blue-600 text-sm"
        >
          Verify Documents
        </LinkButton>
      </div>
    </div>
  )
}
