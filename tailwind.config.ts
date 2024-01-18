import type {Config} from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#dddddd',
        secondary: '#aaaaaa',
        blueMain: '#332FFF',
        purpleMain: '#C82CFF',
        darkBg: "#090909",
        normalBG: "#111111",
        normalLightBg: "#222222",
        lightBG: "#555555"
      },
    },
    keyframes: {
      fadeInOut: {
        '0%, 100%': {
          opacity: "0",
        },
        '50%': {
          opacity: "1",
        },
      },
    },
    animation: {
      'fade-in-out': 'fadeInOut 1s ease-in-out infinite',
    },
  },
  plugins: [],
}
export default config
