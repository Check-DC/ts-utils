# toLowerCase

### **`toLowerCase(str)`**

Converts a string to lowercase. This function serves as a wrapper around the built-in `toLowerCase()` method of the `String` object.

### **Arguments**

* `str` (string): The input string to convert to lowercase.

### **Returns**

* `string`: The input string converted to lowercase.

### **Example**

```typescript
typescript
import { toLowerCase } from 'check-engineering/ts-utils';

const originalString = "Hello, World!";
const lowercaseString = toLowerCase(originalString); // => "hello, world!"
```

### **Usage**

```typescript
typescript
import { toLowerCase } from 'check-engineering/ts-utils';

const message = "THIS IS A MESSAGE";
const lowercaseMessage = toLowerCase(message); // => "this is a message"
```

### **Notes**

* The `toLowerCase` function is a utility that converts a string to lowercase.
* It provides a convenient way to ensure consistent casing in strings without directly invoking the `toLowerCase()` method.
* This function can be beneficial for standardizing the case of strings for comparison or display purposes.
