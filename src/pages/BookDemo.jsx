import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import "../styles/bookDemo.css";

const BookDemoForm = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate(); // ✅ navigation hook

  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    email: "",
    phone: "",
  });

  // STEP 1 VALIDATION
  const handleNextStep = () => {
    const { parentName, childName, email, phone } = formData;

    if (!parentName || !childName || !email || !phone) {
      alert("Please fill all required fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email");
      return;
    }

    if (phone.length < 7) {
      alert("Please enter a valid phone number");
      return;
    }

    setStep(2);
  };

  // ✅ FINAL SUBMIT → THANK YOU PAGE
  const handleFinalSubmit = () => {
    // 👉 Yahan API call bhi laga sakte ho

    navigate("/thank-you"); // 🔥 redirect
  };

  return (
    <div className="book-demo-wrapper">
      <div className="form-card">
        {step === 1 && (
          <StepOne
            formData={formData}
            setFormData={setFormData}
            onNext={handleNextStep}
          />
        )}

        {step === 2 && (
          <StepTwo
            onBack={() => setStep(1)}
            onSubmit={handleFinalSubmit} // 👈 pass submit
          />
        )}
      </div>
    </div>
  );
};

export default BookDemoForm;
