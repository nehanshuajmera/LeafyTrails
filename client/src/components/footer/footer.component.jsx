import { Link } from "react-router-dom";
import "./footer.styles.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__tagline">
        <h3 className="footer__tagline--main">Ready for an Adventure?</h3>
        <h3 className="footer__tagline--sub">We're Just a Message Away!</h3>
      </div>
      <div className="footer__logo-content">
        <div className="footer__logo">
          <img src="/leafy-travel.png" alt="Footer Logo" />
        </div>
        <div className="footer__links">
          <div className="webpage__links">
            <div className="page-link">
              <Link to="">Home</Link>
            </div>
            <div className="page-link">
              <Link to="">About</Link>
            </div>
            <div className="page-link">
              <Link to="">Tours</Link>
            </div>
            <div className="page-link">
              <Link to="">Contact Us</Link>
            </div>
          </div>
          <div className="social-media__links">
            <div className="media-link instagram">
              <Link to="">
                <i className="fa-brands fa-instagram fa-lg" />
              </Link>
            </div>
            <div className="media-link facebook">
              <Link to="">
                <i className="fa-brands fa-facebook-f fa-lg" />
              </Link>
            </div>
            <div className="media-link twitter">
              <Link to="">
                <i className="fa-brands fa-twitter fa-lg" />
              </Link>
            </div>
            <div className="media-link youtube">
              <Link to="">
                <i className="fa-brands fa-youtube fa-lg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
