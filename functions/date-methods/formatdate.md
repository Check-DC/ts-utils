# formatDate

### `formatDate(date, format)`

The `formatDate` function takes a date and a format string as input and returns a formatted date string based on the specified format. It allows for flexibility in the date format, making it easy to adapt to different requirements.

### Arguments

* `date` (`Date | string`): The date to be formatted. It can be a `Date` object or a string representing a date.
* `format` (`string`, optional): The format string defining the desired date format. If not provided, the default format is "YYYY-MM-DD".

### Returns

* `(string)`: The formatted date string based on the specified format.

### Example

```typescript
typescript
import { formatDate } from 'check-engineering/ts-utils';

const date = new Date('2023-02-14');
const formattedDate = formatDate(date, 'YYYY-MM-DD'); // => "2023-02-14"
```

### Usage

```typescript
typescript
import { formatDate } from 'check-engineering/ts-utils';

const date = '2024-06-30';
const formattedDate = formatDate(date, 'DD/MM/YYYY'); // => "30/06/2024"
```

### Notes

* The `formatDate` function provides a flexible way to format dates based on the specified format, making it suitable for various applications where date formatting is required.
* It supports both `Date` objects and strings representing dates as input, ensuring compatibility with different data sources.
* The function allows for customization of the date format using the `format` argument, making it easy to adapt to different requirements.
