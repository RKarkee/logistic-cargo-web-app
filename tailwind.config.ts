import type { Config } from "tailwindcss"
import { theme } from "./lib/theme"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: theme.colors.primary[600],
          foreground: "hsl(var(--primary-foreground))",
          ...theme.colors.primary,
        },
        secondary: {
          DEFAULT: theme.colors.secondary[600],
          foreground: "hsl(var(--secondary-foreground))",
          ...theme.colors.secondary,
        },
        accent: {
          ...theme.colors.accent,
        },
        neutral: {
          ...theme.colors.neutral,
        },
        footer: {
          ...theme.colors.footer,
        },
        success: {
          ...theme.colors.success,
        },
        warning: {
          ...theme.colors.warning,
        },
        error: {
          ...theme.colors.error,
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        card: theme.borderRadius.card,
        button: theme.borderRadius.button,
        lg: theme.borderRadius.card,
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        card: theme.shadows.card,
        hover: theme.shadows.hover,
        accent: theme.shadows.accent,
      },
      spacing: {
        section: theme.spacing.section,
        container: theme.spacing.container,
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
