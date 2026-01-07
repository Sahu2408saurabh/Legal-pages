import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import axios from "axios";
import "../styles/bookDemo.css";

const BookDemoForm = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    email: "",
    phoneNumber: "",
  });

 
  const handleStepOneSubmit = async () => {
    const { parentName, childName, email, phoneNumber } = formData;

    
    if (!parentName || !childName || !email || !phoneNumber) {
      alert("Please fill all required fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email");
      return;
    }

    if (phoneNumber.length < 7) {
      alert("Please enter a valid phone number");
      return;
    }

    try {
      setLoading(true);

      await axios.post(
        "https://api.restful-api.dev/objects",
        formData
      );

      setStep(2); 
    } catch (error) {
      console.error("Step 1 API Error:", error);
      alert("Unable to proceed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  
  const handleFinalSubmit = async () => {
    try {
      setLoading(true);

      await axios.post(
        "https://api.restful-api.dev/objects",
        formData
      );

      navigate("/thank-you");
    } catch (error) {
      console.error("Final Submit Error:", error);
      alert("Unable to confirm demo");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="book-demo-wrapper">
      <div className="form-card">
        {step === 1 && (
          <StepOne
            formData={formData}
            setFormData={setFormData}
            onNext={handleStepOneSubmit}
            loading={loading}
          />
        )}

        {step === 2 && (
          <StepTwo
            onBack={() => setStep(1)}
            onSubmit={handleFinalSubmit}
            loading={loading}
          />
        )}
      </div>
    </div>
  );
};

export default BookDemoForm;
