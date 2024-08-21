import "./navigation.styles.scss";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        name="navi-toggle"
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        Menu
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__navbar">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to="/about" className="navigation__link">
              <span>01</span>About Leafy Trails
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/your-benifits" className="navigation__link">
              <span>02</span>Your Benifits
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/tours" className="navigation__link">
              <span>03</span>Popular Tours
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/stories" className="navigation__link">
              <span>04</span>Stories
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/booknow" className="navigation__link">
              <span>05</span>Book Now
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
