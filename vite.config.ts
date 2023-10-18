import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import externalGlobals from 'rollup-plugin-external-globals'
// import path from 'path'
import { resolve } from 'path'
export default defineConfig({
  resolve: {
    alias: {
      /** @ 符号指向 src 目录 */
      "@": resolve(__dirname, "./src")
    }
  },
  plugins: [vue(), splitVendorChunkPlugin()],
  // build: {
  //   rollupOptions: {
  //     externalGlobals({
  //       cesium: 'cesium'
  //     }),
  //   },
  // },
  
});
