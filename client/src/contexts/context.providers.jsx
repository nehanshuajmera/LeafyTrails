import { StoryProvider } from "./story.context.jsx";

export const ContextProviders = ({children}) => {
  return (
    <StoryProvider>
      {children}
    </StoryProvider>
  )
}