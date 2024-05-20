# renameKey

### `renameKey(obj, oldKey, newKey)`

Renames a key in an object from an old name to a new name.

### Description

The `renameKey` function renames a key in the provided object from an old name to a new name. It ensures that the value associated with the old key is preserved and assigned to the new key. If the old key does not exist or the new key is the same as the old key, the function does not perform any action.

### Arguments

* `obj` (`object`): The object to rename the key in.
* `oldKey` (`string`): The old name of the key to rename.
* `newKey` (`string`): The new name of the key.

### Returns

* `void`: This function does not return a value; it modifies the provided object in place.

### Example

```typescript
typescript
import { renameKey } from 'check-engineering/ts-utils';

const person = {
  name: 'Alice',
  age: 30,
  city: 'New York'
};

renameKey(person, 'age', 'years'); // ==> { name: 'Alice', years: 30, city: 'New York' }
```

### Usage

```typescript
typescript
import { renameKey } from 'check-engineering/ts-utils';

const user = {
  id: 456,
  username: 'john_doe',
  email: 'john@example.com'
};

renameKey(user, 'username', 'displayName'); // ==> { id: 456, displayName: 'john_doe', email: 'john@example.com' }
```

### Notes

* The `renameKey` function modifies the provided object in place, renaming the specified key.
* If the old key does not exist in the object or the new key is the same as the old key, the function does not perform any action.
* This function is useful for scenarios where you need to change the name of a key in an object without affecting its value.
