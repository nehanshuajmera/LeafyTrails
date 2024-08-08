import { FeatureCard } from "../feature-card/feature-card.component";
import "./feature.styles.scss";

export const Feature = () => {
  return (
    <div className="feature">
      <div className="feature-grid--container">
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
      </div>
    </div>
  );
};
