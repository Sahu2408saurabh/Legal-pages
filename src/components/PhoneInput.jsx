const PhoneInput = ({ phoneNumber, onChange }) => {
  return (
    <input
      type="tel"
      placeholder="Your Phone Number"
      value={phoneNumber}
      onChange={onChange}
    />
  );
};

export default PhoneInput;
