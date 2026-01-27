import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For Netlify: use '/' (root domain)
  // For GitHub Pages project page: use '/repository-name/'
  base: process.env.NODE_ENV === 'production' 
    ? (process.env.NETLIFY ? '/' : '/zwelwinoo/')
    : './',
})
