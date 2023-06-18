import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    server: {
      port: 4000,
      open: true,
    },
    preview: {
      port: 8000,
    },
    plugins: [react()],
  };
});
