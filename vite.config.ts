import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // this line is for deploying in git.that is deploying using git
  // base: '/cicdreact/',
  base: '/',
});
