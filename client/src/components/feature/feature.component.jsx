import { GridLayout4x1 } from "../../layout/grid-4x1/grid-layout4x1.component";
import { FeatureCard } from "../feature-card/feature-card.component";
import "./feature.styles.scss";

export const Feature = () => {
  return (
    <div className="feature">
      <GridLayout4x1>
        <FeatureCard
          iconName="basic-world"
          heading="Explore the world"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
        <FeatureCard
          iconName="basic-compass"
          heading="Meet Nature"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
        <FeatureCard
          iconName="basic-map"
          heading="Find your way"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
        <FeatureCard
          iconName="basic-heart"
          heading="Live a healthier life"
          content="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
      </GridLayout4x1>
    </div>
  );
};
