import {
  parseJSON,
  deepClone,
  removeEmptyKeys,
  sanitizeQuery,
  removeKeys,
  renameKey,
  renameKeys,
  sortByKeyLength,
  hasKeysAndValues,
  parseNumValues,
  parseNumber,
  querylize,
  reserveKeys,
} from "../src/object";

//* tests for the parseJSON function
describe("parseJSON function", () => {
  test("should parse a valid JSON string to an object", () => {
    const jsonString = '{"key": "value"}';
    const result = parseJSON<Record<string, string>>(jsonString, {});
    expect(result).toEqual({ key: "value" });
  });

  test("should parse a valid JSON string to an array", () => {
    const jsonString = "[1, 2, 3]";
    const result = parseJSON<number[]>(jsonString, []);
    expect(result).toEqual([1, 2, 3]);
  });

  test("should return default value for null input", () => {
    const result = parseJSON<Record<string, string>>(null, {
      default: "value",
    });
    expect(result).toEqual({ default: "value" });
  });

  test("should return default value for invalid JSON", () => {
    const invalidJSON = "invalidJSON";
    const result = parseJSON<Record<string, string>>(invalidJSON, {
      default: "value",
    });
    expect(result).toEqual({ default: "value" });
  });

  test("should return default value when no input provided", () => {
    const result = parseJSON<Record<string, string>>("", { default: "value" });
    expect(result).toEqual({ default: "value" });
  });
});

//* tests for the deepClone function
describe("deepClone function", () => {
  test("should deep clone a simple object", () => {
    const obj = { key: "value" };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
  });

  test("should deep clone a nested object", () => {
    const obj = { key: { key2: "value2" } };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj);
  });

  test("should return an empty object for null input", () => {
    const result = deepClone(null);
    expect(result).toEqual({});
  });
});

//* tests for the removeEmptyKeys function
describe("removeEmptyKeys function", () => {
  test("should remove empty keys from a simple object", () => {
    const obj = {
      key: "value",
      emptyKey: "",
      nullKey: null,
      undefinedKey: undefined,
    };
    const result = removeEmptyKeys(obj);
    expect(result).toEqual({ key: "value" });
  });

  test("should remove empty keys from a deeply nested object", () => {
    const obj = {
      key: "value",
      nested: {
        key: "value",
        nested: {
          key: "value",
          emptyKey: "",
          nullKey: null,
          undefinedKey: undefined,
        },
      },
    };
    const result = removeEmptyKeys(obj);
    expect(result).toEqual({
      key: "value",
      nested: { key: "value", nested: { key: "value" } },
    });
  });

  test("should not modify non-empty keys in a deeply nested object", () => {
    const obj = {
      key: "value",
      nested: {
        key: "value",
        nested: {
          key: "value",
        },
      },
    };
    const result = removeEmptyKeys(obj);
    expect(result).toEqual(obj);
  });

  test("should not modify non-empty keys in an object with shallow set to true", () => {
    const obj = {
      key: "value",
      emptyKey: "",
      nullKey: null,
      undefinedKey: undefined,
    };
    const result = removeEmptyKeys(obj, true);
    expect(result.key).toEqual("value");
  });
});

//* tests for the sanitizeQuery function
describe("sanitizeQuery function", () => {
  test("should clean a query object with empty values and parse number values", () => {
    const obj = {
      name: "John",
      age: "30",
      city: "",
      zip: "12345",
      details: {
        address: "",
        phone: "555-1234",
      },
    };

    const result = sanitizeQuery(obj);

    expect(result).toEqual({
      name: "John",
      age: 30,
      zip: 12345,
      details: {
        phone: "555-1234",
      },
    });
  });

  test("should handle nested objects", () => {
    const obj = {
      name: "Alice",
      age: "25",
      address: {
        street: "",
        city: "New York",
      },
    };

    const result = sanitizeQuery(obj);

    expect(result).toEqual({
      name: "Alice",
      age: 25,
      address: {
        city: "New York",
      },
    });
  });
});

//* tests for the removeKeys function
describe("removeKeys function", () => {
  test("should remove specified keys from an object", () => {
    const obj = {
      name: "John",
      age: 30,
      city: "New York",
    };
    const keysToRemove = ["age", "city"];
    const result = removeKeys(obj, keysToRemove);

    expect(result).toEqual({ name: "John" });
    expect(result).not.toBe(obj);
  });

  test("should handle removing keys that do not exist in the object", () => {
    const obj = {
      name: "Alice",
      age: 25,
    };
    const keysToRemove = ["city", "zipcode"];
    const result = removeKeys(obj, keysToRemove);

    expect(result).toEqual({ name: "Alice", age: 25 });
    expect(result).not.toBe(obj);
  });
});

//* tests for the renameKey function
describe("renameKey function", () => {
  test("should rename a key in an object", () => {
    const obj = {
      name: "John",
      age: 30,
      city: "New York",
    };
    renameKey(obj, "city", "location");

    expect(obj).toEqual({
      name: "John",
      age: 30,
      location: "New York",
    });
  });

  test("should not modify any other keys in the object", () => {
    const obj = {
      name: "John",
      age: 30,
      city: "New York",
    };
    renameKey(obj, "city", "location");

    expect(obj).not.toHaveProperty("city");
    expect(obj).toHaveProperty("name", "John");
    expect(obj).toHaveProperty("age", 30);
    expect(obj).toHaveProperty("location", "New York");
  });

  test("should handle renaming keys in nested objects", () => {
    const obj = {
      name: "John",
      age: 30,
      address: {
        city: "New York",
        state: "NY",
      },
    };
    renameKey(obj.address, "city", "location");

    expect(obj).toEqual({
      name: "John",
      age: 30,
      address: {
        location: "New York",
        state: "NY",
      },
    });
  });
});

//* tests for the renameKeys function
describe("renameKeys function", () => {
  test("should rename a set of keys in an object", () => {
    const obj = {
      name: "John",
      age: 30,
      city: "New York",
    };
    renameKeys(obj, ["city", "age"], ["location", "age_in_years"]);

    expect(obj).toEqual({
      name: "John",
      location: "New York",
      age_in_years: 30,
    });
  });

  test("should not modify any other keys in the object", () => {
    const obj = {
      name: "John",
      age: 30,
      city: "New York",
    };
    renameKeys(obj, ["city", "age"], ["location", "age_in_years"]);

    expect(obj).not.toHaveProperty("city");
    expect(obj).toHaveProperty("name", "John");
    expect(obj).toHaveProperty("age_in_years", 30);
    expect(obj).toHaveProperty("location", "New York");
  });

  test("should handle renaming keys in nested objects", () => {
    const obj = {
      name: "John",
      age: 30,
      address: {
        city: "New York",
        state: "NY",
      },
    };
    renameKeys(obj.address, ["city"], ["location"]);

    expect(obj).toEqual({
      name: "John",
      age: 30,
      address: {
        location: "New York",
        state: "NY",
      },
    });
  });
});

//* tests for the sortByKeyLength function
describe("sortByKeyLength function", () => {
  test("should sort keys by length of their corresponding values", () => {
    const obj = {
      name: "John",
      age: "30",
      city: "New York",
    };
    const sortedObject = sortByKeyLength(obj);

    expect(sortedObject).toEqual([
      { key: "city", value: "New York" },
      { key: "name", value: "John" },
      { key: "age", value: "30" },
    ]);
  });
});

//* tests for the querylize function
describe("querylize function", () => {
  test("should convert an object into the query version of itself", () => {
    const obj = {
      age: 20,
      height: "10cm",
      name: "John Doe",
    };
    const query = querylize(obj);

    expect(query).toEqual("?age=20&height=10cm&name=John%20Doe");
  });

  test("should handle empty objects", () => {
    const query = querylize(undefined);

    expect(query).toEqual("");
  });

  test("should handle objects with null values", () => {
    const obj = {
      age: 20,
      height: null,
      name: "John Doe",
    };
    const query = querylize(obj);

    expect(query).toEqual("?age=20&name=John%20Doe");
  });

  test("should handle objects with undefined values", () => {
    const obj = {
      age: 20,
      height: undefined,
      name: "John Doe",
    };
    const query = querylize(obj);

    expect(query).toEqual("?age=20&name=John%20Doe");
  });
});

//* tests for the parseNumber function
describe("parseNumber function", () => {
  test("should parse numeric strings to numbers in the object", () => {
    const obj = {
      age: "30",
      height: "10",
      weight: "75.5",
      name: "John Doe",
    };
    const parsedObj = parseNumber(obj);

    expect(parsedObj).toEqual({
      age: 30,
      height: 10,
      weight: 75.5,
      name: "John Doe",
    });
  });

  test("should handle non-numeric strings in the object", () => {
    const obj = {
      age: "30",
      height: "10",
      weight: "75.5",
      name: "John Doe",
    };
    const parsedObj = parseNumber(obj);

    expect(parsedObj).toEqual({
      age: 30,
      height: 10,
      weight: 75.5,
      name: "John Doe",
    });
  });

  test("should handle empty object", () => {
    const obj = {};
    const parsedObj = parseNumber(obj);

    expect(parsedObj).toEqual({});
  });

  test("should handle object with non-numeric values", () => {
    const obj = {
      age: "30",
      height: "10",
      weight: "75.5",
      name: "John Doe",
    };
    const parsedObj = parseNumber(obj);

    expect(parsedObj).toEqual({
      age: 30,
      height: 10,
      weight: 75.5,
      name: "John Doe",
    });
  });
});

//* tests for the hasKeysAndValues function
describe("hasKeysAndValues function", () => {
  test("should return true if object has specified keys with non-null and non-undefined values", () => {
    const obj = {
      name: "John Doe",
      age: 30,
      city: "New York",
    };
    const keys = ["name", "age", "city"] as Array<keyof typeof obj>;
    const result = hasKeysAndValues(obj, keys);

    expect(result).toBe(true);
  });

  test("should return false if object is missing a specified key", () => {
    const obj = {
      name: "Alice",
      age: 25,
    };
    const keys = ["name", "age", "city"] as Array<keyof typeof obj>;
    const result = hasKeysAndValues(obj, keys);

    expect(result).toBe(false);
  });

  test("should return false if object has a specified key with a null value", () => {
    const obj = {
      name: "Bob",
      age: null,
      city: "Los Angeles",
    };
    const keys = ["name", "age", "city"] as Array<keyof typeof obj>;
    const result = hasKeysAndValues(obj, keys);

    expect(result).toBe(false);
  });

  test("should return false if object has a specified key with an undefined value", () => {
    const obj = {
      name: "Eve",
      age: 30,
      city: undefined,
    };
    const keys = ["name", "age", "city"] as Array<keyof typeof obj>;
    const result = hasKeysAndValues(obj, keys);

    expect(result).toBe(false);
  });
});
