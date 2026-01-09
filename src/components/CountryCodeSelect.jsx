const countryCodes = [
  { code: "+91", label: "🇮🇳 +91 (India)" },
  { code: "+1", label: "🇺🇸 +1 (USA)" },
  { code: "+1", label: "🇨🇦 +1 (Canada)" },
  { code: "+44", label: "🇬🇧 +44 (United Kingdom)" },
  { code: "+61", label: "🇦🇺 +61 (Australia)" },
  { code: "+33", label: "🇫🇷 +33 (France)" },
  { code: "+49", label: "🇩🇪 +49 (Germany)" },
  { code: "+971", label: "🇦🇪 +971 (UAE)" },
  { code: "+65", label: "🇸🇬 +65 (Singapore)" },
];

const CountryCodeSelect = ({ countryCode, onChange }) => {
  const selected = countryCodes.find(
    (item) => item.code === countryCode
  );

  const restCountries = countryCodes.filter(
    (item) => item.code !== countryCode
  );

  return (
    <select value={countryCode} onChange={onChange}>
      
      {selected && (
        <option value={selected.code}>
          {selected.label}
        </option>
      )}

      
      {restCountries.map((item, index) => (
        <option key={index} value={item.code}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default CountryCodeSelect;
