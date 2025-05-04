import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://https://demoblaze.com/:3000',
    setupNodeEvents(on, config) {
      // plugins aqui, se necessário
    },
    specPattern: 'cypress/e2e/**/*.spec.ts',
    supportFile: 'cypress/support/e2e.ts'
  },
  env: {
    apiUrl: 'api'
  }
})
