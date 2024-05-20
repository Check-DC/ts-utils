# parseJSON

### `parseJSON(str, defaultVal)`

Parses a JSON string into a specified type `T`. If the parsing fails or the input is null, it returns the default value provided. This function is useful for handling JSON data and providing fallback values in case of parsing errors or null input.

### Arguments

* `str` (`string | null`): The JSON string to parse.
* `defaultVal` (`any`, optional): The default value to return if parsing fails or the input is null. Defaults to an empty array `[]` if not provided.

### Returns

* `T`: The parsed JSON data of type `T` or the default value.

### Example

```typescript
typescript
import { parseJSON } from 'check-engineering/ts-utils';

const jsonString = '{"name": "Alice", "age": 30}';
const defaultData = { name: "Unknown", age: 0 };

const parsedData = parseJSON<{ name: string, age: number }>(jsonString, defaultData); // => { name: "Alice", age: 30 }
```

### Usage

```typescript
typescript
import { parseJSON } from 'check-engineering/ts-utils';

const jsonData = '{"key": "value"}';
const defaultObject = { key: "default" };

const parsedObject = parseJSON<{ key: string }>(jsonData, defaultObject); // => { key: "value" }
```

### Notes

* The `parseJSON` function allows you to parse a JSON string into a specified type `T` and provides a fallback value if parsing fails or the input is null.
* It is a versatile function for handling JSON data and ensuring robust error handling by returning a default value in case of parsing issues.
* This function is particularly useful for scenarios where JSON data needs to be processed and fallback values are required for error handling.
