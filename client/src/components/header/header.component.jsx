import { AnimatedButton } from "../animated-button/animated-button.component";
import "./header.styles.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src="/leafy-travel.png" alt="Logo" className="header__logo" />
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
