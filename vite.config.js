import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Modello-Store/', // 👈 BU SATIR BİZİM ALTIN ANAHTAR
  server: {
    watch: {
      usePolling: true,
      interval: 100, // polling sıklığı (ms)
    },
  },
})
