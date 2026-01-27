import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages root domain (username.github.io): use '/'
  // For project pages (username.github.io/repo-name): use '/repo-name/'
  base: process.env.NODE_ENV === 'production' ? '/' : './',
})
