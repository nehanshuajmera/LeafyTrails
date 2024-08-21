import { AnimatedButton } from "../animated-button/animated-button.component";
import "./popup.styles.scss";

export const Popup = () => {
  return (
    <div className="popup">
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
          <h2 className="heading-secondary utility-margin-btm-small">
            Dive Into the Sea Adventure
          </h2>
          <h3 className="heading-tertiary utility-margin-btm-small">
            Explore the Sea with Comfort & Ease
          </h3>
          <p className="popup__text utility-margin-btm-small">
            The Sea Explorer is a thrilling 3-day adventure designed for those
            who love the sea and want to explore it in comfort. This tour
            accommodates up to 30 people, so it's perfect for families, friends,
            or solo travelers looking to meet new people. You'll be guided by
            two expert tour guides who know the best spots and hidden gems along
            the way. After a day full of activities, you can relax in cozy
            hotels that offer all the comforts you need to recharge for the next
            day. 
            
            The Sea Explorer tour is designed to be easy, making it
            accessible for people of all fitness levels. Whether you’re a
            seasoned traveler or new to the world of tours, you’ll find this
            adventure engaging and enjoyable. With everything taken care of for
            you, all you need to do is enjoy the experience and create lasting
            memories.
          </p>
          <AnimatedButton>hello</AnimatedButton>
        </div>
      </div>
    </div>
  );
};
