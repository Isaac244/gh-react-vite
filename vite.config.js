import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //Link de mi Pagina de GitHub
  base: 'https://isaac244.github.io/',
  plugins: [react()]
})
