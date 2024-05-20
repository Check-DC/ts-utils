# removeEmptyKeys

### `removeEmptyKeys(obj, shallow)`

Recursively traverses an input object and removes keys with null, undefined, or empty string values. It provides the option to perform either a shallow or deep removal of empty keys based on the specified configuration.

### Arguments

* `obj` (`Record<string, any>`): The input object to remove empty keys from.
* `shallow` (`boolean`, optional): Whether to perform a shallow or deep removal of empty keys. Defaults to `false` for deep removal.

### Returns

* `Record<string, any>`: The input object with empty keys removed.

### Example

```typescript
typescript
import { removeEmptyKeys } from 'check-engineering/ts-utils';

const data = {
  name: 'Alice',
  age: null,
  address: {
    street: '123 Main St',
    city: '',
    zip: undefined
  }
};

const cleanedData = removeEmptyKeys(data); // => { name: 'Alice', address: { street: '123 Main St' } }
```

### Usage

```typescript
typescript
import { removeEmptyKeys } from 'check-engineering/ts-utils';

const user = {
  name: 'Bob',
  email: '',
  profile: {
    bio: null,
    avatar: 'avatar.jpg'
  }
};

const sanitizedUser = removeEmptyKeys(user, true); // => { name: 'Bob', profile: { avatar: 'avatar.jpg' } }
```

### Notes

* The `removeEmptyKeys` function is designed to clean up objects by removing keys with null, undefined, or empty string values.
* It supports both shallow and deep removal of empty keys, providing flexibility in data cleaning operations.
* This function is useful for maintaining data integrity and reducing unnecessary keys in object structures.
