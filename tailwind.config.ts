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
          50: theme.colors.primary[50],
          100: theme.colors.primary[100],
          200: theme.colors.primary[200],
          300: theme.colors.primary[300],
          400: theme.colors.primary[400],
          500: theme.colors.primary[500],
          600: theme.colors.primary[600],
          700: theme.colors.primary[700],
          800: theme.colors.primary[800],
          900: theme.colors.primary[900],
        },
        secondary: {
          DEFAULT: theme.colors.secondary[600],
          foreground: "hsl(var(--secondary-foreground))",
          50: theme.colors.secondary[50],
          100: theme.colors.secondary[100],
          200: theme.colors.secondary[200],
          300: theme.colors.secondary[300],
          400: theme.colors.secondary[400],
          500: theme.colors.secondary[500],
          600: theme.colors.secondary[600],
          700: theme.colors.secondary[700],
          800: theme.colors.secondary[800],
          900: theme.colors.secondary[900],
        },
        success: {
          50: theme.colors.success[50],
          100: theme.colors.success[100],
          200: theme.colors.success[200],
          300: theme.colors.success[300],
          400: theme.colors.success[400],
          500: theme.colors.success[500],
          600: theme.colors.success[600],
          700: theme.colors.success[700],
          800: theme.colors.success[800],
          900: theme.colors.success[900],
        },
        warning: {
          50: theme.colors.warning[50],
          100: theme.colors.warning[100],
          200: theme.colors.warning[200],
          300: theme.colors.warning[300],
          400: theme.colors.warning[400],
          500: theme.colors.warning[500],
          600: theme.colors.warning[600],
          700: theme.colors.warning[700],
          800: theme.colors.warning[800],
          900: theme.colors.warning[900],
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
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
        lg: theme.borderRadius.card,
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        card: theme.shadows.card,
        hover: theme.shadows.hover,
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
