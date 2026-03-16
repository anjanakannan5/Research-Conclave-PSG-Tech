
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  server: {
    host: '0.0.0.0',  // Expose to all network interfaces
    port: 4000,       // You can change this to any port you prefer
  },
  plugins: [react()],
});
