import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './public/index.html',
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