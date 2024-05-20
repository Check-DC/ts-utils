# parseNumValues

### `parseNumValues(obj)`

Recursively parses the values of an input object, converting any numeric string values to numbers. It ensures that numeric strings within the object are correctly converted to numerical values for consistent data processing.

### Arguments

* `obj` (`object`): The input object to be parsed, containing values that may be numeric strings.

### Returns

* `object`: A new object with numeric string values converted to numbers.

### Example

```typescript
typescript
import { parseNumValues } from 'check-engineering/ts-utils';

const data = {
  value1: '42',
  nested: {
    value2: '3.14',
    value3: '1000'
};

const parsedData = parseNumValues(data); // => { value1: 42, nested: { value2: 3.14, value3: 1000 } }
```

### Usage

```typescript
typescript
import { parseNumValues } from 'check-engineengineering/ts-utils';

const inputObject = {
  number1: '123',
  number2: '456',
  nested: {
    number3: '789'
  }
};

const parsedObject = parseNumValues(inputObject); // => { number1: 123, number2: 456, nested: { number3: 789 } }
```

### Notes

* The `parseNumValues` function is designed to handle objects with numeric values represented as strings, converting them to actual numbers for consistent data processing.
* It recursively traverses the object's properties, identifying numeric string values and converting them to numerical data types.
* This function is useful for ensuring data consistency and accuracy when dealing with objects containing numeric values in string format.
