# fromNow

### `fromNow(date)`

The `fromNow` function calculates the relative time difference between the provided date and the current date for future events. It generates a human-readable representation of the time remaining from now to the specified date.

### Arguments

* `date` (`Date | string`): The date to calculate the relative time for. It can be a `Date` object or a string representing a date.

### Returns

* `(string)`: A human-readable representation of the time remaining from now to the specified date.

### Example

```typescript
typescript
import { fromNow } from 'check-engineering/ts-utils';

const futureDate = new Date('2025-12-31');
const relativeTime = fromNow(futureDate); // Example => "In 1 year"
```

### Usage

```typescript
typescript
import { fromNow } from 'check-engineering/ts-utils';

const eventDate = '2026-06-30';

const relativeTime = fromNow(eventDate);
console.log(`The event is happening in ${relativeTime}.`);
```

### Notes

* The `fromNow` function provides a convenient way to display the relative time difference between a given date and the current date for future events in a human-readable format.
* It helps in scenarios where you need to present time-related information in a user-friendly manner, such as displaying how much time is left until a future event.
