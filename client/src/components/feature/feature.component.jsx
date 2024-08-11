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
          content="Discover new horizons and create unforgettable memories."
        />
        <FeatureCard
          iconName="basic-compass"
          heading="Meet Nature"
          content="Discover Nature: Embrace Beauty, Experience Serenity, Explore."
        />
        <FeatureCard
          iconName="basic-map"
          heading="Find your way"
          content="Navigate Life’s Beautiful Journey with Bold Confidence."
        />
        <FeatureCard
          iconName="basic-heart"
          heading="Live a healthier life"
          content="Revitalize Your Life: Embrace Health and Happiness!"
        />
      </GridLayout4x1>
    </div>
  );
};
