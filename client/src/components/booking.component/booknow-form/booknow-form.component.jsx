import "./booknow-form.styles.scss";
import { FormInput } from "../../universal.component/form-input/form-input.component";
import { FormStyle1 } from "../form-style-1/form-style-1.component";
import { FormStyle2 } from "../form-style-2/form-style-2.component";

export const BooknowForm = () => {
  return (
    <form className="booknow-form">
      <div className="booknow-form__container form-img--1">
        <FormStyle1 />
      </div>
      <div className="booknow-form__container form-img--2">
        <FormStyle2 />
      </div>
      <div className="booknow-form__container form-img--3">
        <div className="form-inner-box form-style--3">hello</div>
      </div>
    </form>
  );
};
