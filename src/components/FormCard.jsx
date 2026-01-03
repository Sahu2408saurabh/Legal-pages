import InputField from "./InputField";
import SelectField from "./SelectField";
import DateField from "./DateField";
import TimeField from "./TimeField";
import SubmitButton from "./SubmitButton";

const FormCard = () => {
  return (
    <div className="form-card">
      <InputField label="Parent Name" placeholder="Parent Name" />
      <InputField label="Child's Name" placeholder="Child Name" />
      <InputField label="Email" placeholder="Your Email" type="email" />
      <InputField label="Phone Number" placeholder="+91 Your Phone Number" />

      <SelectField
        label="Child's Grade"
        placeholder="Select Grade"
        options={["Grade 1", "Grade 2", "Grade 3", "Grade 4"]}
      />

      <SelectField
        label="Course Selection"
        placeholder="Select Course"
        options={["Public Speaking", "Communication Skills", "Confidence Building"]}
      />

      <DateField />
      <TimeField />

      <SubmitButton />
    </div>
  );
};

export default FormCard;
