import { Link } from "react-router-dom";
import "./animated-button.styles.scss";

export const AnimatedButton = ({
  children,
  color,
  animated,
  ...otherProps
}) => {
  return (
    <Link
      className={`btn btn--${color} ${animated ? "btn--animated" : ""}`}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
