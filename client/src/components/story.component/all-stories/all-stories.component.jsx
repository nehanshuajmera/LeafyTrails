import { useContext, useState } from "react";
import { StoryContext } from "../../../contexts/story.context";
import { TestimonialCard } from "../../universal.component/testimonial-card/testimonial-card.component";
import "./all-stories.styles.scss";

/* import pagination arrow */
import arrow from "../../../assets/arrow-right.png";

const ITEMS_PER_PAGE = 5;

export const AllStories = () => {
  const { stories, error, loading } = useContext(StoryContext);
  const [currentPage, setCurrentPage] = useState(1);

  /* Calculate the total number of pages */
  const totalPages = Math.ceil(stories.length / ITEMS_PER_PAGE);

  /* Slice the stories to get only the items for the current page */
  const paginatedStories = stories.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  /* Handlers for pagination controls */
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="all-stories">
      <h2 className="heading-secondary">All Stories</h2>
      {loading && <div className="loading-data">Loading.....</div>}
      {error && <div className="error-fetching">{error}</div>}
      <div className="all-stories--container">
        {paginatedStories.map((story) => (
          <div className="single-story" key={story._id}>
            <TestimonialCard
              title={story.title}
              content={story.content}
              backImage={story.backImage}
              figCaption={story.figCaption}
            />
          </div>
        ))}
      </div>
      <div className="pagination">
        {totalPages > 1 && (
          <div className="pagination-controls">
            <button
              className="pagination-button"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              <img src={arrow} alt="previous" />
            </button>
            <span className="pagination-info">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="pagination-button"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <img src={arrow} alt="next" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
