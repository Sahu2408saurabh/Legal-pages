import CountryCodeSelect from "./CountryCodeSelect";
import PhoneInput from "./PhoneInput";

const PhoneField = ({
  countryCode,
  phoneNumber,
  onCountryChange,
  onPhoneChange,
}) => {
  return (
    <div className="field">
      <label>Phone Number</label>

      <div className="phone-box">
        <CountryCodeSelect
          countryCode={countryCode}
          onChange={onCountryChange}
        />

        <PhoneInput
          phoneNumber={phoneNumber}
          onChange={onPhoneChange}
        />
      </div>
    </div>
  );
};

export default PhoneField;
