# isArrEmpty

### `isArrEmpty(arr)`

Determines if the provided array contains any elements. It does this by comparing the array's length property to zero. If the length is zero, the function returns `true`, indicating that the array is empty. Otherwise, it returns `false`.

### Arguments

* `arr` (`any[]`): The array to check for emptiness.

### Returns

* `(boolean)`: Returns `true` if the array is empty, `false` otherwise.

### Example

```typescript
typescript
import { isArrEmpty } from 'check-engineering/ts-utils';

console.log(isArrEmpty([])); // => true
console.log(isArrEmpty([1, 2, 3])); // => false
```

### Usage

```typescript
typescript
import { isArrEmpty } from 'check-engineering/ts-utils';

const emptyArr = [];
const nonEmptyArr = [1, 2, 3];

console.log(isArrEmpty(emptyArr)); // => true
console.log(isArrEmpty(nonEmptyArr)); // => false
```

### Notes

* The `isArrEmpty` function provides a straightforward way to determine if an array contains any elements, aiding in conditional logic and array handling within TypeScript projects.
* Ensure the input `arr` is an array (`any[]`) to accurately check for emptiness using the array's length property.
