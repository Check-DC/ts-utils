# toFullUrl

### **`toFullUrl(url, options)`**

Converts a partial URL to a full URL by adding missing components like protocol and domain. This function enhances partial URLs to complete URLs by ensuring all necessary components are included.

### **Arguments**

* `url` (string): The partial URL to convert to a full URL.
* `options` (Record\<string, any> | undefined): Additional options for customizing the URL conversion. Defaults to `undefined`.

### **Returns**

* `string`: The full URL with all necessary components added.

### **Example**

```typescript
typescript
import { toFullUrl } from 'check-engineering/ts-utils';

const partialUrl = "example.com";
const fullUrl = toFullUrl(partialUrl); // => "https://example.com"
```

### Usage

```typescript
typescript
import { toFullUrl } from 'check-engineering/ts-utils';

const partialUrl = "subdomain.example.com";
const customOptions = { protocol: "http://" };
const customizedUrl = toFullUrl(partialUrl, customOptions); // => "http://subdomain.example.com"
```

### Notes

* The `toFullUrl` function transforms partial URLs into complete URLs by adding missing components like protocol and domain.
* It provides flexibility with additional options to customize the URL conversion process.
* This function is useful for ensuring that URLs are properly formatted and complete for use in web applications.
