import { useContext } from 'react';
import './signature-tours.styles.scss';
import { GridLayout3x1 } from '../../../layout/grid-3x1/grid-layout3x1.component';
import { ToursContext } from '../../../contexts/tour.context';
import { RotateCard } from '../../universal.component/rotate-card/rotate-card.component';

export const SignatureTours = () => {
  const {tours, loading, error} = useContext(ToursContext)
  return (
    <div className="signature-tours">
      {loading && <div className='loading-data'>Loading.....</div>}
        {error && <div className='error-fetching'>{error}</div>}
        <GridLayout3x1>
          {tours &&
            tours.map((tour) => (
                <RotateCard
                  key={tour._id}
                  backgroundColor={tour.backgroundColor}
                  cardHeading={tour.cardHeading}
                  details={tour.details}
                  price={tour.price}
                  handleClick={() => handleOpenPopup(tour)}  // Open popup and update URL
                />
              ))}
        </GridLayout3x1>
    </div>
  )
}