"use client"

import type React from "react"
import { cn } from "@/lib/utils"

export function BackgroundGradient({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  animate?: boolean
}) {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  }
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 opacity-70 group-hover:opacity-100 blur-sm transition duration-500",
          animate && "animate-gradient",
        )}
      />
      <div className={cn("relative rounded-lg bg-zinc-950 p-4", className)}>{children}</div>
    </div>
  )
}
