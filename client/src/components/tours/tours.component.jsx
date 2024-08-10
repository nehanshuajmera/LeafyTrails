import { GridLayout3x1 } from "../../layout/grid-3x1/grid-layout3x1.component";
import { RotateCard } from "../rotate-card/rotate-card.component";
import "./tours.styles.scss";

export const Tours = () => {
  return (
    <div className="tours">
      <h2 className="heading-secondary utility-margin-btm-medium">
        Most popular tours
      </h2>
      <GridLayout3x1>
        <RotateCard backgroundColor="orange"  />
        <RotateCard backgroundColor="green"  />
        <RotateCard backgroundColor="blue"  />
      </GridLayout3x1>
    </div>
  );
};


