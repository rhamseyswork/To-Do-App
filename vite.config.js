import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/To-Do-App/', // Use the project name as the base path
  plugins: [react()]
});