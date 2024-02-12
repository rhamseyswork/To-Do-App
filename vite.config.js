import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://rhamseyswork.github.io/To-Do-App/', // Adjust this based on your GitHub Pages URL path
  plugins: [react()]
});