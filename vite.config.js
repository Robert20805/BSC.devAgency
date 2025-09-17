import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/BSC.devAgency/',
  server: {
    host: true, // listen on all addresses, including LAN
    port: 5173,
    hmr: {
      host: '192.168.30.190',
      port: 5173,
    },
  },
})
