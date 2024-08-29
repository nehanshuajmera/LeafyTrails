import './tour-page.styles.scss';

export const TourPage = () => {
 
  return (
    <div className="tour-page">
      <h2 className='heading-secondary'>Tours</h2>
      <div className="tour__page--card">
        {loading && <div className='loading-data'>Loading.....</div>}
        {error && <div className='error-fetching'>{error}</div>}
        <GridLayout3x1>
          {tours &&
            tours.map((tour) => (
                <RotateCard
                  key={tour.id}
                  backgroundColor={tour.backgroundColor}
                  cardHeading={tour.cardHeading}
                  details={tour.details}
                  price={tour.price}
                  handleClick={() => handleOpenPopup(tour)}  // Open popup and update URL
                />
              ))}
        </GridLayout3x1>
      </div>
    </div>
  )
}