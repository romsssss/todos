# Rails-Todo

[![Unit tests][unit-tests-badge]][unit-tests-url]
[![End-to-End tests][e2e-tests-badge]][e2e-tests-url]
[![Linter][linter-badge]][linter-url]

[unit-tests-badge]: https://github.com/romsssss/todos/actions/workflows/rails-unit-tests-runner.yml/badge.svg?branch=main
[unit-tests-url]: https://github.com/romsssss/todos/actions/workflows/rails-unit-tests-runner.yml?query=branch%3Amain
[e2e-tests-badge]: https://github.com/romsssss/todos/actions/workflows/rails-e2e-tests-runner.yml/badge.svg?branch=main
[e2e-tests-url]: https://github.com/romsssss/todos/actions/workflows/rails-e2e-tests-runner.yml?query=branch%3Amain
[linter-badge]: https://github.com/romsssss/todos/actions/workflows/rails-linter-runner.yml/badge.svg?branch=main
[linter-url]: https://github.com/romsssss/todos/actions/workflows/rails-linter-runner.yml?query=branch%3Amain

A simple Todo app written with Rails

![Application screenshot](app/assets/images/app-screenshot.png?raw=true "Application Screenshot")

## Project setup

Make sure a working version of Ruby (v3.0+) is installed on your system.

Then, at the root of this project, install bundler with

```bash
gem install bundler
```

Install all dependencies with

```bash
bundle install
```

## Run the project

Run the following command

```
bin/dev
```

The project is then available at http://127.0.0.1:3000

## Run tests

Use one of the following commands:

* `bin/rails test` to run all tests but integration (unit tests, controller tests, ...)
* `bin/rails test:system` to only run integration tests
* `bin/rails test:all` to run all the tests

## Lint with rubocop

```
rubocop
```
