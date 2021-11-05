import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

console.log(process.env.PORT);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    port: process.env.PORT || 3000,
    hmr: {
      port: process.env.PORT || 3000,
    },
  },
});
