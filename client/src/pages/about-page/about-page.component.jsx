import { OurMission } from "../../components/about.component/our-mission/our-mission.component";
import { OurVision } from "../../components/about.component/our-vision/our-vision.component";
import "./about-page.styles.scss";

export const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-page__main--heading">
      <h2 className="heading-secondary">
        <div>About Leafy Trails </div>
        <div>Your Gateway to Adventure</div>
      </h2>
      </div>

      {/* Our Mission */}
      <OurMission />

      {/* Our Vision */}
      {/* <OurVision /> */}


    </div>
  );
};
