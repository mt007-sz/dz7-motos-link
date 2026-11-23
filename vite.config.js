import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Em desenvolvimento, as rotas /go/* são encaminhadas para o servidor Node (porta 3000).
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/go': 'http://localhost:3000',
    },
  },
});
