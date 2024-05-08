/**
 * Rounds the length of an array to a multiple of a specified floor value.
 * @template T - The type of the array elements.
 * @param {T[] | undefined | null} dataArray - The array to be processed. Can be undefined or null.
 * @param {number} [floor=4] - The desired floor value for the length of the array. Default is 4.
 * @returns {T[]} - The processed array with a length that is a multiple of the floor value.
 */

export const roundData = <T>(dataArray: T[] | undefined | null, floor = 4) => {
  if (!dataArray) return [];

  if (dataArray.length > floor)
    return dataArray.slice(0, Math.floor(dataArray.length / floor) * floor);

  return dataArray;
};

/**
 * Parse a formatted string and extract its sign, base, decimals, and unit
 * @param string The input string to be parsed (default: "0")
 * @returns An object with the following properties:
 *   - sign: The sign of the number ("+" or "-")
 *   - base: The base number part of the string
 *   - decimals: The number of decimal places in the string
 *   - unit: The unit or additional characters in the string
 */

export const parseFormat = (string = "0") => {
  const regex = /([+-])?([0-9,]+)?([.0-9]+)?([a\s]+)?/;
  const matches = string ? string.match(regex) : ["", "", "", "", ""];
  const float = matches ? matches[3] : null;
  const floatMatch = float ? float.match(/0/g) : null;
  const decimals = floatMatch ? floatMatch.length : 0;

  return {
    sign: matches ? matches[1] : "",
    base: matches ? matches[2] : "",
    decimals,
    unit: matches ? matches[4] : "",
  };
};
