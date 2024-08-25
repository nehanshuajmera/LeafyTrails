import { Link } from "react-router-dom";
import "./footer.styles.scss";

import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import gmail from "../../assets/gmail.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__tagline">
        <h3 className="footer__tagline--main">Ready for an Adventure?</h3>
        <h3 className="footer__tagline--sub">
          <Link to="/contact">We're Just a Message Away!</Link>
        </h3>
      </div>
      <div className="footer__logo-content">
        <div className="footer__logo">
          <Link to="/">
            <img src="/leafy-travel.png" alt="Footer Logo" />
          </Link>
        </div>
        <div className="footer__links">
          <div className="webpage__links">
            <div className="page-link">
              <Link to="/">Home</Link>
            </div>
            <div className="page-link">
              <Link to="/about">About</Link>
            </div>
            <div className="page-link">
              <Link to="/tours">Tours</Link>
            </div>
            <div className="page-link">
              <Link to="/Stories">Stories</Link>
            </div>
            <div className="page-link">
              <Link to="/booking">Book Now</Link>
            </div>
          </div>
          <div className="social-media__links">
            <div className="media-link instagram">
              <Link
                to="https://www.instagram.com/"
                target="_blank"
              >
                <img src={instagram} alt="Instagram" />
              </Link>
            </div>
            <div className="media-link facebook">
              <Link to="https://www.facebook.com/" target="_blank">
                <img src={facebook} alt="Facebook" />
              </Link>
            </div>
            <div className="media-link twitter">
              <Link to="https://x.com/" target="_blank">
                <img src={twitter} alt="Twitter" />
              </Link>
            </div>
            {/* <div className="media-link gmail">
              <Link to="">
                <img src={gmail} alt="gmail" />
              </Link>
            </div> */}
            <div className="media-link youtube">
              <Link
                to="https://www.youtube.com/"
                target="_blank"
              >
                <img src={youtube} alt="Youtube" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
