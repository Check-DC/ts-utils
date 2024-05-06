/**
 * Create a new object with selected keys from the original object
 * @param {Record<string, any>} obj - The source object to extract keys from
 * @param {string[]} keys - The array of keys to include in the new object
 * @returns {Record<string, any>} A new object with only the specified keys
 */

const defaultOptions = {
  alphabet: true,
  number: true,
  length: 12,
  special: true,
  specialChars: "~`!@#$%^&*()_-+={}[]:;?/>.<,",
  case: "any", // any, upper, lower
};

/**
 * Generate a random string based on specified options
 * @param {Partial<typeof defaultOptions>} options - Custom options for generating the random string (default: defaultOptions)
 * @returns {string} A randomly generated string based on the provided options
 */

export const randomStr = (
  options: Partial<typeof defaultOptions> = defaultOptions
): string => {
  const possibleAlphas = options.alphabet
    ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    : "";
  const possibleNumbers = options.number ? "0123456789" : "";
  const possibleSpecials = options.special ? options.specialChars : "";
  const possible = possibleAlphas + possibleNumbers + possibleSpecials;

  let result = "";
  for (let i = 0; i < options.length!; i++)
    result += possible.charAt(Math.floor(Math.random() * possible.length));

  return result;
};

/**
 * Convert a string to uppercase
 * @param {string} str - The input string to convert to uppercase
 * @returns {string} The input string converted to uppercase
 */

export const toUpperCase = (str: string) => str.toUpperCase();

/**
 * Convert a string to lowercase
 * @param {string} str - The input string to convert to lowercase
 * @returns {string} The input string converted to lowercase
 */

export const toLowerCase = (str: string) => str.toLowerCase();

/**
 * Convert a partial URL to a full URL by adding missing components like protocol and domain
 * @param {string} url - The partial URL to convert to a full URL
 * @param {Record<string, any> | undefined} options - Additional options for customizing the URL conversion (default: undefined)
 * @returns {string} The full URL with all necessary components added
 */

export const toFullUrl = (
  url: string,
  options: Record<string, any> | undefined = undefined
) => {
  const fullUrl =
    url.substring(0, 4) === "http" ? url : new URL(url, location.origin).href;

  if (options) {
    if (!options.protocol)
      return fullUrl.replace(/^(https?:\/\/)?(www\.)?/, "");

    // Other options conditions
  }

  return fullUrl;
};

/**
 * Generate the initials from a person's name
 * @param {string} str - The input string representing the person's name
 * @returns {string} The initials of the person's name, with each initial separated by a period
 */

export const initials = (str: string): string => {
  const names = str ? str.trim().split(/\s+/) : [];

  if (names.length > 0) {
    const initials = names.map((name) => name[0].toUpperCase()).join(".");
    return initials;
  }

  return "";
};

/**
 * Generate a Universally Unique Identifier (UUID)
 * @returns {string} A randomly generated UUID in the standard format
 */

export const generateUuid = (): string => {
  const hexDigits = "0123456789abcdef";
  let uuid = "";
  for (let i = 0; i < 36; i++) {
    if (i === 8 || i === 13 || i === 18 || i === 23) uuid += "-";
    else if (i === 14) uuid += "4";
    else if (i === 19) uuid += hexDigits.charAt((Math.random() * 4) | 8);
    else uuid += hexDigits.charAt(Math.random() * 16);
  }
  return uuid;
};
