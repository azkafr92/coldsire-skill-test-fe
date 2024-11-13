import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 8080 },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
})