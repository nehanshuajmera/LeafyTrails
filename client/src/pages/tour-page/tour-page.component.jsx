import { LandingGallery } from "../../components/tours.component/landing-gallery/landing-gallery.component";
import { SignatureTours } from "../../components/tours.component/signature-tours/signature-tours.component";
import "./tour-page.styles.scss";

export const TourPage = () => {
  return (
    <div className="tour-page">
      <div className="tour-page__main--heading">
      <h2 className="heading-secondary">
        <div>Explore Extraordinary Journeys</div>
        <div>Your Ultimate Tour Awaits</div>
      </h2>
      </div>

      <LandingGallery/>

      <div className="tour__page--card">
        <SignatureTours />
      </div>
    </div>
  );
};
