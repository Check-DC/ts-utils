import { isArr, isArrEmpty, pushOrUpdate, pushUniqueValue } from "../src/array";

//* tests for isArr function
describe("isArr function", () => {
  test("should return true for an array", () => {
    expect(isArr([1, 2, 3])).toBe(true);
  });

  test("should return false for a non-array value", () => {
    expect(isArr(42)).toBe(false);
    expect(isArr("hello")).toBe(false);
    expect(isArr({})).toBe(false);
    expect(isArr(null)).toBe(false);
    expect(isArr(undefined)).toBe(false);
  });

  test("should return true for an array with mixed data types", () => {
    expect(isArr([1, "two", { three: 3 }])).toBe(true);
  });

  test("should return true for nested arrays", () => {
    expect(
      isArr([
        [1, 2],
        [3, 4],
      ])
    ).toBe(true);
  });
});

//* tests for isArrEmpty function
describe("isArrEmpty function", () => {
  test("should return true for an empty array", () => {
    expect(isArrEmpty([])).toBe(true);
  });

  test("should return false for a non-empty array", () => {
    expect(isArrEmpty([1, 2, 3])).toBe(false);
  });

  test("should handle arrays with objects", () => {
    expect(isArrEmpty([{}])).toBe(false);
  });

  test("should handle arrays with null values", () => {
    expect(isArrEmpty([null])).toBe(false);
  });

  test("should handle arrays with undefined values", () => {
    expect(isArrEmpty([undefined])).toBe(false);
  });

  test("should handle arrays with mixed data types", () => {
    expect(isArrEmpty([1, "two", { three: 3 }])).toBe(false);
  });
});

//* tests for pushUniqueValue function
describe("pushUniqueValue function", () => {
  test("should add a unique value to the array", () => {
    const arr = [1, 2, 3];
    pushUniqueValue(arr, 4);
    expect(arr).toEqual([1, 2, 3, 4]);
  });

  test("should not add a duplicate value to the array", () => {
    const arr = [1, 2, 3];
    pushUniqueValue(arr, 2);
    expect(arr).toEqual([1, 2, 3]);
  });

  test("should handle case-insensitive comparisons", () => {
    const arr = ["apple", "BANANA", "cherry"];
    pushUniqueValue(arr, "APPLE");
    expect(arr).toEqual(["apple", "BANANA", "cherry"]);
  });

  test("should handle comparisons using a key", () => {
    const arr = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ];
    pushUniqueValue(arr, { id: 3, name: "Bob" }, "id");
    expect(arr).toEqual([
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 3, name: "Bob" },
    ]);

    pushUniqueValue(arr, { id: 2, name: "Jane Doe" }, "id");
    expect(arr).toEqual([
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 3, name: "Bob" },
    ]);
  });
});

//* tests for pushOrUpdate function
describe("pushOrUpdate function", () => {
  test("should push a new value into the array", () => {
    const arr = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    const newValue = { id: 3, name: "Charlie" };
    pushOrUpdate(arr, newValue, "id");
    expect(arr).toEqual([
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Charlie" },
    ]);
  });

  test("should update an existing value in the array", () => {
    const arr = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    const updatedValue = { id: 2, name: "Bobby" };
    pushOrUpdate(arr, updatedValue, "id");
    expect(arr).toEqual([
      { id: 1, name: "Alice" },
      { id: 2, name: "Bobby" },
    ]);
  });

  test("should handle objects with different keys", () => {
    const arr = [
      { id: 1, name: "Alice" },
      { id: 2, age: 30 },
    ];
    const newValue = { id: 3, age: 25 };
    pushOrUpdate(arr, newValue, "id");
    expect(arr).toEqual([
      { id: 1, name: "Alice" },
      { id: 2, age: 30 },
      { id: 3, age: 25 },
    ]);
  });
});
