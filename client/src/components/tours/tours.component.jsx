import { GridLayout3x1 } from "../../layout/grid-3x1/grid-layout3x1.component";
import { RotateCard } from "../rotate-card/rotate-card.component";
import "./tours.styles.scss";

export const Tours = () => {
  return (
    <div className="tours">
      <h2 className="heading-secondary">Most popular tours</h2>
      <GridLayout3x1>
        <RotateCard />
        <RotateCard />
        <RotateCard />
      </GridLayout3x1>
    </div>
  );
};
