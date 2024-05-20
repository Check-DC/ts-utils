# addSeparators

### `addSeparators(num, base, thousandsSeparator, decimalSeparator)`

Formats the input number string by adding thousands and decimal separators based on the provided configuration. It allows for customizing the display of numeric values by specifying the base format, thousands separator, and decimal separator.

### Arguments

* `num` (`string`): The input number string to be formatted.
* `base` (`string`): The base format for adding separators ("", "0,0").
* `thousandsSeparator` (`string`): The character to use as the thousands separator.
* `decimalSeparator` (`string`): The character to use as the decimal separator.

### Returns

* `(string)`: The formatted number string with separators added.

### Example

```typescript
typescript
import { addSeparators } from 'check-engineering/ts-utils';

const numberString = "1234567.89";
const base = "0,0";
const thousandsSeparator = ",";
const decimalSeparator = ".";
const formattedNumber = addSeparators(numberString, base, thousandsSeparator, decimalSeparator); // Output: "1,234,567.89"
```

### Usage

```typescript
typescript
import { addSeparators } from 'check-engineering/ts-utils';

const value = "9876543.21";
const base = "";
const thousandsSeparator = " ";
const decimalSeparator = ",";
const formattedValue = addSeparators(value, base, thousandsSeparator, decimalSeparator); // Output: "9 876 543,21"
```

### Notes

* The `addSeparators` function allows you to customize the display of numeric values by adding thousands and decimal separators based on the provided configuration.
* It supports specifying the base format, thousands separator, and decimal separator, providing flexibility in formatting numeric values.
* The function returns the formatted number string with the specified separators, enhancing the readability of numerical data.
