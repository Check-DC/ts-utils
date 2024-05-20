# parseNumericObj

### `parseNumericObj(obj)`

Converts numeric string values in an object to numbers, preserving non-numeric values.

### Description

The `parseNumericObj` function iterates through the input object and converts numeric string values to numbers while preserving non-numeric values. It creates a new object with the converted numeric values and the original non-numeric values.

### Arguments

* `obj` (`Record<string, any>`): The input object to parse numeric values from.

### Returns

* `Record<string, any>`: A new object with numeric string values converted to numbers.

### Example

```typescript
typescript
import { parseNumericObj } from 'check-engineering/ts-utils';

const data = {
  count: '10',
  price: '19.99',
  name: 'Alice',
  active: 'true'
};

const parsedData = parseNumericObj(data); // ==> { count: 10, price: 19.99, name: 'Alice', active: 'true' }
```

### Usage

```typescript
typescript
import { parseNumericObj } from 'check-engineering/ts-utils';

const details = {
  quantity: '5',
  weight: '2.5',
  inStock: 'true',
  category: 'electronics'
};

const parsedDetails = parseNumericObj(details); // ==> { quantity: 5, weight: 2.5, inStock: true, category: 'electronics' }
```

### Notes

* The `parseNumericObj` function selectively converts numeric string values in an object to numbers while preserving non-numeric values.
* It ensures that only valid numeric strings are converted, maintaining the integrity of non-numeric data.
* This function is useful for scenarios where specific values need to be treated as numbers for calculations or comparisons while keeping other values unchanged.
