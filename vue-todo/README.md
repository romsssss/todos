# Vue-Todo

[![Unit tests][unit-tests-badge]][unit-tests-url]
[![End-to-End tests][e2e-tests-badge]][e2e-tests-url]
[![Linter][linter-badge]][linter-url]

[unit-tests-badge]: https://github.com/romsssss/todos/actions/workflows/vue-unit-tests-runner.yml/badge.svg?branch=main
[unit-tests-url]: https://github.com/romsssss/todos/actions/workflows/vue-unit-tests-runner.yml?query=branch%3Amain
[e2e-tests-badge]: https://github.com/romsssss/todos/actions/workflows/vue-e2e-tests-runner.yml/badge.svg?branch=main
[e2e-tests-url]: https://github.com/romsssss/todos/actions/workflows/vue-e2e-tests-runner.yml?query=branch%3Amain
[linter-badge]: https://github.com/romsssss/todos/actions/workflows/vue-linter-runner.yml/badge.svg?branch=main
[linter-url]: https://github.com/romsssss/todos/actions/workflows/vue-linter-runner.yml?query=branch%3Amain

A simple Todo app written with Vue.js

![Application screenshot](src/assets/images/app-screenshot.png?raw=true "Application Screenshot")

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
