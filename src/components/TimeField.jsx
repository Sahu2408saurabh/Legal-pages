const TimeField = () => {
  const generateTimeSlots = () => {
    const slots = [];
    let startHour = 0;
    let startMinute = 0;

    for (let i = 0; i < 48; i++) {
      const startTime = formatTime(startHour, startMinute);

      startMinute += 30;
      if (startMinute === 60) {
        startMinute = 0;
        startHour++;
      }

      const endTime = formatTime(startHour, startMinute);
      slots.push(`${startTime} - ${endTime}`);
    }

    return slots;
  };

  const formatTime = (hour, minute) => {
    const period = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    const formattedMinute = minute.toString().padStart(2, "0");
    return `${formattedHour}:${formattedMinute} ${period}`;
  };

  return (
    <div className="field">
      <label>Time</label>
      <select>
        <option value="">Select Time Slot</option>
        {generateTimeSlots().map((slot, index) => (
          <option key={index} value={slot}>
            {slot}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimeField;
