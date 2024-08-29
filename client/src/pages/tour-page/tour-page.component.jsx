import { SignatureTours } from '../../components/tours.component/signature-tours/signature-tours.component';
import './tour-page.styles.scss';

export const TourPage = () => {
 
  return (
    <div className="tour-page">
      <h2 className='heading-secondary'>Tours</h2>
      <div className="tour__page--card">
        <SignatureTours />
      </div>
    </div>
  )
}