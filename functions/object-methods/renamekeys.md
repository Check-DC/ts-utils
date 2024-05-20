# renameKeys

### `renameKeys(obj, oldKeys, newKeys)`

Renames multiple keys in the provided object from old names to new names. It ensures that the values associated with the old keys are preserved and assigned to the corresponding new keys. The function iterates through the arrays of old and new keys, renaming each key accordingly.

### Arguments

* `obj` (`object`): The object to rename the keys in.
* `oldKeys` (`string[]`): The array of old key names.
* `newKeys` (`string[]`): The array of new key names.

### Returns

* `void`: This function does not return a value; it modifies the provided object in place.

### Example

```typescript
typescript
import { renameKeys } from 'check-engineering/ts-utils';

const person = {
  name: 'Alice',
  age: 30,
  city: 'New York'
};

renameKeys(person, ['age', 'city'], ['years', 'location']); // ==> { name: 'Alice', years: 30, location: 'New York' }
```

### Usage

```typescript
typescript
import { renameKeys } from 'check-engineering/ts-utils';

const user = {
  id: 456,
  username: 'john_doe',
  email: 'john@example.com'
};

renameKeys(user, ['username', 'email'], ['displayName', 'contactEmail']); // ==> { id: 456, displayName: 'john_doe', contactEmail: 'john@example.com' }
```

### Notes

* The `renameKeys` function modifies the provided object in place, renaming multiple keys from old names to new names.
* It ensures that the values associated with the old keys are preserved and reassigned to the corresponding new keys.
* This function is useful for batch renaming keys in an object, providing a convenient way to update key names efficiently.
