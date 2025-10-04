/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // For the App Router
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // For the Pages Router
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // Add other directories if needed, e.g., './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      // You can extend Tailwind's default theme here,
      // for example, by adding custom colors, fonts, or breakpoints.
    },
  },
  plugins: [
    // Add any Tailwind CSS plugins here, e.g., require('@tailwindcss/typography')
  ],
};