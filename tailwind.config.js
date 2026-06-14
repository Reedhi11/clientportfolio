/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#7F5AF0",
          pink: "#FF4D8D",
          orange: "#FF9F43",
          cream: "#FFF9F5",
          dark: "#1E1E1E",
        },
      },
      fontFamily: {
        display: ["'Clash Display'", "'Space Grotesk'", "system-ui", "sans-serif"],
        sans: ["'Space Grotesk'", "'Inter'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "gradient-funky":
          "linear-gradient(135deg, #7F5AF0 0%, #FF4D8D 50%, #FF9F43 100%)",
        "gradient-radial":
          "radial-gradient(circle at center, var(--tw-gradient-stops))",
        "grain":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      animation: {
        "blob-slow": "blob 20s ease-in-out infinite",
        "blob-slower": "blob 30s ease-in-out infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
        "marquee": "marquee 25s linear infinite",
        "shimmer": "shimmer 3s linear infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(40px, -60px) scale(1.1)" },
          "66%": { transform: "translate(-30px, 30px) scale(0.95)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(127, 90, 240, 0.45)",
        "glow-pink": "0 0 40px rgba(255, 77, 141, 0.45)",
        "glow-orange": "0 0 40px rgba(255, 159, 67, 0.45)",
        soft: "0 20px 60px -20px rgba(30, 30, 30, 0.15)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
