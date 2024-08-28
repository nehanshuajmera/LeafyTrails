import { createContext, useState, useEffect } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const StoryContext = createContext();

export const StoryProvider = ({children}) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStory = async () => {
    try {
      const res = await axios.get(`${apiUrl}/stories`);
      setStories(res.data);
    } catch (err) {
      console.error(`Error fetching Story: ${err.message}`);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStory();
  }, [])
  
  return (
    <StoryContext.Provider value={{stories, loading, error}}>
      {children}
    </StoryContext.Provider>
  )
}