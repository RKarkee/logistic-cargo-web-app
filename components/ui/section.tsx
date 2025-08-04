import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: ReactNode
  className?: string
  background?: "white" | "gray" | "primary"
  padding?: "sm" | "md" | "lg" | "xl"
}

const backgroundClasses = {
  white: "bg-white",
  gray: "bg-gray-50",
  primary: "bg-primary-50",
}

const paddingClasses = {
  sm: "py-12",
  md: "py-16",
  lg: "py-20",
  xl: "py-24",
}

export function Section({ children, className, background = "white", padding = "lg" }: SectionProps) {
  return <section className={cn(backgroundClasses[background], paddingClasses[padding], className)}>{children}</section>
}
