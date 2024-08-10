import "./rotate-card.styles.scss";

export const RotateCard = ({ backgroundColor }) => {
  return (
    <div className="rotate-card">
      <div className={`card__side card__side--front`}>
        <div className={`card__picture front-${backgroundColor}`}>&nbsp;</div>
        <div className="card__heading">

        </div>
        <div className="card__details">
          
        </div>
      </div>
      <div
        className={`card__side card__side--back 
        back-${backgroundColor}`}
      >
        back
      </div>
    </div>
  );
};
