const SelectField = ({ label, options, placeholder }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <select>
        <option value="">{placeholder}</option>
        {options.map((opt, index) => (
          <option key={index}>{opt}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
