const PhoneInput = ({ value, onChange }) => {
  return (
    <div className="field">
      <label>Phone Number</label>
      <div className="phone-box">
        <select>
          <option value="+91">🇮🇳 +91 (India)</option>
  <option value="+1">🇺🇸 +1 (USA)</option>
  <option value="+1">🇨🇦 +1 (Canada)</option>
  <option value="+44">🇬🇧 +44 (United Kingdom)</option>
  <option value="+61">🇦🇺 +61 (Australia)</option>
  <option value="+33">🇫🇷 +33 (France)</option>
  <option value="+49">🇩🇪 +49 (Germany)</option>
  <option value="+971">🇦🇪 +971 (UAE)</option>
  <option value="+65">🇸🇬 +65 (Singapore)</option>
        </select>
        <input
          type="tel"
          placeholder="Your Phone Number"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default PhoneInput;
