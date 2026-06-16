import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/BMI-Calculator-Frontend/', // For Github Actions
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
    svgr({
      include: '**/*.svg',
    }),
  ],
})
