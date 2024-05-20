# querylize

## **`querylize(obj)`**

Converts an object into a query string for URL parameters. If the input object is null or undefined, it returns an empty string. This function is useful for constructing URL query strings from JavaScript objects.**Arguments**

* `obj` (Record\<string, any> | undefined): The input object to be converted to a query string.

## **Returns**

* `string`: The query string representation of the input object, e.g., `?age=20&height=10cm`.

## **Example**

```typescript
typescript
import { querylize } from 'check-engineering/ts-utils';

const params = {
  age: 30,
  name: "Alice",
  height: "170cm",
};

const queryString = querylize(params); // => ?age=30&name=Alice&height=170cm
```

## **Usage**

```typescript
typescript
import { querylize } from 'check-engineering/ts-utils';

const data = {
  key: "value",
  category: "general",
};

const query = querylize(data); // => ?key=value&category=general
```

## **Notes**

* The `querylize` function is a convenient way to convert JavaScript objects into URL query strings.
* It handles null or undefined input by returning an empty string, making it suitable for scenarios where the input object might be missing or empty.
* This function is particularly useful for constructing URLs with query parameters in web applications.
