/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Geist', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
        display: ['Geist', 'Inter', 'sans-serif'],
      },
      colors: {
        darkBg: "#090A0B",
        darkBgAlt: "#0F1012",
        darkCard: "#111316",
        darkBorder: "#1D2025",
        textPrimary: "#F5F5F5",
        textSecondary: "#A1A1AA",
        textMuted: "#6B6F76",
        valemind: {
          blue: "#2563eb",
          blueLight: "#3b82f6",
          cyan: "#06b6d4",
          purple: "#8b5cf6",
        },
        border: "#1D2025",
        input: "#1D2025",
        ring: "#F5F5F5",
        background: "#090A0B",
        foreground: "#F5F5F5",
        primary: {
          DEFAULT: "#FFFFFF",
          foreground: "#090A0B",
        },
        secondary: {
          DEFAULT: "#111316",
          foreground: "#F5F5F5",
        },
        muted: {
          DEFAULT: "#111316",
          foreground: "#A1A1AA",
        },
        accent: {
          DEFAULT: "#1D2025",
          foreground: "#F5F5F5",
        },
        card: {
          DEFAULT: "#111316",
          foreground: "#F5F5F5",
        },
      },
      borderRadius: {
        lg: "14px",
        md: "10px",
        sm: "6px",
      },
    },
  },
  plugins: [],
}
