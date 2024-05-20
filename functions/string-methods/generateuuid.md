# generateUuid

### **`generateUuid()`**

Generates a Universally Unique Identifier (UUID) in the standard format. This function creates a random UUID following the UUID version 4 format.

### **Returns**

* `string`: A randomly generated UUID in the standard format.

### **Example**

```typescript
typescript
import { generateUuid } from 'check-engineering/ts-utils';

const newUuid = generateUuid(); // => "550e8400-e29b-41d4-a716-446655440000"
```

### **Usage**

```typescript
typescript
import { generateUuid } from 'check-engineering/ts-utils';

const uniqueId = generateUuid(); // => "f47ac10b-58cc-4372-a567-0e02b2c3d479"
```

### **Notes**

* The `generateUuid` function creates a random UUID that conforms to the UUID version 4 format.
* It ensures uniqueness by generating a random sequence of hexadecimal characters with specific formatting.
* UUIDs are commonly used for uniquely identifying entities in various systems and applications.
