import InputField from "./InputField";
import PhoneInput from "./PhoneInput";

const StepOne = ({ formData, setFormData, onNext }) => {
  return (
    <>
      <InputField
        label="Parent Name"
        placeholder="Parent Name"
        value={formData.parentName}
        onChange={(e) =>
          setFormData({ ...formData, parentName: e.target.value })
        }
      />

      <InputField
        label="Child's Name"
        placeholder="Child Name"
        value={formData.childName}
        onChange={(e) =>
          setFormData({ ...formData, childName: e.target.value })
        }
      />

      <InputField
        label="Email"
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />

      <PhoneInput
        value={formData.phone}
        onChange={(e) =>
          setFormData({ ...formData, phone: e.target.value })
        }
      />

      <button className="next-btn" onClick={onNext}>
        Book Free Demo!
      </button>
    </>
  );
};

export default StepOne;
