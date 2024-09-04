import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./signature-tours.styles.scss";
import { GridLayout3x1 } from "../../../layout/grid-3x1/grid-layout3x1.component";
import { ToursContext } from "../../../contexts/tour.context";
import { RotateCard } from "../../universal.component/rotate-card/rotate-card.component";
import { Popup } from "../../universal.component/popup/popup.component";

/* import pagination arrow */
import arrow from "../../../assets/arrow-right.png";

export const SignatureTours = () => {
  const { tours, loading, error } = useContext(ToursContext);
  const [activePopup, setActivePopup] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const toursPerPage = 12; // Limit to 12 tours per page
  const totalPages = Math.ceil(tours.length / toursPerPage);
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

  // Pagination handlers
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const startIndex = (currentPage - 1) * toursPerPage;
  const selectedTours = tours.slice(startIndex, startIndex + toursPerPage);

  return (
    <div className="signature-tours">
      <h2 className="heading-secondary">All tours</h2>
      {loading && <div className="loading-data">Loading.....</div>}
      {error && <div className="error-fetching">{error}</div>}
      <GridLayout3x1>
        {selectedTours &&
          selectedTours.map((tour) => (
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

      <div className="pagination">
        {totalPages > 1 && (
          <div className="pagination-controls">
            <button
              className="pagination-button"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              <img src={arrow} alt="previous" />
            </button>
            <span className="pagination-info">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="pagination-button"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <img src={arrow} alt="next" />
            </button>
          </div>
        )}
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
