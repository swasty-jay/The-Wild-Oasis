import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'date-fns': 'date-fns' // Ensure Vite resolves date-fns correctly
    }
  },
  build: {
    target: 'esnext', // Ensure modern JavaScript target
    rollupOptions: {
      external: ['date-fns'] // If needed, handle date-fns as an external dependency
    }
  },
  server: {
    hmr: {
      overlay: false // Optionally disable the overlay if it’s too intrusive
    }
  }
});