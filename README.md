[![Playwright.dev](https://img.shields.io/badge/Documentation-Playwright-45ba4b.svg?logo=playwright)](https://playwright.dev/docs/intro)
[![Cucumber](https://img.shields.io/badge/Documentation-Cucumber-23d96c.svg?logo=cucumber)](https://cucumber.io/)
<br>

# Playwright Testing - BDD

This project aims to automate the testing of our web application using adapted tools.

## Installation

- Install chromium, node, npm and git on your machine
- Once this is done, clone this repo to your local environment:
  - `git clone` + this repository SSH url
- Install dependencies: 
  - `npm i`
- Then you're all set to start testing
  - `npm test`
  should give you the following output:
  ``` > cucumber-js test
    This Node.js version (v20.9.0) has not been tested with this version of Cucumber; it should work normally, but please raise an issue if you see anything unexpected.
    `publishQuiet` option is no longer needed, you can remove it from your configuration; see https://github.com/cucumber/cucumber-js/blob/main/docs/deprecations.md
    Launch Browser using Playwright and Chromium browser, performed once, before the start of all test scenarios.
    Launch Browser, performed before each individual test scenario
    ......Browser closed after each scenario, and result?.status
    .Launch Browser, performed before each individual test scenario
    ......Browser closed after each scenario, and result?.status
    .Closes Browser before the start of each scenario
     
    2 scenarios (2 passed)
    10 steps (10 passed)
    0m09.777s (executing steps: 0m08.913s)
  ```

## Tutorials

- [Playwright & Cucumber - Typescript](https://www.youtube.com/watch?v=bfWXNLqKlvA&list=PL699Xf-_ilW6KgK-S1l9ynOnBGiZl2Bsk)
- [Cloned from this repo](https://github.com/adamcegielka/playwright-cucumber-bdd-typescript)