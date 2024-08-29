import "./navigation.styles.scss";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const closeNavigation = () => {
    document.getElementById("navi-toggle").checked = false;
  };

  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        name="navi-toggle"
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__navbar">
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink to="/" className="navigation__link" onClick={closeNavigation}>
              <span>01</span>
              Leafy Trails
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              to="/about"
              className="navigation__link"
              onClick={closeNavigation}
            >
              <span>02</span>About Us
            </NavLink>
          </li>
          {/* <li className="navigation__item">
            <NavLink
              to="/your-benifits"
              className="navigation__link"
              onClick={closeNavigation}
            >
              <span>03</span>Your Benefits
            </NavLink>
          </li> */}
          <li className="navigation__item">
            <NavLink
              to="/tours"
              className="navigation__link"
              onClick={closeNavigation}
            >
              <span>03</span>Popular Tours
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              to="/stories"
              className="navigation__link"
              onClick={closeNavigation}
            >
              <span>04</span>Stories
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              to="/booking"
              className="navigation__link"
              onClick={closeNavigation}
            >
              <span>05</span>Book Now
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
