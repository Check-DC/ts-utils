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
