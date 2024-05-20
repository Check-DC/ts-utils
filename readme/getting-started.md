# Getting Started

***

## Table of Contents

* [Introduction](getting-started.md#introduction)
* [Installation](getting-started.md#installation)
* [Usage](getting-started.md#usage)

***

## Introduction

The TS-Utils package stems from an idea of having a comprehensive TypeScript utility library designed to streamline the development workflow. \
The package offers a wide range of functions that simplify common programming tasks and provide essential tools to enhance your TypeScript projects with ease.

This package serves as a valuable tool for TypeScript developers looking to enhance their projects with efficient and reusable functionality.  \
The Ts-Utils is particularly useful for projects that require frequent data manipulation, formatting, or object handling.  You can write more concise, readable, and maintainable code, ultimately improving the overall quality of your TypeScript projects by leveraging this package.&#x20;

***

## [Installation](getting-started.md#installation)

The library is available as an [npm package](https://www.npmjs.com/package/@check-engineering/ts-utils).

However, to install the check-engineering/ts-utils package, you can use the following commands:

```bash
# Using npm
npm install @check-engineering/ts-utils

# Using yarn
yarn add @check-engineering/ts-utils
```

These commands will fetch and install the TS-Utils package from the package registry, making it available for use in your TypeScript project.

***

### [Usage](getting-started.md#usage)

Once you have the package installed, you can import the specific utility functions you need using the ES6 import statement. Here's an example of how to import the package and use:

```typescript
// Import the specific method category you need
import { chunk, formatDate, capitalize } from "check-engineering/ts-utils/array.ts";
import { roundNum, clampNum } from "check-engineering/ts-utils/number.ts";

// OR 

// Import all utilities
import { formatDate, roundNum } from "check-engineering/ts-utils";
```
