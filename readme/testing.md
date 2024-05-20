# Testing

## Table of Content

* [Overview](testing.md#overview)
* [Writing Tests](testing.md#writing-tests)
* [Running Tests](testing.md#running-tests)
* [Continuous Integration](testing.md#continuous-integration)

## Overview

The TS-Utils package uses [Jest](https://jestjs.io/), a popular testing framework for JavaScript and TypeScript, to ensure the reliability and correctness of its utility functions. Each utility category has its corresponding test file located in the [`test` folder](https://github.com/Check-DC/ts-utils/tree/feat/utils-setup/tests), named after the category (e.g., `string.test.ts`, `object.test.ts`).

### Writing Tests

To write tests for your contributions, create a new test file in the `test` folder, following the naming convention of `<category>.test.ts`. For example, if you're adding a new utility function to the `array` category, create/add to the file named `array.test.ts`\
Inside the test file, write your tests using Jest's testing syntax. Here's an example of how to structure a test for a `chunk` function in the `array` category:

```typescript
typescript
import { chunk } from '../src/array';

describe('chunk', () => {
  it('should split an array into smaller chunks', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });
});
```

### Running Tests

To run the tests for a specific utility category, use the following command:

```bash
bash
pnpm test --array.test.ts
```

To run all the tests for the entire TS-Utils package, use the following command:

```bash
bash
pnpm jest
```

This will execute all the tests defined in the `test` folder.

### Continuous Integration

The TS-Utils package uses GitHub Actions for continuous integration (CI). When you submit a pull request, the CI workflow will automatically run the tests to ensure that your changes do not break existing functionality.&#x20;

By following these guidelines and writing comprehensive tests for your contributions, you can help maintain the quality and reliability of the TS-Utils package.
