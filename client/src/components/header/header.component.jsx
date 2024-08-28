import { Link, useLocation } from "react-router-dom";
import "./header.styles.scss";
import { Navigation } from "../navigation/navigation.component";
import DiscoverToursButton from "../discover-button/discover-button.component";

export const Header = () => {
  const location = useLocation();
  const route = location.pathname;

  // Determine the background class based on the route
  let backgroundClass = "";

  if (route === "/about") {
    backgroundClass = "header--default header--about";
  } else if (route === "/tours") {
    backgroundClass = "header--default header--tours";
  } else if (route === "/stories") {
    backgroundClass = "header--default header--story";
  } else if (route === "/booking") {
    backgroundClass = "header--default header--booking";
  } else {
    backgroundClass = "header--default"; // For the home page or other routes
  }
  

  return (
    <>
      <Navigation />
      <header className={`header ${backgroundClass}`} id="home">
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
