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
      packageName: selected ? selected.cardHeading : "", // Update packageName
      packageCategory: selected ? selected.category : "", // Update category
      packagePrice: selected ? selected.price : "", // Update price
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
          value={formState.packageName || ""}
          onChange={handlePackageChange}
        />
        <label className="dropdown-label">Your Selected Package</label>

        <FormInput
          type="text"
          name="packageCategory"
          placeholder="Package Category"
          label="Package Category"
          id="packageCategory"
          value={formState.packageCategory || ""}
          readOnly
        />

        <FormInput
          type="text"
          id="packagePrice"
          name="packagePrice"
          placeholder="Package Price"
          label="Package Price"
          value={formState.packagePrice || ""}
          readOnly
        />
      </div>
      <div className="form-style--3-instructions">
        <h3 className="heading-tertiary">
          Instructions for Completing the Form
        </h3>
        <ul>
          <li>
            <span>Travel Date:</span> Select the date you wish to start your
            tour.
          </li>
          <li>
            <span>Package Selection:</span> Choose a tour package from the
            dropdown menu.
          </li>
          <li>
            <span>Package Category:</span> This field will automatically display
            the category of your selected package.
          </li>
          <li>
            <span>Package Price:</span> This field will automatically display
            the price of your selected package.
          </li>
        </ul>
      </div>
    </div>
  );
};
