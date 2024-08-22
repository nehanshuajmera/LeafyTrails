import { AnimatedButton } from "../animated-button/animated-button.component";
import "./popup.styles.scss";

export const Popup = () => {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img
            src="https://t3.ftcdn.net/jpg/03/04/88/18/240_F_304881889_yJ1S3butl9gVs0kMptYTU2N1EVmEJbz8.jpg"
            alt="Tour Image"
            className="popup__img"
          />
          <img
            src="https://t3.ftcdn.net/jpg/02/94/55/16/240_F_294551680_vfJaTbjGtCzFrnggdai31XxM7GFyCMEy.jpg"
            alt="Tour Image"
            className="popup__img"
          />
        </div>
        <div className="popup__right">
          <a href='#tours' className="popup__close">&times;</a>
          <h2 className="heading-secondary utility-margin-btm-small">
            Dive Into the Sea Adventure
          </h2>
          <h3 className="heading-tertiary utility-margin-btm-small">
            Explore the Sea with Comfort & Ease
          </h3>
          <p className="popup__text utility-margin-btm-small">
            The Sea Explorer is a thrilling 3-day adventure perfect for sea
            lovers! Accommodating up to 30 guests, this tour offers a chance to
            bond with friends, family, or new travel buddies while exploring
            hidden gems with our expert guides. After each day's exciting
            activities, unwind in cozy hotels that provide all the comforts you
            need. Designed for all fitness levels, this easy-going adventure
            lets you relax and enjoy unforgettable experiences without the
            hassle—just pure fun and lasting memories.
          </p>
          <AnimatedButton color="blue">Book Now</AnimatedButton>
        </div>
      </div>
    </div>
  );
};
