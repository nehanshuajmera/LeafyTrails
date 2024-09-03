import { BooknowForm } from '../../components/booking.component/booknow-form/booknow-form.component';
import { BooknowOffers } from '../../components/booking.component/booknow-offers/booknow-offers.component';
import './booking-page.styles.scss';

export const BookingPage = () => {
  return (
    <div className="booking-page">

      {/* Booknow Offers */}
      <BooknowOffers />
      
      {/* Booknow Form */}
      <BooknowForm />

    </div>
  )
}