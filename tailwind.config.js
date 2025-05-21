/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#eef5fc',
          100: '#d7e8f7',
          200: '#b0d1ef',
          300: '#89bae7',
          400: '#6297d9',
          500: '#3b74c9',
          600: '#0057A0', // Primary brand color
          700: '#0e4882',
          800: '#0c3966',
          900: '#0c2e51',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
};