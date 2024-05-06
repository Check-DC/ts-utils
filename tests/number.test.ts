import {
  toFixed,
  parseNumber,
  parseFormat,
  addUnit,
  addSeparators,
  formatNumber,
  ensureNumber,
  numberEmptyState,
} from "../src/number";

//* tests for toFixed function
describe("toFixed function", () => {
  test("should round a number to the specified precision", () => {
    expect(toFixed(3.14159, 2)).toBe("3.14");
  });

  test("should handle negative numbers and precision", () => {
    expect(toFixed(-123.456, 1)).toBe("-123.5");
  });

  test("should round up correctly", () => {
    expect(toFixed(1.005, 2)).toBe("1.01");
  });

  test("should handle precision greater than the number of decimal places", () => {
    expect(toFixed(42, 5)).toBe("42.00000");
  });

  test("should handle precision less than the number of decimal places", () => {
    expect(toFixed(9876.54321, 3)).toBe("9876.543");
  });
});

//* tests for parseNumber function
describe("parseNumber function", () => {
  test("should parse a positive number correctly", () => {
    const result = parseNumber(42.1234);
    expect(result.float).toBe(42.1234);
    expect(result.int).toBe(42);
    expect(result.sign).toBe("");
  });

  test("should parse a negative number correctly", () => {
    const result = parseNumber(-12.34);
    expect(result.float).toBe(12.34);
    expect(result.int).toBe(12);
    expect(result.sign).toBe("-");
  });

  test("should parse a zero correctly", () => {
    const result = parseNumber(0);
    expect(result.float).toBe(0);
    expect(result.int).toBe(0);
    expect(result.sign).toBe("");
  });

  test("should parse a string number correctly", () => {
    const result = parseNumber("3.14159");
    expect(result.float).toBe(3.14159);
    expect(result.int).toBe(3);
    expect(result.sign).toBe("");
  });
});

//* tests for parseFormat function
describe("parseFormat", () => {
  test("parses a positive integer", () => {
    const result = parseFormat("123");
    expect(result).toEqual({
      sign: "",
      base: "123",
      decimals: 0,
      unit: "",
    });
  });

  test("parses a negative integer", () => {
    const result = parseFormat("-123");
    expect(result).toEqual({
      sign: "-",
      base: "123",
      decimals: 0,
      unit: "",
    });
  });

  test("parses a positive decimal", () => {
    const result = parseFormat("123.45");
    expect(result).toEqual({
      sign: "",
      base: "123",
      decimals: 2,
      unit: "",
    });
  });

  test("parses a negative decimal", () => {
    const result = parseFormat("-123.45");
    expect(result).toEqual({
      sign: "-",
      base: "123",
      decimals: 2,
      unit: "",
    });
  });

  test("parses a string with a unit", () => {
    const result = parseFormat("123 kg");
    expect(result).toEqual({
      sign: "",
      base: "123",
      decimals: 0,
      unit: " kg",
    });
  });

  test("parses a string with a unit and decimal", () => {
    const result = parseFormat("123.45 kg");
    expect(result).toEqual({
      sign: "",
      base: "123",
      decimals: 2,
      unit: " kg",
    });
  });

  test("parses a string with a comma as thousands separator", () => {
    const result = parseFormat("1,234");
    expect(result).toEqual({
      sign: "",
      base: "1234",
      decimals: 0,
      unit: "",
    });
  });

  test("parses a string with a comma and decimal", () => {
    const result = parseFormat("1,234.56");
    expect(result).toEqual({
      sign: "",
      base: "1234",
      decimals: 2,
      unit: "",
    });
  });

  test("returns default values for an empty string", () => {
    const result = parseFormat("");
    expect(result).toEqual({
      sign: "",
      base: "",
      decimals: 0,
      unit: "",
    });
  });
});

//* tests for addUnit function
describe("addUnit", () => {
  test("should add the correct unit for a small number", () => {
    const result = addUnit(123.0, { decimals: 2, unit: "a" });
    expect(result).toBe("123");
  });

  test("should add the correct unit for a large number", () => {
    const result = addUnit(1234567890, { decimals: 2, unit: "a" });
    expect(result).toBe("1.23B");
  });

  test("should round the number to the specified number of decimal places", () => {
    const result = addUnit(12345.6789, { decimals: 2, unit: "a" });
    expect(result).toBe("12.35K");
  });

  test("should remove trailing zeros from the decimal part", () => {
    const result = addUnit(12345.0, { decimals: 2, unit: "a" });
    expect(result).toBe("12.35K");
  });

  test('should replace the "a" placeholder with the correct SI prefix', () => {
    const result = addUnit(1234567, { decimals: 2, unit: "a Hz" });
    expect(result).toBe("1.23M Hz");
  });

  test("should handle zero input", () => {
    const result = addUnit(0, { decimals: 2, unit: "a" });
    expect(result).toBe("0");
  });

  test("should handle negative input", () => {
    const result = addUnit(-123, { decimals: 2, unit: "a" });
    expect(result).toBe("-123");
  });

  test("should handle input greater than 1 trillion", () => {
    const result = addUnit(1234567890123, { decimals: 2, unit: "a" });
    expect(result).toBe("1.23T");
  });
});

//* tests for formatNumber function
describe("addSeparators function", () => {
  test('should add thousands separator to a number string with base format ""', () => {
    const result = addSeparators("1234567", "", ",", ".");
    expect(result).toBe("1,234,567");
  });

  test('should add thousands and decimal separators to a number string with base format "0,0"', () => {
    const result = addSeparators("1234567.89", "0,0", ",", ".");
    expect(result).toBe("1,234,567.89");
  });

  test("should handle a number string without decimal part", () => {
    const result = addSeparators("987654321", "0,0", ",", ".");
    expect(result).toBe("987,654,321");
  });

  test("should handle a number string with only decimal part", () => {
    const result = addSeparators(".1234", "0,0", ",", ".");
    expect(result).toBe(".1234");
  });

  test("should handle a number string with custom separators", () => {
    const result = addSeparators("987654321.1234", "0,0", "|", "-");
    expect(result).toBe("987|654|321-1234");
  });
});

describe("formatNumber function", () => {
  test("should format a number with thousands separator", () => {
    const result = formatNumber("123456", "0", { thousandsSeparator: "," });
    expect(result).toBe("123,456");
  });

  test("should format a number with decimal separator", () => {
    const result = formatNumber("123.456", "0.00", { decimalSeparator: "." });
    expect(result).toBe("123.46");
  });

  test("should format a number with both separators", () => {
    const result = formatNumber("123456.789", "0.00", {
      thousandsSeparator: ",",
      decimalSeparator: ".",
    });
    expect(result).toBe("123,456.79");
  });

  test("should format a number with negative value", () => {
    const result = formatNumber("-123456", "0", { thousandsSeparator: "," });
    expect(result).toBe("-123,456");
  });

  test("should format a number with no separators", () => {
    const result = formatNumber("123456", "", {
      thousandsSeparator: "",
    });
    expect(result).toBe("123,456");
  });

  test("should format a number with custom separators", () => {
    const result = formatNumber("123456", "0", {
      thousandsSeparator: "|",
      decimalSeparator: "-",
    });
    expect(result).toBe("123|456");
  });
});

//* tests for ensureNumber function
describe("ensureNumber function", () => {
  test("should return zero for NaN input", () => {
    const result = ensureNumber(NaN);
    expect(result).toBe(0);
  });

  test("should return provided min for input less than min", () => {
    const result = ensureNumber(-10, 0);
    expect(result).toBe(0);
  });

  test("should return input value for input greater than or equal to min", () => {
    const result = ensureNumber(10, 0);
    expect(result).toBe(10);
  });

  test("should return input value for null input", () => {
    const result = ensureNumber(null);
    expect(result).toBe(0);
  });

  test("should return input value for undefined input", () => {
    const result = ensureNumber(undefined);
    expect(result).toBe(0);
  });

  test("should return input value for number input", () => {
    const result = ensureNumber(5);
    expect(result).toBe(5);
  });

  test("should return min value for input equal to min", () => {
    const result = ensureNumber(0, 0);
    expect(result).toBe(0);
  });
});

//* tests for numberEmptyState function
describe("numberEmptyState", () => {
  test("should return default format for zero input", () => {
    const result = numberEmptyState("0");
    expect(result).toBe("---");
  });

  test("should return default format for NaN input", () => {
    const result = numberEmptyState("NaN");
    expect(result).toBe("---");
  });

  test("should return original value for non-zero and non-NaN input", () => {
    const result = numberEmptyState("123");
    expect(result).toBe("123");
  });

  test("should return default format for zero input with custom format", () => {
    const result = numberEmptyState("0", "Custom Format");
    expect(result).toBe("Custom Format");
  });

  test("should return default format for NaN input with custom format", () => {
    const result = numberEmptyState("NaN", "Custom Format");
    expect(result).toBe("Custom Format");
  });
});
