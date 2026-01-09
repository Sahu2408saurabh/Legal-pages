const DateField = () => {
  // 📅 Today's date
  const today = new Date();

  // 🔹 Min date = aaj ki date
  const minDate = today.toISOString().split("T")[0];

  // 🔹 Max date = next month ka last day
  const nextMonthLastDate = new Date(
    today.getFullYear(),
    today.getMonth() + 2,
    0
  )
    .toISOString()
    .split("T")[0];

  return (
    <div className="field">
      <label>Date</label>
      <input
        type="date"
        min={minDate}
        max={nextMonthLastDate}
      />
    </div>
  );
};

export default DateField;
