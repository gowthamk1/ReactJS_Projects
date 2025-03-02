import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';  // Import the Tailwind Vite plugin

export default defineConfig({
  plugins: [react(), tailwindcss()], // Add Tailwind plugin
});
