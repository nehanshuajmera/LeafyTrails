import { Link } from "react-router-dom";
import "./landing-about.styles.scss";
import { GridLayout2x1 } from "../../layout/grid-2x1/grid-layout2x1.component";
import { AnimatedButton } from "../animated-button/animated-button.component";

export const LandingAbout = () => {
  return (
    <div className="landing-about">
      <div className="utility-text-center utility-margin-btm-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>
      <GridLayout2x1>
        <div className="landing-about__grid--content">
          <h3 className="heading-tertiary utility-margin-btm-small">
            You're going to fall in love with nature
          </h3>
          <p className="grid__content--paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            suscipit aliquid hic unde quo, incidunt architecto mollitia quidem
            earum molestiae nemo tempore, fugit ea repudiandae.
          </p>

          <h3 className="heading-tertiary utility-margin-btm-small">
            live adventures like you never have before
          </h3>
          <p className="grid__content--paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            tempore molestias ratione, quae deleniti?
          </p>

          {/* <Link to="#" className="btn-text">
            Learn More&nbsp;
            <i class="fa-solid fa-arrow-right" style={{ fontSize: "1.5rem" }} />
          </Link> */}

          <AnimatedButton to='#' color='blue' >
            Learn More{" "}
            <i class="fa-solid fa-arrow-right" style={{ fontSize: "1.5rem" }} />
          </AnimatedButton>
        </div>
        <div className="landing-about__grid--images">
          <div className="composition">
            <img
              src="https://images.pexels.com/photos/1302991/pexels-photo-1302991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="photo 1"
              className="composition__photo composition__photo--p1"
            />
            <img
              src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="photo 2"
              className="composition__photo composition__photo--p2"
            />
            <img
              src="https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="photo 3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </GridLayout2x1>
    </div>
  );
};
