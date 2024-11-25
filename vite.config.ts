import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "http://47.116.123.99:9080",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
})
