# addUnit

### `addUnit(num, config)`

Formats the input number by adding a unit based on the provided configuration. It allows for customizing the display of numeric values by specifying the number of decimal places and the unit to be added.

### Arguments

* `num` (`number`): The number to be formatted.
* `config` (`Record<string, any>`): The configuration object with the following properties:
  * `decimals` (number): The number of decimal places to display.
  * `unit` (string): The unit to be added, with "a" representing the SI prefix.

### Returns

* `(string)`: The formatted number with the unit.

### Example

```typescript
typescript
import { addUnit } from 'check-engineering/ts-utils';

const number = 42.12345;
const config = { decimals: 2, unit: 'kg' };
const formattedNumber = addUnit(number, config); // Output: "42.12 kg"
```

### Usage

```typescript
typescript
import { addUnit } from 'check-engineering/ts-utils';

const value = 123.456;
const options = { decimals: 1, unit: 'm/s' };
const formattedValue = addUnit(value, options); // Output: "123.5 m/s"
```

### Notes

* The `addUnit` function allows you to customize the display of numeric values by adding a unit based on the provided configuration.
* It supports specifying the number of decimal places and the unit to be added, providing flexibility in formatting numeric values.
* The function returns the formatted number as a string with the specified unit, enhancing the presentation of numerical data.
