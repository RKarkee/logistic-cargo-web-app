export const theme = {
  colors: {
    primary: {
      50: "#f2f4f9",
      100: "#d6d9ec",
      200: "#adb4d8",
      300: "#848fc4",
      400: "#5b6bb0",
      500: "#32479c",
      600: "#1f2e7b",
      700: "#141f5c",
      800: "#0c1340",
      900: "#050d55", // DP
    },
    secondary: {
      50: "#fdf4f4",
      100: "#f8dada",
      200: "#f0b5b5",
      300: "#e89090",
      400: "#d54a4a",
      500: "#b01919",
      600: "#8f1313",
      700: "#700606", // NEx
      800: "#4f0404",
      900: "#2f0202",
    },
    accent: {
      50: "#fff8f1",
      100: "#feeacc",
      200: "#fed08f",
      300: "#fdb456",
      400: "#fa9d2c",
      500: "#f4920c", // Connecting World
      600: "#dd820a",
      700: "#b56808",
      800: "#8d4f06",
      900: "#663804",
    },
    neutral: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
    },
    footer: {
      500: "#264653",
      600: "#1d4044",
    },
    success: {
      500: "#22c55e",
      600: "#16a34a",
    },
    warning: {
      500: "#f59e0b",
      600: "#d97706",
    },
    error: {
      500: "#ef4444",
      600: "#dc2626",
    },
  },
  spacing: {
    section: "5rem",
    container: "1200px",
  },
  borderRadius: {
    card: "12px",
    button: "8px",
  },
  shadows: {
    card: "0 4px 8px rgba(0, 0, 0, 0.08)",
    hover: "0 8px 16px rgba(0, 0, 0, 0.12)",
    accent: "0 4px 20px rgba(244, 146, 12, 0.3)", // orange glow for CTAs
  },
};
export type Theme = typeof theme;
