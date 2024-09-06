import { defineConfig } from "vite";
import lit from "vite-plugin-lit";


export default defineConfig({
  plugins: [lit()],
  base: '/lit/'
});