# ensureNumber

### `ensureNumber(value, min)`

Takes an input value and ensures it is a valid number. If the input is invalid, it returns the specified minimum value. This function is useful for handling cases where a number is expected but the input may be invalid or of a different type.

### Arguments

* `value` (`any`): The input value to be converted to a number.
* `min` (`number | null`, optional): The minimum value to return if the input is invalid. Defaults to `null` if not provided.

### Returns

* `(number)`: The valid number based on the input value and minimum value.

### Example

```typescript
typescript
import { ensureNumber } from 'check-engineering/ts-utils';

const validInput = 42;
const invalidInput = "invalid";
const minValue = 0;

const validNumber = ensureNumber(validInput, minValue); // => 42
const fallbackNumber = ensureNumber(invalidInput, minValue); // => 0
```

### Usage

```typescript
typescript
import { ensureNumber } from 'check-engineering/ts-utils';

const userInput = document.getElementById('user-input').value;
const minAllowed = 1;

const safeNumber = ensureNumber(userInput, minAllowed);
if (safeNumber < minAllowed) {
  console.log('Input value is below the minimum allowed value.');
} else {
  console.log(`Valid number: ${safeNumber}`);
}
```

### Notes

* The `ensureNumber` function ensures that the input value is a valid number by attempting to convert it to a number using the `Number()` function.
* If the input is invalid and cannot be converted to a number, the function returns the specified minimum value (`min`).
* This function is particularly useful for validating user input or handling cases where a number is expected but the input may be of a different type or invalid.
