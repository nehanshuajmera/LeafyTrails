import { useState } from "react";
import "./booknow-form.styles.scss";
import { AnimatedButton } from "../../universal.component/animated-button/animated-button.component";
import { FormStyle1 } from "../form-style-1/form-style-1.component";
import { FormStyle2 } from "../form-style-2/form-style-2.component";
import { FormStyle3 } from "../form-style-3/form-style-3.component";

export const BooknowForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    contactNumber: "",
    numOfMembers: "",
    date: "",
    selectedPackage: null,
    packageCategory: "",
    packagePrice: "",
    participants: [{ name: "", age: "" }],
    currentPage: 0,
    specialRequirements: "",
  });

  const [isFormValid, setIsFormValid] = useState(true);

  const handleFormChange = (newState) => {
    setFormState((prevState) => ({ ...prevState, ...newState }));
  };

  const validateForm = () => {
    const { name, email, contactNumber, numOfMembers, date, selectedPackage } =
      formState;
    const isValid =
      name && email && contactNumber && numOfMembers && date && selectedPackage;
    setIsFormValid(isValid);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Proceed with form submission or further processing
      alert("Form submitted successfully!");
    } else {
      alert("Please fill out all required fields.");
    }
  };

  return (
    <form className="booknow-form" onSubmit={handleSubmit}>
      <div className="booknow-form__container form-img--1">
        <FormStyle1 formState={formState} onFormChange={handleFormChange} />
      </div>
      <div className="booknow-form__container form-img--2">
        <FormStyle2 formState={formState} onFormChange={handleFormChange} />
      </div>
      <div className="booknow-form__container form-img--3">
        <FormStyle3 formState={formState} onFormChange={handleFormChange} />
        {/* <AnimatedButton type="submit">Submit</AnimatedButton> */}
      </div>
      {!isFormValid && (
        <p className="error">Please fill out all required fields.</p>
      )}
    </form>
  );
};
