import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/zaalart-photography/", // Ganti dengan nama repository Anda
});
