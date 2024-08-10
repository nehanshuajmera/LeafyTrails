import "./rotate-card.styles.scss";

export const RotateCard = ({ backgroundColor }) => {
  return (
    <div className="rotate-card">
      <div className={`card__side card__side--front`}>front</div>
      <div
        className={`card__side card__side--back 
        back-${backgroundColor}`}
      >
        back
      </div>
    </div>
  );
};
