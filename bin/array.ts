/**
 * @returns {boolean} Check if variable is an Array
 */
export const isArr = (variable: any): boolean => Array.isArray(variable)

/**
 * @returns {boolean} Checks if an array is empty
 */
export const isArrEmpty = (arr: any[]): boolean => arr.length === 0

/**
 * Pushes a unique value into an array if it doesn't already exist.
 * @template T - The type of the array elements.
 * @param {T[]} array - The array to push the value into.
 * @param {T} value - The value to be pushed into the array.
 * @param {keyof T | null} [key=null] - The key to compare if the value already exists in the array (optional).
 * @returns {void}
 */

export const pushUniqueValue = <T>(array: T[], value: T, key: keyof T | null = null): void => {
  const found = array.find((item) => {
    const a = key ? item[key] : item
    const b = key ? value[key] : value

    return String(a).toLowerCase() === String(b).toLowerCase()
  })

  if (!found)
    array.push(value)
}

export const roundData = <T>(dataArray: T[] | undefined | null, floor = 4) => {
  if (!dataArray)
    return []

  if (dataArray.length > floor)
    return dataArray.slice(0, Math.floor(dataArray.length / floor) * floor)

  return dataArray
}

export const pushOrUpdate = <T>(arr: T[], value: T, key: keyof T) => {
  const foundIndex = arr.findIndex(item => item[key] === value[key])

  if (foundIndex === -1)
    arr.push(value)
  else
    arr[foundIndex] = value
}
