import { Link } from "react-router-dom";
import "./animated-button.styles.scss";

export const AnimatedButton = ({
  children,
  color,
  animated,
  to,
  ...otherProps
}) => {
  if (to) {
    return (
      <Link
        className={`btn btn--${color} ${animated ? "btn--animated" : ""}`}
        {...otherProps}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`btn btn--${color} ${animated ? "btn--animated" : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
