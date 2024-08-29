import { FormInput } from "../../universal.component/form-input/form-input.component";
import { RadioInput } from "../../universal.component/radio-input/radio-input.component";
import { AnimatedButton } from "../../universal.component/animated-button/animated-button.component";
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
          <div className="radio-container">
            <RadioInput
              type="radio"
              name="size"
              id="small"
              htmlFor="small"
              label="Small tour group"
            />
            <RadioInput
              type="radio"
              name="size"
              id="large"
              htmlFor="large"
              label="Large tour group"
            />
          </div>
          <div className="form-submit-btn">
            <AnimatedButton color="blue" merriweather>
              Next Step &nbsp;
              <i
                className="fa-solid fa-arrow-right"
                style={{ fontSize: "1.5rem" }}
              />
            </AnimatedButton>
          </div>
        </form>
      </div>
    </div>
  );
};
