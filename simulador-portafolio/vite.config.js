import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

/** @type {import('tailwindcss').Config} */
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
});