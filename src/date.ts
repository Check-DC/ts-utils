/**
 * Get time to now
 * @param {string | number | Date | dayjs.Dayjs | null | undefined} date
 * @returns {string} '
 */
export const toNow = (date: Date | string): string => {
  date = new Date(date);

  const now = new Date();
  const distanceInMillis = Math.abs(now.getTime() - date.getTime());
  const distanceInSeconds = Math.floor(distanceInMillis / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  if (distanceInSeconds < 0) return "just now";

  for (const [unit, seconds] of Object.entries(intervals)) {
    const inUnit = Math.floor(distanceInSeconds / seconds);
    if (inUnit >= 1) {
      const futureDatePrefix = now.getTime() < date.getTime() ? "in" : "";
      const output = ` ${futureDatePrefix} ${inUnit} ${unit}${
        inUnit === 1 ? "" : "s"
      } ${now.getTime() > date.getTime() ? "ago" : ""}`;
      return output.trim(); // Trim leading and trailing spaces
    }
  }

  return "just now";
};

// Example usage:

/**
 * Formats Date str to given a dateTime format
 * @param {string} date
 * @param {string} format
 * @returns {string} '
 */
export const formatDate = (
  date: Date | string,
  format: string = "YYYY-MM-DD"
): string => {
  date = new Date(date);

  const pad = (value: number) => String(value).padStart(2, "0");

  const day = date.getDate();
  const month = date.getMonth() + 1; // Note: getMonth() returns 0-based index
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const monthNames: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthAbbr: string = monthNames[date.getMonth()]; // Get abbreviated month name

  return format
    .replace("YYYY", String(year))
    .replace("MMM", monthAbbr) // Replace with abbreviated month name
    .replace("MM", pad(month))
    .replace("DD", pad(day))
    .replace("HH", pad(hours))
    .replace("mm", pad(minutes))
    .replace("ss", pad(seconds));
};

/**
 * Get time from now
 * @param {string | number | Date | dayjs.Dayjs | null | undefined} date
 * @returns {string}'
 */
export const fromNow = (date: Date | string): string => {
  date = new Date(date);

  const now = new Date();
  const diff = now.getTime() - date.getTime();

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  const formatTimeUnit = (value: number, unit: string): string => {
    return `${value} ${unit}${value === 1 ? "" : "s"} from now`;
  };

  if (years > 0) return formatTimeUnit(years, "year");
  else if (months > 0) return formatTimeUnit(months, "month");
  else if (weeks > 0) return formatTimeUnit(weeks, "week");
  else if (days > 0) return formatTimeUnit(days, "day");
  else if (hours > 0) return formatTimeUnit(hours, "hour");
  else if (minutes > 0) return formatTimeUnit(minutes, "minute");
  else return formatTimeUnit(seconds, "second");
};
