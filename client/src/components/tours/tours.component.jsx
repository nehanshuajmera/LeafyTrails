import { RotateCard } from '../rotate-card/rotate-card.component';
import './tours.styles.scss';

export const Tours = () => {
  return (
    <div className="tours">
      <h2 className="heading-secondary">
        Most popular tours
      </h2>
      <div className="tours-cards">
        <RotateCard />
        <RotateCard />
        <RotateCard />
      </div>
    </div>
  )
}