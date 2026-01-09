import { useState } from "react";
import { generateTimeSlots } from "../utils/timeSlots";

const StepTwo = ({ onBack, onSubmit }) => {
  const [stepTwoData, setStepTwoData] = useState({
    grade: "",
    courseName: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStepTwoData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleConfirm = () => {
    const { grade, courseName, date, time } = stepTwoData;

    if (!grade || !courseName || !date || !time) {
      alert("Please fill all fields before confirming");
      return;
    }

    // ✅ StepTwo data parent ko bhejo
    onSubmit(stepTwoData);
  };

  return (
    <>
      {/* Grade */}
      <div className="field">
        <label>Child's Grade</label>
        <select
          name="grade"
          value={stepTwoData.grade}
          onChange={handleChange}
        >
          <option value="">Select Grade</option>
          <option value="KG">KG</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>

      {/* Course */}
      <div className="field">
        <label>Course Selection</label>
        <select
          name="courseName"
          value={stepTwoData.courseName}
          onChange={handleChange}
        >
          <option value="">Select Course</option>
          <option value="oratrics-math-explorers">
            Oratrics Math Explorers
          </option>
          <option value="personality-enrichment">
            Personality Enrichment
          </option>
          <option value="public-speaking">Public Speaking</option>
          <option value="creative-writing">Creative Writing</option>
          <option value="confidence-building-social-skill">
            Confidence Building & Social Skill
          </option>
          <option value="leadership-program">
            Leadership Program
          </option>
        </select>
      </div>

      {/* Date */}
      <div className="field">
        <label>Date</label>
        <input
          type="date"
          name="date"
          value={stepTwoData.date}
          onChange={handleChange}
        />
      </div>

      {/* ✅ TIME DROPDOWN (USING YOUR UTILITY FILE) */}
      <div className="field">
        <label>Time</label>
        <select
          name="time"
          value={stepTwoData.time}
          onChange={handleChange}
        >
          <option value="">Select Time</option>
          {generateTimeSlots().map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      {/* Actions */}
      <div className="step-actions">
        <button className="back-btn" onClick={onBack}>
          Back
        </button>

        <button className="submit-btn" onClick={handleConfirm}>
          Confirm Demo
        </button>
      </div>
    </>
  );
};

export default StepTwo;
