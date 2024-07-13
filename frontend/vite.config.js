import { defineConfig } from 'vite';
import { createProxy } from 'vite-plugin-mock';

export default defineConfig({
  plugins: [
    createProxy({
      '/api': {
        target: 'http://localhost:8080', 
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      },
    }),
  ],
});
