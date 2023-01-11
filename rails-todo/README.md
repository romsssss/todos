# Rails-Todo
A simple Todo app written with Rails

![Alt text](app/assets/images/app-screenshot.png?raw=true "Application Screenshot")

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
