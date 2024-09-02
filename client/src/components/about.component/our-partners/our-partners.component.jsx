import "./our-partners.styles.scss";

import partner1 from "../../../assets/netflix.png";
import partner2 from "../../../assets/airbnb.png";
import partner3 from "../../../assets/nike.png";
import partner4 from "../../../assets/paypal.png";
import partner5 from "../../../assets/visa.png";
import partner6 from "../../../assets/starbucks.png";
import partner7 from "../../../assets/marriott-international.png";
import partner8 from "../../../assets/gopro.png";
import partner9 from "../../../assets/tripadvisor.png";
import partner10 from "../../../assets/pg.png";

export const OurPartners = () => {
  return (
    <div className="our-partners">
      <h2 className="heading-secondary">Our Partners</h2>
      <div className="slider">
        <div className="partners">
          <img src={partner1} alt="Partner 1" />
          <img src={partner2} alt="Partner 2" />
          <img src={partner3} alt="Partner 3" />
          <img src={partner4} alt="Partner 4" />
          <img src={partner5} alt="Partner 5" />
          <img src={partner6} alt="Partner 6" />
          <img src={partner7} alt="Partner 7" />
          <img src={partner8} alt="Partner 8" />
          <img src={partner9} alt="Partner 9" />
          <img src={partner10} alt="Partner 10" />
          <img src={partner1} alt="Partner 1" />
          <img src={partner2} alt="Partner 2" />
          <img src={partner3} alt="Partner 3" />
          <img src={partner4} alt="Partner 4" />
          <img src={partner5} alt="Partner 5" />
          <img src={partner6} alt="Partner 6" />
          <img src={partner7} alt="Partner 7" />
          <img src={partner8} alt="Partner 8" />
          <img src={partner9} alt="Partner 9" />
          <img src={partner10} alt="Partner 10" />
        </div>
      </div>
    </div>
  );
};
