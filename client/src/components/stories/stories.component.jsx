import "./stories.styles.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchStory } from "../../services/storyService.js";
import { TestimonialCard } from "../testimonial-card/testimonial-card.component";
import { BackgroundVideo } from "../background-video/background-video.component";

// images and video import
import backVideo from "../../assets/bg-snow.mp4";

export const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const getStory = async () => {
      try {
        const data = await fetchStory();
        setStories(data);
      } catch (err) {
        console.error(`Error fetching Story: ${err.message}`);
      }
    };

    getStory();
  }, []);
  return (
    <div className="stories">
      <BackgroundVideo videoMp4={backVideo} />
      <h2 className="heading-secondary utility-margin-btm-small">
        We make people genuinely happy
      </h2>
      <div className="stories__container">
        {stories &&
          stories.map((story) => (
            <TestimonialCard
              key={story._id}
              title={story.title}
              content={story.content}
              backImage={story.backImage}
              figCaption={story.figCaption}
            />
          ))}
      </div>
      <Link to="/stories" className="btn-text">
        Read all stories&nbsp;
        <i className="fa-solid fa-arrow-right" style={{ fontSize: "1.5rem" }} />
      </Link>
    </div>
  );
};
