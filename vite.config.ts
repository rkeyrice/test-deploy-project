import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5001,
    host: true,
    strictPort: true,
    // hmr: { protocol: 'wss', host: ' https://21f6332cb4af.ngrok-free.app/', clientPort: 443 },
    // allowedHosts: ['c5b6789aa5dc.ngrok-free.app'],
    proxy: {
      '/api': 'http://localhost:3000', // проксируем всё, что начинается с /api\\
    },
  },
})
