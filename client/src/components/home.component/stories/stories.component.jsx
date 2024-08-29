import "./stories.styles.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoryContext } from "../../../contexts/story.context.jsx";
import { TestimonialCard } from "../../universal.component/testimonial-card/testimonial-card.component.jsx";
import { BackgroundVideo } from "../../universal.component/background-video/background-video.component.jsx";

// images and video import
import backVideo from "../../../assets/bg-snow.mp4";

export const Stories = () => {
  const { stories, loading, error } = useContext(StoryContext);

  return (
    <div className="stories">
      <BackgroundVideo videoMp4={backVideo} />
      <h2 className="heading-secondary utility-margin-btm-small">
        We make people genuinely happy
      </h2>
      <div className="stories__container">
        {loading && <div className="loading--data">Loading.....</div>}
        {error && (
          <div className="error--fetching">
            <span>Error Fetching Stories:</span> <span>{error}</span>
          </div>
        )}
        {stories &&
          stories
            .slice(0, 2)
            .map((story) => (
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
