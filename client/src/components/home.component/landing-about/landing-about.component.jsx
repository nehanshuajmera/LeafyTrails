import { Link } from "react-router-dom";
import "./landing-about.styles.scss";
import {GridLayout2x1} from '../../../layout/grid-2x1/grid-layout2x1.component';

import image1Grid from '../../../assets/about-1.jpg';
import image2Grid from '../../../assets/about-2.jpg';
import image3Grid from '../../../assets/booking-bg.jpeg';

export const LandingAbout = () => {
  return (
    <div className="landing-about">
      <div className="utility-text-center utility-margin-btm-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>
      <GridLayout2x1>
        <div className="landing-about__grid--content">
          <h3 className="heading-tertiary utility-margin-btm-small">
            You're going to fall in love with nature
          </h3>
          <p className="grid__content--paragraph">
            Immerse yourself in nature's embrace. Explore stunning landscapes
            and tranquil vistas, where every moment invites relaxation and awe.
            Nature’s wonders await, blending beauty and serenity seamlessly.
          </p>

          <h3 className="heading-tertiary utility-margin-btm-small">
            live adventures like you never have before
          </h3>
          <p className="grid__content--paragraph">
            Embark on thrilling adventures. Discover unforgettable moments and
            exhilarating experiences, where each journey is uniquely exciting.
          </p>

          <Link to="about" className="btn-text">
            Learn More&nbsp;
            <i className="fa-solid fa-arrow-right" style={{ fontSize: "1.6rem" }} />
          </Link>
        </div>
        <div className="landing-about__grid--images">
          <div className="composition">
            <img
              src={image1Grid}
              alt="photo 1"
              className="composition__photo composition__photo--p1"
            />
            <img
              src={image2Grid}
              alt="photo 2"
              className="composition__photo composition__photo--p2"
            />
            <img
              src={image3Grid}
              alt="photo 3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </GridLayout2x1>
    </div>
  );
};
