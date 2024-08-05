import './homepage.styles.scss';

export const HomePage = () => {
  return (
    <div className="homepage">
      <div className="herosection__container">
        <div className="herosection__content">
          <div className="content__heading">
            <h1 className="content__heading--main">
              <span className="heading__main--white">
                Welcome to&nbsp;
              </span>
              <span className="heading__main--color">
                Sri Murugha Rajendraswamy CBSE School
              </span>
            </h1>
            <h2 className="content__heading--sub">
              <span className="heading__sub--white">
                Where Young Minds Blossoms and&nbsp; 
              </span>
              <span className="heading__sub--color">
                Dreams Take Flight.
              </span>
            </h2>
          </div>
          <div className="content__main">
            <div className="content__main--description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ea a voluptatibus, tempora repellendus ducimus placeat voluptate aut. Iste ab hic, inventore veritatis ipsa velit ratione, nulla beatae aliquid minima eaque
            </div>
            <div className="content__main--btn">
              Admission is Open, Grab your seat now
            </div>
          </div>
        </div>
        <div className="herosection__image">
          <div className="hero__image--circle">
            {/* image container */}
          </div>
          <div className="hero__image--content">
            <h2>Shaping future for over 2500+ students</h2>
          </div>
        </div>
      </div>
    </div>
  )
}