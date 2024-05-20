# sanitizeQuery

### `sanitizeQuery(obj)`

Sanitizes a query object by removing empty keys and parsing numeric string values to numbers. It combines the functionality of `removeEmptyKeys` to clean up the object and `parseNumValues` to convert numeric string values to numbers, ensuring a clean and consistent query object.

### Arguments

* `obj` (`Record<string, any>`): The query object to be sanitized, containing key-value pairs to clean and parse.

### Returns

* `Record<string, any>`: The sanitized query object with empty keys removed and numeric values parsed.

### Example

<pre class="language-typescript"><code class="lang-typescript"><strong>typescript
</strong><strong>import { sanitizeQuery } from 'check-engineering/ts-utils';
</strong>
const query = {
  name: 'Alice',
  age: '30',
  city: '',
  zip: '12345',
  details: {
    weight: '75.5',
    height: ''
  }
};

const sanitizedQuery = sanitizeQuery(query); // => { name: 'Alice', age: 30, zip: '12345', details: { weight: 75.5 } }
</code></pre>

### Usage

<pre class="language-typescript"><code class="lang-typescript"><strong>typescript
</strong><strong>import { sanitizeQuery } from 'check-engineering/ts-utils';
</strong>
const searchParams = {
  term: 'apple',
  category: '',
  price: '19.99',
  filters: {
    rating: '4.5',
    inStock: 'true'
  }
};

const sanitizedParams = sanitizeQuery(searchParams); // => { term: 'apple', price: 19.99, filters: { rating: 4.5, inStock: true } }
</code></pre>

### Notes

* The `sanitizeQuery` function provides a comprehensive sanitization process for query objects, ensuring data cleanliness and type consistency.
* It removes empty keys and parses numeric string values to numbers, enhancing the quality and reliability of query data.
* This function is valuable for preparing query parameters before processing or interacting with external systems.
