const DateField = () => {
  
  const today = new Date();

  
  const minDate = today.toISOString().split("T")[0];

  
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
