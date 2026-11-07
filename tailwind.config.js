/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        texo: {
          bg: '#F5F0E6',
          bgDark: '#131B24',
          indigo: '#263950',
          indigoHover: '#1B2C40',
          slate: '#4C627E',
          slateDark: '#7EAAD0',
          card: '#FAF6EF',
          cardDark: '#1C2733',
          border: '#E6E0D5',
          borderDark: '#223344',
          text: '#1C2B36',
          textDark: '#E8EEF3',
          muted: '#6E7E8E',
          mutedDark: '#8AA0B4',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        serif: ['"New York"', 'Georgia', 'Cambria', 'serif'],
        mono: ['"SF Mono"', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(38, 57, 80, 0.08), 0 2px 6px -1px rgba(38, 57, 80, 0.04)',
        elevation: '0 20px 40px -15px rgba(38, 57, 80, 0.12), 0 0 1px 1px rgba(38, 57, 80, 0.05)',
      },
    },
  },
  plugins: [],
};

