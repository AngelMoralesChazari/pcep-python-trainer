/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        petrol: {
          50: '#f0f7f9',
          100: '#dbeaf0',
          200: '#bad7e2',
          300: '#8dbed0',
          400: '#589eb8',
          500: '#34829e',
          600: '#266782',
          700: '#1e5168',
          800: '#1a4356',
          900: '#173949',
          950: '#0e2430',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      }
    },
  },
  plugins: [],
}
