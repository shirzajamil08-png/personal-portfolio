import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // /api calls from the React dev server go to the Express API on :5000,
    // so the browser sees one origin and there is no CORS friction.
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true
      }
    }
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        // Three.js is by far the biggest dependency; keeping it in its own chunk
        // lets the page shell load and paint without waiting for the 3D scene.
        manualChunks: {
          three: ["three"],
          react: ["react", "react-dom"],
          motion: ["framer-motion"]
        }
      }
    }
  }
});
