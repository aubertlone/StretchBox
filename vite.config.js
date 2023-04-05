import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//i like adding comments

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/client',
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: '',
    sourcemap: true,
  },
  server: {
    open: '/',
    proxy: {
      '/api': {
           target: 'http://localhost:3000',
           changeOrigin: true,
           secure: false,      
           ws: true,
       }
  },
  },
  cors: true,
});
