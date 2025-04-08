export const timeZoneOffsets = {
  "-10800": "Europe/Moscow",
  "-7200": "Europe/Paris",
  "-14400": "America/New_York",
  "-25200": "America/Los_Angeles",
  "-18000": "America/Chicago",
  0: "Europe/London",
  3600: "Europe/Paris",
  10800: "Europe/Moscow",
  14400: "Asia/Dubai",
  32400: "Asia/Tokyo",
  39600: "Australia/Sydney",
  28800: "Asia/Shanghai",
  // additional timezones here if needed
};

export const getTimeZoneNameFromOffset = (offsetInSeconds) => {
  const timezone = timeZoneOffsets[offsetInSeconds];
  return timezone || "No data found";
};
