import { useState } from "react";
import axios from "axios";
import { FormStyle1 } from "../form-style-1/form-style-1.component";
import { FormStyle2 } from "../form-style-2/form-style-2.component";
import { FormStyle3 } from "../form-style-3/form-style-3.component";
import { AnimatedButton } from "../../universal.component/animated-button/animated-button.component";
import "./booknow-form.styles.scss";

const apiUrl = import.meta.env.VITE_API_URL;

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
    specialRequests: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const cleanPayload = {
          name: formState.name,
          email: formState.email,
          contactNumber: formState.contactNumber,
          numOfMembers: formState.numOfMembers,
          date: formState.date,
          packageName: formState.packageName,
          packageCategory: formState.packageCategory,
          packagePrice: formState.packagePrice,
          participants: formState.participants,
          nationality: formState.nationality,
          specialRequests: formState.specialRequests,
        };
        const response = await axios.post(`${apiUrl}/booking`, cleanPayload, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        alert("Form submitted successfully!");
        setFormState({
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
          specialRequests: "",
        });
      } catch (err) {
        alert("An error occurred while submitting the form.");
        console.error(err.message);
      }
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
        <div className="booknow-form__submit-btn">
          <AnimatedButton color="blue" type="submit">
            Submit
          </AnimatedButton>
        </div>
      </div>
      {!isFormValid && (
        <p className="error">Please fill out all required fields.</p>
      )}
    </form>
  );
};
