/**
 * Parse a JSON string into a specified type, with a default value if parsing fails or input is null
 * @param {string | null} str - The JSON string to parse
 * @param {any} defaultVal - The default value to return if parsing fails or input is null (default: [])
 * @returns {T} The parsed JSON data of type T or the default value
 */

export const parseJSON = <T>(str: string | null, defaultVal: any = []): T => {
  if (str === null) {
    return defaultVal;
  }
  try {
    return JSON.parse(str) as T;
  } catch (e) {
    return defaultVal;
  }
};

/**
 * Create a deep clone of a given object, including nested objects and arrays
 * @param {T | Record<string, any> | null} obj - The object to be deep cloned
 * @returns {T} A deep copy of the input object
 */

export const deepClone = <T extends Record<string, any>>(
  obj: T | Record<string, any> | null
): T => (obj === null ? ({} as T) : parseJSON(JSON.stringify(obj), {}));

/**
 * Recursively parse the values of an object, converting any numeric string values to numbers
 * @param {object} obj - The input object to be parsed
 * @returns {object} A new object with numeric string values converted to numbers
 */

export const parseNumValues = (obj: {
  [key: string]: any;
}): { [key: string]: any } => {
  const parsedObj: { [key: string]: any } = {};

  for (const key in obj) {
    const value = obj[key];

    if (typeof value === "object" && value !== null)
      parsedObj[key] = parseNumValues(value);
    else if (!Number.isNaN(Number(value))) parsedObj[key] = Number(value);
    else parsedObj[key] = value;
  }

  return parsedObj;
};

/**
 * Recursively remove keys with null, undefined, or empty string values from an object
 * @param {Record<string, any>} obj - The input object to remove empty keys from
 * @param {boolean} shallow - Whether to perform a shallow or deep removal of empty keys (default: false)
 * @returns {Record<string, any>} The input object with empty keys removed
 */

export const removeEmptyKeys = (
  obj: Record<string, any>,
  shallow = false
): Record<string, any> => {
  for (const key in obj) {
    if (obj[key] === null || obj[key] === undefined || obj[key] === "") {
      delete obj[key];
    } else if (typeof obj[key] === "object" && !shallow) {
      removeEmptyKeys(obj[key]);
      if (Object.keys(obj[key]).length === 0) delete obj[key];
    }
  }
  return obj;
};

/**
 * Sanitize a query object by removing empty keys and parsing numeric string values to numbers
 * @param {Record<string, any>} obj - The query object to be sanitized
 * @returns {Record<string, any>} The sanitized query object with empty keys removed and numeric values parsed
 */

export const sanitizeQuery = (obj: Record<string, any>): Record<string, any> =>
  parseNumValues(removeEmptyKeys(obj));

/**
 * Remove specified keys from an object, returning a new object with the keys removed
 * @param {Record<string, any>} obj - The input object to remove keys from
 * @param {string[]} keys - The array of keys to remove from the object
 * @returns {Record<string, any>} A new object with the specified keys removed
 */

export const removeKeys = (
  obj: Record<string, any>,
  keys: string[]
): Record<string, any> => {
  if (obj) {
    obj = deepClone(obj);
    keys.forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(obj, key)) delete obj[key];
    });

    return obj;
  }

  return obj || {};
};

/**
 * Rename a key in an object from an old name to a new name
 * @param {object} obj - The object to rename the key in
 * @param {string} oldKey - The old name of the key to rename
 * @param {string} newKey - The new name of the key
 */

export const renameKey = (
  obj: { [key: string]: any },
  oldKey: string,
  newKey: string
) => {
  if (oldKey !== newKey && Object.hasOwnProperty.call(obj, oldKey)) {
    Object.defineProperty(
      obj,
      newKey,
      Object.getOwnPropertyDescriptor(obj, oldKey)!
    );
    delete obj[oldKey];
  }
};

/**
 * Rename multiple keys in an object from old names to new names
 * @param {object} obj - The object to rename the keys in
 * @param {string[]} oldKeys - The array of old key names
 * @param {string[]} newKeys - The array of new key names
 */

export const renameKeys = (
  obj: { [key: string]: any },
  oldKeys: string[],
  newKeys: string[]
) => {
  if (oldKeys.length === newKeys.length) {
    for (let i = 0; i < oldKeys.length; i += 1)
      renameKey(obj, oldKeys[i], newKeys[i]);
  }
};

/**
 * Sort an object's key-value pairs by the length of the values, with ties broken by the lexicographic order of the keys
 * @param {object} obj - The input object to be sorted
 * @returns {Array<{ key: string | number, value: any }>} The sorted array of key-value pairs
 */

export const sortByKeyLength = (obj: { [key: string | number]: any }) => {
  return Object.keys(obj)
    .map((k) => ({ key: k, value: obj[k] }))
    .sort((a, b) => {
      if (a.value.length === b.value.length) {
        return a.key.localeCompare(b.key);
      }
      return b.value.length - a.value.length;
    });
};

/**
 * Convert an object into a query string for URL parameters
 * @param {Record<string, any> | undefined} obj - The input object to be converted to a query string
 * @returns {string} The query string representation of the input object example: ?age=20&height=10cm
 */

export const querylize = (obj: Record<string, any> | undefined) => {
  if (!obj) return "";

  const str: string[] = Object.entries(obj)
    .filter(([_, value]) => value)

    .map(
      ([prop, value]) =>
        `${encodeURIComponent(prop)}=${encodeURIComponent(value)}`
    );

  return `?${str.join("&")}`;
};

/**
 * Convert numeric string values in an object to numbers, preserving non-numeric values
 * @param {Record<string, any>} obj - The input object to parse numeric values from
 * @returns {Record<string, any>} A new object with numeric string values converted to numbers
 */

export const parseNumericObj = (
  obj: Record<string, any>
): Record<string, any> => {
  const res: Record<string, any> = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key])
      res[key] = !Number.isNaN(parseFloat(obj[key]))
        ? Number(obj[key])
        : obj[key];
  });
  return res;
};

/**
 * Create a new object containing only the specified keys from the original object
 * @param {Record<string, any>} obj - The input object to reserve keys from
 * @param {string[]} keys - The array of keys to reserve in the new object
 * @returns {Record<string, any>} A new object containing only the specified keys
 */

export const reserveKeys = (
  obj: Record<string, any>,
  keys: string[]
): Record<string, any> => {
  const newObj: Record<string, any> = {};
  keys.forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
  });
  return newObj;
};

/**
 * Check if an object has all the specified keys and if the values associated with those keys are not undefined or null
 * @param {T} obj - The input object to check
 * @param {(keyof T)[]} keys - The array of keys to check for
 * @returns {boolean} True if the object has all the specified keys with non-null, non-undefined values, false otherwise
 */

export const hasKeysAndValues = <T>(obj: T, keys: (keyof T)[]): boolean => {
  if (obj) {
    return keys.every(
      (key) =>
        Object.prototype.hasOwnProperty.call(obj, key) &&
        obj[key] !== undefined &&
        obj[key] !== null
    );
  }

  return false;
};
