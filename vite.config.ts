import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/*": "/src/*",
      "@pages": "/src/pages",
      "@components": "/src/components",
      "@includes": "/src/includes",
      "@utils": "/src/utils",
    }
    }
  }
)
