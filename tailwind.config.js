/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5ca4cd',
        secondary: '#999999',
        accent: '#FF6340',
        success: '#00A550',
        alert: '#F1C40F',
        error: '#E93E40'
      }
    }
  },
  plugins: [],
}

