import { TestimonialCard } from "../testimonial-card/testimonial-card.component";
import "./stories.styles.scss";
import { BackgroundVideo } from "../background-video/background-video.component";
import { Link } from "react-router-dom";

// images and video import
import back1Image from "../../assets/story-1.jpg";
import back2Image from "../../assets/story-2.jpg";
import backVideo from "../../assets/bg-snow.mp4";

export const Stories = () => {
  return (
    <div className="stories">
      <BackgroundVideo videoMp4={backVideo} />
      <h2 className="heading-secondary utility-margin-btm-small">
        We make people genuinely happy
      </h2>
      <div className="stories__container">
        <TestimonialCard
          backImage={back1Image}
          figCaption="Nehanshu Ajmera"
          title="WOW! my life is completely different now"
          content="Wow! My life has completely transformed. The adventure we had was beyond anything I could have imagined. Every moment spent in the great outdoors brought a new perspective and an unforgettable sense of peace and fulfillment."
        />
        <TestimonialCard
          backImage={back2Image}
          figCaption="Naina Mahajan"
          title="I had best week ever with my family"
          content="Exploring breathtaking landscapes, we hiked through lush forests, wandered along serene leafy trails, and connected with nature like never before. This unforgettable week with my family was a perfect blend of adventure and tranquility."
        />
      </div>
      <Link to="#" className="btn-text">
        Read all stories&nbsp;
        <i className="fa-solid fa-arrow-right" style={{ fontSize: "1.5rem" }} />
      </Link>
    </div>
  );
};
