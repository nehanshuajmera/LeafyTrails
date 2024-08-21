import "./navigation.styles.scss";
import { Link } from "react-router-dom";

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
        <span className="navigation__icon">
          &nbsp;
        </span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__navbar">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link
              to="/"
              className="navigation__link"
              onClick={closeNavigation}
            >
              <span>01</span>Leafy Trails
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="/about"
              className="navigation__link"
              onClick={closeNavigation}
            >
              <span>02</span>About Us
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="/your-benifits"
              className="navigation__link"
              onClick={closeNavigation}
            >
              <span>03</span>Your Benefits
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="/tours"
              className="navigation__link"
              onClick={closeNavigation}
            >
              <span>04</span>Popular Tours
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="/stories"
              className="navigation__link"
              onClick={closeNavigation}
            >
              <span>05</span>Stories
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="/booknow"
              className="navigation__link"
              onClick={closeNavigation}
            >
              <span>06</span>Book Now
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
