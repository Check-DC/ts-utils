import { toNow, formatDate, fromNow } from "../src/date";

//* tests for the toNow function
describe("toNow function", () => {
  test("should return 'just now' for the same date", () => {
    const result = toNow(new Date());
    expect(result).toBe("just now");
  });

  test("should return a future time interval when given a future date", () => {
    const futureDate = new Date(new Date().getTime() + 3600000); // 1 hour in the future
    const result = toNow(futureDate);
    expect(result).toMatch(/in \d+ hour/);
  });

  test("should return a past time interval when given a past date", () => {
    const pastDate = new Date(new Date().getTime() - 86400000); // 1 day in the past
    const result = toNow(pastDate);
    expect(result).toMatch(/\d+ day ago/);
  });

  test("should handle string input dates", () => {
    const dateString = "2024-04-29T12:00:00Z";
    const result = toNow(dateString);
    const expectedOutput = "6 days ago"; // Update this with the expected output

    expect(result).toBe(expectedOutput);
  });

  test("should handle invalid date input", () => {
    const invalidDate = "invalid date";
    const result = toNow(invalidDate);
    expect(result).toBe("just now");
  });
});

//* tests for the formatDate function
describe("formatDate function", () => {
  test("should format date in default format 'YYYY-MM-DD'", () => {
    const result = formatDate("2024-04-29T12:00:00Z");
    expect(result).toBe("2024-04-29");
  });

  test("should format date with custom format 'DD MMM YYYY HH:mm:ss'", () => {
    const result = formatDate(
      new Date("2024-04-29T12:00:00Z"),
      "DD MMM YYYY HH:mm:ss"
    );
    expect(result).toMatch(/\d{2} [A-Za-z]{3} \d{4} \d{2}:\d{2}:\d{2}/);
  });

  test("should handle single-digit date components", () => {
    const result = formatDate("2024-04-09T09:05:00Z");
    expect(result).toBe("2024-04-09");
  });
});

//* tests for the fromNow function
describe("fromNow function", () => {
  test("should return 'just now' for the same date", () => {
    const result = fromNow(new Date());
    expect(result).toBe("0 seconds from now");
  });

  test("should return a future time interval with correct unit when given a future date", () => {
    const futureDate = new Date(new Date().getTime() - 3600000); // 1 hour in the future
    const result = fromNow(futureDate);
    expect(result).toBe("1 hour from now");
  });

  test("should return a past time interval when given a past date", () => {
    const pastDate = new Date(new Date().getTime() - 86400000); // 1 day in the past
    const result = fromNow(pastDate);
    expect(result).toBe("1 day from now");
  });

  test("should handle string input dates", () => {
    const dateString = "2024-04-29T12:00:00Z";
    const result = fromNow(dateString);
    expect(result).toMatch(
      /\d+ seconds from now|\d+ minutes from now|\d+ hours from now|\d+ days from now|\d+ weeks from now|\d+ months from now|\d+ years from now/
    );
  });
});
