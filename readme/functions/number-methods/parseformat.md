# parseFormat

### `parseFormat(str)`

Parses the input string or number and returns an object containing the sign, base, decimals, and unit components of the string. It provides a structured breakdown of the formatted string for further processing or analysis.

### Arguments

* `str` (`string | number`, optional): The input string or number to be parsed. Defaults to "0" if not provided.

### Returns

* `(object)`: An object containing the following properties:
  * `sign` (string): The sign of the number ("+" for positive numbers, "-" for negative numbers).
  * `base` (string): The base number part of the string.
  * `decimals` (number): The number of decimal places in the string.
  * `unit` (string): The unit or additional characters in the string.

### Example

```typescript
typescript
import { parseFormat } from 'check-engineering/ts-utils';

const formattedString = "+123.45%";
const parsedFormat = parseFormat(formattedString); // => { sign: "+", base: "123", decimals: 2, unit: "%" }
```

### Usage

```typescript
typescript
import { parseFormat } from 'check-engineering/ts-utils';

const formattedNumber = 42.0;
const parsedFormat = parseFormat(formattedNumber); // => { sign: "+", base: "42", decimals: 1, unit: "" }
```

### Notes

* The `parseFormat` function extracts the sign, base, decimals, and unit components of the input string for further analysis or processing.
* It provides a structured representation of the formatted string, allowing for detailed examination of its components.
* The function returns an object with the sign, base, decimals, and unit properties, providing a comprehensive breakdown of the input string.
