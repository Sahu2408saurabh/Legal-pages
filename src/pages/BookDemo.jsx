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
    countryCode: "",
    phoneNumber: "",
  });

  
  const [stepTwoData, setStepTwoData] = useState({
    grade: "",
    courseName: "",
    date: "",
    time: "",
  });


  const handleStepOneSubmit = async () => {
    try {
      setLoading(true);

     
      console.log("STEP 1 PAYLOAD ", formData);

      await axios.post("https://api.restful-api.dev/objects", formData);

      setStep(2);
    } catch (error) {
      console.error("Step 1 API Error:", error);
      alert("Unable to proceed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  
  const handleFinalSubmit = async (stepTwoValues) => {
    try {
      setLoading(true);

      setStepTwoData(stepTwoValues);

      
      const finalPayload = {
        ...formData,
        ...stepTwoValues,
      };

      console.log("FINAL PAYLOAD ", finalPayload);

      await axios.post(
        "https://api.restful-api.dev/objects",
        finalPayload
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
