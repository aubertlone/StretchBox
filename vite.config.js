import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dns from 'dns';
//i like adding comments
dns.setDefaultResultOrder('verbatim')
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
           target: 'http://127.0.0.1:3010',
           changeOrigin: true,
           secure: false,      
           ws: true,
       }
  },
  },
  cors: true,
});
