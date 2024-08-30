import { Link } from "react-router-dom";
import { FormInput } from "../form-input/form-input.component";
import "./footer.styles.scss";

import instagram from "../../../assets/instagram-1.png";
import facebook from "../../../assets/facebook-1.png";
import twitter from "../../../assets/twitter-1.png";
import youtube from "../../../assets/youtube-1.png";
import threads from "../../../assets/threads-1.png";
import arrowRight from "../../../assets/arrow-right.png";

export const Footer = () => {
  const handleChange = {};
  const handleSubmit = {};

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container--logo">
          <span className="logo-design">&nbsp;</span>
          <span className="heading-box">
            <h2 className="heading-secondary">Leafy Trails</h2>
          </span>
          <span className="logo-design">&nbsp;</span>
        </div>
        <div className="footer__container--links">
          <div className="page-links">
            <h3 className="heading-tertiary">MENU</h3>
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
          <div className="social-links">
            <div className="social-media">
              <div className="media-link instagram">
                <Link to="https://www.instagram.com/" target="_blank">
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
              <div className="media-link gmail">
                <Link to="https://www.threads.com/">
                  <img src={threads} alt="gmail" />
                </Link>
              </div>
              <div className="media-link youtube">
                <Link to="https://www.youtube.com/" target="_blank">
                  <img src={youtube} alt="Youtube" />
                </Link>
              </div>
            </div>
            <span className="footer-links-design">&nbsp;</span>
            <div className="get-in-touch">
              <div className="footer-main-heading">Ready for an Adventure?</div>
              <div className="footer-main-tagline">
                We're Just a Message Away!
              </div>
              <form className="footer-form">
                <FormInput
                  placeholder="Email"
                  name="Email"
                  type="email"
                  handleChange={handleChange}
                  label="Email"
                  required
                />
                <button onSubmit={handleSubmit} className="footer-btn">
                  <img src={arrowRight} alt="" />
                  {/* Submit */}
                </button>
              </form>
            </div>
          </div>
          <div className="terms-conditions">
            <h3 className="heading-tertiary">Terms</h3>
            <div className="page-link">
              <Link to="#">Privacy Policy</Link>
            </div>
            <div className="page-link">
              <Link to="#">Terms</Link>
            </div>
            <div className="page-link">
              <Link to="#">Cancellation Policy</Link>
            </div>
            <div className="page-link">
              <Link to="#">Copyrights</Link>
            </div>
            <div className="page-link">
              <Link to="#">Fees and Charges</Link>
            </div>
          </div>
        </div>
        <div className="footer__container--copyright">
          <div className="copyright-content">
            &#169; Leafy Trails 2024 | All rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
