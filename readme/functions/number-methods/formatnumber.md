# formatNumber

### `formatNumber(value, format, options)`

Formats the input value into a specified format with separators and units based on the provided configuration. It allows for customizing the display of numeric values by specifying the format, additional options, and custom formatting rules.

### Arguments

* `value` (`string | number`): The input value to be formatted.
* `format` (`string`, optional): The format string specifying the desired format. Defaults to "0" if not provided.
* `options` (`Record<string, any>`): Additional options for customizing the formatting, such as separators and units.

### Returns

* `(string)`: The formatted number or string based on the specified format.

### Example

```typescript
typescript
import { formatNumber } from 'check-engineering/ts-utils';

const inputValue = 1234567.89;
const format = "0,0.00";
const formattingOptions = { thousandsSeparator: ",", decimalSeparator: ".", unit: "kg" };
const formattedValue = formatNumber(inputValue, format, formattingOptions); // Output: "1,234,567.89 kg"
```

### Usage

```typescript
typescript
import { formatNumber } from 'check-engineering/ts-utils';

const inputValue = "9876543.21";
const format = "0,0.00";
const formattingOptions = { thousandsSeparator: " ", decimalSeparator: ",", unit: "m/s" };
const formattedValue = formatNumber(inputValue, format, formattingOptions); // Output: "9 876 543,21 m/s"
```

### Notes

* The `formatNumber` function allows you to customize the display of numeric values by applying a specified format with separators and units.
* It supports specifying the format string, additional options for customization, and custom formatting rules, providing flexibility in formatting numeric values.
* The function returns the formatted number or string based on the specified format, enhancing the presentation of numerical data.
