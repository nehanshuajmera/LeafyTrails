import { FormInput } from "../form-input/form-input.component";
import "./booking-form.styles.scss";

export const BookingForm = () => {
  const handleSubmit = {};

  const handleChange = {};

  return (
    <div className="booking-form">
      <div className="booking-form__container">
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="heading-secondary utility-margin-btm-md-2">
            Start booking now
          </h2>
          <div className="input-container">
            <FormInput
              type="text"
              name="name"
              placeholder="Name"
              label="Name"
              // value=""
              handleChange={handleChange}
              required
            />
            <FormInput
              type="email"
              name="email"
              placeholder="Email"
              label="Email"
              // value=""
              handleChange={handleChange}
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};
