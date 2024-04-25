import {
  randomStr,
  toUpperCase,
  toLowerCase,
  toFullUrl,
  initials,
  generateUuid,
} from "../src/string";

//* tests for random string function
describe("Random String function", () => {
  test("should generate a random string with default options", () => {
    const result = randomStr();
    expect(result).toHaveLength(12);
    expect(typeof result).toBe("string");
  });

  test("should generate a random string with custom options", () => {
    const options = {
      alphabet: false,
      number: true,
      length: 8,
      special: true,
      specialChars: "!@#$%",
      case: "upper",
    };
    const result = randomStr(options);
    expect(result).toHaveLength(8);
    expect(typeof result).toBe("string");
  });

  test("should generate a random string with only numbers", () => {
    const options = {
      alphabet: false,
      number: true,
      length: 10,
      special: false,
      specialChars: "",
      case: "any",
    };
    const result = randomStr(options);
    expect(result).toMatch(/^[0-9]+$/);
    expect(result).toHaveLength(10);
  });
});

//* tests for uppecase function
describe("toUpperCase function", () => {
  test("should convert a string to uppercase", () => {
    const result = toUpperCase("hello world");
    expect(result).toBe("HELLO WORLD");
  });

  test("should return the same string for a string that is already uppercase", () => {
    const result = toUpperCase("HELLO WORLD");
    expect(result).toBe("HELLO WORLD");
  });

  test("should handle non-ASCII characters", () => {
    const result = toUpperCase("héllo wórld");
    expect(result).toBe("HÉLLO WÓRLD");
  });

  test("should handle unicode characters", () => {
    const result = toUpperCase("🌎🌍🌏");
    expect(result).toBe("🌎🌍🌏");
  });
});

//* tests for lowercase function
describe("toLowerCase function", () => {
  test("should convert a string to lowercase", () => {
    const result = toLowerCase("HELLO WORLD");
    expect(result).toBe("hello world");
  });

  test("should preserve the case of a string that is already lowercase", () => {
    const result = toLowerCase("hello world");
    expect(result).toBe("hello world");
  });

  test("should handle mixed case strings correctly", () => {
    const result = toLowerCase("HeLLo WoRLd");
    expect(result).toBe("hello world");
  });
});

//* tests for initials function
describe("initials function", () => {
  test("should generate initials from a full name", () => {
    const result = initials("John Doe");
    expect(result).toBe("J.D");
  });

  test("should handle a single name", () => {
    const result = initials("Alice");
    expect(result).toBe("A");
  });

  test("should handle empty input", () => {
    const result = initials("");
    expect(result).toBe("");
  });

  test("should handle multiple names with spaces", () => {
    const result = initials("John Jacob Jingleheimer Schmidt");
    expect(result).toBe("J.J.J.S");
  });

  test("should handle names with middle initials", () => {
    const result = initials("John A. Doe");
    expect(result).toBe("J.A.D");
  });

  test("should handle names with special characters", () => {
    const result = initials("Mary-Ann Johnson");
    expect(result).toBe("M.J");
  });
});

//* tests for generateUuid function
describe("generateUuid", () => {
  it("should generate a UUID with the correct format", () => {
    const uuid = generateUuid();
    expect(uuid).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
    );
  });

  it("should generate a different UUID on each call", () => {
    const uuid1 = generateUuid();
    const uuid2 = generateUuid();
    expect(uuid1).not.toEqual(uuid2);
  });
});
