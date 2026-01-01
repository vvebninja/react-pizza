import path from 'path';
import UnpluginInjectPreload from 'unplugin-inject-preload/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/react-pizza/' : '/',
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    svgr(),
    UnpluginInjectPreload({
      files: [
        {
          // Vite hashes fonts like: MyFont-BR7x9.woff2
          // This regex finds any woff2 file in your output
          outputMatch: /.*\.woff2$/,
          attributes: {
            type: 'font/woff2',
            as: 'font',
            crossorigin: 'anonymous',
          },
        },
      ],
      injectTo: 'head-prepend', // Puts it at the top of <head> for max priority
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
