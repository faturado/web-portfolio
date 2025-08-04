/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // (if you're using Next.js 13+ App Router)
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "background-base": "var(--background-base)",
        "background-base2": "var(--background-base2)",
        "background-dark": "var(--background-dark)",
        "background-dark2": "var(--background-dark2)",
        "background-header": "var(--background-header)",
      },
    },
  },
  plugins: [],
};
