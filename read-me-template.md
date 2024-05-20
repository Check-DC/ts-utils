# Check-Engineering/Ts-utils [![npm version](https://img.shields.io/npm/v/@check-engineering/ts-utils.svg)](https://www.npmjs.com/package/@check-engineering/ts-utils)

## Overview

The Check-Engineering/TS-Utils is a versatile TypeScript utility package that provides a collection of useful functions for various tasks, including array manipulation, date formatting, string & number operations, and object handling. This package offers essential tools to enhance your TypeScript projects with ease.
For a complete overview about the package, we highly recommend you take a look at the [📘Documentation](https://kamsiyonna.gitbook.io/check-engineering-ts-utils).  
Below is a brief overview of the main functions included in this package:

## Table of Contents

- [CHECK-ENGINEERING/TS-UTILS](#check-engineering/ts-utils)
- [Table of Contents](#table-of-contents)
- [Utilities](#Functions)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#contributing)
- [License](#license)

## Functions

<%- functionContent %>

## Installation

To install the Check-ENGINEERING/TS-Utils package, you can use the following command:

```bash
npm install @check-engineering/ts-utils
```

or

```bash
yarn add @check-engineering/ts-utils
```

This command will fetch and install the check-engineering/ts-utils package from the package registry, making it available for use in your project.

### Usage

Once you have the file in your project, simply import the utility you need using the ES6 import statement.

```typescript
// Import the specific method category you need
import { randomStr, toUpperCase } from "check-engineering/ts-utils/string.ts";
import { parseNumber, addUnit } from "check-engineering/ts-utils/number.ts";

// OR Import all utilities
import { randomStr, parseNumber, addUnit } from "check-engineering/ts-utils";
```

## Contributing

Contributions to these utilities are welcome. If you find issues or have suggestions for improvements, feel free to contribute by following these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

Please make sure to follow the existing code style and include tests for your changes.

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this software. Refer to the [LICENSE](LICENSE) file for more details.
