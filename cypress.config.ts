import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        baseUrl: "https://www.demoblaze.com/",
        experimentalRunAllSpecs: true,
        setupNodeEvents(on, config) {
            require('@cypress/code-coverage/task')(on, config);
            return config;
        }
    },
    env: {
        apiURL: "url-api"
    }
});