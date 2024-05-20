# pushOrUpdate

### `pushOrUpdate(array, value, key)`

Adds a value to the provided array if the value does not already exist in the array. If the value already exists, it updates the existing value in the array. This function compares the value with existing elements in the array based on the specified key.

### Template

* `T`: The type of the array elements.

### Arguments

* `array` (`T[]`): The array to push or update the value into.
* `value` (`T`): The value to be pushed or updated in the array.
* `key` (`keyof T`): The key to compare if the value already exists in the array.

### Returns

* `void`: This function does not return a value; it modifies the provided array in place.

### Example

```typescript
typescript
import { pushOrUpdate } from 'check-engineering/ts-utils';

const uniqueArray = [1, 2, 3];
pushOrUpdate(uniqueArray, 3, 'id'); // uniqueArray remains [1, 2, 3]
pushOrUpdate(uniqueArray, 4, 'id'); // uniqueArray becomes [1, 2, 3, 4]
pushOrUpdate(uniqueArray, 3, 'id'); // uniqueArray remains [1, 2, 3, 4]
```

### Usage

```typescript
typescript
import { pushOrUpdate } from 'check-engineering/ts-utils';

const uniqueArray = [1, 2, 3];
const newValue = 3;

pushOrUpdate(uniqueArray, newValue, 'id'); // newValue is updated in the array
```

### Notes

* The `pushOrUpdate` function ensures that duplicate values are not added to the array, maintaining uniqueness.
* If a value already exists in the array based on the specified key, the function updates the existing value instead of adding a new one.
* This function is useful for scenarios where you need to maintain a unique set of values in an array, preventing duplicates from being added, and also for updating existing values in the array.
