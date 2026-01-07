import InputField from "./InputField";
import PhoneInput from "./PhoneInput";

const StepOne = ({ formData, setFormData, onNext, loading }) => {
  return (
    <>
      {/* Parent Name */}
      <InputField
        label="Parent Name"
        placeholder="Enter parent name"
        value={formData.parentName}
        onChange={(e) =>
          setFormData({ ...formData, parentName: e.target.value })
        }
      />

      {/* Child Name */}
      <InputField
        label="Child's Name"
        placeholder="Enter child's name"
        value={formData.childName}
        onChange={(e) =>
          setFormData({ ...formData, childName: e.target.value })
        }
      />

      {/* Email */}
      <InputField
        label="Email"
        type="email"
        placeholder="Enter email address"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />

      {/* Phone Number with Country Code */}
      <PhoneInput
        value={formData.phoneNumber}
        onChange={(e) =>
          setFormData({ ...formData, phoneNumber: e.target.value })
        }
      />

      {/* Next Button */}
      <button
        className="next-btn"
        onClick={onNext}
        disabled={loading}
      >
        {loading ? "Please wait..." : "Next"}
      </button>
    </>
  );
};

export default StepOne;
