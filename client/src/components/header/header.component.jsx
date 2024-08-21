import { Link } from "react-router-dom";
import { AnimatedButton } from "../animated-button/animated-button.component";
import "./header.styles.scss";
import { Navigation } from "../navigation/navigation.component";

export const Header = () => {
  return (
    <header className="header">
      <Navigation />
      <div className="header__logo-box">
        <Link to="/">
          <img src="/leafy-travel.png" alt="Logo" className="header__logo" />
        </Link>
      </div>
      <div className="header__text-box">
        <h1 className="heading__primary">
          <span className="heading__primary--main">Outdoors</span>
          <span className="heading__primary--sub">is where life happens</span>
        </h1>
        <AnimatedButton to="/tours" color="white" animated merriweather>
          Discover Our Tours
        </AnimatedButton>
      </div>
    </header>
  );
};
