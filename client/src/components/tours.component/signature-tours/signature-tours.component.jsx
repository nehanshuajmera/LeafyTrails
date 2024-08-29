import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./signature-tours.styles.scss";
import { GridLayout3x1 } from "../../../layout/grid-3x1/grid-layout3x1.component";
import { ToursContext } from "../../../contexts/tour.context";
import { RotateCard } from "../../universal.component/rotate-card/rotate-card.component";
import { Popup } from "../../universal.component/popup/popup.component";

export const SignatureTours = () => {
  const { tours, loading, error } = useContext(ToursContext);
  const [activePopup, setActivePopup] = useState(null);
  const navigate = useNavigate(); 
  const location = useLocation();

  const handleOpenPopup = (tour) => {
    setActivePopup(tour);
    navigate(`${location.pathname}?tourId=${tour._id}`);
  };

  const handleClosePopup = () => {
    setActivePopup(null);
    navigate(location.pathname);
  };

  return (
    <div className="signature-tours">
      <h2 className="heading-secondary">All tours</h2>
      {loading && <div className="loading-data">Loading.....</div>}
      {error && <div className="error-fetching">{error}</div>}
      <GridLayout3x1>
        {tours &&
          tours.map((tour) => (
            <RotateCard
              key={tour._id}
              backgroundColor={tour.backgroundColor}
              cardHeading={tour.cardHeading}
              details={tour.details}
              price={tour.price}
              handleClick={() => handleOpenPopup(tour)}
            />
          ))}
      </GridLayout3x1>

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
