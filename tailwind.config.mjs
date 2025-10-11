/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        cairo: ["var(--font-cairo)"],
      },
      colors: {
        // ألوان الوضع الفاتح
       light: {
    background: "#ffffff",
    text: "#111827",
    primary: "#2563eb",
    secondary: "#6b7280",
    accent: "#1c7ed6", // لون أزرق متدرج متفق عليه
  },
  dark: {
    background: "#111827",
    text: "#f9fafb",
    primary: "#3b82f6",
    secondary: "#9ca3af",
    accent: "#86baf5", // اللون الثاني من التدرج
  },
      },
        background: {
          light: "#F9FAFB",
          dark: "#111827",
        },
      },
    },
  },
  plugins: [],
};
