import reactions from '@jill64/tailwind-reactions'
import gridAuto from '@jill64/tailwind-grid-auto'
import { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  plugins: [reactions, gridAuto]
}

export default config
