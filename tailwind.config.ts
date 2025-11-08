import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
        // UAD Brand Colors
        jet: {
          DEFAULT: '#0C0C0D',
          50: '#3A3A3C',
          100: '#2C2C2E',
          200: '#1C1C1E',
          300: '#0C0C0D',
        },
        mint: {
          DEFAULT: '#51F8C5',
          50: '#E8FEFA',
          100: '#D1FDF5',
          200: '#A3FBE9',
          300: '#76F8DD',
          400: '#51F8C5',
          500: '#1FF5AC',
          600: '#0AC488',
          700: '#089366',
          800: '#056244',
          900: '#033122',
        },
        sky: {
          DEFAULT: '#8BC7FF',
          50: '#FFFFFF',
          100: '#F5FAFF',
          200: '#D9EBFF',
          300: '#BDDCFF',
          400: '#A2D4FF',
          500: '#8BC7FF',
          600: '#56AEFF',
          700: '#2196FF',
          800: '#007AEB',
          900: '#005FB6',
        },
        warm: {
          DEFAULT: '#FBFBF9',
          50: '#FFFFFF',
          100: '#FBFBF9',
          200: '#F5F5F0',
          300: '#EFEFE7',
          400: '#E9E9DE',
        },
        gold: {
          DEFAULT: '#F6C667',
          50: '#FFFCF5',
          100: '#FEF6E6',
          200: '#FDEBC7',
          300: '#FBE0A9',
          400: '#F9D488',
          500: '#F6C667',
          600: '#F4B43D',
          700: '#F0A013',
          800: '#C07F0A',
          900: '#905F07',
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "float": "float 6s ease-in-out infinite",
      },
      fontFamily: {
        'space': ['var(--font-space-grotesk)', 'sans-serif'],
        'inter': ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
