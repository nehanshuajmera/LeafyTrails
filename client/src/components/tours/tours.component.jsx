import { GridLayout3x1 } from "../../layout/grid-3x1/grid-layout3x1.component";
import { RotateCard } from "../rotate-card/rotate-card.component";
import { AnimatedButton } from "../animated-button/animated-button.component";
import "./tours.styles.scss";

// importing data
import { toursData } from "./tour-data";
import { Popup } from "../popup/popup.component";

export const Tours = () => {
  return (
    <div className="tours" id="tours">
      <h2 className="heading-secondary">Most popular tours</h2>
      <GridLayout3x1> 
        {toursData &&
          toursData
            .slice(0, 3)
            .map((tour) => (
              <RotateCard
                key={tour.id}
                backgroundColor={tour.backgroundColor}
                cardHeading={tour.cardHeading}
                details={tour.details}
                price={tour.price}
              />
            ))}
      </GridLayout3x1>
      <div className="tours__btn">
        <AnimatedButton to="/tours" color="blue" merriweather>
          Discover all tours
        </AnimatedButton>
      </div>
      {/* <Popup /> */}
    </div>
  );
};
