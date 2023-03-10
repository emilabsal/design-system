import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
          @import "./src/assets/styles/components/_variables.sass"
        `,
      },
    },
  },
});
