/**
 * Generate random string based on some option
 * @param options
 * @returns {string}
 */

const defaultOptions = {
  alphabet: true,
  number: true,
  length: 12,
  special: true,
  specialChars: "~`!@#$%^&*()_-+={}[]:;?/>.<,",
  case: "any", // any, upper, lower
};
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
 * @param str The input string
 * @returns The string in uppercase
 */
export const toUpperCase = (str: string) => str.toUpperCase();

/**
 * Convert a string to lowercase
 * @param str The input string
 * @returns The string in lowercase
 */
export const toLowerCase = (str: string) => str.toLowerCase();

/**
 * Convert a url path to full http/https url
 * @param url
 * @param options [protocol etc.]
 * @returns string
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
 * Generates initials from a given string.
 * @param str The input string containing names.
 * @returns The initials generated from the input string.
 */

export const initials = (str: string): string => {
  const names = str ? str.trim().split(/\s+/) : [];

  if (names.length > 0) {
    const initials = names.map((name) => name[0].toUpperCase()).join(".");
    return initials;
  }

  return "";
};

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
