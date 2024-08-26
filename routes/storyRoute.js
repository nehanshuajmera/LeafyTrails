import express from "express";
const router = express.Router();
import {
  deleteStory,
  getStories,
  getStory,
  postStory,
  updateStory,
} from "../controllers/storyController.js";

/* get all stories */
router.get("/", getStories);

/* get single story */
router.get("/:id", getStory);

/* post story */
router.post("/", postStory);

/* delete story */
router.delete("/:id", deleteStory);

/* update story */
router.patch("/:id", updateStory);

export const storyRoutes = router;
