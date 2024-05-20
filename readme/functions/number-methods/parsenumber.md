# parseNumber

### `parseNumber(num)`

Parses the input number or string and returns an object containing the float, integer, and sign components of the number. It provides a structured breakdown of the numeric value for further processing or analysis.

### Arguments

* `num` (`string | number`): The input number or string to parse.

### Returns

* `(object)`: An object containing the following properties:
  * `float` (number): The absolute value of the parsed float.
  * `int` (number): The absolute value of the parsed integer.
  * `sign` (string): The sign of the number as a string ("-" for negative numbers, "" for positive or zero).

### Example

```typescript
typescript
import { parseNumber } from 'check-engineering/ts-utils';

const numberString = "-3.14";
const parsedNumber = parseNumber(numberString); // => { float: 3.14, int: 3, sign: "-" }
```

### Usage

```typescript
typescript
import { parseNumber } from 'check-engineering/ts-utils';

const number = 42;
const parsedNumber = parseNumber(number); // => { float: 42, int: 42, sign: "" }
```

### Notes

* The `parseNumber` function extracts the float, integer, and sign components of the input number for further analysis or processing.
* It provides a structured representation of the numeric value, allowing for detailed examination of its components.
* The function returns an object with the absolute float and integer values, along with the sign of the number as a string.
