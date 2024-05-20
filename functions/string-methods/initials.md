# initials

### **`initials(str)`**

Generates the initials from a person's name. This function extracts the initials of each word in the input string representing the person's name and separates them with periods.

### **Arguments**

* `str` (string): The input string representing the person's name.

### **Returns**

* `string`: The initials of the person's name, with each initial separated by a period.

### **Example**

```typescript
typescript
import { initials } from 'check-engineering/ts-utils';

const fullName = "John Doe";
const nameInitials = initials(fullName); // => "J.D"
```

### **Usage**

```typescript
typescript
import { initials } from 'check-engineering/ts-utils';

const userName = "Alice Wonderland";
const userInitials = initials(userName); // => "A.W"
```

### **Notes**

* The `initials` function extracts the initials from a person's name by taking the first letter of each word and converting it to uppercase.
* It then joins these initials with periods to create a formatted representation of the person's name.
* This function is useful for scenarios where abbreviated names or initials are required, such as in user profiles or display names.
