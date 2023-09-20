import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// const mode = process.env.NODE_ENV === "development" ? "development" : "production";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
});
