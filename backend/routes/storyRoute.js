import express from express;
const router = express.Router();
import { deleteStory, getStories, getStory, postStory, updateStory } from "../controllers/storyController";

/* get all stories */ 
router.get('/', getStories);

/* get single story */ 
router.get('/:id', getStory);

/* post story */ 
router.get('/', postStory);

/* delete story */ 
router.get('/:id', deleteStory);

/* update story */ 
router.get('/:id', updateStory);

export const storyRoutes = router;