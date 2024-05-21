# Check-Engineering/Ts-utils [![npm version](https://img.shields.io/npm/v/@check-engineering/ts-utils.svg)](https://www.npmjs.com/package/@check-engineering/ts-utils)

## Overview

The Check-Engineering/TS-Utils is a versatile TypeScript utility package that provides a collection of useful functions for various tasks, including array manipulation, date formatting, string & number operations, and object handling. This package offers essential tools to enhance your TypeScript projects with ease.  
Below is a brief overview of the main functions included in this package:

## Table of Contents

- [CHECK-ENGINEERING/TS-UTILS](#check-engineering/ts-utils)
- [Table of Contents](#table-of-contents)
- [Documentation](#Documentation)
- [Functions](#Functions)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#contributing)
- [License](#license)

## Documentation

For a comprehensive documentation, we highly recommend that you take a look at the [📘TS-Utils Documentation](https://kamsiyonna.gitbook.io/check-engineering-ts-utils), where each function and its usage are highlighted.

## Functions

### Array Methods

`isArr`: Check if the given variable is an array

`isArrEmpty`: Check if the given array is empty

`pushUniqueValue`: Pushes a unique value into an array if it doesn't already exist.

`pushOrUpdate`: Pushes a unique value into an array if it doesn't already exist.

### Date Methods

`toNow`: Calculate the relative time difference between a given date and the current date

`formatDate`: Convert a date into a formatted string based on the specified format

`fromNow`: Calculate the relative time difference between a given date and the current date for future events

### Number Methods

`toFixed`: Format a number to a specified precision

`parseNumber`: Parse a number string or number and return its float, integer, and sign

`parseFormat`: Parse a formatted string and extract its sign, base, decimals, and unit

`addUnit`: Add a unit to a number based on the provided configuration

`addSeparators`: Add thousands and decimal separators to a number string based on the provided configuration

`formatNumber`: Format a number or string into a specified format with separators and units

`ensureNumber`: Ensures the input value is a valid number, returning the minimum value if the input is invalid

`numberEmptyState`: Handles the display of numeric values, providing a fallback format for "empty" or invalid values.

### Object Methods

`parseJSON`: Parse a JSON string into a specified type, with a default value if parsing fails or input is null

`deepClone`: Create a deep clone of a given object, including nested objects and arrays

`parseNumValues`: Recursively parse the values of an object, converting any numeric string values to numbers

`removeEmptyKeys`: Recursively remove keys with null, undefined, or empty string values from an object

`sanitizeQuery`: Sanitize a query object by removing empty keys and parsing numeric string values to numbers

`removeKeys`: Remove specified keys from an object, returning a new object with the keys removed

`renameKey`: Rename a key in an object from an old name to a new name

`renameKeys`: Rename multiple keys in an object from old names to new names

`sortByKeyLength`: Sort an object's key-value pairs by the length of the values, with ties broken by the lexicographic order of the keys

`querylize`: Convert an object into a query string for URL parameters

`parseNumericObj`: Convert numeric string values in an object to numbers, preserving non-numeric values

`reserveKeys`: Create a new object containing only the specified keys from the original object

`hasKeysAndValues`: Check if an object has all the specified keys and if the values associated with those keys are not undefined or null

`defaultOptions`: Create a new object with selected keys from the original object

### String Methods

`randomStr`: Generate a random string based on specified options

`toUpperCase`: Convert a string to uppercase

`toLowerCase`: Convert a string to lowercase

`toFullUrl`: Convert a partial URL to a full URL by adding missing components like protocol and domain

`initials`: Generate the initials from a person's name

`generateUuid`: Generate a Universally Unique Identifier (UUID)

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
