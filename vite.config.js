import fs from "vite-plugin-fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), fs()],
  // base: "/gwennsday.github.io/",
});
