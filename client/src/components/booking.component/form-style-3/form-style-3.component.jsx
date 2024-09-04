import { useContext } from "react";
import { ToursContext } from "../../../contexts/tour.context";
import { FormInput } from "../../universal.component/form-input/form-input.component";
import { CustomDropdown } from "../../universal.component/custom-dropdown/custom-dropdown.component";
import "./form-style-3.styles.scss";

export const FormStyle3 = ({ formState, onFormChange }) => {
  const { tours } = useContext(ToursContext);

  const handlePackageChange = (packageName) => {
    const selected = tours.find((tour) => tour.cardHeading === packageName);
    onFormChange({ 
      selectedPackage: selected || null,
      category: selected ? selected.category : '',
      price: selected ? selected.price : ''
    });
  };

  const handleDateChange = (event) => {
    onFormChange({ date: event.target.value });
  };

  return (
    <div className="form-inner-box form-style--3">
      <div className="form-style--3-textbox">
        <FormInput
          type="date"
          placeholder="Select your travel date"
          name="date"
          label="Travel Date"
          required
          value={formState.date}
          onChange={handleDateChange}
        />
        <CustomDropdown
          options={tours.map((tour) => ({
            value: tour.cardHeading,
            label: tour.cardHeading,
          }))}
          value={
            formState.selectedPackage
              ? formState.selectedPackage.cardHeading
              : ""
          }
          onChange={handlePackageChange}
        />
        <label className="dropdown-label">Your Selected Package</label>
        <FormInput
          type="text"
          name="package category"
          placeholder="Package Category"
          label="Package Category"
          id="packageCategory"
          value={
            formState.selectedPackage ? formState.selectedPackage.category : ""
          }
          readOnly
        />

        <FormInput
          type="text"
          id="packagePrice"
          name="package price"
          placeholder="Package Price"
          label="Package Price"
          value={
            formState.selectedPackage ? formState.selectedPackage.price : ""
          }
          readOnly
        />
      </div>
      <div className="form-style--3-instructions">
        
      </div>
    </div>
  );
};
