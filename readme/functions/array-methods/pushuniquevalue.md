# pushUniqueValue

### `pushUniqueValue(array, value, key)`

Adds a value to the provided array only if the value does not already exist in the array. It compares the value with existing elements in the array based on an optional key. If a key is specified, the function checks for uniqueness based on the value of that key in each element.

### Template

* `T`: The type of the elements in the array.

### Arguments

* `array` (`T[]`): The array to push the value into.
* `value` (`T`): The value to be pushed into the array.
* `key` (`keyof T | null`, optional): The key to compare if the value already exists in the array. Defaults to `null`.

### Returns

* `void`: This function does not return a value; it modifies the provided array in place.

### Example

```typescript
typescript
import { pushUniqueValue } from 'check-engineering/ts-utils';

const uniqueArray = [1, 2, 3];
pushUniqueValue(uniqueArray, 3); // uniqueArray remains [1, 2, 3]
pushUniqueValue(uniqueArray, 4); // uniqueArray becomes [1, 2, 3, 4]
```

### Usage

```typescript
typescript
import { pushUniqueValue } from 'check-engineering/ts-utils';

const uniqueArray = [1, 2, 3];
const newValue = 3;

pushUniqueValue(uniqueArray, newValue); // newValue is not added as it already exists
```

### Notes

* The `pushUniqueValue` function ensures that duplicate values are not added to the array, maintaining uniqueness.
* If a `key` is provided, the function compares elements based on the specified key to determine uniqueness.
* This function is useful for scenarios where you need to maintain a unique set of values in an array, preventing duplicates from being added.
