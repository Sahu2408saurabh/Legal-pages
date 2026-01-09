import { useState } from "react";
import InputField from "./InputField";
import PhoneField from "./PhoneField";
import CloudflareCaptcha from "./CloudflareCaptcha";

const StepOne = ({ formData, setFormData, onNext, loading }) => {
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleNext = () => {
    if (!captchaToken) {
      alert("Please verify captcha");
      return;
    }

    // captcha token form data me add
    setFormData({
      ...formData,
      captchaToken,
    });

    onNext();
  };

  return (
    <>
      <InputField
        label="Parent Name"
        placeholder="Enter parent name"
        value={formData.parentName}
        onChange={(e) =>
          setFormData({ ...formData, parentName: e.target.value })
        }
      />

      <InputField
        label="Child's Name"
        placeholder="Enter child's name"
        value={formData.childName}
        onChange={(e) =>
          setFormData({ ...formData, childName: e.target.value })
        }
      />

      <InputField
        label="Email"
        type="email"
        placeholder="Enter email address"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />

      <PhoneField
        countryCode={formData.countryCode}
        phoneNumber={formData.phoneNumber}
        onCountryChange={(e) =>
          setFormData({ ...formData, countryCode: e.target.value })
        }
        onPhoneChange={(e) =>
          setFormData({ ...formData, phoneNumber: e.target.value })
        }
      />

      {/* 🔐 Cloudflare CAPTCHA */}
      <CloudflareCaptcha onVerify={setCaptchaToken} />

      <button
        className="next-btn"
        onClick={handleNext}
        disabled={loading}
      >
        {loading ? "Please wait..." : "Next"}
      </button>
    </>
  );
};

export default StepOne;
