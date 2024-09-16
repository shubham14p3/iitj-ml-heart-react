import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',  // This enables JSX syntax for .js files
    include: /src\/.*\.(js|jsx)$/, // Apply to both .js and .jsx files in the src directory
    exclude: [],
  },
  server: {
    proxy: {
      "/predict": "http://127.0.0.1:5000/",
    },
  },
});
