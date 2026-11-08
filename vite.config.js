import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// إذا تستخدم tailwind plugin أبقِه كما هو

export default defineConfig({
  base: '/Space-Tourism/',
  plugins: [react(), tailwindcss()],
})
