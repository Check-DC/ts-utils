# toFixed

### `toFixed(num, precision)`

Formats the input number to a specified precision by rounding it to the specified number of decimal places. It provides a way to control the precision of numeric values for display or calculation purposes.

### Arguments

* `num` (`number`): The input number to format.
* `precision` (`number`): The number of decimal places to round the number to.

### Returns

* `(string)`: The formatted number with the specified precision as a string.

### Example

```typescript
typescript
import { toFixed } from 'check-engineering/ts-utils';

const number = 3.14159;
const formattedNumber = toFixed(number, 2); // => "3.14"
```

### Usage

```typescript
typescript
import { toFixed } from 'check-engineering/ts-utils';

const price = 19.99;
const roundedPrice = toFixed(price, 1); // => "20.0"
```

### Notes

* The `toFixed` function allows you to control the precision of numeric values by rounding them to a specified number of decimal places.
* It is useful for scenarios where you need to format numbers for display, calculations, or any other context where precision is important.
* The function returns the formatted number as a string to maintain the specified precision.
