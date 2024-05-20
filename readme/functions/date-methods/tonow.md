# toNow

### `toNow(date)`

Calculates the relative time difference between the provided date and the current date. It generates a human-readable representation of the time elapsed or remaining from the given date to the current moment.

### Arguments

* `date` (`Date | string`): The date to calculate the relative time for. It can be a `Date` object or a string representing a date.

### Returns

* `(string)`: A human-readable representation of the time elapsed or remaining from the provided date to the current date.

### Example

```typescript
typescript
import { toNow } from 'check-engineering/ts-utils';

const pastDate = new Date('2023-01-01');
const futureDate = '2025-12-31';

console.log(toNow(pastDate)); // => "2 years ago"
console.log(toNow(futureDate)); // => "In 1 year"
```

### Usage

```typescript
typescript
import { toNow } from 'check-engineering/ts-utils';

const eventDate = new Date('2024-06-30');

const relativeTime = toNow(eventDate);
console.log(`The event is happening ${relativeTime}.`);
```

### Notes

* The `toNow` function provides a convenient way to display the relative time difference between a given date and the current date in a human-readable format.
* It helps in scenarios where you need to present time-related information in a user-friendly manner, such as displaying how long ago an event occurred or how much time is left until a future event.
