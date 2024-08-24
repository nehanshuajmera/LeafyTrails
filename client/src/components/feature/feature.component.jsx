import { GridLayout4x1 } from "../../layout/grid-4x1/grid-layout4x1.component";
import { FeatureCard } from "../feature-card/feature-card.component";
import "./feature.styles.scss";

/* Importing Data */
import { featureData } from "./featureData.js";

export const Feature = () => {
  return (
    <div className="feature">
      <GridLayout4x1>
        {featureData &&
          featureData
            .slice(0, 4)
            .map((feature) => (
              <FeatureCard
                iconName={feature.iconName}
                heading={feature.heading}
                content={feature.content}
              />
            ))}
      </GridLayout4x1>
    </div>
  );
};
