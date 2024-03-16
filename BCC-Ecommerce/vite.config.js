import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '', // Set the base path if your app is not served from the root of the server
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Add an alias for the src directory
    },
  },
});