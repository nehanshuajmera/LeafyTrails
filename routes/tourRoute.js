import express from "express";
import {
  deleteTour,
  getTour,
  getTours,
  postTour,
  updateTour,
} from "../controllers/tourController.js";
const router = express.Router();

/* get all tours */ 
router.get("/", getTours);

/* get single tour */ 
router.get("/:id", getTour);

/* post tour */ 
router.post("/", postTour);

/* delete tour */ 
router.delete("/:id", deleteTour);

/* update tour */ 
router.patch("/:id", updateTour);

export const tourRoutes = router;