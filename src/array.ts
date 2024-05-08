/**
 * Check if the given variable is an array
 * @param {any} variable - The variable to check if it is an array
 * @returns {boolean} True if the variable is an array, false otherwise
 */

export const isArr = (variable: any): boolean => Array.isArray(variable);

/**
 * Check if the given array is empty
 * @param {any[]} arr - The array to check for emptiness
 * @returns {boolean} True if the array is empty, false otherwise
 */

export const isArrEmpty = (arr: any[]): boolean => arr.length === 0;

/**
 * Pushes a unique value into an array if it doesn't already exist.
 * @template T - The type of the array elements.
 * @param {T[]} array - The array to push the value into.
 * @param {T} value - The value to be pushed into the array.
 * @param {keyof T | null} [key=null] - The key to compare if the value already exists in the array (optional).
 * @returns {void}
 */

export const pushUniqueValue = <T>(
  array: T[],
  value: T,
  key: keyof T | null = null
): void => {
  const found = array.find((item) => {
    const a = key ? item[key] : item;
    const b = key ? value[key] : value;

    return String(a).toLowerCase() === String(b).toLowerCase();
  });

  if (!found) array.push(value);
};

/**
 * Pushes a unique value into an array if it doesn't already exist.
 * @template T - The type of the array elements.
 * @param {T[]} array - The array to push the value into.
 * @param {T} value - The value to be pushed into the array.
 * @param {keyof T | null} [key=null] - The key to compare if the value already exists in the array (optional).
 * @returns {void}
 */

export const pushOrUpdate = <T>(arr: T[], value: T, key: keyof T) => {
  const foundIndex = arr.findIndex((item) => item[key] === value[key]);

  if (foundIndex === -1) arr.push(value);
  else arr[foundIndex] = value;
};
