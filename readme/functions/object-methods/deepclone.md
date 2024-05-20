# deepClone

### `deepClone(obj)`

Creates a deep copy of the input object, including all nested objects and arrays. It ensures that the cloned object is independent of the original, allowing for safe manipulation without affecting the original data structure.

### Arguments

* `obj` (`T | Record<string, any> | null`): The object to be deep cloned. It can be of type `T`, a generic object type, or `null`.

### Returns

* `T`: A deep copy of the input object.

### Example

```typescript
typescript
import { deepClone } from 'check-engineering/ts-utils';

const originalObject = { name: 'Alice', age: 30, hobbies: ['reading', 'painting'] };
const clonedObject = deepClone(originalObject); // => { name: 'Alice', age: 30, hobbies: ['reading', 'painting'] }
```

### Usage

```typescript
typescript
import { deepClone } from 'check-engineering/ts-utils';

const data = { key: 'value', nested: { subkey: 'subvalue' } };
const clonedData = deepClone(data); // => { key: 'value', nested: { subkey: 'subvalue' } }
```

### Notes

* The `deepClone` function is essential for creating independent copies of complex objects, ensuring that changes made to the cloned object do not affect the original.
* It recursively clones nested objects and arrays, providing a complete replica of the input object.
* This function is valuable for scenarios where data immutability and preservation of the original structure are crucial.
