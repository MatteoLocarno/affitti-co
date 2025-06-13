import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#142047',
        secondary: '#cebd6d',
      },
    },
  },
  plugins: [],
}
export default config 