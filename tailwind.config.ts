import type { Config } from 'tailwindcss'

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
        normalBG: "#222222",
        lightBG: "#555555"
      },
    },
  },
  plugins: [],
}
export default config
