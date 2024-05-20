# numberEmptyState

### `numberEmptyState(value, format)`

Takes an input value and a fallback format as arguments. It checks if the input value is considered "empty" or invalid (i.e., "0" or "NaN") and returns the fallback format if so. Otherwise, it returns the original input value. This function is useful for handling cases where a numeric value may be empty or invalid and a fallback display is needed.

### Arguments

* `value` (`string | number`): The input value to be displayed.
* `format` (`any`, optional): The fallback format to use when the input value is considered "empty" or invalid. Defaults to "---" if not provided.

### Returns

* `(any)`: The formatted value or the fallback format.

### Example

```typescript
typescript
import { numberEmptyState } from 'check-engineering/ts-utils';

const validInput = 42;
const invalidInput = "NaN";
const fallbackFormat = "---";

const validDisplay = numberEmptyState(validInput, fallbackFormat); // => 42
const fallbackDisplay = numberEmptyState(invalidInput, fallbackFormat); // Output: "---"
```

### Usage

<pre class="language-typescript"><code class="lang-typescript">typescript
<strong>import { numberEmptyState } from 'check-engineering/ts-utils';
</strong>
const userInput = document.getElementById('user-input').value;
const fallbackDisplay = "N/A";

const safeDisplay = numberEmptyState(userInput, fallbackDisplay); // => "N/A"
document.getElementById('display').innerHTML = safeDisplay;
</code></pre>

### Notes

* The `numberEmptyState` function provides a way to handle "empty" or invalid numeric values by returning a fallback format.
* It checks if the input value is "0" or "NaN" and returns the fallback format if so.
* This function is particularly useful for displaying numeric values in a user interface, where a fallback display is needed for empty or invalid values.
