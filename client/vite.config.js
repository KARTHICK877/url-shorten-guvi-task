import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { addUser } from "@services/APIservices.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@services": path.resolve(__dirname, "src/Services"),
    },
  },
})
