import { Link } from "react-router-dom";
import "./header.styles.scss";
import { Navigation } from "../navigation/navigation.component";
import DiscoverToursButton from "../discover-button/discover-button.component";

export const Header = () => {
  return (
    <>
      <Navigation />
      <header className="header" id="home">
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
          <DiscoverToursButton />
        </div>
      </header>
    </>
  );
};
