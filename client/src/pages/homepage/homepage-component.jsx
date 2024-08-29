import { BookingForm } from '../../components/home.component/booking-form/booking-form.component';
import { Feature } from '../../components/home.component/feature/feature.component';
import { LandingAbout } from '../../components/home.component/landing-about/landing-about.component';
import { Stories } from '../../components/home.component/stories/stories.component';
import { Tours } from '../../components/home.component/tours/tours.component';
import './homepage.styles.scss';

export const HomePage = () => {
  return (
    <div className="homepage">
      {/* Landing About */}
      <LandingAbout />

      {/* Feature Section */}
      <Feature />

      {/* Tour Section */}
      <Tours />

      {/* Stories Section */}
      <Stories />

      {/* Booking Form */}
      <BookingForm />
    </div>
  )
}