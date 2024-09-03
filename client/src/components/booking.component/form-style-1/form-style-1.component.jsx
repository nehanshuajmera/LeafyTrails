import "./form-style-1.styles.scss";
import { FormInput } from "../../universal.component/form-input/form-input.component";

export const FormStyle1 = () => {
  return (
    <div className="form-inner-box form-style--1">
      <div className="form-style--1-textbox">
        <h2 className="heading-secondary">Tour Booking Form</h2>
        <FormInput
          name="name"
          label="Name"
          type="text"
          placeholder="Name"
          required
        />
        <FormInput
          name="email"
          label="Email"
          type="email"
          placeholder="Email"
          required
        />
        <FormInput
          name="contact number"
          label="Mobile Number"
          type="text"
          placeholder="Mobile Number"
          required
        />
        <FormInput
          name="numofmembers"
          label="Number of Members"
          type="number"
          placeholder="Number"
          required
        />
      </div>
      <div className="form-style--1-instructions">
        <h3 className="heading-tertiary">
          Instructions for Completing the Form
        </h3>
        <ul>
          <li>
            <span>Name:</span> Please enter your full legal name as it appears
            on your identification.
          </li>
          <li>
            <span>Email:</span> Provide a valid email address where we can send
            your booking confirmation and updates.
          </li>
          <li>
            <span>Mobile Number:</span> Include your country code and mobile
            number. This will be used for urgent notifications related to your
            booking.
          </li>
          <li>
            <span>Number of Members:</span> Enter the total number of people in
            your group.
          </li>
        </ul>
      </div>
    </div>
  );
};
