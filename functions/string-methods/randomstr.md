# randomStr

### **`randomStr(options)`**

Generates a random string based on specified options. If no options are provided, it uses the default options defined in `defaultOptions`. This function is useful for generating random strings with customizable length, character sets, and case.

### **Arguments**

* `options` (Partial): Custom options for generating the random string. Defaults to `defaultOptions` if not provided.

### **Returns**

* `string`: A randomly generated string based on the provided options.

### **Example**

```typescript
typescript
import { randomStr } from 'check-engineering/ts-utils';

const randomPassword = randomStr({
  length: 16,
  special: true,
  case: "upper",
}); // => "ABCD1234!@#$EFGH"
```

### **Usage**

<pre class="language-typescript"><code class="lang-typescript"><strong>typescript
</strong><strong>import { randomStr } from 'check-engineering/ts-utils';
</strong>
const randomId = randomStr(); // => "a1b2c3d4e5f6g7h8"
</code></pre>

### **Notes**

* The `randomStr` function allows you to generate random strings with customizable options.
* It uses the `defaultOptions` object as the default configuration, which includes options for alphabet, numbers, length, special characters, and case.
* You can provide a partial object of `defaultOptions` to override specific options and customize the generated string.
* This function is particularly useful for generating unique identifiers, passwords, or any other scenario where a random string is required.
