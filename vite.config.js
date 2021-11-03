import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { env } from "process";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    port: env.PORT || 80,
    hmr: false,
  },
});
