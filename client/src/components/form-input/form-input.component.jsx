import "./form-input.styles.scss";

export const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        handleChange={handleChange}
        {...otherProps}
      />
      {label ? <label className={`form-input-label`}>{label}</label> : null}
    </div>
  );
};