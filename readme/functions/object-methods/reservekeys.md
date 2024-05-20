# reserveKeys

### `reserveKeys(obj, keys)`

Creates a new object containing only the specified keys from the original input object. It filters out keys that are not included in the specified array and returns a new object with the reserved keys.

### Arguments

* `obj` (`Record<string, any>`): The input object to reserve keys from.
* `keys` (`string[]`): The array of keys to reserve in the new object.

### Returns

* `Record<string, any>`: A new object containing only the specified keys.

### Example

```typescript
typescript
import { reserveKeys } from 'check-engineering/ts-utils';

const data = {
  name: 'Alice',
  age: 30,
  city: 'New York',
  country: 'USA'
};

const reservedKeys = reserveKeys(data, ['name', 'city']); // ==> { name: 'Alice', city: 'New York' }
```

### Usage

```typescript
typescript
import { reserveKeys } from 'check-engineering/ts-utils';

const user = {
  id: 456,
  username: 'john_doe',
  email: 'john@example.com',
  role: 'admin'
};

const reservedUserKeys = reserveKeys(user, ['username', 'email']); // ==> { username: 'john_doe', email: 'john@example.com' }
```

### Notes

* The `reserveKeys` function creates a new object containing only the specified keys from the input object.
* It preserves the original object and returns a new object with the selected key-value pairs.
* This function is useful for creating a subset of an object containing only the necessary keys for specific use cases.
