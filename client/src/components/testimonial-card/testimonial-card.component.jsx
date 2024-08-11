import './testimonial-card.styles.scss';

export const TestimonialCard = ({backImage, customerName, title, content}) => {
  return (
    <div className="testimonial-card">
      <figure className="testimonial__image--shape" style={{backgroundImage: `url(${backImage})`}}>
          &nbsp;
          <span className="image--name">
            {customerName}
          </span>
      </figure>
      <div className="testimonial__content">
        <h3 className="heading-tertiary">
          {title}
        </h3>
        <p className="testimonial__content--desc">
          {content}
        </p>
      </div>
    </div>
  )
}