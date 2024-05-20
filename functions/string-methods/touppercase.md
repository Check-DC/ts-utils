# toUpperCase

### **`toUpperCase(str)`**

Converts a string to uppercase. This function is a simple wrapper around the built-in `toUpperCase()` method of the `String` object.

### **Arguments**

* `str` (string): The input string to convert to uppercase.

### **Returns**

* `string`: The input string converted to uppercase.

### **Example**

```typescript
typescript
import { toUpperCase } from 'check-engineering/ts-utils';

const originalString = "Hello, World!";
const uppercaseString = toUpperCase(originalString); // => "HELLO, WORLD!"
```

### **Usage**

```typescript
typescript
import { toUpperCase } from 'check-engineering/ts-utils';

const message = "this is a message";
const capitalizedMessage = toUpperCase(message); // => "THIS IS A MESSAGE"
```

### **Notes**

* The `toUpperCase` function is a simple utility function that converts a string to uppercase.
* It is a convenient way to ensure that a string is in uppercase format without having to call the `toUpperCase()` method directly.
* This function can be useful in scenarios where you need to standardize the case of strings, such as when comparing or sorting strings.
