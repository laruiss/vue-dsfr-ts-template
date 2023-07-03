import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
      componentFolder: 'src',
      viewportHeight: 500,
      viewportWidth: 1000,
    },
    specPattern: [
      'src/**/*.{cy,ct}.{js,jsx,ts,tsx}',
    ],
  },

  e2e: {
    baseUrl: 'http://localhost:5050',
    specPattern: [
      'cypress/e2e/**/*.{cy,e2e}.{js,jsx,ts,tsx}',
    ],
  },
})
