import { useContext } from "react";
import { StoryContext } from "../../../contexts/story.context";
import { TestimonialCard } from "../../universal.component/testimonial-card/testimonial-card.component";
import "./all-stories.styles.scss";

export const AllStories = () => {
  const { stories, error, loading } = useContext(StoryContext);
  return (
    <div className="all-stories">
      <h2 className="heading-secondary">All Stories</h2>
      {loading && <div className="loading-data">Loading.....</div>}
      {error && <div className="error-fetching">{error}</div>}
      <div className="all-stories--container">
        {stories &&
          stories.map((story) => (
            <div className="single-story">
              <TestimonialCard
                key={story._id}
                title={story.title}
                content={story.content}
                backImage={story.backImage}
                figCaption={story.figCaption}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
