import { Link } from "react-router-dom";
import "./animated-button.styles.scss";

export const AnimatedButton = ({
  children,
  color,
  animated,
  merriweather,
  to,
  ...otherProps
}) => {
  if (to) {
    return (
      <Link
        to={to}
        className={`btn btn--${color} ${animated ? "btn--animated" : ""}`}
        {...otherProps}
        style={{
          fontFamily: merriweather ? "Merriweather" : "Karla",
          fontStyle: merriweather ? "italic" : "normal"
        }}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`btn btn--${color} ${animated ? "btn--animated" : ""}`}
      {...otherProps}
      style={{
        fontFamily: merriweather ? "Merriweather" : "Karla",
        fontStyle: merriweather ? "italic" : "normal",
      }}
    >
      {children}
    </button>
  );
};
