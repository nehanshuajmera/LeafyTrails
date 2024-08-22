import { useState } from "react";
import { GridLayout3x1 } from "../../layout/grid-3x1/grid-layout3x1.component";
import { RotateCard } from "../rotate-card/rotate-card.component";
import { AnimatedButton } from "../animated-button/animated-button.component";
import { Popup } from "../popup/popup.component";
import "./tours.styles.scss";

// importing data
import { toursData } from "./tour-data";

export const Tours = () => {
  const [activePopup, setActivePopup] = useState(null);

  const handleOpenPopup = (tour) => {
    setActivePopup(tour);
  };

  const handleClosePopup = () => {
    setActivePopup(null);
  };

  return (
    <div className="tours">
      <h2 className="heading-secondary" id="tours">
        Most popular tours
      </h2>
      <div className="tours__cards">
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
                  handleClick={() => handleOpenPopup(tour)}
                />
              ))}
        </GridLayout3x1>
      </div>
      <div className="tours__btn">
        <AnimatedButton to="/tours" color="blue" merriweather>
          Discover all tours
        </AnimatedButton>
      </div>
      {activePopup && (
        <Popup
          isOpen={!!activePopup}
          onClose={handleClosePopup}
          title={activePopup.popupTitle}
          heading={activePopup.popupHeading}
          content={activePopup.popupContent}
          images={activePopup.imageUrl}
        />
      )}
    </div>
  );
};
