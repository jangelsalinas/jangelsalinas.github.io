// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Configuración para GitHub Pages - sin base path
  site: 'https://joseangelsalinas.github.io',
  // base: '/Portfolio', // Comentado para usar la raíz del dominio
  output: 'static',
  
  vite: {
    plugins: [tailwindcss()]
  }
});