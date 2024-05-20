# Sample Utils

## Overview

The cpb-utils is a versatile TypeScript utility package that provides a collection of useful functions for various tasks, including array manipulation, date formatting, string & number operations, and object handling. This package offers essential tools to enhance your TypeScript projects with ease. Below is a brief overview of the main functions included in this package:

## Table of Contents

* [Sample Utils](./#cpb-utils)
* [Table of Contents](./#table-of-contents)
* [Utilities](./#Functions)
* [Installation](./#Installation)
* [Usage](./#Usage)
* [Contributing](./#contributing)
* [License](./#license)

## Functions

`capitalize`: Converts the first letter of a string to uppercase

`toUpperCase`: Converts a string to uppercase

`toLowerCase`: Converts a string to lowercase

`trim`: Removes whitespace from the beginning and end of a string.

`removeUnderscores`: Removes underscore(s) from a string

`replaceAll`: Replaces all occurrences of a string in given input.

`initials`: Generates initials from a given string.

`defaultOptions`: Generates a random string based on the given options.

`randomStr`: Generates a random string based on the given options.

`generateUuid`: Generates a Universally Unique Identifier (UUID).

`isArr`: Pushes a unique value into an array if it doesn't already exist.

`isArrEmpty`: Get the time difference between the provided date and the current time.

`pushUniqueValue`: Formats a date string or Date object to the specified date-time format.

`pushOrUpdate`: Format a number to a fixed precision

`toNow`: Parse a number string or number and return its float, integer, and sign

`formatDate`: Parse a formatted string and extract its sign, base, decimals, and unit

`fromNow`: Add a unit to a number based on the provided configuration

`toFixed`: Add thousands and decimal separators to a number string based on the provided configuration

`parseNumber`: Ensures the input value is a number and optionally enforces a minimum value.

`parseFormat`: @param {string} value

`addUnit`: Cleanly parse a string to JSON object value if an error is discovered

`addSeparators`: Deep clones an object without keeping reference

`formatNumber`: Parse all number values in an object

`ensureNumber`: Removes empty keys in an object

`numberEmptyState`: Cleans a query object for empty values and parse number values

`parseJSON`: Convert an object into the query version of itself

`deepClone`:

`parseNumValues`: Converts the first letter of a string to uppercase

`removeEmptyKeys`: Converts a string to uppercase

`sanitizeQuery`: Converts a string to lowercase

`removeKeys`: Removes whitespace from the beginning and end of a string.

`renameKey`: Removes underscore(s) from a string

`renameKeys`: Replaces all occurrences of a string in given input.

`sortByKeyLength`: Generates initials from a given string.

`querylize`: Generates a random string based on the given options.

`reserveKeys`: Generates a random string based on the given options.

`hasKeysAndValues`: Generates a Universally Unique Identifier (UUID).

## Installation

To install the cpb-utils package, you can use the following command:

```bash
npm install @cpb-utils
```

or

```bash
yarn add @cpb-utils
```

This command will fetch and install the cpb-utils package from the package registry, making it available for use in your project.

### Usage

Once you have the file in your project, simply import the utility you need using the ES6 import statement.

```typescript
// Import the specific method category you need
import { chunk, formatDate, capitalize } from "kam-utils1000/array.ts";
import { roundNum, clampNum } from "kam-utils1000/number.ts";

// OR Import all utilities
import { formatDate, roundNum } from "kam-utils1000";
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

This project is licensed under the [MIT License](https://github.com/Kamsi-yonna/Check-package-beta/blob/main/LICENSE/README.md). You are free to use, modify, and distribute this software. Refer to the [LICENSE](https://github.com/Kamsi-yonna/Check-package-beta/blob/main/LICENSE/README.md) file for more details.
