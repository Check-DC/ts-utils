# sortByKeyLength

### `sortByKeyLength(obj)`

Sorts the key-value pairs of the input object based on the length of the values. If the lengths are equal, ties are broken by the lexicographic order of the keys. It returns an array of sorted key-value pairs.

### Arguments

* `obj` (`object`): The input object to be sorted.

### Returns

* `Array<{ key: string | number, value: any }>`: The sorted array of key-value pairs.

### Example

```typescript
typescript
import { sortByKeyLength } from 'check-engineering/ts-utils';

const data = {
  name: 'Alice',
  age: 30,
  city: 'New York',
  country: 'USA'
};

const sortedData = sortByKeyLength(data);
// ==> [
//       { key: 'country', value: 'USA' },
//       { key: 'city', value: 'New York' },
//       { key: 'name', value: 'Alice' },
//       { key: 'age', value: 30 }
//     ]
```

### Usage

```typescript
typescript
import { sortByKeyLength } from 'check-engineering/ts-utils';

const info = {
  a: 'apple',
  b: 'banana',
  c: 'cherry',
  d: 'date'
};

const sortedInfo = sortByKeyLength(info);
// ==> [
//       { key: 'banana', value: 'banana' },
//       { key: 'cherry', value: 'cherry' },
//       { key: 'apple', value: 'apple' },
//       { key: 'date', value: 'date' }
//     ]
```

### Notes

* The `sortByKeyLength` function sorts an object's key-value pairs based on the length of the values, with ties broken by the lexicographic order of the keys.
* It provides a way to organize and prioritize key-value pairs based on the specified criteria.
* This function is useful for scenarios where ordering data by value length and key order is necessary for processing or presentation.
