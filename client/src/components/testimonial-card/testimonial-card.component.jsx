import "./testimonial-card.styles.scss";

export const TestimonialCard = ({
  backImage,
  customerName,
  title,
  content,
}) => {
  return (
    <div className="testimonial-card">
      <figure className="testimonial-card__image--shape">
        <img src={backImage} alt="" className="testimonial--image" />
        <figcaption className="image--caption">{customerName}</figcaption>
      </figure>
      <div className="testimonial-card__content">
        <h3 className="heading-tertiary utility-margin-btm-small">{title}</h3>
        <p className="testimonial__content--desc">{content}</p>
      </div>
    </div>
  );
};
