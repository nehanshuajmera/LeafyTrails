import "./radio-input.styles.scss";

export const RadioInput = ({ label, ...otherProps }) => {
  return (
    <div className="radio-group">
      <input className="radio-input" {...otherProps} />
      {label ? (
        <label className={`radio-input-label`} {...otherProps}>
          <span className="radio-btn"></span>
          {label}
        </label>
      ) : null}
    </div>
  );
};
