import reactions from '@jill64/tailwind-reactions'
import { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  plugins: [reactions]
}

export default config
