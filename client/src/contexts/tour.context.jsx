import { createContext, useState, useEffect } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const ToursContext = createContext();

export const ToursProvider = ({children}) => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTours = async () => {
    try {
      const res = await axios.get(`${apiUrl}/tours`);
      setTours(res.data);
    } catch (err) {
      console.error(`Error fetching Tours: ${err.message}`);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, [])
  
  return (
    <ToursContext.Provider value={{tours, loading, error}}>
      {children}
    </ToursContext.Provider>
  )
}