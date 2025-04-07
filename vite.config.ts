import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      name: 'payments-js',
      entry: './src/index.ts',
      formats: ['es'],
    },
  },
})
