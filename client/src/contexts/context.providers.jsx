import { StoryProvider } from "./story.context.jsx";
import { ToursProvider } from "./tour.context.jsx";

export const ContextProviders = ({ children }) => {
  return (
    <StoryProvider>
      <ToursProvider>
        {children}
      </ToursProvider>
    </StoryProvider>
  );
};
