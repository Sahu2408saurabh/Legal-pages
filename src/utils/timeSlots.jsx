
export const generateTimeSlots = () => {
  const slots = [];
  let start = 9 * 60;   // 9:00 AM
  let end = 21 * 60;    // 9:00 PM

  while (start <= end) {
    const hours = Math.floor(start / 60);
    const minutes = start % 60;

    const formatted =
      `${hours % 12 === 0 ? 12 : hours % 12}:` +
      `${minutes === 0 ? "00" : minutes} ` +
      `${hours < 12 ? "AM" : "PM"}`;

    slots.push(formatted);
    start += 30;
  }

  return slots;
};
