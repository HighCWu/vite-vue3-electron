import { defineConfig } from "vite";
import obfuscator from "rollup-plugin-obfuscator";
import vue from "@vitejs/plugin-vue";

const obfuscatePlugin = obfuscator({})

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    ...(!process.env.IS_DEV ? [obfuscatePlugin] : [])
  ],
});
