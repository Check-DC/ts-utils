# removeKeys

### `removeKeys(obj, keys)`

Removes specified keys from an input object and returns a new object with the specified keys removed. It ensures that the original object remains unchanged while providing a clean copy with the specified keys removed.

### Arguments

* `obj` (`Record<string, any>`): The input object to remove keys from.
* `keys` (`string[]`): The array of keys to remove from the object.

### Returns

* `Record<string, any>`: A new object with the specified keys removed.

### Example

```typescript
typescript
timport { removeKeys } from 'check-engineering/ts-utils';

const data = {
  id: 123,
  name: 'Alice',
  age: 30,
  city: 'New York'
};

const keysToRemove = ['id', 'city'];
const updatedData = removeKeys(data, keysToRemove); // ==> { name: 'Alice', age: 30 }
```

### Usage

```typescript
typescript
import { removeKeys } from 'check-engineering/ts-utils';

const user = {
  id: 456,
  username: 'john_doe',
  email: 'john@example.com',
  role: 'admin'
};

const keysToRemove = ['id', 'role'];
const updatedUser = removeKeys(user, keysToRemove); // ==> { username: 'john_doe', email: 'john@example.com' }
```

### Notes

* The `removeKeys` function provides a convenient way to remove specified keys from an object, creating a modified copy of the object without the specified keys.
* It ensures data integrity by preserving the original object and returning a new object with the specified keys removed.
* This function is useful for scenarios where specific keys need to be excluded from an object before further processing or data manipulation.
