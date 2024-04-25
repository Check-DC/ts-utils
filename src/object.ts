/**
 * Cleanly parse a string to JSON object value if an error is discovered
 * @returns {Record<string, any> | Array} Parsed JSON
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
 * Deep clones an object without keeping reference
 * @returns {T} Inherits type of the given obj
 */
export const deepClone = <T extends Record<string, any>>(
  obj: T | Record<string, any> | null
): T => (obj === null ? ({} as T) : parseJSON(JSON.stringify(obj), {}));
/**
 * Parse all number values in an object
 * @returns {Record<string, any>} Object with numbers parsed
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
 * Removes empty keys in an object
 * @returns {Record<string, any>} Object without falsy keys
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
 * Cleans a query object for empty values and parse number values
 * @returns {Record<string, any>} Sanitized object
 */
export const sanitizeQuery = (obj: Record<string, any>): Record<string, any> =>
  parseNumValues(removeEmptyKeys(obj));

/**
 * Removes specified keys from an object and returns the new object
 * without affecting the original object
 * LodashOmit can also be used in place of this
 * @returns {object} Object without keys
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
 * Mutates and renames an object's key
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
 * Renames set of oldKeys to newKeys
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
 * Mutate and sort object keys by length shortest to longest
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
 * Convert an object into the query version of itself
 * @returns {string} example: ?age=20&height=10cm
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

export const parseNumber = (obj: Record<string, any>): Record<string, any> => {
  const res: Record<string, any> = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key])
      res[key] = !Number.isNaN(parseFloat(obj[key]))
        ? Number(obj[key])
        : obj[key];
  });
  return res;
};

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
