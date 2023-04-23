import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // base: './',
  plugins: [vue()],
  server: {
    https: false,
    host: "0.0.0.0",
    open: false,
    cors: true
  }
})
