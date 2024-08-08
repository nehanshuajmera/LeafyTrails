import "./feature-card.styles.scss";

export const FeatureCard = ({ iconName, heading, content }) => {
  return (
    <div className="feature-card">
      <i className={`icon-${iconName} feature-card__icon`} />
      <h3 className="heading-tertiary utility-margin-btm-small">{heading}</h3>
      <p className="feature-card__text">
        {content}
      </p>
    </div>
  );
};
