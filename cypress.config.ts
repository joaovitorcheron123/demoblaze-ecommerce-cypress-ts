import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://demoblaze.com',
    setupNodeEvents(on, config) {
      // plugins aqui
    },
    specPattern: 'cypress/e2e/**/*.spec.ts',
    supportFile: false
  },
  env: {
    apiUrl: 'api'
  }
})
