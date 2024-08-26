import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export const fetchStory = async () => {
  try {
    const res = await axios.get(`${apiUrl}/stories`);
    return res.data;
  } catch (err) {
    console.error(`Error fetching Story: ${err.message}`);
    throw err;
  }
};
