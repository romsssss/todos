# Vue-Todo

A simple Todo app written with Vue.js

![Alt text](src/assets/images/app-screenshot.png?raw=true "Application Screenshot")

## Project Setup

```sh
npm install
```

## Run the project

Compile and Hot-Reload for Development
```sh
npm run dev
```
The project is then available at http://127.0.0.1:5173/


Compile and Minify for Production
```sh
npm run build
```

## Run tests

Run Unit Tests with [Vitest](https://vitest.dev/)
```sh
npm run test:unit
```

Run End-to-End Tests with [Playwright](https://playwright.dev)
```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

## Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
