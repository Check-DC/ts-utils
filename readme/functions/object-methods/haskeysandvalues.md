# hasKeysAndValues

### `hasKeysAndValues(obj, keys)`

Validates whether the input object contains all the specified keys and ensures that the values associated with those keys are not undefined or null. It returns `true` if the object meets these criteria, and `false` otherwise.

### Arguments

* `obj` (`T`): The input object to check.
* `keys` (`(keyof T)[]`): The array of keys to check for.

### Returns

* `boolean`: `true` if the object has all the specified keys with non-null, non-undefined values, `false` otherwise.

### Example

```typescript
typescript
import { hasKeysAndValues } from 'check-engineering/ts-utils';

const data = {
  name: 'Alice',
  age: 30,
  city: 'New York',
  country: 'USA'
};

const hasRequiredKeys = hasKeysAndValues(data, ['name', 'age', 'city']); // ==> true
```

### Usage

```typescript
typescript
import { hasKeysAndValues } from 'check-engineering/ts-utils';

const user = {
  id: 456,
  username: 'john_doe',
  email: 'john@example.com',
  role: 'admin'
};

const hasValidKeys = hasKeysAndValues(user, ['username', 'email', 'role']); // ==> true
```

### Notes

* The `hasKeysAndValues` function checks if an object contains all the specified keys with non-null, non-undefined values.
* It provides a simple way to validate the presence and validity of key-value pairs in an object.
* This function is useful for ensuring that an object meets specific key and value requirements before further processing.
