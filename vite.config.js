import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages: use '/repository-name/' if not using custom domain
  // For root domain (username.github.io): use '/'
  base: process.env.NODE_ENV === 'production' ? '/zwelwinoo.github.io/' : './',
})
