import { GridLayout3x1 } from "../../layout/grid-3x1/grid-layout3x1.component";
import { RotateCard } from "../rotate-card/rotate-card.component";
import "./tours.styles.scss";
import { card1Details } from "./card-detail";
import { card2Details } from "./card-detail";
import { card3Details } from "./card-detail";
import { AnimatedButton } from "../animated-button/animated-button.component";

export const Tours = () => {
  return (
    <div className="tours">
      <h2 className="heading-secondary utility-margin-btm-md-1">
        Most popular tours
      </h2>
      <GridLayout3x1>
        <RotateCard
          backgroundColor="orange"
          cardHeading="The Sea Explorer"
          details={card1Details}
          price='₹30000'
        />
        <RotateCard
          backgroundColor="green"
          cardHeading="The Forest Hiker"
          details={card2Details}
          price='₹45000'
        />
        <RotateCard
          backgroundColor="blue"
          cardHeading="The Snow Adventurer"
          details={card3Details}
          price='₹55000'
        />
      </GridLayout3x1>
      <div className="tours__btn utility-margin-top-md-1">
        <AnimatedButton color="blue">Discover all tours</AnimatedButton>
      </div>
    </div>
  );
};
