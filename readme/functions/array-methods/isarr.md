# isArr

### `isArr(variable)`

Determines whether the provided variable is an array by utilizing the `Array.isArray()` method.

### Arguments

* `variable` (any): The variable to check if it is an array.

### Returns

* `(boolean)`: Returns `true` if the variable is an array, `false` otherwise.

### Example

```typescript
typescript
import { isArr } from 'check-engineering/ts-utils';

console.log(isArr([1, 2, 3])); // => true
console.log(isArr('not an array')); // => false
```

### Usage

```typescript
typescript
import { isArr } from 'check-engineering/ts-utils';

const arr = [1, 2, 3];
const notArr = 'not an array';

console.log(isArr(arr)); // => true
console.log(isArr(notArr)); // => false
```

### Notes

* Ensure the input `variable` is checked for being an array using `Array.isArray(variable)`.
* This function provides a quick and reliable way to verify if a given variable is an array, aiding in type checking and validation within your TypeScript projects.

\
