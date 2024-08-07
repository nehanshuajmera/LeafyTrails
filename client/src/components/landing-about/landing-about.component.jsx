import { Link } from 'react-router-dom';
import './landing-about.styles.scss';

export const LandingAbout = () => {
  return (
    <div className="landing-about">
      <div className="utility-text-center utility-margin-btm-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>
      <div className="landing-about__grid">
        <div className="landing-about__grid--content">
          <h3 className="grid__content--heading-tertiary utility-margin-btm-small">You're going to fall in love with nature</h3>
          <p className="grid__content--paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio suscipit aliquid hic unde quo, incidunt architecto mollitia quidem earum molestiae nemo tempore, fugit ea repudiandae.
          </p>

          <h3 className="grid__content--heading-tertiary utility-margin-btm-small">live adventures like you never have before</h3>
          <p className="grid__content--paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempore molestias ratione, quae deleniti?
          </p>

          <Link to='#' className='btn-text'>Learn More &rarr;</Link>
        </div>
        <div className="landing-about__grid--images">
          images
        </div>
      </div>
    </div>
  )
}